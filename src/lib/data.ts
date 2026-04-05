import { type LinkData, type LinkType } from "./linkTypes";

const apiBaseUrl = (() => {
  const baseUrl = import.meta.env.CMS_API_BASE_URL ?? import.meta.env.PUBLIC_CMS_API_BASE_URL;

  if (!baseUrl) {
    return "/api";
  }

  const url = new URL("/api", baseUrl).toString();
  return url.endsWith("/") ? url.slice(0, -1) : url;
})();

const getAccessToken = () =>
  import.meta.env.CMS_ACCESS_TOKEN ?? import.meta.env.PUBLIC_CMS_ACCESS_TOKEN ?? "";

const buildApiUrl = (path: string) => `${apiBaseUrl}${path}`;

const isAbsoluteUrl = (value: string) => /^https?:\/\//i.test(value);

const normalizeLinkType = (type: string): LinkType => {
  const normalized = type.toLowerCase();
  const supported: LinkType[] = [
    "github",
    "linkedin",
    "mail",
    "twitter",
    "website",
    "docs",
    "pypi",
    "default",
  ];

  return supported.includes(normalized as LinkType) ? (normalized as LinkType) : "default";
};

const mapLink = (link: ApiProjectLink): LinkData => ({
  name: link.name,
  type: normalizeLinkType(link.type),
  href: link.href,
});

const withAuthHeaders = (headers: Headers) => {
  const token = getAccessToken();

  if (token && !headers.has("Authorization")) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  return headers;
};

const requestJson = async <T>(path: string, options: RequestInit = {}): Promise<T> => {
  const headers = withAuthHeaders(new Headers(options.headers));

  if (!headers.has("Accept")) {
    headers.set("Accept", "application/json");
  }

  if (options.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  const response = await fetch(buildApiUrl(path), {
    ...options,
    headers,
    credentials: "include",
  });

  if (response.ok) {
    return (await response.json()) as T;
  }

  let errorMessage = `Request failed with status ${response.status}`;

  try {
    const errorPayload = (await response.json()) as { error?: string };
    if (errorPayload?.error) {
      errorMessage = errorPayload.error;
    }
  } catch {
    // ignore JSON parse errors
  }

  throw new Error(errorMessage);
};

export interface Profile {
  id?: number;
  name: string;
  title: string;
  bio: string;
  email: string;
  linkedin: string | null;
  github: string | null;
}

export interface Experience {
  id?: number;
  role: string;
  company: string;
  date: string;
  description: string;
  skills: string[];
}

export interface Education {
  id?: number;
  school: string;
  degree: string;
  date: string;
  description: string;
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  links: LinkData[];
  image: string | null;
  featured: boolean;
}

interface ApiProjectLink {
  id?: number;
  name: string;
  type: string;
  href: string;
}

interface ApiProject {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string | null;
  featured: boolean;
  links: ApiProjectLink[];
}

const getSignedMediaUrl = async (key: string) => {
  if (isAbsoluteUrl(key)) {
    return key;
  }

  const response = await requestJson<{ url: string }>("/media/sign", {
    method: "POST",
    body: JSON.stringify({ key }),
  });

  return response.url;
};

const mapProject = async (project: ApiProject): Promise<Project> => {
  const image = project.image ? await getSignedMediaUrl(project.image) : null;

  return {
    id: project.id,
    title: project.title,
    description: project.description,
    tech: project.tech,
    image,
    featured: project.featured,
    links: project.links.map(mapLink),
  };
};

export const getProfile = () => requestJson<Profile>("/profile");

export const getProjects = async () => {
  const projects = await requestJson<ApiProject[]>("/projects");
  return Promise.all(projects.map((project) => mapProject(project)));
};

export const getProject = async (id: string) => {
  const project = await requestJson<ApiProject>(`/projects/${id}`);
  return mapProject(project);
};

export const getExperiences = () => requestJson<Experience[]>("/experiences");

export const getEducation = () => requestJson<Education[]>("/education");
