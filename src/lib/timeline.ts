/**
 * Timeline parsing and formatting utilities for consistent date display
 */

const MONTH_ALIAS_TO_ABBR: Record<string, string> = {
  jan: "Jan",
  january: "Jan",
  feb: "Feb",
  february: "Feb",
  mar: "Mar",
  march: "Mar",
  apr: "Apr",
  april: "Apr",
  may: "May",
  jun: "Jun",
  june: "Jun",
  jul: "Jul",
  july: "Jul",
  aug: "Aug",
  august: "Aug",
  sep: "Sep",
  sept: "Sep",
  september: "Sep",
  oct: "Oct",
  october: "Oct",
  nov: "Nov",
  november: "Nov",
  dec: "Dec",
  december: "Dec",
};

export type TimelineState = {
  startMonth: string | null;
  startYear: string;
  endMonth: string | null;
  endYear: string;
  isPresent: boolean;
  isSingleYear: boolean;
};

function normalizeMonth(raw: string | undefined): string | null {
  if (!raw) return null;
  const cleaned = raw.toLowerCase().replace(/\./g, "");
  return MONTH_ALIAS_TO_ABBR[cleaned] ?? null;
}

function extractYear(raw: string | undefined): string | undefined {
  if (!raw) return undefined;
  const match = raw.match(/\b\d{4}\b/);
  return match?.[0];
}

function parsePoint(raw: string, fallbackYear: string): { month: string | null; year: string } {
  const tokens = raw.trim().split(/\s+/).filter(Boolean);
  const month = normalizeMonth(tokens[0]);
  const year = extractYear(raw) ?? fallbackYear;
  return { month, year };
}

/**
 * Parse a timeline string into structured components
 * Handles formats like:
 * - "Sep 2020 - Jun 2024"
 * - "2022 - Present"
 * - "2022" (single year)
 * - "Jan 2025 - Present"
 */
export function parseTimeline(value?: string | null): TimelineState {
  const currentYear = String(new Date().getFullYear());
  const defaults: TimelineState = {
    startMonth: null,
    startYear: currentYear,
    endMonth: null,
    endYear: currentYear,
    isPresent: true,
    isSingleYear: false,
  };

  if (!value || !value.trim()) {
    return defaults;
  }

  const normalized = value.trim().replace(/\s+/g, " ");
  const parts = normalized.split(/\s*[\-–—]\s*/).filter(Boolean);
  const start = parsePoint(parts[0] ?? "", currentYear);

  // Single value (e.g., just "2022")
  if (parts.length <= 1) {
    return {
      startMonth: start.month,
      startYear: start.year,
      endMonth: null,
      endYear: start.year,
      isPresent: false,
      isSingleYear: true,
    };
  }

  // Check if end is "Present"
  if (/^(present|current|now)$/i.test(parts[1].trim())) {
    return {
      startMonth: start.month,
      startYear: start.year,
      endMonth: null,
      endYear: currentYear,
      isPresent: true,
      isSingleYear: false,
    };
  }

  const end = parsePoint(parts[1], start.year);

  return {
    startMonth: start.month,
    startYear: start.year,
    endMonth: end.month,
    endYear: end.year,
    isPresent: false,
    isSingleYear: false,
  };
}

/**
 * Format a timeline for display
 * Examples:
 * - "Sep 2020 — Jun 2024"
 * - "2022 — Present"
 * - "2022"
 * - "Jan 2025 — Present"
 */
export function formatTimeline(timeline: TimelineState): string {
  // Single year display
  if (timeline.isSingleYear) {
    if (timeline.startMonth) {
      return `${timeline.startMonth} ${timeline.startYear}`;
    }
    return timeline.startYear;
  }

  // Build start part
  const start = timeline.startMonth
    ? `${timeline.startMonth} ${timeline.startYear}`
    : timeline.startYear;

  // Present
  if (timeline.isPresent) {
    return `${start} — Present`;
  }

  // Build end part
  const end = timeline.endMonth
    ? `${timeline.endMonth} ${timeline.endYear}`
    : timeline.endYear;

  return `${start} — ${end}`;
}

/**
 * Parse and format a date string for consistent display
 */
export function normalizeTimelineDisplay(dateString?: string | null): string {
  if (!dateString) return "";
  return formatTimeline(parseTimeline(dateString));
}

/**
 * Parse and format a date string into separate lines (start/end)
 */
export function normalizeTimelineLines(dateString?: string | null): {
  start: string;
  end?: string;
} {
  if (!dateString) return { start: "" };
  const timeline = parseTimeline(dateString);

  if (timeline.isSingleYear) {
    const start = timeline.startMonth
      ? `${timeline.startMonth} ${timeline.startYear}`
      : timeline.startYear;
    return { start };
  }

  const start = timeline.startMonth
    ? `${timeline.startMonth} ${timeline.startYear}`
    : timeline.startYear;
  const end = timeline.isPresent
    ? "Present"
    : timeline.endMonth
      ? `${timeline.endMonth} ${timeline.endYear}`
      : timeline.endYear;

  return { start, end };
}
