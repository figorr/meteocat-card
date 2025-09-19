# 🌤️ Meteocat Card

Custom Lovelace card for Home Assistant to display weather data from the [Meteocat integration](https://github.com/figorr/meteocat).  
Supports animated or static icons with day/night variants, and shows hourly and daily forecasts.

## Installation

### HACS (recommended)
1. Go to **HACS → Frontend → Custom repositories**.
2. Add this repository: https://github.com/figorr/meteocat-card
3. Install **Meteocat Card** from HACS.

### Manual
1. Copy the compiled file `dist/meteocat-card.js` to your Home Assistant `www` folder, preferably in a subfolder for organization:
   
   ```text
   /config/www/meteocat-card/meteocat-card.js
   ```

2. Add the resource to your Lovelace configuration:

   ```yaml
   url: /local/meteocat-card/meteocat-card.js
   type: module
   ```

3. Place the icon SVGs that are located in /www/meteocat-card/icons into your Home Assistant setup at:

   ```text
   /config/www/meteocat-card/icons/
   ```

## Icon Setup

- a- prefix → animated icons (e.g., a-clear-day.svg)
- s- prefix → static icons (e.g., s-clear-day.svg)
- -day suffix → daytime icon
- -night suffix → nighttime icon
- clear-night ignores the day/night suffix

Example icons:
```css
a-clear-day.svg
a-clear-night.svg
s-rain-day.svg
s-rain-night.svg
```

## Usage

### Using a Meteocat Weather Entity (Recommended)

Use your Meteocat Weather entity to get full functionality including current conditions, hourly and daily forecasts:

   ```yaml
   type: custom:meteocat-card
   entity: weather.meteocat_station_id_weather_town_name
   option_static_icons: false  # set true for static icons
   icons: "/local/meteocat-card/icons/"
   ```

   - entity: Your Meteocat Weather entity (e.g., weather.meteocat_yourtown)
   - option_static_icons: true for static icons, false for animated icons
   - icons: Base path to your SVG icons

The card automatically selects the correct icon based on the current condition and time of day.

#### Example Lovelace Card

   ```yaml
   type: custom:meteocat-card
   entity: weather.meteocat_station_id_weather_town_name
   option_static_icons: false
   icons: "/local/meteocat-card/icons/"
   ```

   **The card shows:**

   - Current weather condition and icon
   - Temperature, humidity, wind speed, and precipitation
   - Hourly forecast with temperature and precipitation bars
   - Daily forecast with min/max temperatures and precipitation

### Using Individual Meteocat Sensors

You can also use individual sensors with the card, for example:

```yaml
type: custom:meteocat-card
entity: sensor.meteocat_station_id_town_name_temperatura
```

Replace sensor.meteocat_temperature with any other sensor from your Meteocat integration (humidity, wind speed, precipitation, UV index, etc.).

Note: Using the Weather entity is recommended to get the full forecast display.

## Configuration Options

| Option               | Type    | Default           | Description                                                   |
|----------------------|--------|-----------------|---------------------------------------------------------------|
| `entity`             | string | —               | **Required.** Your Meteocat weather entity or sensor.        |
| `option_static_icons`| boolean| `false`         | Use static icons (`true`) or animated icons (`false`).        |
| `icons`              | string | `/local/icons/` | Path to the folder containing the SVG icons.                 |

## Notes

- Make sure your Meteocat integration provides a Weather entity (not just individual sensors) to get full card functionality.
- The card dynamically determines day or night icons if the entity’s condition is not clear-night.
- For best results, keep your /config/www/meteocat-card/icons/ folder updated with the latest icons from the repo.

## Examples

### Basic Usage

```yaml
type: custom:meteocat-card
entity: sensor.meteocat_station_id_town_name_temperatura
```

### Using Animated Icons

```yaml
type: custom:meteocat-card
entity: weather.meteocat_station_id_weather_town_name
option_static_icons: false
icons: "/local/meteocat-card/icons/"
```

### Using Static Icons

```yaml
type: custom:meteocat-card
entity: weather.meteocat_station_id_weather_town_name
option_static_icons: true
icons: "/local/meteocat-card/icons/"
```

### Example Display

#### Current Weather:

#### Hourly Forecast:

#### Daily Forecast:

## Features

- ✅ Display temperature, humidity, wind speed, and precipitation
- ✅ Shows a weather icon according to the condition and time of day
- ✅ Supports animated (a-) or static (s-) icons
- ✅ Displays hourly and daily forecasts when using a Weather entity
- 🚧 Lightweight and compatible with Home Assistant 2025+
- 🛠️ Early stage — more features will be added (styling, additional forecasts, etc.)

## Contributing to Meteocat Card

Thanks for your interest in contributing! 🚀

We welcome contributions in any form: bug reports, new features, or improvements to documentation.

### How to Contribute

1. **Check existing issues and discussions**  

   See if your idea or bug has already been reported:
   - [Issues](https://github.com/figorr/meteocat-card/issues)
   - [Discussions](https://github.com/figorr/meteocat-card/discussions)

2. **Fork the repository**  

   Click the "Fork" button at the top-right of this repository.

3. **Set up your development environment**

   ```bash
   git clone https://github.com/YOUR_USERNAME/meteocat-card.git
   cd meteocat-card
   npm install
   ```

4. **Start developing**

- The main code is in src/meteocat-card.js.
- You can use a local dev server (e.g., npm run watch) to see changes live in Home Assistant.

5. **Lint and test your code**

     ```bash
     npm run lint
     npm run test
     ```

     Make sure your code passes linting and tests before committing.

6. **Commit your changes**

     ```bash
     git add .
     git commit -m "feat: describe your change"
     git push origin your-branch
     ```

7. **Submit a Pull Request**

- Open a PR from your branch to the master branch of this repository.
- Describe your changes clearly and link any relevant issues.

## Code Style

- Use ES6+ syntax.
- Prefer const/let over var.
- Keep code modular and readable.
- Follow Prettier formatting (if configured).

## License

[Apache-2.0](LICENSE). By providing a contribution, you agree the contribution is licensed under Apache-2.0.
