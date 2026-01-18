"use client";

import Link from "next/link";
import { projects } from "@/lib/data";
import { ProjectCard } from "./project-card";
import { FadeIn } from "@/components/ui/fade-in";

export function ProjectsList() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .sort((a, b) => a.rank - b.rank);

  return (
    <>
      <div className="space-y-32">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <FadeIn>
        <div className="pt-12 flex justify-center">
          <Link
            href="/projects"
            className="text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-slate-950 dark:hover:text-white transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </FadeIn>
    </>
  );
}
