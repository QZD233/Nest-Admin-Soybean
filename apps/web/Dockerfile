FROM node:20-alpine AS builder

RUN corepack enable && corepack prepare pnpm@10.5.0 --activate

WORKDIR /workspace

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages/types ./packages/types
COPY apps/web ./apps/web

RUN pnpm install --frozen-lockfile
RUN pnpm --filter @nest-admin/types build
RUN NODE_OPTIONS=--max-old-space-size=4096 pnpm --filter @nest-admin/web build:coolify

FROM nginx:1.27-alpine AS production

COPY apps/web/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /workspace/apps/web/dist /usr/share/nginx/html

EXPOSE 80
