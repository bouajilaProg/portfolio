"use client";

import React from "react";
import ProjectList from "./ProjectList";
import ProjectFilter from "./ProjectFilter";

function ProjectSection() {
  const [selectedDomains, setSelectedDomains] = React.useState<string[]>([]);
  return (
    <div id="projects" className=" min-h-screen pt-40">
      <h2 className="text-4xl text-center md:mb-0 text-white ">
        Projects
      </h2>
      <ProjectFilter exportSelectedDomains={setSelectedDomains} />
      <ProjectList DomainFilter={selectedDomains} />
    </div>
  );
}

export default ProjectSection;
