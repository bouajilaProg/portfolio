import { type LinkData } from "./linkTypes";

/**
 * Profile data from CMS
 */
export interface Profile {
  id?: number;
  name: string;
  title: string;
  bio: string;
  email: string;
  linkedin: string | null;
  github: string | null;
}

/**
 * Work experience entry from CMS
 */
export interface Experience {
  id?: number;
  role: string;
  company: string;
  date: string;
  description: string;
  skills: string[];
}

/**
 * Education entry from CMS
 */
export interface Education {
  id?: number;
  school: string;
  degree: string;
  date: string;
  description: string;
  highlights: string[];
}

/**
 * Project with links and media
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  links: LinkData[];
  image: string | null;
  featured: boolean;
}

/**
 * Raw project link from API
 */
export interface ApiProjectLink {
  id?: number;
  name: string;
  type: string;
  href: string;
}

/**
 * Raw project from API (before transformation)
 */
export interface ApiProject {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string | null;
  featured: boolean;
  links: ApiProjectLink[];
}
