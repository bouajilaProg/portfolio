# bouajila-cms API docs (AI-friendly)

These docs are optimized for LLM agents and client-side integration.

## Base
- Base URL: `https://<host>`
- API prefix: `/api`
- All requests/responses are JSON unless noted.

## Auth
- All `/api/*` routes require a valid `Authorization: Bearer <access_token>` header.
- Exception: `/api/auth/*` does NOT require auth.
- Access tokens are short-lived (15m). Refresh tokens are stored in an httpOnly cookie named `cms_refresh`.

### POST /api/auth/login
Authenticate admin user.

Request JSON
```
{
  "email": "admin@example.com",
  "password": "secret"
}
```

Response JSON (200)
```
{
  "accessToken": "<jwt>"
}
```

Errors
- 401 `{ "error": "Unauthorized" }`
- 500 `{ "error": "Internal Server Error" }`

### POST /api/auth/refresh
Rotate refresh token and issue a new access token.

Request JSON
```
{}
```

Response JSON (200)
```
{
  "accessToken": "<jwt>"
}
```

Errors
- 401 `{ "error": "Unauthorized" }`
- 500 `{ "error": "Internal Server Error" }`

### POST /api/auth/logout
Revoke refresh token and clear cookie.

Request JSON
```
{}
```

Response JSON (200)
```
{ "success": true }
```

Errors
- 500 `{ "error": "Internal Server Error" }`

## Data Shapes
These are the canonical backend shapes.

Project
```
{
  "id": "string",                  // slug, primary key
  "title": "string",
  "description": "string",
  "tech": ["string"],
  "image": "string | null",       // R2 object key, not a public URL
  "featured": true | false,
  "links": [ProjectLink]
}
```

ProjectLink
```
{
  "id": 123,                         // optional on create
  "name": "string",
  "type": "github | website | ...",
  "href": "string"
}
```

Experience
```
{
  "id": 123,
  "role": "string",
  "company": "string",
  "date": "string",
  "description": "string",
  "skills": ["string"]
}
```

Education
```
{
  "id": 123,
  "school": "string",
  "degree": "string",
  "date": "string",
  "description": "string",
  "highlights": ["string"]
}
```

Profile
```
{
  "id": 1,
  "name": "string",
  "title": "string",
  "bio": "string",
  "email": "string",
  "linkedin": "string | null",
  "github": "string | null"
}
```

## Projects
### GET /api/projects
Returns all projects with links.

Response JSON (200)
```
[
  { Project }
]
```

### POST /api/projects
Creates a project.

Request JSON
```
{
  "id": "my-project",
  "title": "My Project",
  "description": "...",
  "tech": ["Next.js", "Turso"],
  "image": "media/2026-04/<uuid>-cover.png",
  "featured": false,
  "links": [
    { "name": "GitHub", "type": "github", "href": "https://github.com/..." }
  ]
}
```

Response JSON (201)
```
{ Project }
```

Errors
- 500 `{ "error": "Failed to create project" }`

### GET /api/projects/:id
Fetch one project with links.

Response JSON (200)
```
{ Project }
```

Errors
- 404 `{ "error": "Not found" }`

### PUT /api/projects/:id
Update a project.

Request JSON
```
{ Project }
```

Response JSON (200)
```
{ Project }
```

Notes
- If `links` is provided, all existing links are replaced.

Errors
- 404 `{ "error": "Not found" }`
- 500 `{ "error": "Failed to update" }`

### DELETE /api/projects/:id
Delete project and its links.

Response JSON (200)
```
{ "success": true }
```

## Experiences
### GET /api/experiences
Response JSON (200)
```
[
  { Experience }
]
```

### POST /api/experiences
Request JSON
```
{ Experience }
```

Response JSON (201)
```
{ Experience }
```

### GET /api/experiences/:id
Response JSON (200)
```
{ Experience }
```

Errors
- 404 `{ "error": "Not found" }`

### PUT /api/experiences/:id
Request JSON
```
{ Experience }
```

Response JSON (200)
```
{ Experience }
```

Errors
- 404 `{ "error": "Not found" }`
- 500 `{ "error": "Failed to update" }`

### DELETE /api/experiences/:id
Response JSON (200)
```
{ "success": true }
```

## Education
### GET /api/education
Response JSON (200)
```
[
  { Education }
]
```

### POST /api/education
Request JSON
```
{ Education }
```

Response JSON (201)
```
{ Education }
```

### GET /api/education/:id
Response JSON (200)
```
{ Education }
```

Errors
- 404 `{ "error": "Not found" }`

### PUT /api/education/:id
Request JSON
```
{ Education }
```

Response JSON (200)
```
{ Education }
```

Errors
- 404 `{ "error": "Not found" }`
- 500 `{ "error": "Failed to update" }`

### DELETE /api/education/:id
Response JSON (200)
```
{ "success": true }
```

## Profile
### GET /api/profile
Response JSON (200)
```
{ Profile }  // empty object if none exists
```

### PUT /api/profile
Upsert a single profile.

Request JSON
```
{ Profile }
```

Response JSON (200)
```
{ Profile }
```

Errors
- 500 `{ "error": "Failed to update profile" }`

## Media (Cloudflare R2)
### POST /api/media/presign
Generate a presigned upload URL for direct-to-R2 uploads.

Request JSON
```
{
  "filename": "hero.png",
  "contentType": "image/png",
  "size": 123456
}
```

Response JSON (200)
```
{
  "uploadUrl": "https://...",
  "key": "media/2026-04/<uuid>-hero.png"
}
```

Notes
- Accepts `image/*` and `video/*` only.
- Max size: 50MB.
- The returned `key` should be stored as `image` for projects.

Errors
- 400 `{ "error": "Missing filename or contentType" }`
- 400 `{ "error": "Only images and videos are allowed" }`
- 400 `{ "error": "File size exceeds 50MB limit" }`
- 500 `{ "error": "Internal Server Error" }`

### POST /api/media/sign
Generate a public read URL for an existing R2 object key.

Request JSON
```
{ "key": "media/2026-04/<uuid>-hero.png" }
```

Response JSON (200)
```
{ "url": "https://..." }
```

Errors
- 400 `{ "error": "Missing key" }`
- 500 `{ "error": "Internal Server Error" }`

## Error format (generic)
```
{ "error": "message" }
```

## Auth header example
```
Authorization: Bearer <access_token>
```
