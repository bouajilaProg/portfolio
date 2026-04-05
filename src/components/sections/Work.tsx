import { FadeIn } from "../ui/FadeIn";
import { ProjectsList } from "./ProjectsList";
import { type Project } from "../../lib/data";

interface WorkProps {
  projects: Project[];
}

export function Work({ projects }: WorkProps) {
  return (
    <section id="work">
      <FadeIn>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-8">Featured Projects</h2>
      </FadeIn>
      <ProjectsList projects={projects} />
    </section>
  );
}
