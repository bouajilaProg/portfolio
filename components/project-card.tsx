"use client";

import { Github, ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { Project } from "@/lib/data";
import { IconButton } from "@/components/icon-button";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <FadeIn>
      <div className="group space-y-4">
        {project.image ? (
          <div className="aspect-video bg-slate-50 dark:bg-slate-900/40 rounded border border-slate-100 dark:border-slate-900 overflow-hidden">
            <img
              src={"/projectImages/" + project.image}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover"
            />
          </div>
        ) : null}
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
            <div className="flex gap-1.5">
              {project.github && (
                <IconButton href={project.github} label="Source Code">
                  <Github size={14} />
                </IconButton>
              )}
              {project.demo && (
                <IconButton href={project.demo} label="Visit Website">
                  <ExternalLink size={14} />
                </IconButton>
              )}
            </div>
          </div>

          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-[9px] font-bold border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded text-slate-500 uppercase tracking-tight"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
