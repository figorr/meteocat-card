# [3.6.0](https://github.com/figorr/meteocat-card/compare/v3.5.0...v3.6.0) (2026-11-21)


### Features

* refine upcoming alert badge layout ([9c69f24](https://github.com/figorr/meteocat-card/commit/9c69f24394d50f81a11b820a355960179eb8bf74))
* show alert start and upcoming status ([4cd516d](https://github.com/figorr/meteocat-card/commit/4cd516d646839551cd72c06c305834e34bf9e8f7))
* use regional alert windows in badges ([e75c315](https://github.com/figorr/meteocat-card/commit/e75c315262400e4742fefa4060d4dae7460d82d6))

# [3.5.0](https://github.com/figorr/meteocat-card/compare/v3.4.0...v3.5.0) (2026-11-20)


### Features

* show alert data source ([4006889](https://github.com/figorr/meteocat-card/commit/40068891a98dc3432f5addcf80635f0091e42b8c))

# [3.4.0](https://github.com/figorr/meteocat-card/compare/v3.3.0...v3.4.0) (2026-11-18)


### Bug Fixes

* align alert times and detail highlight behavior ([4f0990e](https://github.com/figorr/meteocat-card/commit/4f0990e9041453e9a390c97430f336929b3fca24))


### Features

* add interactive forecast chart legend ([67c1ceb](https://github.com/figorr/meteocat-card/commit/67c1ceb9e10c6ae55218733f691147e21448722e))
* add interactive SMP alert badges and details ([e5e6135](https://github.com/figorr/meteocat-card/commit/e5e613555b91db9774fc61d6d2bdf63ea6cb117e))
* improve forecast chart interactions ([078af02](https://github.com/figorr/meteocat-card/commit/078af022899b07468520761b53737c37c1d44905))
* open entity details from current metrics ([be0f72c](https://github.com/figorr/meteocat-card/commit/be0f72cb02bbd0c6659db22198d0398352b019fd))
* show forecast trend chart by default ([de44993](https://github.com/figorr/meteocat-card/commit/de44993e22a2b1046e23ada77a5f82616225db74))
* show no-alert state as a green badge ([ad798a7](https://github.com/figorr/meteocat-card/commit/ad798a7cf0c6acf4f3e9e02f71f427dd0cb06f2a))

# [3.3.0](https://github.com/figorr/meteocat-card/compare/v3.2.0...v3.3.0) (2026-11-16)


### Bug Fixes

* improve card picker preview ([015cd3c](https://github.com/figorr/meteocat-card/commit/015cd3c3e2a894180b9256f95ccb1712cd6b7371))
* improve responsive forecast layout ([7050056](https://github.com/figorr/meteocat-card/commit/705005655a2c8d52709793087325bdc5932c80ed))


### Features

* add forecast trend chart ([64b2065](https://github.com/figorr/meteocat-card/commit/64b20658b583cb4701867c6c8c41f0d81a48e0c9))

# [3.2.0](https://github.com/figorr/meteocat-card/compare/v3.1.0...v3.2.0) (2026-11-15)


### Features

* support Home Assistant Marketplace installation ([9251813](https://github.com/figorr/meteocat-card/commit/925181374b9f35d968abf00dfadafa5091559ae2))

# [3.1.0](https://github.com/figorr/meteocat-card/compare/v3.0.2...v3.1.0) (2026-08-05)


### Bug Fixes

* fix release workflow ([9751b7c](https://github.com/figorr/meteocat-card/commit/9751b7c2db5e35d49c49cd21fe69d4fd68b9d92a))
* include preview in card selector ([4c528ec](https://github.com/figorr/meteocat-card/commit/4c528ec19c7b46c9e124bc092d71c0cab52d0cd8))


### Features

* add evapotranspiration (ETo) sensors display ([34f5509](https://github.com/figorr/meteocat-card/commit/34f55090b38c9410c283972370602e576242f53b))

## [3.0.2](https://github.com/figorr/meteocat-card/compare/v3.0.1...v3.0.2) (2026-04-27)


### Bug Fixes

* new rain intensity meteors and wind thresholds ([7912c1c](https://github.com/figorr/meteocat-card/commit/7912c1c91385a9179268e93885831bf7caeed6f1))

## [3.0.1](https://github.com/figorr/meteocat-card/compare/v3.0.0...v3.0.1) (2026-01-04)


### Bug Fixes

* add translation for new snow thresholds ([cac9df8](https://github.com/figorr/meteocat-card/commit/cac9df81e497a3c07adb3dbe22186c1d14ab1d71))

# [3.0.0](https://github.com/figorr/meteocat-card/compare/v2.2.0...v3.0.0) (2025-11-07)

🌤️ Release Meteocat Card v3.0.0 — enhanced solar, lunar, and forecast display

This major update introduces new solar and lunar information directly into the card, along with several UI and customization improvements.
Meteocat v4.0.0 is required to use this new card version. Please, update Meteocat integration first to v4.0.0.

## ✨ Highlights:
- Added solar and lunar data visualization (sunrise, sunset, moonrise, moonset, illumination, etc.).
- Added display of global solar irradiance information.
- Added lightning data indicators (town / regional lightning counts).
- Improved the card editor with new options and better usability.
- Added configuration options to show or hide solar and lunar sections.
- Added option to switch the default forecast view between daily and hourly modes.

## 🛠 Changes:
Enhanced layout and configurability to provide a more complete and flexible weather overview experience.

## ⚠️ Note:
- This version is a major feature release (v3.0.0) due to the significant number of improvements.
- This card version requires Meteocat v4.0.0 to properly work.

# [2.2.0](https://github.com/figorr/meteocat-card/compare/v2.1.0...v2.2.0) (2025-11-07)


### Bug Fixes

* fix formatTimestamp look for future events ([92158af](https://github.com/figorr/meteocat-card/commit/92158afa07b133ef8cd8acb9bc3a9757b87e6da8))


### Features

* add lightning region sensor ([b4b49d6](https://github.com/figorr/meteocat-card/commit/b4b49d608bceecaccc3b7359b00121251fa8a834))
* new lightning town and moon sensors ([8d14552](https://github.com/figorr/meteocat-card/commit/8d14552f0deb089e16840d4b46d7afac3690fda0))
* option to enable/disable sun and moon sensors ([040c799](https://github.com/figorr/meteocat-card/commit/040c799e0fe99fdd929c287da750793dc9be36b1))

# [2.1.0](https://github.com/figorr/meteocat-card/compare/v2.0.2...v2.1.0) (2025-10-03)


### ✨ Features

* New station timestamp sensor under town name ([fac94e1](https://github.com/figorr/meteocat-card/commit/fac94e1775f2a1813020aa710450a8a231b413ec))

  This sensor displays the date and time when the data was last updated at the weather station,
  not when it was downloaded by the integration. It uses a custom format like "HH:MM, day DD month YYYY"
  and is positioned below the town name for better visibility.

### 🐛 Bug Fixes

* Fix forecast date change at midnight ([d72f6d9](https://github.com/figorr/meteocat-card/commit/d72f6d942b5a96ebacbb378cc51a3adac1fed6e2))

## [2.0.2](https://github.com/figorr/meteocat-card/compare/v2.0.1...v2.0.2) (2025-10-01)


### Bug Fixes

* 🐞 Fix forecast items list inside slider when the card is resized due to a lower display resolution. ([ea54ca5](https://github.com/figorr/meteocat-card/commit/ea54ca53affb29e68b9bf02cb5bd4ffdff8955c2))

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
