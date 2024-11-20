import React from "react";
import ProjectList from "./ProjectList";

function ProjectSection() {
  return (
    <div id="projects" className=" min-h-screen pt-40">
      <h2 className="text-4xl text-center text-white ">
        Projects
      </h2>
      <ProjectList />
    </div>
  );
}

export default ProjectSection;
