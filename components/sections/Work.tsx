"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { ProjectsList } from "@/components/projects-list";

export function Work() {
  return (
    <section id="work" className="py-10">
      <FadeIn>
        <h2 className="text-sm uppercase tracking-[0.2em] text-slate-200 font-bold mb-6">Work</h2>
      </FadeIn>
      <ProjectsList />
    </section>
  );
}
