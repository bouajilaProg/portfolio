import Project from "@/misc/types/project";

const projects: Project[] = [
  {
    title: "CRI Website",
    description:
      "Developed a website for the robotics club at ISIMM that enables users to borrow materials from the club",
    imageLink: "ProjectsImage/CRI.png",
    skills: [
      "React",
      "Express",
      "PostgreSQL",
      "pg-node",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    domain: ["front", "back"],
    githubLink: "https://github.com/bouajilaProg/CRI-website",
  },
  {
    title: "Cool Docs",
    description:
      "An offline tool built with Rust, Tauri, and React for competitive programmers to store and manage their docs and templates in XML format, providing a solution to the no Wi-Fi rule at competitions.",
    imageLink: "ProjectsImage/CoolDocs.png",
    skills: ["Rust", "Tauri", "React", "XML", "Offline Storage"],
    domain: ["desktop"],
    githubLink: "https://github.com/bouajilaProg/cool-docs",
  },
  {
    title: "Good Talk",
    description:
      "A web application designed to enable users to chat seamlessly while incorporating an advanced censoring layer that detects and prevents bad words and abusive language, ensuring a safe and friendly communication environment.",
    imageLink: "https://placehold.co/150",
    skills: [
      "AWS Lambda",
      "AWS Cognito",
      "Next.js",
      "AWS DynamoDB",
      "S3",
      "AI",
      "NLP",
      "Postman",
      "React",
    ],
    domain: ["front", "back", "ai"],
  },
  {
    title: "Cars Hub",
    description:
      "A web application where users can browse and purchase cars, featuring an admin page for managing listings and user interactions.",
    imageLink: "https://placehold.co/150",
    skills: [
      "Next.js",
      "github actions",
      "Drizzle",
      "Docker",
      "Docker Compose",
      "MongoDB",
      "VPS",
      "Linux",
    ],
    domain: ["front", "back", "devops"],
  },
  {
    title: "DB QueryRod",
    description:
      "A web application that allows users to interact with a database schema and query data through AI. Users can ask the AI to fetch data, and it will process the request using advanced AI capabilities.",
    imageLink: "https://placehold.co/150",
    skills: [
      "LLaMA",
      "Unsloth",
      "Next.js",
      "Supabase",
      "AI",
      "NLP",
      "React",
      "Tailwind CSS",
      "Postman",
    ],
    domain: ["front", "back", "AI"],
  },
  {
    title: "Developer Portfolio",
    description:
      "A personal portfolio showcasing my skills, projects, and education as a full-stack developer with a passion for AI and DevOps. This portfolio highlights my technical expertise and includes sections on my experience, projects, and contact information.",
    imageLink: "ProjectsImage/Portfolio.png",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
    ],
    domain: ["front", "back"],
    githubLink: "https://github.com/bouajilaProg/portfolio",
    projectLink: "/",
  },
];

export default projects;
