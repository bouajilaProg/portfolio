import React from "react";
import ProjectList from "./ProjectList";

function ProjectSection() {
  return (
    <div id="projects" className=" min-h-screen pt-40">
      <h2 className="text-3xl text-center text-white mt-12">
        Projects
      </h2>
      <br />
      <ProjectList />
    </div>
  );
}

export default ProjectSection;
