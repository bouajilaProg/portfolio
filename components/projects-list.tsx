"use client";

import Link from "next/link";
import { projects } from "@/lib/data";
import { ProjectCard } from "./project-card";
import { FadeIn } from "@/components/ui/fade-in";
import Separator from "./ui/Separator";

export function ProjectsList() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .sort((a, b) => a.rank - b.rank);

  return (
    <>
      <div className="space-y-16">
        {featuredProjects.map((project, index) => (
          <>
            {index != 0 && <Separator variant="component" />}
            <ProjectCard key={project.id} project={project} />
          </>
        ))}
      </div>

      <FadeIn>
        <div className="pt-8 flex justify-center">
          <Link
            href="/projects"
            className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-950 dark:hover:text-white transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </FadeIn>
    </>
  );
}
