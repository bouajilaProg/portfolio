import { FadeIn } from "../ui/FadeIn";
import { ProjectsList } from "./ProjectsList";

export function Work() {
  return (
    <section id="work">
      <FadeIn>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-8">Featured Projects</h2>
      </FadeIn>
      <ProjectsList />
    </section>
  );
}
