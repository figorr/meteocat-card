## [2.0.1](https://github.com/figorr/meteocat-card/compare/v2.0.0...v2.0.1) (2025-09-29)


### Bug Fixes

* fix spammy logs and default icon path for HACS installation ([18c2125](https://github.com/figorr/meteocat-card/commit/18c2125318582d017977f64cfc962e5972072747))

# [2.0.0](https://github.com/figorr/meteocat-card/compare/v1.0.2...v2.0.0) (2025-09-27)


### ✨ FEAT

Add configurable icon paths and native Meteocat sunrise/sunset sensors ([b76ca47](https://github.com/figorr/meteocat-card/commit/b76ca47354d3b76c729ec0bdb58106c14e04ab51))


### ⚠️ BREAKING CHANGES

- This version of the card **requires Meteocat integration v3.1.0 or later**.
- Previous versions allowed using sunrise and sunset sensors from the Home Assistant 'Sun' integration. This is no longer supported. The card now exclusively uses Meteocat's own sunrise and sunset sensors.
- Recommended upgrade procedure:
  1. Go to Settings > Dashboards > Resources.
  2. Remove the existing 'Meteocat Card' resource.
  3. Refresh the page.
  4. Install the new version of 'Meteocat Card'.
- This ensures no incompatible configuration remnants remain between versions.

### 🛠 CHANGES

- Set default icon path to '/hacsfiles/meteocat-card/icons/' for HACS installations.
- Added 'icon_path_type' option in the editor to toggle between HACS and manual icon paths.
- Updated entity discovery to prioritize Meteocat's sunrise and sunset sensors over Sun integration.
- Improved robustness of entity discovery with fallback to default sensors if needed.

## [1.0.2](https://github.com/figorr/meteocat-card/compare/v1.0.1...v1.0.2) (2025-09-26)


### Bug Fixes

* delete filename at hacs.json ([5abff2a](https://github.com/figorr/meteocat-card/commit/5abff2a53c8d4712551c2fd70c0b8f9f6b79a722))
* fix hacs.json filename ([9f6ae0d](https://github.com/figorr/meteocat-card/commit/9f6ae0d0d819b34bbb1e683960db9985219aaec3))

## [1.0.1](https://github.com/figorr/meteocat-card/compare/v1.0.0...v1.0.1) (2025-09-25)


### Bug Fixes

* Country ES ([8d819cc](https://github.com/figorr/meteocat-card/commit/8d819cc497eb5acdeac16f1f38acd5aad3c55394))
* fix labels and description translations ([8a35a42](https://github.com/figorr/meteocat-card/commit/8a35a42fb7dd59f02bf32adddfb05a5b2f6310b8))
* fix labels translations ([331e53b](https://github.com/figorr/meteocat-card/commit/331e53b30ddd6e44b4df1f2df71cb701c1b8f6f5))
* HACS instructions ([9a99536](https://github.com/figorr/meteocat-card/commit/9a995367f454ab52e1a5a9e24a91d2cb8584022c))
* update README ([922c2ab](https://github.com/figorr/meteocat-card/commit/922c2ab580eb3c3d116f26a8e730d253941718da))

# 1.0.0 (2025-09-23)


### Features

* add pending changes for next release ([57f95ae](https://github.com/figorr/meteocat-card/commit/57f95ae11653ebc8f4764eb4116a63c489b046bf))
* initial release for semantic versioning ([845485b](https://github.com/figorr/meteocat-card/commit/845485b6f8527eb63b0ba9d99c6525c99c9b03da))
