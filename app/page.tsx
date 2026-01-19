import { Hero } from "@/components/sections/Hero";
import { Education } from "@/components/sections/Education";
import { Work } from "@/components/sections/Work";
import Separator from "@/components/ui/Separator";

export default function Portfolio() {
  return (
    <>
      <Hero />
      <Work />
      <Separator variant="section" />
      <Education />
    </>
  );
}
