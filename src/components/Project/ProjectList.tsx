import React from "react";
import ProjectItem from "./ProjectItem";

interface Project {
  title: string;
  description: string;
  imageLink: string;
  domain: string[];
  link?: string;
}

const ProjectList: React.FC = () => {
  const projects: Project[] = [
    {
      "title": "CRI Website",
      "description":
        "Developed a website for the robotics club at ISIMM that enables users to borrow materials from the club",
      "imageLink": "https://placehold.co/150",
      "domain": [
        "React",
        "Express",
        "PostgreSQL",
        "pg-node",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },

    {
      title: "Cool Docs",
      description:
        "An offline tool built with Rust, Tauri, and React for competitive programmers to store and manage their docs and templates in XML format, providing a solution to the no Wi-Fi rule at competitions.",
      imageLink: "https://placehold.co/150",
      domain: ["Rust", "Tauri", "React", "XML", "Offline Storage"],
    },

    {
      "title": "Good Talk",
      "description":
        "A web application designed to enable users to chat seamlessly while incorporating an advanced censoring layer that detects and prevents bad words and abusive language, ensuring a safe and friendly communication environment.",
      "imageLink": "https://placehold.co/150",
      "domain": [
        "AWS Lambda",
        "AWS Cognito",
        "AWS Amplify",
        "Next.js",
        "AWS DynamoDB",
        "S3",
        "AI",
        "NLP",
        "Postman",
        "React",
      ],
    },

    {
      "title": "Cars Hub",
      "description":
        "A web application where users can browse and purchase cars, featuring an admin page for managing listings and user interactions.",
      "imageLink": "https://placehold.co/150",
      "domain": [
        "Next.js",
        "Drizzle",
        "Docker",
        "Docker Compose",
        "MongoDB",
        "VPS",
        "Linux",
      ],
    },
    {
      "title": "AI Database Query Assistant",
      "description":
        "A web application that allows users to interact with a database schema and query data through AI. Users can ask the AI to fetch data, and it will process the request using advanced AI capabilities.",
      "imageLink": "https://placehold.co/150",
      "domain": [
        "LLaMA",
        "Unsloth",
        "Next.js",
        "Supabase",
        "AI",
        "NLP",
        "React",
        "Tailwind CSS",
        "Postman",
        "Database Schema",
      ],
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
