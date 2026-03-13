import type { Day as WeekDay } from 'date-fns'
import {
  differenceInCalendarDays,
  eachDayOfInterval,
  formatISO,
  getDay,
  getMonth,
  getYear,
  nextDay,
  parseISO,
  subWeeks,
} from 'date-fns'
import {
  createContext,
  Fragment,
  useContext,
  useEffect,
  useState,
  useMemo,
} from 'react'
import { cn } from '../../lib/utils'
import { FadeIn } from './FadeIn'

// --- Types ---
export type Activity = {
  date: string
  count: number
  level: number
}

type Week = Array<Activity | undefined>

export type Labels = {
  months?: string[]
  weekdays?: string[]
  totalCount?: string
  legend?: {
    less?: string
    more?: string
  }
}

type MonthLabel = {
  weekIndex: number
  label: string
}

const DEFAULT_MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const DEFAULT_LABELS: Labels = {
  months: DEFAULT_MONTH_LABELS,
  weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  totalCount: '{{count}} activities in {{year}}',
  legend: { less: 'Less', more: 'More' },
}

type ContributionGraphContextType = {
  data: Activity[]
  weeks: Week[]
  blockMargin: number
  blockRadius: number
  blockSize: number
  fontSize: number
  labels: Labels
  labelHeight: number
  maxLevel: number
  totalCount: number
  weekStart: WeekDay
  year: number
  width: number
  height: number
}

const ContributionGraphContext = createContext<ContributionGraphContextType | null>(null)

const useContributionGraph = () => {
  const context = useContext(ContributionGraphContext)
  if (!context) throw new Error('ContributionGraph components must be used within a ContributionGraph')
  return context
}

// --- Logic Helpers ---
const fillHoles = (activities: Activity[], start: Date, end: Date): Activity[] => {
  const calendar = new Map<string, Activity>(activities.map((a) => [a.date, a]))
  return eachDayOfInterval({ start, end }).map((day) => {
    const date = formatISO(day, { representation: 'date' })
    return calendar.get(date) || { date, count: 0, level: 0 }
  })
}

const groupByWeeks = (activities: Activity[], weekStart: WeekDay = 0, range: { start: Date; end: Date }): Week[] => {
  const normalizedActivities = fillHoles(activities, range.start, range.end)
  const firstDate = parseISO(normalizedActivities[0].date)

  const firstCalendarDate = getDay(firstDate) === weekStart
    ? firstDate
    : subWeeks(nextDay(firstDate, weekStart), 1)

  const paddedActivities = [
    ...(new Array(differenceInCalendarDays(firstDate, firstCalendarDate)).fill(undefined) as Activity[]),
    ...normalizedActivities,
  ]

  const numberOfWeeks = Math.ceil(paddedActivities.length / 7)
  return new Array(numberOfWeeks).fill(undefined).map((_, i) => paddedActivities.slice(i * 7, i * 7 + 7))
}

const getMonthLabels = (weeks: Week[], monthNames: string[] = DEFAULT_MONTH_LABELS): MonthLabel[] => {
  let lastMonth = -1;
  return weeks.reduce<MonthLabel[]>((labels, week, weekIndex) => {
    const firstActivity = week.find((activity) => activity !== undefined)
    if (!firstActivity) return labels

    const date = parseISO(firstActivity.date)
    const currentMonth = getMonth(date)

    if (currentMonth !== lastMonth) {
      lastMonth = currentMonth;
      return labels.concat({ weekIndex, label: monthNames[currentMonth] })
    }
    return labels
  }, [])
}

// --- Components ---
interface ContributionGraphProps {
  data: Activity[]
  blockMargin?: number
  blockRadius?: number
  blockSize?: number
  fontSize?: number
  labels?: Labels
  maxLevel?: number
  weekStart?: WeekDay
  className?: string
  children?: React.ReactNode
}

export const ContributionGraph = ({
  data,
  blockMargin = 4,
  blockRadius = 2,
  blockSize = 12,
  fontSize = 14,
  labels: labelsProp,
  maxLevel: maxLevelProp = 4,
  weekStart = 0,
  className,
  children,
  ...props
}: ContributionGraphProps) => {
  const maxLevel = Math.max(1, maxLevelProp)
  const labels = { ...DEFAULT_LABELS, ...labelsProp }

  const range = useMemo(() => {
    const now = new Date();
    const lastYear = now.getFullYear() - 1;
    return {
      start: new Date(lastYear, 11, 1), // Dec 1, Last Year
      end: new Date(now.getFullYear(), 11, 31) // Dec 31, Current Year
    };
  }, []);

  const weeks = useMemo(() => groupByWeeks(data, weekStart, range), [data, weekStart, range])
  const labelHeight = fontSize + 8

  const width = weeks.length * (blockSize + blockMargin) - blockMargin
  const height = labelHeight + (blockSize + blockMargin) * 7 - blockMargin

  return (
    <ContributionGraphContext.Provider value={{
      data, weeks, blockMargin, blockRadius, blockSize, fontSize, labels, labelHeight, maxLevel,
      totalCount: data ? data.reduce((sum, a) => sum + a.count, 0) : 0,
      weekStart, year: getYear(range.end), width, height
    }}>
      <div className={cn('flex w-full flex-col gap-3', className)} style={{ fontSize }} {...props}>
        {children}
      </div>
    </ContributionGraphContext.Provider>
  )
}

interface ContributionGraphBlockProps {
  activity: Activity
  dayIndex: number
  weekIndex: number
  className?: string
}

export const ContributionGraphBlock = ({ activity, dayIndex, weekIndex, className, ...props }: ContributionGraphBlockProps) => {
  const { blockSize, blockMargin, blockRadius, labelHeight } = useContributionGraph()
  return (
    <rect
      className={cn(
        'dark:data-[level="0"]:fill-slate-800/50 data-[level="0"]:fill-slate-100',
        'data-[level="1"]:fill-[#9be9a8] dark:data-[level="1"]:fill-[#0e4429]',
        'data-[level="2"]:fill-[#40c463] dark:data-[level="2"]:fill-[#006d32]',
        'data-[level="3"]:fill-[#30a14e] dark:data-[level="3"]:fill-[#26a641]',
        'data-[level="4"]:fill-[#216e39] dark:data-[level="4"]:fill-[#39d353]',
        className
      )}
      data-level={activity.level}
      height={blockSize}
      rx={blockRadius}
      width={blockSize}
      x={(blockSize + blockMargin) * weekIndex}
      y={labelHeight + (blockSize + blockMargin) * dayIndex}
      {...props}
    />
  )
}

interface ContributionGraphCalendarProps {
  hideMonthLabels?: boolean
  children: (props: { activity: Activity, dayIndex: number, weekIndex: number }) => React.ReactNode
}

export const ContributionGraphCalendar = ({ hideMonthLabels = false, children }: ContributionGraphCalendarProps) => {
  const { weeks, width, height, blockSize, blockMargin, labels } = useContributionGraph()
  const monthLabels = useMemo(() => getMonthLabels(weeks, labels.months), [weeks, labels.months])

  return (
    <div className='w-full overflow-visible'>
      <svg className='block w-full h-auto overflow-visible' viewBox={`0 0 ${width} ${height}`}>
        {!hideMonthLabels && (
          <g className='fill-slate-400 dark:fill-slate-500 font-medium'>
            {monthLabels.map(({ label, weekIndex }) => (
              <text dominantBaseline='hanging' key={weekIndex} style={{ fontSize: 10 }} x={(blockSize + blockMargin) * weekIndex}>
                {label}
              </text>
            ))}
          </g>
        )}
        {weeks.map((week, wIdx) => week.map((activity, dIdx) =>
          activity && <Fragment key={`${wIdx}-${dIdx}`}>{children({ activity, dayIndex: dIdx, weekIndex: wIdx })}</Fragment>
        ))}
      </svg>
    </div>
  )
}

interface ContributionGraphFooterProps {
  className?: string
  children?: React.ReactNode
}

export const ContributionGraphFooter = ({ className, children, ...props }: ContributionGraphFooterProps) => (
  <div className={cn('flex flex-wrap gap-1 whitespace-nowrap sm:gap-x-4', className)} {...props}>
    {children}
  </div>
)

export const ContributionGraphTotalCount = ({ className }: { className?: string }) => {
  const { totalCount, year, labels } = useContributionGraph()
  return (
    <div className={cn('text-muted-foreground text-xs', className)}>
      {labels.totalCount?.replace('{{count}}', String(totalCount)).replace('{{year}}', String(year))}
    </div>
  )
}

export const ContributionGraphLegend = () => {
  const { labels, maxLevel, blockSize, blockRadius } = useContributionGraph()
  return (
    <div className='ml-auto flex items-center gap-[3px] text-xs text-muted-foreground'>
      <span className="mr-1">{labels.legend?.less}</span>
      {Array.from({ length: maxLevel + 1 }).map((_, l) => (
        <svg key={l} width={blockSize} height={blockSize}>
          <rect width={blockSize} height={blockSize} rx={blockRadius} data-level={l}
            className={cn(
              'dark:data-[level="0"]:fill-slate-800/50 data-[level="0"]:fill-slate-100',
              'data-[level="1"]:fill-[#9be9a8] dark:data-[level="1"]:fill-[#0e4429]',
              'data-[level="2"]:fill-[#40c463] dark:data-[level="2"]:fill-[#006d32]',
              'data-[level="3"]:fill-[#30a14e] dark:data-[level="3"]:fill-[#26a641]',
              'data-[level="4"]:fill-[#216e39] dark:data-[level="4"]:fill-[#39d353]'
            )}
          />
        </svg>
      ))}
      <span className="ml-1">{labels.legend?.more}</span>
    </div>
  )
}

// --- Wrapper ---
export const GithubCalendar = ({ username = "bouajilaProg", className }: { username?: string, className?: string }) => {
  const [data, setData] = useState<Activity[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=all`)
      .then(res => res.json())
      .then(res => { setData(res.contributions); setLoading(false); })
  }, [username])

  if (loading) return <div className="w-full h-32 animate-pulse bg-muted/10 rounded-lg" />

  return (
    <section className={cn("pb-12", className)}>
      <FadeIn>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-8">GitHub Activity</h2>
      </FadeIn>
      <FadeIn delay={0.2}>
        <ContributionGraph data={data} blockSize={11} blockMargin={3} fontSize={10}>
          <ContributionGraphCalendar>
            {(props) => <ContributionGraphBlock {...props} />}
          </ContributionGraphCalendar>
          <ContributionGraphFooter>
            <ContributionGraphTotalCount />
            <ContributionGraphLegend />
          </ContributionGraphFooter>
        </ContributionGraph>
      </FadeIn>
    </section>
  )
}
