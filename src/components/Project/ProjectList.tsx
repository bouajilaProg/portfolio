import React from "react";
import ProjectItem from "./ProjectItem";
import projects from "@/data/ProjectData";
const ProjectList: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 ">
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
