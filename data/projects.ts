

interface projectHeader {
  title: string,
  description: string,
  domain: string[],
  image: string,
  technologies: string[],
  liveUrl: string,
  githubUrl: string,
}

interface projectBody {
  fullDescription: string,
  sections: {
    title?: string,
    type: "title-only" | "text-image" | "image-text | image-only",
    image?: string,
    text?: string,
  }[]
}


interface project {
  id: number,
  header: projectHeader,
  body: projectBody
}

export type { project, projectHeader, projectBody }

const projects: project[] = [
  {
    id: 1,
    header: {
      title: "CRI Website",
      description:
        "Developed a website for the robotics club at ISIMM that enables users to borrow materials from the club",
      domain: ["front", "back"],
      image: "ProjectsImage/CRI.png",
      technologies: [
        "React",
        "Express",
        "PostgreSQL",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      liveUrl: "", // Add live URL if available
      githubUrl: "https://github.com/bouajilaProg/CRI-website",
    },
    body: {
      fullDescription: "A more detailed description of the CRI Website project.", // Add detailed description
      sections: [
        {
          type: "text-image",
          text: "Explain a specific feature or challenge in this section.",
          image: "ProjectsImage/CRI_specific_feature.png" // Example image
        },
        {
          type: "text-image",
          text: "Another section with text and image.",
          image: "ProjectsImage/CRI_another_feature.png" // Example image
        }
        // ... more sections as needed
      ],
    },
  },
  {
    id: 2,
    header: {
      title: "Cool Docs",
      description:
        "An offline tool built with Rust, Tauri, and React for competitive programmers to store and manage their docs and templates in XML format, providing a solution to the no Wi-Fi rule at competitions.",
      domain: ["desktop"],
      image: "ProjectsImage/CoolDocs.png",
      technologies: ["Rust", "Tauri", "React", "XML"],
      liveUrl: "", // Add live URL if available
      githubUrl: "https://github.com/bouajilaProg/cool-docs",
    },
    body: {
      fullDescription: "Detailed description of Cool Docs and its functionalities.",
      sections: [
        {
          type: "text-image",
          text: "Discuss the benefits of using XML for document storage.",
          image: "ProjectsImage/CoolDocs_xml.png" // Example image
        },
        // ... more sections
      ],
    },
  },
  {
    id: 3,
    header: {
      title: "Good Talk",
      description:
        "A web application designed to enable users to chat seamlessly while incorporating an advanced censoring layer that detects and prevents bad words and abusive language, ensuring a safe and friendly communication environment.",
      domain: ["front", "back", "ai"],
      image: "ProjectsImage/GoodTalk.png",
      technologies: [
        "react",
        "express",
        "AI",
        "NLP",
        "Postman",
        "React",
      ],
      liveUrl: "", // Add live URL if available
      githubUrl: "https://github.com/bouajilaProg/GoodTalk",
    },
    body: {
      fullDescription: "Explain the AI/NLP implementation for censoring.",
      sections: [
        {
          type: "text-image",
          text: "Details about the AI model used and its training.",
          image: "ProjectsImage/GoodTalk_ai.png" // Example image
        },
        // ... more sections
      ],
    },
  },
  {
    id: 4,
    header: {
      title: "Developer Portfolio",
      description:
        "A personal portfolio showcasing my skills, projects, and education as a full-stack developer with a passion for AI and DevOps. This portfolio highlights my technical expertise and includes sections on my experience, projects, and contact information.",
      domain: ["front"],
      image: "ProjectsImage/Portfolio.png",
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Node.js",
      ],
      liveUrl: "/", // Add live URL if available
      githubUrl: "https://github.com/bouajilaProg/portfolio",
    },
    body: {
      fullDescription: "Details about the portfolio's architecture and design choices.",
      sections: [
        {
          type: "text-image",
          text: "Discuss the technologies used and why they were chosen.",
          image: "ProjectsImage/Portfolio_tech.png" // Example image
        },
        // ... more sections
      ],
    },
  },
];

export default projects;
