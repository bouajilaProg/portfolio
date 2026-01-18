"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { ProjectsList } from "@/components/projects-list";

export function Work() {
  return (
    <section id="work" className="py-24 px-6 max-w-3xl mx-auto border-t border-slate-100 dark:border-slate-900">

      <FadeIn>
        <h2 className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold mb-12">Work</h2>
      </FadeIn>
      <ProjectsList />
    </section>
  );
}
