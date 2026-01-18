"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-10 border-b border-slate-100 dark:border-slate-900">
      <FadeIn>
        <h2 className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold mb-6">Experience</h2>
      </FadeIn>
      <div className="space-y-8">
        {experience.map((job, i) => (
          <FadeIn key={i} delay={0.1 + i * 0.1}>
            <div className="flex flex-col md:flex-row gap-2 md:gap-8">
              <span className="text-sm font-mono text-slate-400 min-w-[100px]">{job.date}</span>
              <div className="flex-1">
                <h3 className="text-base font-bold mb-0.5">{job.company}</h3>
                <p className="text-sm font-medium text-blue-600 mb-3 uppercase tracking-wide">{job.role}</p>
                <p className="text-slate-600 dark:text-slate-400 mb-3 leading-relaxed text-sm">{job.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {job.skills.map(skill => (
                    <span key={skill} className="text-[10px] font-bold border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded text-slate-500">
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
