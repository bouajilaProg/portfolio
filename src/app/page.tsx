import Hero from "@/components/Landing/Hero";
import Bar from "@/components/Landing/Bar";
import React from "react";
import Skills from "@/components/Landing/Skills";
import ProjectSection from "@/components/Project/ProjectSection";

import Contact from "@/components/Landing/Contact";
import EducationSection from "@/components/Education/EducationSection";
function LandingPage() {
  return (
    <main className="scroll-smooth bg-gray-900 px-8 ">
      <Bar />
      <div>
        <Hero />
        <Skills />
        {/*<ProjectSection />*/}
        <EducationSection />
        <Contact />
      </div>
    </main>
  );
}

export default LandingPage;
