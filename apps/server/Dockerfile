FROM node:20-alpine AS builder

RUN apk add --no-cache openssl ffmpeg
RUN corepack enable && corepack prepare pnpm@10.5.0 --activate

WORKDIR /workspace

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY packages/types/package.json packages/types/package.json
COPY apps/server/package.json apps/server/package.json

RUN pnpm install --frozen-lockfile

COPY packages/types ./packages/types
COPY apps/server ./apps/server

RUN pnpm --filter @nest-admin/types build
RUN pnpm --filter @nest-admin/server prisma:generate
RUN pnpm --filter @nest-admin/server build

FROM node:20-alpine AS production

RUN apk add --no-cache openssl ffmpeg
RUN corepack enable && corepack prepare pnpm@10.5.0 --activate

RUN addgroup --system --gid 1001 nestadmin \
  && adduser --system --uid 1001 --ingroup nestadmin nestadmin

WORKDIR /app

COPY --from=builder /workspace/package.json ./package.json
COPY --from=builder /workspace/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /workspace/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=builder /workspace/turbo.json ./turbo.json
COPY --from=builder /workspace/node_modules ./node_modules
COPY --from=builder /workspace/packages/types ./packages/types
COPY --from=builder /workspace/apps/server ./apps/server

RUN mkdir -p /data/uploads \
  && chown -R nestadmin:nestadmin /app /data/uploads

WORKDIR /app/apps/server

ENV NODE_ENV=production
ENV APP_PORT=8080
ENV LOG_TO_FILE=false
ENV FILE_UPLOAD_LOCATION=/data/uploads

USER nestadmin

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD node -e "const http = require('http'); http.get('http://127.0.0.1:8080/api/v1/health/ready', (res) => process.exit(res.statusCode === 200 ? 0 : 1)).on('error', () => process.exit(1));"

ENTRYPOINT ["sh", "./docker-entrypoint.sh"]
