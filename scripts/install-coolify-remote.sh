#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -lt 1 ]; then
  echo "Usage: $0 <host> [user] [port]"
  echo "Example: ROOT_USERNAME=admin ROOT_USER_EMAIL=admin@example.com ROOT_USER_PASSWORD='StrongPass123!' $0 203.0.113.10 root 22"
  exit 1
fi

HOST="$1"
USER_NAME="${2:-root}"
PORT="${3:-22}"

SSH_OPTS=(
  -p "$PORT"
  -o StrictHostKeyChecking=accept-new
  -o ConnectTimeout=10
)

if [ -n "${SSH_KEY_PATH:-}" ]; then
  SSH_OPTS+=(-i "$SSH_KEY_PATH")
fi

REMOTE_PREFIX=""
if [ "${USER_NAME}" != "root" ]; then
  REMOTE_PREFIX="sudo -E "
fi

read -r -d '' REMOTE_SCRIPT <<'EOF' || true
set -euo pipefail

if [ -f /etc/os-release ]; then
  echo "==> Remote OS"
  cat /etc/os-release
fi

if ! command -v curl >/dev/null 2>&1; then
  echo "curl is required on the remote host." >&2
  exit 1
fi

echo "==> Installing Coolify"

if [ -n "${ROOT_USERNAME:-}" ] && [ -n "${ROOT_USER_EMAIL:-}" ] && [ -n "${ROOT_USER_PASSWORD:-}" ]; then
  env \
    ROOT_USERNAME="${ROOT_USERNAME}" \
    ROOT_USER_EMAIL="${ROOT_USER_EMAIL}" \
    ROOT_USER_PASSWORD="${ROOT_USER_PASSWORD}" \
    AUTOUPDATE="${AUTOUPDATE:-true}" \
    DOCKER_ADDRESS_POOL_BASE="${DOCKER_ADDRESS_POOL_BASE:-}" \
    DOCKER_ADDRESS_POOL_SIZE="${DOCKER_ADDRESS_POOL_SIZE:-}" \
    REGISTRY_URL="${REGISTRY_URL:-}" \
    bash -c 'curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash'
else
  curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
fi

echo "==> Coolify install finished"
echo "==> Default access URL: http://$(hostname -I | awk '{print $1}'):8000"
echo "==> Ensure ports 22, 80, 443, 8000 are open in your firewall/security group"
EOF

ssh "${SSH_OPTS[@]}" "${USER_NAME}@${HOST}" "${REMOTE_PREFIX}bash -lc $(printf '%q' "$REMOTE_SCRIPT")"
