# CMS integration reference for portfolio v3

Reviewed from `../portfoliov2` on 2026-10-31. This document records the old implementation for future use; no CMS functionality has been implemented in v3 yet. Backend behavior mentioned below comes from v2's API documentation and has not been checked against a running CMS.

## Source map

Paths below are relative to `../portfoliov2/`.

| Source | What to reuse or consult |
| --- | --- |
| `src/lib/api.ts` | URL construction, JSON requests, GET cache, media resolution, project mapping, exported fetch functions |
| `src/lib/types.ts` | CMS response and frontend data types |
| `src/lib/data.ts` | Compatibility re-exports; new code should import API functions and types directly |
| `src/lib/linkTypes.tsx` | Supported link types and icon mapping |
| `src/lib/timeline.ts` | Formatting CMS date strings for experience and education |
| `src/pages/index.astro` | Parallel loading of all four content collections |
| `src/pages/projects.astro` | Loading profile and all projects |
| `src/layouts/Layout.astro` | Shared profile for footer, SEO, and structured data |
| `src/components/sections/` | Rendering CMS fields in portfolio sections |
| `src/components/SEO.astro`, `src/components/JsonLD.astro` | CMS profile usage in metadata |
| `.env.example`, `astro.config.mjs` | Configuration and static rendering setup |
| `API_DOCS.md` | Broader backend contract, including admin/auth/media routes absent from the portfolio client |

## Existing integration boundary

- v2 uses Astro static output with React islands. CMS reads happen in Astro page/layout frontmatter during the build; components receive data as props.
- Hydrating a React island does not re-fetch CMS content. Published content changes require another build/deployment in this architecture. The in-memory cache does not refresh already generated pages.
- The portfolio only reads CMS content. It has no CMS login, editing, upload, or delete UI.
- There is no local CMS API implementation in the reviewed v2 source.

## Configuration

| Environment variable | v2 behavior |
| --- | --- |
| `CMS_API_BASE_URL` | Preferred CMS host; example: `http://localhost:3000/` |
| `PUBLIC_CMS_API_BASE_URL` | Fallback when the preferred variable is null/undefined |
| `CMS_CACHE_TTL_SECONDS` | Fresh cache duration; code default: `300` |
| `CMS_CACHE_STALE_SECONDS` | Total stale cutoff measured from a successful fetch; code default: `3600`, but `.env.example` sets `1800` |
| `R2_PUBLIC_BASE_URL` | Preferred public media host; example: `https://pub-xxxx.r2.dev` |
| `PUBLIC_R2_PUBLIC_BASE_URL` | Fallback media host |

Example for future setup:

```dotenv
CMS_API_BASE_URL=http://localhost:3000/
CMS_CACHE_TTL_SECONDS=300
CMS_CACHE_STALE_SECONDS=1800
R2_PUBLIC_BASE_URL=https://pub-xxxx.r2.dev
```

These are example values, not verified deployment settings. The media host should match the CMS's `NEXT_PUBLIC_R2_PUBLIC_BASE_URL`, according to v2's `.env.example`.

API base construction uses `new URL("/api", baseUrl)`, so it replaces any path in the configured host with `/api`. For example, `https://cms.example.com/custom/path` becomes `https://cms.example.com/api`. It removes a trailing slash and appends endpoint paths.

With no CMS host, the base falls back to `/api`. That needs a same-origin API/proxy in a browser and is not a usable absolute fetch URL for a normal Node build. Configure an absolute CMS host for static builds. v2 does not supply a proxy route.

## Read API and data contracts

The client expects plain objects or arrays, without a `{ data: ... }` envelope or pagination metadata.

| Client function | HTTP endpoint | Result | Existing use |
| --- | --- | --- | --- |
| `getProfile()` | `GET /api/profile` | `Profile` | Home, projects page, layout fallback |
| `getProjects()` | `GET /api/projects` | `Project[]` after mapping | Home and projects page |
| `getProject(id: string)` | `GET /api/projects/:id` | `Project` after mapping | Exported, but no existing detail page consumes it |
| `getExperiences()` | `GET /api/experiences` | `Experience[]` | Home |
| `getEducation()` | `GET /api/education` | `Education[]` | Home |

```ts
interface Profile {
  id?: number;
  name: string;
  title: string;
  bio: string;
  email: string;
  linkedin: string | null;
  github: string | null;
}

interface Experience {
  id?: number;
  role: string;
  company: string;
  date: string;
  description: string;
  skills: string[];
}

interface Education {
  id?: number;
  school: string;
  degree: string;
  date: string;
  description: string;
  highlights: string[];
}

interface ApiProjectLink {
  id?: number;
  name: string;
  type: string;
  href: string;
}

interface ApiProject {
  id: string; // Backend docs describe this as a slug/primary key.
  title: string;
  description: string;
  tech: string[];
  image: string | null; // Normally an R2 object key; client also accepts HTTP(S) URLs.
  featured: boolean;
  links: ApiProjectLink[];
}

type LinkType =
  | "github" | "linkedin" | "mail" | "twitter"
  | "website" | "docs" | "pypi" | "default";

interface LinkData {
  name: string;
  type: LinkType;
  href: string;
}

// Same content fields as ApiProject, with resolved image and normalized links.
type Project = Omit<ApiProject, "links"> & { links: LinkData[] };
```

### Project mapping and media

- Pass through project ID, title, description, technology tags, and `featured`.
- Map each link to `{ name, type, href }`, dropping its optional backend ID. Lowercase `type`; use `default` for unsupported types. v2 does not trim the type string.
- Preserve absolute `http://` and `https://` image URLs.
- Resolve an object key against the public R2 host, removing one trailing slash from the host and one leading slash from the key. Example: `media/2026-04/cover.png` becomes `https://media.example.com/media/2026-04/cover.png`.
- Missing/falsy image values become `null`, and the card omits its image.
- If an object key is present but the media host is missing, v2 logs `R2_PUBLIC_BASE_URL is not configured` and returns the key unchanged. This can produce a broken relative image URL.
- The portfolio resolves URLs locally; it never calls `/api/media/sign`.

### Request and error behavior

- Read routes are public. `withAuthHeaders()` is a no-op: no bearer token is attached, despite older comments describing requests as authenticated.
- All fetches set `credentials: "include"` and default `Accept: application/json`. A request body would add `Content-Type: application/json` unless already supplied.
- Network failures throw an error with the request URL and underlying message.
- Non-success responses use a JSON `{ error: string }` message when available, otherwise `Request failed with status <status>`.
- HTTP 401 appends `. CMS public endpoint may be misconfigured.` There is no automatic login/refresh/retry.
- Successful JSON is cast to TypeScript types without runtime validation. Invalid JSON rejects the request.
- Pages use `Promise.all` without catches or per-section fallbacks. A failed required read can fail the static build.
- Backend docs say an absent profile returns `{}`. The client assumes a complete profile, so v3 must deliberately handle that case.

### In-memory GET cache

- A module-level `Map` stores parsed responses, keyed only by full request URL. It is process-local and has no persistent/distributed storage.
- Only GET requests are cached; `cache: "no-store"` bypasses it. TTL `0` disables caching.
- Fresh entries return immediately for the TTL (default 300 seconds).
- After TTL, entries return stale data while one background refresh per existing entry runs, until the stale cutoff. With TTL 300 and stale 1800, this interval is from 300 to 1800 seconds after the last successful fetch, not another 1800 seconds after expiry.
- Successful refresh resets both timestamps. Background refresh failures retain the old value and do not extend those timestamps.
- Once past the stale cutoff, the caller awaits an existing refresh or a new fetch. A previously started background refresh may still resolve to its old value on failure.
- Cold misses and new fetches after full expiration are not universally deduplicated. Only the stale-refresh path stores an `inflight` promise.
- Negative durations clamp to zero; the stale cutoff is at least the TTL. Non-numeric configuration is not validated.
- `clearApiCache()` clears the map and is exported from `api.ts`, but is not re-exported from `data.ts` or called by the existing UI.

## How content reaches the UI

| Area | CMS fields and behavior |
| --- | --- |
| Home page | Loads profile, projects, experiences, and education concurrently; passes the same profile to the layout |
| Hero | Name, title, bio, `mailto:` email action; GitHub/LinkedIn links appear only when present |
| Featured work | Filters by truthy `project.featured` in the frontend; keeps API order and applies no count limit |
| Projects page | Renders all returned projects in API order; no search, pagination, or frontend sorting |
| Project card | Optional image, title, plain-text description, tech tags, and outbound link icons; no internal detail route |
| Experience | Role, company, date display, description, optional nonempty skills tags; keeps API order |
| Education | School, degree, date display, description, highlights tags; keeps API order |
| Footer | Name for copyright, email for copy/mail actions, optional GitHub/LinkedIn links |
| Layout | Fetches profile itself only when a page does not pass one; shares it with footer, SEO, and JSON-LD |
| SEO | Profile name supplies author and Open Graph site name |
| JSON-LD | Profile name/title/bio/email and nonempty social URLs supply Person data; profile name also supplies website name |

Date fields are display strings, not structured start/end dates. `timeline.ts` handles values such as `Sep 2020 - Jun 2024`, `2022 - Present`, and `2022`; recognizes hyphen/en dash/em dash separators and `present`, `current`, or `now`; and normalizes month names to abbreviations. Missing dates render an empty start line through `normalizeTimelineLines()`. Malformed nonempty dates can fall back to the current year.

Content outside the CMS contract in v2:

- Profile photo is a local `/profile-pic*.webp` asset. The profile schema has no avatar field.
- Page titles, descriptions, section labels, SEO keywords, and default social preview image are hardcoded.
- JSON-LD uses a hardcoded `/profile.jpg` image path; verify the actual asset when implementing v3.
- The GitHub contribution graph is a separate browser fetch to `https://github-contributions-api.jogruber.de/v4/${username}?y=all`; it is not a CMS endpoint, and the home page does not pass the CMS profile to it.

## Backend features documented but not implemented in the portfolio

The following is a reference to v2's `API_DOCS.md`, not evidence of existing frontend functionality or a verified current backend contract.

| Backend surface | Documented contract |
| --- | --- |
| Auth | `POST /api/auth/login` with `{ email, password }` returns `{ accessToken }`; `POST /api/auth/refresh` with `{}` rotates the refresh token and returns an access token; `POST /api/auth/logout` with `{}` revokes/clears the refresh cookie |
| Token rules | Access tokens last 15 minutes; refresh cookie is httpOnly and named `cms_refresh`; write/admin routes require `Authorization: Bearer <access_token>` or a static API token |
| Profile editing | `PUT /api/profile` upserts the single profile |
| Collection editing | Projects, experiences, and education support collection `POST`, item `GET`, item `PUT`, and item `DELETE`; create returns 201, updates return the item, deletes return `{ success: true }` |
| Project links | Sending `links` with a project update replaces all existing links |
| Upload preparation | `POST /api/media/presign` accepts `{ filename, contentType, size }`, returns `{ uploadUrl, key }`; documented types are `image/*` and `video/*`, with a 50 MB limit; returned key is stored in project `image` |
| Media URL lookup | `POST /api/media/sign` accepts `{ key }` and returns `{ url }` |
| Errors | Generally `{ error: string }`; missing items return 404 |
| CORS | Public reads allow origins listed in the CMS's comma-separated `CORS_ALLOWED_ORIGINS`; OPTIONS preflight is handled by its proxy layer |

v2 cards render media with `<img>`, so documented video uploads do not imply existing video playback support. Browser requests with `credentials: "include"` also require compatible credentialed CORS configuration; confirm it if v3 fetches across origins in the browser.

## Later implementation checklist

- [ ] Choose when v3 fetches content: build time, request time, or browser. If static, define how CMS publishing triggers a rebuild.
- [ ] Add configuration and canonical types, then a shared API client and project/media mapping layer.
- [ ] Keep public read integration independent of admin credentials; ordinary portfolio reads need no CMS login.
- [ ] Validate response shapes and define missing-profile, empty-collection, unavailable-CMS, and missing-media behavior.
- [ ] Wire profile into hero/contact/footer/metadata, featured projects into home, all projects into the listing, and experience/education into their sections.
- [ ] Preserve ordering, link fallback, nullable social/media handling, and date display intentionally; decide separately whether a project detail page is needed.
- [ ] Choose cache durations explicitly, validate configuration, and adapt caching to the selected rendering model rather than assuming it updates static HTML.
- [ ] Check normal data, empty arrays, `{}` profile, null image/social fields, unknown link types, R2 keys versus absolute URLs, HTTP errors, malformed JSON, and cache refresh failures.
- [ ] Verify production build access to the CMS; verify allowed origins and credentials if browser fetching is introduced.
- [ ] Recheck backend documentation before adding any optional admin/auth/upload features.

This review used local source and documentation only. No live CMS calls or write operations were performed.
