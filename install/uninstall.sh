#!/usr/bin/env bash
set -euo pipefail

SKILL_NAME="openclaw-chatiops"
TARGET_DIR="${HOME}/.agents/skills/${SKILL_NAME}"

if [ ! -e "${TARGET_DIR}" ]; then
  echo "[info] nada para remover em ${TARGET_DIR}"
  exit 0
fi

rm -rf "${TARGET_DIR}"
echo "[ok] Skill removida de ${TARGET_DIR}"
