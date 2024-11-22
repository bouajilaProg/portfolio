import React from "react";
import Project from "@/misc/types/project";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <div className="flex flex-col cursor-pointer w-[300px] border border-gray-700 rounded-lg shadow-lg bg-gray-800 h-96 transform transition-transform hover:scale-105">
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
        <h3 className="text-lg flex justify-between font-bold text-white truncate">
          {project.title}

          <div className="mt-2 flex gap-2 mx-1">
            {project.projectLink && (
              <a
                className="transition-all text-white hover:scale-110"
                href={project.projectLink}
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt size={"16px"} />
              </a>
            )}
            {project.githubLink && (
              <a
                className="transition-all text-white hover:scale-[1.1]"
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            )}
          </div>
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-300 mt-2 line-clamp-4 min-h-20 overflow-hidden">
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
    </div>
  );
};

export default ProjectItem;
