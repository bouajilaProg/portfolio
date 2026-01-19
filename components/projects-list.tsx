"use client";

import Link from "next/link";
import { projects } from "@/lib/data";
import { ProjectCard } from "./project-card";
import { FadeIn } from "@/components/ui/fade-in";
import Separator from "./ui/Separator";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function ProjectsList() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .sort((a, b) => a.rank - b.rank);

  return (
    <>
      <div className="space-y-16">
        {featuredProjects.map((project, index) => (
          <div key={project.id}>
            {index !== 0 && <Separator variant="component" />}
            <ProjectCard project={project} />
          </div>
        ))}
      </div>


      <FadeIn>
        <div className="mt-16 border-slate-200 dark:border-slate-800">
          <div className="flex justify-center">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm transition-all"
            >
              <span>View All Projects</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </FadeIn>

    </>
  );
}
