"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="py-10 border-b border-slate-100 dark:border-slate-900">
      <FadeIn>
        <h2 className="text-sm uppercase tracking-[0.2em] text-slate-200 font-bold mb-6">Education</h2>
      </FadeIn>
      <div className="space-y-12">
        {education.map((edu, i) => (
          <FadeIn key={i} delay={0.1 + i * 0.1}>
            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2">

              {/* Education Date */}
              <span className="text-sm font-mono text-slate-400 pt-1">
                {edu.date}
              </span>

              {/* Education Details */}
              <div>
                <h3 className="text-base font-bold mb-0.5">{edu.school}</h3>
                <p className="text-sm font-medium text-blue-600 mb-3 uppercase tracking-wide">
                  {edu.degree}
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed text-sm">
                  {edu.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {edu.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="text-[10px] font-bold border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded text-slate-500"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
