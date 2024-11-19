import React from "react";
import ProjectItem from "./ProjectItem";

interface Project {
  title: string;
  description: string;
  imageLink: string;
  domain: string[];
}

const ProjectList: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Cri website",
      description: "the official website of the CRI club",
      imageLink: "https://placehold.co/150",
      domain: ["React", "Tailwind CSS", "JavaScript"],
    },

    {
      title: "Cool Docs",
      description:
        "An offline tool built with Rust, Tauri, and React for competitive programmers to store and manage their docs and templates in XML format, providing a solution to the no Wi-Fi rule at competitions.",
      imageLink: "https://placehold.co/150",
      domain: ["Rust", "Tauri", "React", "XML", "Offline Storage"],
    },
    {
      title: "Project 3",
      description: "Description for project 3",
      imageLink: "https://placehold.co/150",
      domain: ["Next.js", "TypeScript", "GraphQL"],
    },
    {
      title: "Project 4",
      description: "Description for project 4",
      imageLink: "https://placehold.co/150",
      domain: ["Python", "Flask", "PostgreSQL"],
    },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-8  p-4">
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
