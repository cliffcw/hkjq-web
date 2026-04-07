#!/usr/bin/env bash
set -euo pipefail

APP_NAME="${APP_NAME:-hkjq-web}"
SERVER_HOST="${SERVER_HOST:-39.106.1.26}"
SERVER_USER="${SERVER_USER:-root}"
SERVER_PORT="${SERVER_PORT:-22}"
REMOTE_DIR="${REMOTE_DIR:-/var/www/hkjq-web}"
LOCAL_DIST_DIR="${LOCAL_DIST_DIR:-dist}"
SERVER_NAME="${SERVER_NAME:-${SERVER_HOST}}"

: "${ALY_PASSWORD:?请先在环境变量里设置 ALY_PASSWORD}"
export SSHPASS="${ALY_PASSWORD}"

npm run build

TMP_TGZ="/tmp/${APP_NAME}-dist.tgz"
REMOTE_TGZ="/tmp/${APP_NAME}-dist.tgz"

rm -f "${TMP_TGZ}"
tar -czf "${TMP_TGZ}" -C "${LOCAL_DIST_DIR}" .

sshpass -e scp -P "${SERVER_PORT}" -o StrictHostKeyChecking=no "${TMP_TGZ}" "${SERVER_USER}@${SERVER_HOST}:${REMOTE_TGZ}"

sshpass -e ssh -p "${SERVER_PORT}" -o StrictHostKeyChecking=no "${SERVER_USER}@${SERVER_HOST}" bash -s -- "${APP_NAME}" "${REMOTE_DIR}" "${SERVER_NAME}" "${SERVER_HOST}" <<'EOF'
set -euo pipefail

APP_NAME="$1"
REMOTE_DIR="$2"
SERVER_NAME="$3"
SERVER_HOST="$4"
REMOTE_TGZ="/tmp/${APP_NAME}-dist.tgz"

if ! command -v nginx >/dev/null 2>&1; then
  if command -v apt-get >/dev/null 2>&1; then
    apt-get update -y
    apt-get install -y nginx
  elif command -v yum >/dev/null 2>&1; then
    yum install -y nginx
  elif command -v dnf >/dev/null 2>&1; then
    dnf install -y nginx
  else
    echo "nginx 未安装，且无法识别系统包管理器"
    exit 1
  fi
fi

mkdir -p "${REMOTE_DIR}"
rm -rf "${REMOTE_DIR:?}"/*
tar -xzf "${REMOTE_TGZ}" -C "${REMOTE_DIR}"

if [ -d /etc/nginx/sites-available ] && [ -d /etc/nginx/sites-enabled ]; then
  CONF="/etc/nginx/sites-available/${APP_NAME}.conf"
  ENABLE="/etc/nginx/sites-enabled/${APP_NAME}.conf"
  cat > "${CONF}" <<CONFEOF
server {
  listen 80;
  server_name ${SERVER_NAME};

  root ${REMOTE_DIR};
  index index.html;

  location ^~ /docs/logol/ {
    expires 30d;
    add_header Cache-Control "public";
  }

  location / {
    try_files \$uri \$uri/ /index.html;
  }

  location /docs/ {
    return 404;
  }

  location /assets/ {
    expires 1y;
    add_header Cache-Control "public, immutable";
  }
}
CONFEOF
  ln -sf "${CONF}" "${ENABLE}"
else
  CONF="/etc/nginx/conf.d/${APP_NAME}.conf"
  cat > "${CONF}" <<CONFEOF
server {
  listen 80;
  server_name ${SERVER_NAME};

  root ${REMOTE_DIR};
  index index.html;

  location ^~ /docs/logol/ {
    expires 30d;
    add_header Cache-Control "public";
  }

  location / {
    try_files \$uri \$uri/ /index.html;
  }

  location /docs/ {
    return 404;
  }

  location /assets/ {
    expires 1y;
    add_header Cache-Control "public, immutable";
  }
}
CONFEOF
fi

nginx -t

if command -v systemctl >/dev/null 2>&1; then
  systemctl restart nginx
else
  service nginx restart
fi

echo "部署完成: http://${SERVER_HOST}/"
EOF
