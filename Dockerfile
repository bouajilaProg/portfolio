FROM node:22-alpine AS base

RUN corepack enable && corepack prepare pnpm@latest --activate

FROM base AS deps

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm build

FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --gid 1001 -S nodejs && \
    adduser --uid 1001 -S nodejs -G nodejs

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/astro.config.mjs ./

USER nodejs

EXPOSE 1600

CMD ["pnpm", "dev"]