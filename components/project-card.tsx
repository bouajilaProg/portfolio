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
      <div className="group space-y-6">
        {project.image ? (
          <div className="aspect-[16/8] bg-slate-50 dark:bg-slate-900/40 rounded-sm border border-slate-100 dark:border-slate-900 overflow-hidden transition-opacity">
            <img
              src={"/projectImages/" + project.image}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover"
            />
          </div>
        ) : null}
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-2xl font-bold tracking-tight italic">
              {project.title}
            </h3>
            <div className="flex gap-2">
              {project.github && (
                <IconButton href={project.github} label="Source Code">
                  <Github size={16} />
                </IconButton>
              )}
              {project.demo && (
                <IconButton href={project.demo} label="Visit Website">
                  <ExternalLink size={16} />
                </IconButton>
              )}
            </div>
          </div>

          <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-bold border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded text-slate-400 dark:text-slate-500 uppercase tracking-tight"
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
