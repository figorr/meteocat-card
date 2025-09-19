#!/usr/bin/env bash
set -euo pipefail

version="$1"

# Actualizar package.json
jq --arg ver "$version" '.version = $ver' package.json > tmp.json && mv tmp.json package.json

# Actualizar package-lock.json
jq --arg ver "$version" '.version = $ver | .packages[""].version = $ver' package-lock.json > tmp.json && mv tmp.json package-lock.json

# Opcional: actualizar hacs.json si quieres reflejar última versión de HA
# ha_version="2025.9.0"
jq --arg ver "$ha_version" '.homeassistant = $ver' hacs.json > tmp.json && mv tmp.json hacs.json
