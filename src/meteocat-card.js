import "./meteocat-card-editor.js";

class MeteocatCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static getConfigElement() {
    return document.createElement("meteocat-card-editor");
  }

  static getStubConfig() {
    return {
      entity: "weather.home",
      feels_like_entity: "sensor.home_feels_like",
    };
  }

  setConfig(config) {
    if (!config?.entity) {
      throw new Error("Meteocat Card requires an entity.");
    }
    this.config = config;
    this.iconPath = config.icons || "/local/meteocat-card/icons/";
    this.useStaticIcons = !!config.option_static_icons;
  }

  set hass(hass) {
    this._hass = hass;
    this._update();
  }

  _update() {
    if (!this._hass || !this.config) return;

    const entity = this._hass.states[this.config.entity];
    const feelsLike = this._hass.states[this.config.feels_like_entity];
    if (!entity) return;

    const condition =
      (entity.attributes && entity.attributes.condition) ||
      entity.state ||
      "unknown";

    const now = new Date();
    const hour = now.getHours();
    const isDay = condition !== "clear-night" && hour >= 6 && hour < 18;

    const dailyForecast = entity.attributes?.forecast_daily || [];
    const hourlyForecast = entity.attributes?.forecast || [];

    const iconFile = this._getIconFile(condition, isDay);

    this.shadowRoot.innerHTML = `
      <ha-card header="Meteocat - ${entity.attributes.friendly_name || this.config.entity}">
        <style>
          .current { display: flex; align-items: center; gap: 12px; }
          .current-left img { width: 60px; height: 60px; margin-right: 12px; }
          .current-data div { line-height: 1.2; }
          .forecast-hourly { display: flex; overflow-x: auto; margin-top: 12px; padding-bottom: 4px; }
          .hour { flex: 0 0 auto; text-align: center; margin-right: 12px; }
          .hour img, .day img { width: 36px; height: 36px; }
          .forecast-daily { margin-top: 12px; display: grid; grid-template-columns: repeat(auto-fit, minmax(80px, 1fr)); gap: 8px; }
          .day { text-align: center; }
          .bar-temp { height: 6px; background: var(--accent-color); margin-top: 4px; border-radius: 3px; }
          .bar-precip { height: 4px; background: var(--primary-color); margin-top: 4px; border-radius: 2px; }
        </style>

        <div class="current">
          <div class="current-left">
            <img src="${iconFile}" alt="${condition}">
            <div class="current-data">
              <div><strong>Condition:</strong> ${condition}</div>
              <div><strong>Temp:</strong> ${entity.attributes.temperature ?? "-"}°C</div>
              <div><strong>Feels like:</strong> ${feelsLike?.state ?? "-"}°C</div>
              <div><strong>Humidity:</strong> ${entity.attributes.humidity ?? "-"}%</div>
              <div><strong>Wind:</strong> ${entity.attributes.wind_speed ?? "-"} km/h</div>
              <div><strong>Precip:</strong> ${entity.attributes.precipitation ?? "-"} mm</div>
            </div>
          </div>
        </div>

        <div class="forecast-hourly">
          ${hourlyForecast.map(forecast => {
            const dt = new Date(forecast.datetime);
            const isDayHour = forecast.condition !== "clear-night" && dt.getHours() >= 6 && dt.getHours() < 18;
            const icon = this._getIconFile(forecast.condition, isDayHour);
            const tempPercent = Math.min(Math.max((forecast.temperature ?? 0) + 10, 0), 40) * 2.5;
            const precipPercent = Math.min(Math.max(forecast.precipitation ?? 0, 0), 10) * 10;

            return `
              <div class="hour">
                <div>${String(dt.getHours()).padStart(2, "0")}:00</div>
                <img src="${icon}" alt="${forecast.condition}">
                <div>${forecast.temperature ?? "-"}°</div>
                <div class="bar-temp" style="width:${tempPercent}%"></div>
                <div class="bar-precip" style="width:${precipPercent}%"></div>
              </div>
            `;
          }).join("")}
        </div>

        <div class="forecast-daily">
          ${dailyForecast.map(forecast => {
            const icon = this._getIconFile(forecast.condition, true);
            return `
              <div class="day">
                <div>${(forecast.date || "").split("T")[0]}</div>
                <img src="${icon}" alt="${forecast.condition}">
                <div>${forecast.temperature_max ?? "-"}° / ${forecast.temperature_min ?? "-"}°</div>
                <div>🌧 ${forecast.precipitation ?? "-"} mm</div>
              </div>
            `;
          }).join("")}
        </div>
      </ha-card>
    `;
  }

  _getIconFile(condition, isDay) {
    const raw = String(condition || "unknown").toLowerCase().replace(/[\s_-]/g, "");
    const prefix = this.useStaticIcons ? "s-" : "a-";

    const map = {
      sunny: "clear",
      clear: "clear",
      clearnight: "clear",
      partlycloudy: "cloudy-1",
      cloudy: "cloudy-3",
      rainy: "rain-2",
      pouring: "rain-3",
      lightningrainy: "scattered-thunderstorms",
      fog: "fog",
      hail: "hail",
      snowy: "snow-3",
      snowyrainy: "snow-1",
      unknown: "unknown",
    };

    let base = map[raw] || "unknown";
    if (base !== "unknown") base += isDay ? "-day" : "-night";
    return `${this.iconPath}${prefix}${base}.svg`;
  }

  getCardSize() {
    return 5;
  }
}

customElements.define("meteocat-card", MeteocatCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "meteocat-card",
  name: "Meteocat Card",
  description: "Muestra el tiempo actual y previsiones usando Meteocat",
});
