#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

if [[ -z "${DATABASE_URL:-}" ]]; then
  echo "DATABASE_URL is required. Render should inject it from the Postgres database add-on." >&2
  exit 1
fi

if [[ -z "${REDIS_URL:-}" ]]; then
  echo "REDIS_URL is required. Render should inject it from the Redis add-on." >&2
  exit 1
fi

if [[ -z "${JWT_SECRET:-}" ]]; then
  if command -v openssl >/dev/null 2>&1; then
    export JWT_SECRET="$(openssl rand -hex 32)"
  else
    export JWT_SECRET="$(python3 - <<'PY'
import secrets
print(secrets.token_hex(32))
PY
)"
  fi
fi

if [[ -z "${HOST:-}" ]]; then
  export HOST="0.0.0.0"
fi

if [[ -z "${PORT:-}" ]]; then
  export PORT="10000"
fi

echo "Starting DOFTA backend on port ${PORT}"
exec ./target/release/dofta-backend
