"use client";

import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";
import { Navigation } from "@/components/navigation";
import { FadeIn } from "@/components/ui/fade-in";

export default function ProjectsPage() {
  const sortedProjects = [...projects].sort((a, b) => a.rank - b.rank);

  return (
    <main className="min-h-dvh bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white font-sans">
      <Navigation />

      <section className="pt-40 pb-20 px-6 max-w-3xl mx-auto">
        <FadeIn>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Projects</h1>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
            A collection of my work, showcasing my expertise in building accessible, high-performance web applications.
          </p>
        </FadeIn>
      </section>

      <section className="py-12 px-6 max-w-3xl mx-auto border-t border-slate-100 dark:border-slate-900">
        <div className="space-y-32">
          {sortedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

    </main>
  );
}
