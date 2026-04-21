#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"
SKILL_NAME="openclaw-chatiops"
TARGET_ROOT="${HOME}/.agents/skills"
TARGET_DIR="${TARGET_ROOT}/${SKILL_NAME}"
BACKUP_SUFFIX="$(date +%Y%m%d-%H%M%S)"

mkdir -p "${TARGET_ROOT}"

if [ -e "${TARGET_DIR}" ]; then
  BACKUP_DIR="${TARGET_DIR}.backup-${BACKUP_SUFFIX}"
  echo "[info] skill já existe, criando backup em: ${BACKUP_DIR}"
  mv "${TARGET_DIR}" "${BACKUP_DIR}"
fi

mkdir -p "${TARGET_DIR}"
cp -R "${REPO_DIR}/skill/." "${TARGET_DIR}/"

chmod -R u+rwX "${TARGET_DIR}"

cat <<EOF
[ok] Skill instalada com sucesso.

Origem:
  ${REPO_DIR}/skill

Destino:
  ${TARGET_DIR}

Próximos passos:
1. Leia o README do repositório.
2. Copie os exemplos de examples/ para seu ambiente seguro.
3. Adapte os templates de skill/templates/ ao seu workspace do OpenClaw.
4. Reinicie a sessão do OpenClaw ou abra uma nova conversa para a skill entrar no ciclo normal de uso.
EOF
