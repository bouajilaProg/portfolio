"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-10 border-b border-slate-100 dark:border-slate-900">
      <FadeIn>
        <h2 className="text-sm uppercase tracking-[0.2em] text-slate-200 font-bold mb-6">Experience</h2>
      </FadeIn>
      <div className="space-y-12">
        {experiences.map((job, i) => (
          <FadeIn key={i} delay={0.1 + i * 0.1}>
            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2" >

              {/* Experience Date */}
              <span className="text-sm font-mono text-slate-400 pt-1">
                {job.date}
              </span>

              {/* Experience Details */}
              <div>
                <h3 className="text-base font-bold mb-0.5">{job.company}</h3>
                <p className="text-sm font-medium text-blue-600 mb-3 uppercase tracking-wide">
                  {job.role}
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed text-sm">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-bold border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded text-slate-500"
                    >
                      {skill}
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
