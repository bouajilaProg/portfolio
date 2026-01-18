import { Github, ExternalLink } from "lucide-react";

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

export interface Experience {
  role: string;
  company: string;
  date: string;
  description: string;
  skills: string[];
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  email: string;
  socialLinks: {
    twitter: string;
    linkedin: string;
    github: string;
  };
}

export const profile: Profile = {
  name: "Your Name",
  title: "Product Engineer & Interface Designer",
  bio: "Building accessible, high-performance web applications with a focus on clean code and user-centric motion. Currently scaling systems at TechCorp.",
  email: "hello@yourname.com",
  socialLinks: {
    twitter: "#",
    linkedin: "#",
    github: "#"
  }
};

export const experience: Experience[] = [
  {
    role: "Senior Product Engineer",
    company: "TechCorp",
    date: "2023 — Present",
    description: "Architected a high-traffic e-commerce storefront using React 19 and Next.js, achieving a 98/100 Lighthouse score.",
    skills: ["Next.js", "TypeScript", "Node.js", "AWS"]
  },
  {
    role: "Frontend Developer",
    company: "DesignHub",
    date: "2021 — 2023",
    description: "Developed a design system used by 50+ developers. Focused on accessibility and interaction design.",
    skills: ["React", "Tailwind CSS", "Framer Motion"]
  }
];

export const projects: Project[] = [
  {
    id: "greenboard",
    title: "GreenBoard",
    description: "A website for selling personalized PCBs. Users can upload their own PCB Gerber files. This is a production project, not a demo.",
    tech: ["Next.js", "Resend Email API", "Tailwind", "React"],
    github: undefined,
    demo: "https://green-board-hazel.vercel.app",
    image: "/images/greenboard.png",
    featured: true,
    rank: 1
  },
  {
    id: "codedown",
    title: "CodeDown",
    description: "A CLI tool to convert Markdown files into beautiful, syntax-highlighted PDFs.",
    tech: ["Python", "Markdown", "CLI Tools", "PDF Generation"],
    github: "https://github.com/bouajilaProg/CodeDown",
    demo: undefined,
    image: "/images/codedown.png",
    featured: true,
    rank: 2
  },
  {
    id: "cooldocs",
    title: "Cool Docs",
    description: "Offline desktop docs manager for competitive programmers.",
    tech: ["Rust", "Tauri", "XML", "CSS"],
    github: "https://github.com/bouajilaProg/cool-docs",
    demo: undefined,
    featured: false,
    rank: 3
  },
  {
    id: "shead",
    title: "shead",
    description: "Enhanced `read` command replacement for shell scripting.",
    tech: ["Rust", "Shell"],
    github: "https://github.com/bouajilaProg/shead",
    demo: undefined,
    featured: false,
    rank: 4
  },
  {
    id: "goodtalk",
    title: "Good Talk",
    description: "AI-powered safe chat application.",
    tech: ["React", "Express", "AI", "NLP"],
    github: "https://github.com/bouajilaProg/GoodTalk",
    demo: undefined,
    image: "/images/goodtalk.png",
    featured: true,
    rank: 5
  },
  {
    id: "cri",
    title: "CRI Website",
    description: "Full-stack platform for ISIMM Robotics Club.",
    tech: ["React", "Express", "PostgreSQL"],
    github: "https://github.com/bouajilaProg/CRI-website",
    demo: undefined,
    featured: false,
    rank: 6
  }
];
