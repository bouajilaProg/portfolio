import React from "react";
import Project from "@/misc/types/project";

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <a
      href={"projec"}
      target="_blank"
      className="flex flex-col cursor-pointer w-[300px] border border-gray-700 rounded-lg shadow-lg bg-gray-800 transform transition-transform hover:scale-105"
    >
      {/* Image Section */}
      <div className="w-full">
        <img
          src={project.imageLink}
          alt={project.title}
          className="h-48 w-full object-cover rounded-t-lg"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col p-4 justify-between w-[300px]">
        {/* Title */}
        <h3 className="text-lg font-bold text-white truncate">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-300 mt-2 line-clamp-2 min-h-10 overflow-hidden">
          {project.description}
        </p>

        {/* Domains */}
        <div className="mt-4 flex overflow-x-auto pb-3 gap-2">
          {project.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-700 text-gray-100 px-3 py-1 text-[10px] rounded-full whitespace-nowrap"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectItem;
