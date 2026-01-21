import { FadeIn } from "../ui/FadeIn";
import { ProjectsList } from "./ProjectsList";

export function Work() {
  return (
    <section id="work">
      <FadeIn>
        <h2 className="text-sm uppercase tracking-[0.2em] text-slate-200 font-bold mb-6">Work</h2>
      </FadeIn>
      <ProjectsList />
    </section>
  );
}
