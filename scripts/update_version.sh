#!/usr/bin/env bash
set -euo pipefail

version="$1"

# Si la variable HA_VERSION no está definida, se asigna un valor por defecto
: "${HA_VERSION:=2025.9.3}"

echo "Actualizando archivos a la versión $version y HA $HA_VERSION"

# 1️⃣ Actualizar package.json
jq --arg ver "$version" '.version = $ver' package.json > tmp.json && mv tmp.json package.json

# 2️⃣ Actualizar package-lock.json
jq --arg ver "$version" '.version = $ver | .packages[""].version = $ver' package-lock.json > tmp.json && mv tmp.json package-lock.json

# 3️⃣ Actualizar hacs.json
jq --arg ver "$HA_VERSION" '.homeassistant = $ver' hacs.json > tmp.json && mv tmp.json hacs.json

echo "Archivos actualizados correctamente."
