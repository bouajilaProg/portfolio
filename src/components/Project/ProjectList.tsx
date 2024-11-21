import React from "react";
import ProjectItem from "./ProjectItem";
import projects from "@/data/ProjectData";
interface ProjectListProps {
  DomainFilter: string[];
}

function ProjectList({ DomainFilter }: ProjectListProps) {
  const arrayInclues = (arr1: string[], arr2: string[]) => {
    console.log(arr1, arr2);
    return arr2.some((arr2Item) => arr1.includes(arr2Item.toLowerCase()));
  };

  if (DomainFilter.length === 0) {
    return (
      <div className="flex  justify-center align-top ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 ">
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex  justify-center align-top">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 ">
        {projects.map((project, index) => (
          arrayInclues(project.domain, DomainFilter)
            ? <ProjectItem key={index} project={project} />
            : null
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
