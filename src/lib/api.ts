import { type LinkData, type LinkType } from "./linkTypes";
import { type ApiProject, type ApiProjectLink, type Education, type Experience, type Profile, type Project } from "./types";

/**
 * Base URL for the CMS API
 */
const apiBaseUrl = (() => {
  const baseUrl = import.meta.env.CMS_API_BASE_URL ?? import.meta.env.PUBLIC_CMS_API_BASE_URL;

  if (!baseUrl) {
    return "/api";
  }

  const url = new URL("/api", baseUrl).toString();
  return url.endsWith("/") ? url.slice(0, -1) : url;
})();

type CacheEntry<T> = {
  value: T;
  expiresAt: number;
  staleAt: number;
  inflight?: Promise<T>;
};

const cacheStore = new Map<string, CacheEntry<unknown>>();

const getCacheDurations = () => {
  const ttlSeconds = Number(import.meta.env.CMS_CACHE_TTL_SECONDS ?? "300");
  const staleSeconds = Number(import.meta.env.CMS_CACHE_STALE_SECONDS ?? "3600");
  const ttlMs = Math.max(0, ttlSeconds) * 1000;
  const staleMs = Math.max(ttlMs, Math.max(0, staleSeconds) * 1000);

  return { ttlMs, staleMs };
};

/**
 * Get the access token from environment
 */
const getAccessToken = () =>
  import.meta.env.CMS_ACCESS_TOKEN ?? import.meta.env.PUBLIC_CMS_ACCESS_TOKEN ?? "";

/**
 * Build full API URL from path
 */
const buildApiUrl = (path: string) => `${apiBaseUrl}${path}`;

/**
 * Check if a URL is absolute
 */
const isAbsoluteUrl = (value: string) => /^https?:\/\//i.test(value);

/**
 * Normalize link type to supported types
 */
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

/**
 * Map API link to LinkData
 */
const mapLink = (link: ApiProjectLink): LinkData => ({
  name: link.name,
  type: normalizeLinkType(link.type),
  href: link.href,
});

/**
 * Add authorization headers to request
 */
const withAuthHeaders = (headers: Headers) => {
  const token = getAccessToken();

  if (token && !headers.has("Authorization")) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  return headers;
};

const shouldCache = (options: RequestInit) => {
  const method = (options.method ?? "GET").toUpperCase();
  if (method !== "GET") {
    return false;
  }

  if (options.cache === "no-store") {
    return false;
  }

  return true;
};

const getCachedResponse = async <T>(key: string, fetcher: () => Promise<T>): Promise<T> => {
  const { ttlMs, staleMs } = getCacheDurations();
  if (ttlMs === 0) {
    return fetcher();
  }

  const now = Date.now();
  const existing = cacheStore.get(key) as CacheEntry<T> | undefined;

  const storeFresh = async () => {
    const value = await fetcher();
    const updatedAt = Date.now();

    cacheStore.set(key, {
      value,
      expiresAt: updatedAt + ttlMs,
      staleAt: updatedAt + staleMs,
    });

    return value;
  };

  if (!existing) {
    return storeFresh();
  }

  if (now < existing.expiresAt) {
    return existing.value;
  }

  if (now < existing.staleAt) {
    if (!existing.inflight) {
      const inflight = storeFresh()
        .catch(() => existing.value)
        .finally(() => {
          const current = cacheStore.get(key) as CacheEntry<T> | undefined;
          if (current?.inflight === inflight) {
            current.inflight = undefined;
          }
        });

      existing.inflight = inflight;
      cacheStore.set(key, existing);
    }

    return existing.value;
  }

  if (existing.inflight) {
    return existing.inflight;
  }

  return storeFresh();
};

/**
 * Make authenticated JSON request to API
 */
const requestJson = async <T>(path: string, options: RequestInit = {}): Promise<T> => {
  const headers = withAuthHeaders(new Headers(options.headers));

  if (!headers.has("Accept")) {
    headers.set("Accept", "application/json");
  }

  if (options.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  const fetchJson = async () => {
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

  if (!shouldCache(options)) {
    return fetchJson();
  }

  const cacheKey = buildApiUrl(path);
  return getCachedResponse<T>(cacheKey, fetchJson);
};

/**
 * Get signed URL for media files
 */
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

/**
 * Transform API project to frontend Project
 */
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

/**
 * Fetch profile data from CMS
 */
export const getProfile = () => requestJson<Profile>("/profile");

/**
 * Fetch all projects from CMS
 */
export const getProjects = async () => {
  const projects = await requestJson<ApiProject[]>("/projects");
  return Promise.all(projects.map((project) => mapProject(project)));
};

/**
 * Fetch a single project by ID
 */
export const getProject = async (id: string) => {
  const project = await requestJson<ApiProject>(`/projects/${id}`);
  return mapProject(project);
};

/**
 * Fetch all experiences from CMS
 */
export const getExperiences = () => requestJson<Experience[]>("/experiences");

/**
 * Fetch all education entries from CMS
 */
export const getEducation = () => requestJson<Education[]>("/education");
