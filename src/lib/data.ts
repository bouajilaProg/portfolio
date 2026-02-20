export interface Profile {
  name: string;
  title: string;
  bio: string;
  email: string;
  socialLinks: {
    linkedin: string;
    github: string;
  };
}

export const profile: Profile = {
  name: "Mohamed Yessine Bouajila",
  title: "Full-Stack Developer & Product Manager",
  bio: "Hi, I'm yessine from Tunisia and I enjoys building practical tools and web applications. I'm passionate about new technologies, open-source software, and finding creative ways to solve real-world problems through code.",
  email: "bouajilamedyessine@gmail.com",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/mohamed-yessine-bouajila/",
    github: "https://github.com/bouajilaProg",
  },
};

export interface Experience {
  role: string;
  company: string;
  date: string;
  description: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    role: "Full-Stack Developer",
    company: "GreenBoard",
    date: "2023 — Present",
    description: "Architected a high-traffic e-commerce storefront using React 19 and Next.js, achieving a 98/100 Lighthouse score.",
    skills: ["Next.js", "TypeScript", "Node.js", "AWS"],
  },
];

export interface Education {
  school: string;
  degree: string;
  date: string;
  description: string;
  highlights: string[];
}
export const education: Education[] = [
  {
    school: "Higher Institute of Mathematics & Computer Science (ISIMM)",
    degree: "Master's in Computer Science",
    date: "2025 — Present",
    description: "Specializing in advanced software engineering, distributed systems, and architectural patterns.",
    highlights: [],
  },
  {
    school: "Higher Institute of Mathematics & Computer Science (ISIMM)",
    degree: "Bachelor of Science in Computer Science",
    date: "2022 — 2025",
    description: "Foundational study of software engineering, algorithms, databases, and networking.",
    highlights: [
      "president of the Development Club",
      "Data Structures and Algorithms",
    ],
  },
  {
    school: "Habib Thameur High School",
    degree: "Baccalaureate in Computer Science",
    date: "2022",
    description: "Initial focus on mathematics and computer science fundamentals.",
    highlights: [
      "Completed with strong results",
      "Game Developer"
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
  featured: boolean;
  rank: number;
}

export const projects: Project[] = [
  {
    id: "autoresume",
    title: "AutoResume",
    description: "A data-driven resume manager that generates LaTeX-quality PDFs from a single source of truth using Typst.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Typst", "Zod"],
    github: "https://github.com/bouajilaProg/auto-resume",
    featured: true,
    rank: 1,
    image: "homepage.png",
  },
  {
    id: "greenboard",
    title: "GreenBoard",
    description: "A production-ready platform for selling personalized PCBs. Supports user-uploaded Gerber files.",
    tech: ["Next.js", "Resend Email API", "Tailwind", "React"],
    demo: "https://greenboard.tn",
    image: "greenboard.png",
    featured: true,
    rank: 2,
  },
  {
    id: "codedown",
    title: "CodeDown",
    description: "A CLI tool to convert Markdown files into beautiful, syntax-highlighted PDFs.",
    tech: ["Python", "Markdown", "CLI Tools", "PDF Generation"],
    github: "https://github.com/bouajilaProg/CodeDown",
    featured: true,
    rank: 3,
  },
  {
    id: "cooldocs",
    title: "Cool Docs",
    description: "Offline desktop documentation manager tailored for competitive programmers.",
    tech: ["Rust", "Tauri", "XML", "CSS"],
    github: "https://github.com/bouajilaProg/cool-docs",
    featured: false,
    rank: 4,
  },
  {
    id: "shead",
    title: "shead",
    description: "An enhanced and modernized replacement for the standard shell 'read' command.",
    tech: ["Rust", "Shell"],
    github: "https://github.com/bouajilaProg/shead",
    featured: false,
    rank: 5,
  },
  {
    id: "goodtalk",
    title: "Good Talk",
    description: "AI-powered chat application focused on safety and natural language processing.",
    tech: ["React", "Express", "AI", "NLP"],
    github: "https://github.com/bouajilaProg/GoodTalk",
    featured: false,
    rank: 6,
  },
  {
    id: "cri",
    title: "CRI Website",
    description: "The full-stack community platform for the ISIMM Robotics Club.",
    tech: ["React", "Express", "PostgreSQL"],
    github: "https://github.com/bouajilaProg/CRI-website",
    featured: false,
    rank: 7,
  },
];
