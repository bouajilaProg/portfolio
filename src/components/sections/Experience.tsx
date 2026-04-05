import { type Experience as ExperienceEntry } from "../../lib/data";
import { normalizeTimelineDisplay } from "../../lib/timeline";
import { FadeIn } from "../ui/FadeIn";

interface ExperienceProps {
  experiences: ExperienceEntry[];
}

export function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience">
      <FadeIn>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-8">
          Experience
        </h2>
      </FadeIn>
      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <FadeIn key={i} delay={0.1 + i * 0.1}>
            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2">
              <span className="text-sm font-mono text-slate-400 pt-1">
                {normalizeTimelineDisplay(exp.date)}
              </span>

              <div>
                <h3 className="text-base font-bold mb-0.5">{exp.role}</h3>
                <p className="text-sm font-medium text-blue-600 mb-3 uppercase tracking-wide">
                  {exp.company}
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed text-sm">
                  {exp.description}
                </p>
                {exp.skills && exp.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-bold border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded text-slate-500"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
