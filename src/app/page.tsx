"use client";

import Hero from "@/components/Landing/Hero";
import Bar from "@/components/Landing/Bar";
import React from "react";
import Skills from "@/components/Landing/Skills";
import ProjectSection from "@/components/Project/ProjectSection";

import Contact from "@/components/Landing/Contact";
import EducationSection from "@/components/Education/EducationSection";
import Popup from "@/components/Landing/Popup";
function LandingPage() {
  const [ContactPopup, setContactPopup] = React.useState(false);

  return (
    <main className="scroll-smooth bg-gray-900 px-8 ">
      {ContactPopup &&
        <Popup setContactPopup={setContactPopup} />}

      <Bar setContactPopup={setContactPopup} />
      <div>
        <Hero setContactPopup={setContactPopup} />
        <Skills />
        <ProjectSection />
        <EducationSection />
      </div>
    </main>
  );
}

export default LandingPage;
