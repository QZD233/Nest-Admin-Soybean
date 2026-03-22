#!/bin/sh
set -eu

pnpm exec prisma migrate deploy

exec node dist/src/main.js
