import { Github, ExternalLink } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
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
    id: "linear-clone",
    title: "Linear Clone",
    description: "A high-performance task management interface with complex keyboard shortcuts and real-time syncing.",
    tech: ["Next.js", "PostgreSQL", "Tailwind"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
    rank: 1
  },
  {
    id: "synthesize-ai",
    title: "Synthesize AI",
    description: "An internal tool for processing large datasets through LLM pipelines for sentiment analysis.",
    tech: ["Python", "FastAPI", "React"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
    rank: 2
  }
];
