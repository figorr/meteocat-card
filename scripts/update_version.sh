#!/usr/bin/env bash
set -euo pipefail

# Recibe la nueva versión como primer argumento
version="$1"

# Comprueba que la variable de entorno ha_version esté definida
if [ -z "${ha_version:-}" ]; then
  echo "Error: la variable de entorno ha_version no está definida."
  exit 1
fi

# Actualizar package.json
jq --arg ver "$version" '.version = $ver' package.json > tmp.json && mv tmp.json package.json

# Actualizar package-lock.json
jq --arg ver "$version" '.version = $ver | .packages[""].version = $ver' package-lock.json > tmp.json && mv tmp.json package-lock.json

# Actualizar hacs.json con la versión de Home Assistant
jq --arg ver "$ha_version" '.homeassistant = $ver' hacs.json > tmp.json && mv tmp.json hacs.json

echo "Archivos actualizados a la versión $version y HA $ha_version"
