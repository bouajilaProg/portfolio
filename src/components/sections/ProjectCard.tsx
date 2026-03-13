import { FadeIn } from "../ui/FadeIn";
import type { Project } from "../../lib/data";
import { IconButton } from "../ui/IconButton";
import { getIconForType } from "../../lib/linkTypes";

interface ProjectCardProps {
  project: Project;
  headingLevel?: "h2" | "h3";
}

export function ProjectCard({ project, headingLevel = "h2" }: ProjectCardProps) {
  const imageBase = `/projectImages/${project.id.toLowerCase().replace(" ", "")}`;
  const imageName = project.image?.replace(/\.\w+$/, "");
  const Heading = headingLevel;

  return (
    <FadeIn>
      <div className="group space-y-5">
        {project.image && imageName ? (
          <div className="aspect-video bg-slate-50 dark:bg-slate-900/40 rounded border border-slate-100 dark:border-slate-900 overflow-hidden">
            <picture>
              <source
                srcSet={`${imageBase}/${imageName}-768w.webp 768w, ${imageBase}/${imageName}.webp 1900w`}
                sizes="(max-width: 768px) 100vw, 768px"
                type="image/webp"
              />
              <img
                src={`${imageBase}/${imageName}.webp`}
                alt={`${project.title} preview`}
                width={1900}
                height={993}
                className="w-full h-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
        ) : null}
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <Heading className="text-xl font-bold tracking-tight">{project.title}</Heading>
            <div className="flex gap-2 flex-row-reverse">
              {project.links.map((link, idx) => (
                <IconButton key={idx} href={link.href} label={link.name}>
                  {getIconForType(link.type, "size-4")}
                </IconButton>
              ))}
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
