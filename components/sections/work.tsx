"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { ProjectsList } from "@/components/projects-list";

export function Work() {
  return (
    <>
      <FadeIn>
        <h2 className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold mb-12">Work</h2>
      </FadeIn>
      <ProjectsList />
    </>
  );
}
