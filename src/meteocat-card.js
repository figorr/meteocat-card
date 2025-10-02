import "./meteocat-card-editor.js";

// Traducciones embebidas
const translations = {
  en: {
    title_default: "Meteocat",
    entity_not_found: "Entity not found: {entity}",
    feels_like: "Feels like {value}°C",
    max_temp: "Max {value}°C",
    min_temp: "Min {value}°C",
    humidity: "{value}%",
    wind: "{value}",
    gust: "Gust",
    precipitation: "{value} mm",
    precipitation_probability: "{value}%",
    pressure: "{value} hPa",
    uv_index: "{value}",
    sunrise: "{value}",
    sunset: "{value}",
    daily_forecast: "Daily Forecast",
    hourly_forecast: "Hourly Forecast",
    daily: "Daily",
    hourly: "Hourly",
    today: "Today",
    tomorrow: "Tomorrow",
    no_forecast_data: "No forecast data available. Check entity or logs.",
    no_hourly_forecast: "Hourly forecasts not supported by this entity.",
    alerts: "Alerts",
    no_alerts: "No alerts",
    active_alerts: "Active alerts = {count}",
    alerts_details: "Alerts details",
    wind_alert: "Wind",
    rain_intensity_alert: "Rain Intensity",
    rain_alert: "Rain",
    sea_alert: "Sea",
    cold_alert: "Cold",
    warm_alert: "Warm",
    warm_night_alert: "Warm Night",
    snow_alert: "Snow",
    inicio: "Start",
    fin: "End",
    fecha: "Date",
    periodo: "Period",
    comentario: "Comment",
    umbral: "Threshold",
    peligro: "Danger",
    nivel: "Level",
    attribution: "Powered by Meteocatpy",
    sun: "Sun",
    mon: "Mon",
    tue: "Tue",
    wed: "Wed",
    thu: "Thu",
    fri: "Fri",
    sat: "Sat",
    unknown: "Unknown",
    clear: "Clear",
    clear_night: "Clear Night",
    sunny: "Sunny",
    partlycloudy: "Partly Cloudy",
    cloudy: "Cloudy",
    rainy: "Rainy",
    pouring: "Pouring",
    lightning_rainy: "Thunderstorm",
    fog: "Fog",
    hail: "Hail",
    snowy: "Snowy",
    snowy_rainy: "Snowy Rainy",
    threshold: {
      alert_wind: {
        wind_gusts_25: "Wind gusts > 25 m/s",
        microburst: "Microburst",
        tornadoes: "Tornadoes or waterspouts",
        wind_40: "Max. wind speed > 40 m/s",
        wind_35: "Max. wind speed > 35 m/s",
        wind_30: "Max. wind speed > 30 m/s",
        wind_25: "Max. wind speed > 25 m/s",
        wind_20: "Max. wind speed > 20 m/s",
        unknown: "Unknown",
      },
      alert_rain_intensity: {
        hail_2_cm: "Hail with diameter > 2 cm",
        microburst: "Microburst",
        intensity_40_30: "Intensity > 40 mm / 30 minutes",
        intensity_20_30: "Intensity > 20 mm / 30 minutes",
        unknown: "Unknown",
      },
      alert_rain: {
        microburst: "Microburst",
        rain_200_24: "Amount > 200 mm /24 hours",
        rain_100_24: "Amount > 100 mm /24 hours",
        unknown: "Unknown",
      },
      alert_sea: {
        microburst: "Microburst",
        tornadoes: "Tornadoes or waterspouts",
        waves_4: "Waves > 4.00 meters (rough sea)",
        waves_2_50: "Waves > 2.50 meters (tidal)",
        unknown: "Unknown",
      },
      alert_cold: {
        cold_very_intense: "Very intense cold",
        cold_intense: "Intense cold",
        unknown: "Unknown",
      },
      alert_warm: {
        heat_very_intense: "Very intense hot",
        heat_intense: "Intense heat",
        unknown: "Unknown",
      },
      alert_warm_night: {
        heat_night_very_intense: "Very intense night heat",
        heat_night_intense: "Intense night heat",
        unknown: "Unknown",
      },
      alert_snow: {
        hail_2_cm: "Hail with diameter > 2 cm",
        thickness_50_at_1000: "thickness > 50 cm at altitudes above 1000 meters up to 1500 meters",
        thickness_30_at_800: "thickness > 30 cm at altitudes above 800 meters up to 1000 meters",
        thickness_20_at_600: "thickness > 20 cm at altitudes above 600 meters up to 800 meters",
        thickness_20_at_1000: "thickness > 20 cm at altitudes above 1000 meters up to 1500 meters",
        thickness_15_at_300: "thickness > 15 cm at altitudes above 300 meters up to 600 meters",
        thickness_10_at_800: "thickness > 10 cm at altitudes above 800 meters up to 1000 meters",
        thickness_5_at_300: "thickness > 5 cm at altitudes below 300 meters",
        thickness_5_at_600: "thickness > 5 cm at altitudes above 600 meters up to 800 meters",
        thickness_2_at_300: "thickness > 2 cm at altitudes above 300 meters up to 600 meters",
        thickness_0_at_300: "thickness ≥ 0 cm at altitudes below 300 meters",
        unknown: "Unknown",
      },
    },
    cardinal_directions: [
      "N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE",
      "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"
    ]
  },
  es: {
    title_default: "Meteocat",
    entity_not_found: "Entidad no encontrada: {entity}",
    feels_like: "Sensación {value}°C",
    max_temp: "Máx {value}°C",
    min_temp: "Mín {value}°C",
    humidity: "{value}%",
    wind: "{value}",
    gust: "Ráfaga",
    precipitation: "{value} mm",
    precipitation_probability: "{value}%",
    pressure: "{value} hPa",
    uv_index: "{value}",
    sunrise: "{value}",
    sunset: "{value}",
    daily_forecast: "Pronóstico diario",
    hourly_forecast: "Pronóstico horario",
    daily: "Diario",
    hourly: "Horario",
    today: "Hoy",
    tomorrow: "Mañana",
    no_forecast_data: "No hay datos de pronóstico disponibles. Verifica la entidad o los registros.",
    no_hourly_forecast: "Pronósticos horarios no soportados por esta entidad.",
    alerts: "Alertas",
    no_alerts: "Sin alertas",
    active_alerts: "Alertas activas = {count}",
    alerts_details: "Detalles de alertas",
    wind_alert: "Viento",
    rain_intensity_alert: "Intensidad de lluvia",
    rain_alert: "Lluvia",
    sea_alert: "Mar",
    cold_alert: "Frío",
    warm_alert: "Calor",
    warm_night_alert: "Noche cálida",
    snow_alert: "Nieve",
    inicio: "Inicio",
    fin: "Fin",
    fecha: "Fecha",
    periodo: "Período",
    comentario: "Comentario",
    umbral: "Umbral",
    peligro: "Peligro",
    nivel: "Nivel",
    attribution: "Powered by Meteocatpy",
    sun: "Dom",
    mon: "Lun",
    tue: "Mar",
    wed: "Mié",
    thu: "Jue",
    fri: "Vie",
    sat: "Sáb",
    unknown: "Desconocido",
    clear: "Despejado",
    clear_night: "Noche despejada",
    sunny: "Soleado",
    partlycloudy: "Parcialmente nublado",
    cloudy: "Nublado",
    rainy: "Lluvioso",
    pouring: "Lluvia intensa",
    lightning_rainy: "Tormenta",
    fog: "Niebla",
    hail: "Granizo",
    snowy: "Nevado",
    snowy_rainy: "Nieve y lluvia",
    threshold: {
      alert_wind: {
        wind_gusts_25: "Ráfagas de viento > 25 m/s",
        microburst: "Microburst",
        tornadoes: "Tornados o trombas marinas",
        wind_40: "Velocidad máxima del viento > 40 m/s",
        wind_35: "Velocidad máxima del viento > 35 m/s",
        wind_30: "Velocidad máxima del viento > 30 m/s",
        wind_25: "Velocidad máxima del viento > 25 m/s",
        wind_20: "Velocidad máxima del viento > 20 m/s",
        unknown: "Desconocido",
      },
      alert_rain_intensity: {
        hail_2_cm: "Granizo con diámetro > 2 cm",
        microburst: "Microburst",
        intensity_40_30: "Intensidad > 40 mm / 30 minutos",
        intensity_20_30: "Intensidad > 20 mm / 30 minutos",
        unknown: "Desconocido",
      },
      alert_rain: {
        microburst: "Microburst",
        rain_200_24: "Cantidad > 200 mm / 24 horas",
        rain_100_24: "Cantidad > 100 mm / 24 horas",
        unknown: "Desconocido",
      },
      alert_sea: {
        microburst: "Microburst",
        tornadoes: "Tornados o trombas marinas",
        waves_4: "Olas > 4,00 metros (mar gruesa)",
        waves_2_50: "Olas > 2,50 metros (marejada)",
        unknown: "Desconocido",
      },
      alert_cold: {
        cold_very_intense: "Frío muy intenso",
        cold_intense: "Frío intenso",
        unknown: "Desconocido",
      },
      alert_warm: {
        heat_very_intense: "Calor muy intenso",
        heat_intense: "Calor intenso",
        unknown: "Desconocido",
      },
      alert_warm_night: {
        heat_night_very_intense: "Calor nocturno muy intenso",
        heat_night_intense: "Calor nocturno intenso",
        unknown: "Desconocido",
      },
      alert_snow: {
        hail_2_cm: "Granizo con diámetro > 2 cm",
        thickness_50_at_1000: "Grosor > 50 cm a altitudes superiores a 1000 metros hasta 1500 metros",
        thickness_30_at_800: "Grosor > 30 cm a altitudes superiores a 800 metros hasta 1000 metros",
        thickness_20_at_600: "Grosor > 20 cm a altitudes superiores a 600 metros hasta 800 metros",
        thickness_20_at_1000: "Grosor > 20 cm a altitudes superiores a 1000 metros hasta 1500 metros",
        thickness_15_at_300: "Grosor > 15 cm a altitudes superiores a 300 metros hasta 600 metros",
        thickness_10_at_800: "Grosor > 10 cm a altitudes superiores a 800 metros hasta 1000 metros",
        thickness_5_at_300: "Grosor > 5 cm a altitudes inferiores a 300 metros",
        thickness_5_at_600: "Grosor > 5 cm a altitudes superiores a 600 metros hasta 800 metros",
        thickness_2_at_300: "Grosor > 2 cm a altitudes superiores a 300 metros hasta 600 metros",
        thickness_0_at_300: "Grosor ≥ 0 cm a altitudes inferiores a 300 metros",
        unknown: "Desconocido",
      },
    },
    cardinal_directions: [
      "N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE",
      "S", "SSO", "SO", "OSO", "O", "ONO", "NO", "NNO"
    ]
  },
  ca: {
    title_default: "Meteocat",
    entity_not_found: "Entitat no trobada: {entity}",
    feels_like: "Sensació {value}°C",
    max_temp: "Màx {value}°C",
    min_temp: "Mín {value}°C",
    humidity: "{value}%",
    wind: "{value}",
    gust: "Ràfega",
    precipitation: "{value} mm",
    precipitation_probability: "{value}%",
    pressure: "{value} hPa",
    uv_index: "{value}",
    sunrise: "{value}",
    sunset: "{value}",
    daily_forecast: "Previsió diària",
    hourly_forecast: "Previsió horària",
    daily: "Diari",
    hourly: "Horari",
    today: "Avui",
    tomorrow: "Demà",
    no_forecast_data: "No hi ha dades de previsió disponibles. Comprova l'entitat o els registres.",
    no_hourly_forecast: "Previsions horàries no suportades per aquesta entitat.",
    alerts: "Alertes",
    no_alerts: "Sense alertes",
    active_alerts: "Alertes actives = {count}",
    alerts_details: "Detalls de les alertes",
    wind_alert: "Vent",
    rain_intensity_alert: "Intensitat de pluja",
    rain_alert: "Pluja",
    sea_alert: "Mar",
    cold_alert: "Fred",
    warm_alert: "Calor",
    warm_night_alert: "Nit càlida",
    snow_alert: "Neu",
    inicio: "Inici",
    fin: "Fi",
    fecha: "Data",
    periodo: "Període",
    comentario: "Comentari",
    umbral: "Llindar",
    peligro: "Perill",
    nivel: "Nivell",
    attribution: "Powered by Meteocatpy",
    sun: "Dg",
    mon: "Dl",
    tue: "Dt",
    wed: "Dc",
    thu: "Dj",
    fri: "Dv",
    sat: "Ds",
    unknown: "Desconegut",
    clear: "Clar",
    clear_night: "Nit serena",
    sunny: "Assolellat",
    partlycloudy: "Parcialment ennuvolat",
    cloudy: "Ennuvolat",
    rainy: "Plujós",
    pouring: "Tempesta",
    lightning_rainy: "Tempesta amb llamps",
    fog: "Boira",
    hail: "Calamarsa",
    snowy: "Nevat",
    snowy_rainy: "Aiguaneu",
    threshold: {
      alert_wind: {
        wind_gusts_25: "Ràfegues de vent > 25 m/s",
        microburst: "Microburst",
        tornadoes: "Tornados o trombes marines",
        wind_40: "Velocitat màx. del vent > 40 m/s",
        wind_35: "Velocitat màx. del vent > 35 m/s",
        wind_30: "Velocitat màx. del vent > 30 m/s",
        wind_25: "Velocitat màx. del vent > 25 m/s",
        wind_20: "Velocitat màx. del vent > 20 m/s",
        unknown: "Desconegut",
      },
      alert_rain_intensity: {
        hail_2_cm: "Calamarsa amb diàmetre > 2 cm",
        microburst: "Microburst",
        intensity_40_30: "Intensitat > 40 mm / 30 minuts",
        intensity_20_30: "Intensitat > 20 mm / 30 minuts",
        unknown: "Desconegut",
      },
      alert_rain: {
        microburst: "Microburst",
        rain_200_24: "Quantitat > 200 mm / 24 hores",
        rain_100_24: "Quantitat > 100 mm / 24 hores",
        unknown: "Desconegut",
      },
      alert_sea: {
        microburst: "Microburst",
        tornadoes: "Tornados o trombes marines",
        waves_4: "Ones > 4,00 metres (mar aspra)",
        waves_2_50: "Ones > 2,50 metres (marejada)",
        unknown: "Desconegut",
      },
      alert_cold: {
        cold_very_intense: "Fred molt intens",
        cold_intense: "Fred intens",
        unknown: "Desconegut",
      },
      alert_warm: {
        heat_very_intense: "Calor molt intens",
        heat_intense: "Calor intens",
        unknown: "Desconegut",
      },
      alert_warm_night: {
        heat_night_very_intense: "Calor nocturn molt intens",
        heat_night_intense: "Calor nocturn intens",
        unknown: "Desconegut",
      },
      alert_snow: {
        hail_2_cm: "Calamarsa amb diàmetre > 2 cm",
        thickness_50_at_1000: "Gruix > 50 cm a altituds superiors a 1000 metres fins a 1500 metres",
        thickness_30_at_800: "Gruix > 30 cm a altituds superiors a 800 metres fins a 1000 metres",
        thickness_20_at_600: "Gruix > 20 cm a altituds superiors a 600 metres fins a 800 metres",
        thickness_20_at_1000: "Gruix > 20 cm a altituds superiors a 1000 metres fins a 1500 metres",
        thickness_15_at_300: "Gruix > 15 cm a altituds superiors a 300 metres fins a 600 metres",
        thickness_10_at_800: "Gruix > 10 cm a altituds superiors a 800 metres fins a 1000 metres",
        thickness_5_at_300: "Gruix > 5 cm a altituds inferiors a 300 metres",
        thickness_5_at_600: "Gruix > 5 cm a altituds superiors a 600 metres fins a 800 metres",
        thickness_2_at_300: "Gruix > 2 cm a altituds superiors a 300 metres fins a 600 metres",
        thickness_0_at_300: "Gruix ≥ 0 cm a altituds inferiors a 300 metres",
        unknown: "Desconegut",
      },
    },
    cardinal_directions: [
      "N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE",
      "S", "SSO", "SO", "OSO", "O", "ONO", "NO", "NNO"
    ]
  },
};

// Helper para obtener traducciones
function getTranslation(hass, key, params = {}, fallback = key) {
  const lang = hass?.language || 'en';
  let text = translations[lang]?.[key] || translations.en[key] || fallback;
  Object.entries(params).forEach(([param, value]) => {
    text = text.replace(`{${param}}`, value);
  });
  return text;
}

// Helper para obtener traducciones de umbral según el tipo de alerta
function getThresholdTranslation(hass, alertKey, thresholdValue, fallback = thresholdValue) {
  const lang = hass?.language || 'en';
  const thresholdTranslations = translations[lang]?.threshold?.[alertKey] || translations.en.threshold[alertKey] || {};
  return thresholdTranslations[thresholdValue] || fallback;
}

// Helper para obtener el array de direcciones cardinales traducidas
function getCardinalDirections(hass) {
  const lang = hass?.language || 'en';
  return translations[lang]?.cardinal_directions || translations.en.cardinal_directions;
}

class MeteocatCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._content = document.createElement("div");
    this.shadowRoot.appendChild(this._content);
    this.iconPath = "/hacsfiles/meteocat-card/";
    this.useStaticIcons = false;
    this._currentForecast = "daily";
    this._dailyForecasts = [];
    this._hourlyForecasts = [];
    this._dailyForecastsCache = { data: [], timestamp: 0 };
    this._hourlyForecastsCache = { data: [], timestamp: 0 };
    this._cacheTTL = 15 * 60 * 1000; // 15 minutos
    this._entitiesDiscovered = false;
    this._currentSlide = 0;
    this._sliderValue = 0;
    this._isDragging = false;
    this._legacySliderTouchCapture = null;
    this._updateTimeout = null;
    this._updateDebounceDelay = 200; // 0.2 segundos
    this._debug = false; // Modo de depuración desactivado por defecto
    this.visibleItems = 4;
    this.resizeObserver = null;
    this._fadeDuration = 0.3; // Duración por defecto del fade en segundos
  }

  _log(...args) {
    if (this._debug) {
      console.log("MeteocatCard:", ...args);
    }
  }

  static getConfigElement() {
    return document.createElement("meteocat-card-editor");
  }

  static getStubConfig(hass) {
    if (hass) {
      const weatherEntities = Object.values(hass.states)
        .filter(s => s.entity_id.startsWith("weather."))
        .map(s => ({ entity_id: s.entity_id, friendly_name: s.attributes?.friendly_name }));
      console.log("MeteocatCard: Available weather entities =", weatherEntities);
    }
    return {
      entity: "weather.home",
      option_static_icons: false,
      icon_path_type: "hacs",
      iconPath: "/hacsfiles/meteocat-card/",
      debug: false,
      fade_duration: 0.3, // Duración por defecto del fade
    };
  }

  setConfig(config) {
    if (!config?.entity) throw new Error(getTranslation(this._hass, 'entity_not_found', { entity: config?.entity || 'unknown' }));
    this._config = {
      type: "meteocat-card",
      option_static_icons: false,
      iconPath: "/hacsfiles/meteocat-card/",
      debug: false,
      fade_duration: 0.3, // Duración por defecto del fade
      ...config,
      title: undefined,
      sunrise_entity: undefined,
      sunset_entity: undefined,
    };
    delete this._config.title;
    delete this._config.icons;
    delete this._config.sunrise_entity;
    delete this._config.sunset_entity;
    this.iconPath = this._config.iconPath || "/hacsfiles/meteocat-card/";
    this._fadeDuration = parseFloat(this._config.fade_duration) || 0.3; // Configuración de duración del fade
    this._debug = !!this._config.debug;
    this._log("iconPath set to", this.iconPath, "fadeDuration set to", this._fadeDuration);
    this._entitiesDiscovered = false;
    this.useStaticIcons = !!this._config.option_static_icons;
    this._discoverEntities();
    this._update();
  }

  set hass(hass) {
    this._hass = hass;
    this._discoverEntities();
    this._update();
  }

  async _discoverEntities() {
    if (this._entitiesDiscovered) return;
    if (!this._hass || !this._config?.entity) return;

    try {
      const registry = await this._hass.callWS({ type: "config/entity_registry/list" });
      const entry = registry.find(e => e.entity_id === this._config.entity);
      const deviceId = entry?.device_id;

      if (!deviceId) {
        this._log("No device_id found for", this._config.entity, "- using default sunrise/sunset entities.");
        this._config.sunrise_entity = "sensor.sun_next_rising";
        this._config.sunset_entity = "sensor.sun_next_setting";
        this._entitiesDiscovered = true;
        return;
      }

      const findByKey = (key) => {
        const ent = registry.find(e => e.device_id === deviceId && e.translation_key === key);
        return ent ? ent.entity_id : null;
      };

      this._config.feels_like_entity = findByKey("feels_like") || this._config.feels_like_entity;
      this._config.forecast_max_entity = findByKey("max_temperature_forecast") || this._config.forecast_max_entity;
      this._config.forecast_min_entity = findByKey("min_temperature_forecast") || this._config.forecast_min_entity;
      this._config.precipitation_entity = findByKey("precipitation_accumulated") || this._config.precipitation_entity;
      this._config.precipitation_probability_entity = findByKey("precipitation_probability") || this._config.precipitation_probability_entity;
      this._config.town_name_entity = findByKey("town_name") || this._config.town_name_entity;
      this._config.alerts_entity = findByKey("alerts") || this._config.alerts_entity;
      this._config.sunrise_entity = findByKey("sunrise") || "sensor.sun_next_rising";
      this._config.sunset_entity = findByKey("sunset") || "sensor.sun_next_setting";
      this._config.station_timestamp_entity = findByKey("station_timestamp") || this._config.station_timestamp_entity;

      const alertKeys = [
        "alert_wind",
        "alert_rain_intensity",
        "alert_rain",
        "alert_sea",
        "alert_cold",
        "alert_warm",
        "alert_warm_night",
        "alert_snow"
      ];

      for (const key of alertKeys) {
        this._config[`${key}_entity`] = findByKey(key) || this._config[`${key}_entity`];
      }

      this._entitiesDiscovered = true;
      this._log("autodiscovered entities:", {
        feels_like: this._config.feels_like_entity,
        forecast_max: this._config.forecast_max_entity,
        forecast_min: this._config.forecast_min_entity,
        precipitation: this._config.precipitation_entity,
        precipitation_probability: this._config.precipitation_probability_entity,
        town_name: this._config.town_name_entity,
        alerts: this._config.alerts_entity,
        sunrise: this._config.sunrise_entity,
        sunset: this._config.sunset_entity,
        station_timestamp: this._config.station_timestamp_entity,
        ...alertKeys.reduce((acc, key) => ({ ...acc, [key]: this._config[`${key}_entity`] }), {})
      });

      this._update();
    } catch (err) {
      console.error("MeteocatCard: Error discovering entities by translation_key:", err);
      this._config.sunrise_entity = "sensor.sun_next_rising";
      this._config.sunset_entity = "sensor.sun_next_setting";
      this._entitiesDiscovered = true;
      this._update();
    }
  }

  _convertDegreesToCardinal(degree) {
    if (!isFinite(degree) || degree === null || degree === undefined) {
      return getTranslation(this._hass, 'unknown', {}, "Unknown");
    }

    const directions = getCardinalDirections(this._hass);
    const index = Math.round(degree / 22.5) % 16;
    return directions[index];
  }

  _formatTimestamp(timestamp) {
    if (!timestamp || !isFinite(new Date(timestamp).getTime())) {
      this._log("Invalid timestamp", timestamp);
      return "-";
    }

    const date = new Date(timestamp);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const getLocalDateString = (d) => {
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    const dateStr = getLocalDateString(date);
    const todayStr = getLocalDateString(today);
    const tomorrowStr = getLocalDateString(tomorrow);

    const timeStr = date.toLocaleTimeString(this._hass?.language || "es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: this._hass?.time_zone || "Europe/Madrid",
    });

    const days = [
      getTranslation(this._hass, 'sun'),
      getTranslation(this._hass, 'mon'),
      getTranslation(this._hass, 'tue'),
      getTranslation(this._hass, 'wed'),
      getTranslation(this._hass, 'thu'),
      getTranslation(this._hass, 'fri'),
      getTranslation(this._hass, 'sat'),
    ];
    const dayAbbr = days[date.getDay()];

    this._log("_formatTimestamp", {
      timestamp,
      dateStr,
      todayStr,
      tomorrowStr,
      timeZone: this._hass?.time_zone || "Europe/Madrid"
    });

    if (dateStr === todayStr) {
      return timeStr;
    } else if (dateStr === tomorrowStr) {
      return `${dayAbbr} ${timeStr}`;
    } else {
      const dateFormatted = date.toLocaleDateString(this._hass?.language || "es-ES", {
        day: "2-digit",
        month: "2-digit",
        timeZone: this._hass?.time_zone || "Europe/Madrid",
      });
      return `${dayAbbr} ${dateFormatted} ${timeStr}`;
    }
  }

  _formatStationTimestamp(timestamp) {
    if (!timestamp || !isFinite(new Date(timestamp).getTime())) {
      this._log("Invalid station timestamp", timestamp);
      return "-";
    }

    const date = new Date(timestamp);
    const lang = this._hass?.language || 'es-ES';

    const hour = date.toLocaleTimeString(lang, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: this._hass?.time_zone || "Europe/Madrid",
    });

    const days = [
      getTranslation(this._hass, 'sun').toLowerCase(),
      getTranslation(this._hass, 'mon').toLowerCase(),
      getTranslation(this._hass, 'tue').toLowerCase(),
      getTranslation(this._hass, 'wed').toLowerCase(),
      getTranslation(this._hass, 'thu').toLowerCase(),
      getTranslation(this._hass, 'fri').toLowerCase(),
      getTranslation(this._hass, 'sat').toLowerCase(),
    ];
    const dayAbbr = days[date.getDay()];

    const dayNum = date.getDate();
    const monthAbbr = date.toLocaleDateString(lang, {
      month: 'short',
      timeZone: this._hass?.time_zone || "Europe/Madrid",
    }).toLowerCase().replace('.', '');
    const year = date.getFullYear();

    return `${hour}, ${dayAbbr} ${dayNum} ${monthAbbr} ${year}`;
  }

  _formatForecastDate(timestamp) {
    if (!timestamp || !isFinite(new Date(timestamp).getTime())) {
      return "-";
    }
    const date = new Date(timestamp);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const getLocalDateString = (d) => {
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    const dateStr = getLocalDateString(date);
    const todayStr = getLocalDateString(today);
    const tomorrowStr = getLocalDateString(tomorrow);

    const days = [
      getTranslation(this._hass, 'sun'),
      getTranslation(this._hass, 'mon'),
      getTranslation(this._hass, 'tue'),
      getTranslation(this._hass, 'wed'),
      getTranslation(this._hass, 'thu'),
      getTranslation(this._hass, 'fri'),
      getTranslation(this._hass, 'sat')
    ];
    const dayAbbr = days[date.getDay()];

    if (dateStr === todayStr) {
      return getTranslation(this._hass, 'today');
    } else if (dateStr === tomorrowStr) {
      return getTranslation(this._hass, 'tomorrow');
    }
    return dayAbbr;
  }

  _formatForecastHour(timestamp) {
    if (!timestamp || !isFinite(new Date(timestamp).getTime())) {
      return "-";
    }
    return new Date(timestamp).toLocaleTimeString(this._hass?.language || "es-ES", { hour: "2-digit", minute: "2-digit" });
  }

  _toggleForecast(type) {
    if (this._currentForecast === type) return;
    const section = this.shadowRoot.querySelector('.forecast-section');
    const fadeDurationMs = this._fadeDuration * 1000;

    // Si hay una sección existente, aplicar fade-out
    if (section) {
      section.style.transition = `opacity ${this._fadeDuration}s ease-in-out`;
      section.style.opacity = '0';

      // Esperar a que termine el fade-out antes de actualizar
      setTimeout(() => {
        this._currentForecast = type;
        this._currentSlide = 0;
        this._sliderValue = 0;
        this._update();
        // Seleccionar la nueva sección después de la actualización
        const newSection = this.shadowRoot.querySelector('.forecast-section');
        if (newSection) {
          newSection.style.transition = `opacity ${this._fadeDuration}s ease-in-out`;
          newSection.style.opacity = '0';
          // Usar requestAnimationFrame para asegurar que el cambio de opacidad se aplique después del renderizado
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              newSection.style.opacity = '1';
            });
          });
        }
      }, fadeDurationMs);
    } else {
      // Si no hay sección existente, actualizar directamente y aplicar fade-in
      this._currentForecast = type;
      this._currentSlide = 0;
      this._sliderValue = 0;
      this._update();
      const newSection = this.shadowRoot.querySelector('.forecast-section');
      if (newSection) {
        newSection.style.transition = `opacity ${this._fadeDuration}s ease-in-out`;
        newSection.style.opacity = '0';
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            newSection.style.opacity = '1';
          });
        });
      }
    }
  }

  _getForecastPropFromWeather(forecast, date, propKey) {
    if (!forecast || !Array.isArray(forecast)) return undefined;
    const day = date.toDateString();
    const forecastForThisDay = forecast.filter(o => new Date(o.datetime).toDateString() === day);
    if (forecastForThisDay.length === 1) {
      return forecastForThisDay[0][propKey] !== undefined ? String(forecastForThisDay[0][propKey]) : undefined;
    } else if (forecastForThisDay.length === 2) {
      const dayForecast = forecastForThisDay.find(o => o.daytime === true);
      const nightForecast = forecastForThisDay.find(o => o.daytime === false);
      if (propKey === 'templow') {
        return nightForecast?.temperature !== undefined ? String(nightForecast.temperature) : undefined;
      }
      return dayForecast?.[propKey] !== undefined ? String(dayForecast[propKey]) : undefined;
    }
    return undefined;
  }

  async _fetchForecasts(type) {
    if (!this._hass || !this._config?.entity) return [];
    const cache = type === "daily" ? this._dailyForecastsCache : this._hourlyForecastsCache;
    const now = Date.now();

    // Usar caché si todavía está vigente
    if (cache.data.length > 0 && (now - cache.timestamp) < this._cacheTTL) {
      this._log(`Using cached ${type} forecasts, count = ${cache.data.length}`);
      this._log(`${type} forecasts array =\n${JSON.stringify(cache.data, null, 2)}`);
      return cache.data;
    }

    try {
      const response = await this._hass.callWS({
        type: "call_service",
        domain: "weather",
        service: "get_forecasts",
        service_data: {
          entity_id: this._config.entity,
          type: type
        },
        return_response: true
      });

      const forecasts = response?.response?.[this._config.entity]?.forecast || [];
      const processedForecasts = forecasts.map(forecast => ({
        ...forecast,
        datetime: new Date(forecast.datetime),
        condition: forecast.condition ? forecast.condition.replace(/-/g, "_") : forecast.condition
      }));

      cache.data = processedForecasts;
      cache.timestamp = now;

      // 🔎 LOG RESUMEN Y ARRAY COMPLETO
      this._log(`Fetched new ${type} forecasts, count = ${processedForecasts.length}`);
      this._log(`${type} forecasts array =\n${JSON.stringify(processedForecasts, null, 2)}`);

      return processedForecasts;

    } catch (error) {
      console.error(`MeteocatCard: Error fetching ${type} forecasts:`, error);
      const entity = this._hass.states[this._config.entity];

      if (entity?.attributes?.forecast) {
        cache.data = entity.attributes.forecast
          .filter(f => new Date(f.datetime).toISOString().split('T')[0] === new Date().toISOString().split('T')[0] || type === "daily")
          .map(forecast => ({
            ...forecast,
            datetime: new Date(forecast.datetime),
            condition: forecast.condition ? forecast.condition.replace(/-/g, "_") : forecast.condition
          }));

        cache.timestamp = now;

        // 🔎 LOG FALLBACK
        this._log(`Falling back to entity attributes for ${type} forecasts, count = ${cache.data.length}`);
        this._log(`${type} forecasts array (fallback) =\n${JSON.stringify(cache.data, null, 2)}`);

        return cache.data;
      }
      return [];
    }
  }

  _isDaytime(timestamp) {
    if (!this._hass || !this._config.sunrise_entity || !this._config.sunset_entity) {
      this._log("Sunrise or sunset data unavailable, falling back to default day/night logic");
      const hour = new Date(timestamp).getHours();
      return hour >= 6 && hour < 18;
    }

    const sunrise = this._hass.states[this._config.sunrise_entity]?.state;
    const sunset = this._hass.states[this._config.sunset_entity]?.state;

    if (!sunrise || !sunset) {
      this._log("Sunrise or sunset data unavailable, falling back to default day/night logic");
      const hour = new Date(timestamp).getHours();
      return hour >= 6 && hour < 18;
    }

    const now = new Date(timestamp);
    const sunriseTime = new Date(sunrise);
    const sunsetTime = new Date(sunset);

    sunriseTime.setFullYear(now.getFullYear(), now.getMonth(), now.getDate());
    sunsetTime.setFullYear(now.getFullYear(), now.getMonth(), now.getDate());

    return now >= sunriseTime && now < sunsetTime;
  }

  async _update() {
    if (this._updateTimeout) {
      clearTimeout(this._updateTimeout);
    }
    this._updateTimeout = setTimeout(async () => {
      if (!this._hass || !this._config) return;

      const entity = this._hass.states[this._config.entity];
      const feelsLike = this._config.feels_like_entity ? this._hass.states[this._config.feels_like_entity] : null;
      const forecastMax = this._config.forecast_max_entity ? this._hass.states[this._config.forecast_max_entity] : null;
      const forecastMin = this._config.forecast_min_entity ? this._hass.states[this._config.forecast_min_entity] : null;
      const precipitation = this._config.precipitation_entity ? this._hass.states[this._config.precipitation_entity] : null;
      const precipitationProbability = this._config.precipitation_probability_entity ? this._hass.states[this._config.precipitation_probability_entity] : null;
      const sunrise = this._hass.states[this._config.sunrise_entity];
      const sunset = this._hass.states[this._config.sunset_entity];
      const alertsEntity = this._config.alerts_entity ? this._hass.states[this._config.alerts_entity] : null;
      const townName = this._config.town_name_entity ? this._hass.states[this._config.town_name_entity]?.state ?? "-" : "-";
      const stationTimestamp = this._config.station_timestamp_entity ? this._hass.states[this._config.station_timestamp_entity] : null;

      if (!entity) {
        this._content.innerHTML = `<ha-card>
          <div style="padding:16px">${getTranslation(this._hass, 'entity_not_found', { entity: this._config.entity })}</div>
        </ha-card>`;
        return;
      }

      const rawCondition = (entity.attributes?.condition || entity.state || "unknown").replace(/-/g, "_");
      const condition = getTranslation(this._hass, rawCondition.toLowerCase(), {}, rawCondition);
      const now = new Date();
      const isDay = rawCondition !== "clear_night" && this._isDaytime(now);

      const iconFile = this._getIconFile(rawCondition, isDay);
      const friendlyName = entity.attributes?.friendly_name || this._config.entity;
      this._log("friendly_name =", friendlyName);

      const windBearing = entity.attributes?.wind_bearing;
      const cardinalDirection = this._convertDegreesToCardinal(windBearing);
      const windSpeed = entity.attributes?.wind_speed ?? "-";
      const windGustSpeed = entity.attributes?.wind_gust_speed ?? "-";
      const windSpeedUnit = entity.attributes?.wind_speed_unit ?? "km/h";
      const windDisplay = windSpeed !== "-" && windGustSpeed !== "-"
        ? getTranslation(this._hass, 'wind', { value: `${cardinalDirection} ${windSpeed} ${windSpeedUnit} (${getTranslation(this._hass, 'gust')} ${windGustSpeed} ${windSpeedUnit})` })
        : windSpeed !== "-"
          ? getTranslation(this._hass, 'wind', { value: `${cardinalDirection} ${windSpeed} ${windSpeedUnit}` })
          : getTranslation(this._hass, 'wind', { value: `${cardinalDirection} -` });

      this._dailyForecasts = await this._fetchForecasts("daily");
      this._hourlyForecasts = await this._fetchForecasts("hourly");

      let forecastHtml = `
        <div class="forecast-toggle">
          <button class="toggle-btn ${this._currentForecast === 'daily' ? 'active' : ''}" id="daily-btn">${getTranslation(this._hass, 'daily')}</button>
          <button class="toggle-btn ${this._currentForecast === 'hourly' ? 'active' : ''}" id="hourly-btn">${getTranslation(this._hass, 'hourly')}</button>
        </div>
      `;

      if (this._currentForecast === 'daily' && this._dailyForecasts.length > 0) {
        forecastHtml += `
          <div class="forecast-section">
            <div class="forecast-title"><strong>${getTranslation(this._hass, 'daily_forecast')}</strong></div>
            <div class="forecast-slider">
              <div class="slider-container">
                <div class="slider-track">
                  ${this._dailyForecasts.map((forecast, i) => {
                    const forecastDate = new Date();
                    forecastDate.setDate(forecastDate.getDate() + i);
                    const condition = forecast.condition || this._getForecastPropFromWeather(this._dailyForecasts, forecastDate, 'condition') || 'unknown';
                    const isDay = forecast.daytime !== false;
                    const forecastIcon = this._getIconFile(condition, isDay);
                    const maxTemp = forecast.temperature || this._getForecastPropFromWeather(this._dailyForecasts, forecastDate, 'temperature') || '-';
                    const minTemp = forecast.templow || this._getForecastPropFromWeather(this._dailyForecasts, forecastDate, 'templow') || '-';
                    const pop = forecast.precipitation_probability || this._getForecastPropFromWeather(this._dailyForecasts, forecastDate, 'precipitation_probability') || '-';
                    const pos = forecast.precipitation || this._getForecastPropFromWeather(this._dailyForecasts, forecastDate, 'precipitation') || '0';
                    const forecastDay = this._formatForecastDate(forecast.datetime);
                    return `
                      <div class="forecast-item">
                        <div class="forecast-day">${forecastDay}</div>
                        <img src="${forecastIcon}" alt="${condition}" class="forecast-icon">
                        <div class="forecast-temp">${maxTemp}°C / ${minTemp}°C</div>
                        <div class="forecast-precip"><ha-icon icon="mdi:weather-rainy"></ha-icon>${pop}%</div>
                      </div>
                    `;
                  }).join("")}
                </div>
              </div>
              <div class="slider-bar">
                <div class="slider-bg"></div>
              </div>
            </div>
          </div>
        `;
      } else if (this._currentForecast === 'hourly' && this._hourlyForecasts.length > 0) {
        forecastHtml += `
          <div class="forecast-section">
            <div class="forecast-title"><strong>${getTranslation(this._hass, 'hourly_forecast')}</strong></div>
            <div class="forecast-slider">
              <div class="slider-container">
                <div class="slider-track">
                  ${this._hourlyForecasts.map((forecast, i) => {
                    const forecastDate = new Date();
                    forecastDate.setHours(forecastDate.getHours() + i + 1);
                    const condition = forecast.condition || this._getForecastPropFromWeather(this._hourlyForecasts, forecastDate, 'condition') || 'unknown';
                    const forecastIcon = this._getIconFile(condition, this._isDaytime(forecastDate));
                    const temp = forecast.temperature || this._getForecastPropFromWeather(this._hourlyForecasts, forecastDate, 'temperature') || '-';
                    const pos = forecast.precipitation || this._getForecastPropFromWeather(this._hourlyForecasts, forecastDate, 'precipitation') || '0';
                    const windSpeed = forecast.wind_speed || this._getForecastPropFromWeather(this._hourlyForecasts, forecastDate, 'wind_speed') || '-';
                    const humidity = forecast.humidity || this._getForecastPropFromWeather(this._hourlyForecasts, forecastDate, 'humidity') || '-';
                    const forecastHour = this._formatForecastHour(forecast.datetime);
                    return `
                      <div class="forecast-item">
                        <div class="forecast-hour">${forecastHour}</div>
                        <img src="${forecastIcon}" alt="${condition}" class="forecast-icon">
                        <div class="forecast-temp">${temp}°C</div>
                        <div class="forecast-humidity"><ha-icon icon="mdi:water-percent"></ha-icon>${getTranslation(this._hass, 'humidity', { value: humidity })}</div>
                        <div class="forecast-precip"><ha-icon icon="mdi:weather-rainy"></ha-icon>${pos} mm</div>
                        <div class="forecast-wind"><ha-icon icon="mdi:weather-windy"></ha-icon>${windSpeed} km/h</div>
                      </div>
                    `;
                  }).join("")}
                </div>
              </div>
              <div class="slider-bar">
                <div class="slider-bg"></div>
              </div>
            </div>
          </div>
        `;
      } else {
        const message = this._currentForecast === 'hourly' ? getTranslation(this._hass, 'no_hourly_forecast') : getTranslation(this._hass, 'no_forecast_data');
        forecastHtml += `<div class="forecast-section" style="padding: 20px; color: var(--secondary-text-color);">${message}</div>`;
      }

      let alertsHtml = '';
      if (alertsEntity) {
        const alertCount = parseInt(alertsEntity.state ?? 0, 10);
        alertsHtml = `
          <div class="alerts-section">
            <div class="alerts-title">${getTranslation(this._hass, 'alerts')}</div>
            <div class="alerts-summary">
        `;
        if (alertCount === 0) {
          alertsHtml += `<ha-icon icon="mdi:check-circle" style="color: green;"></ha-icon> ${getTranslation(this._hass, 'no_alerts')}`;
        } else {
          alertsHtml += `<ha-icon icon="mdi:alert-circle" style="color: red;"></ha-icon> ${getTranslation(this._hass, 'active_alerts', { count: alertCount })}`;
        }
        alertsHtml += `</div>`;

        const alertKeys = [
          "alert_wind",
          "alert_rain_intensity",
          "alert_rain",
          "alert_sea",
          "alert_cold",
          "alert_warm",
          "alert_warm_night",
          "alert_snow"
        ];
        const alertMap = {
          "alert_wind": getTranslation(this._hass, 'wind_alert'),
          "alert_rain_intensity": getTranslation(this._hass, 'rain_intensity_alert'),
          "alert_rain": getTranslation(this._hass, 'rain_alert'),
          "alert_sea": getTranslation(this._hass, 'sea_alert'),
          "alert_cold": getTranslation(this._hass, 'cold_alert'),
          "alert_warm": getTranslation(this._hass, 'warm_alert'),
          "alert_warm_night": getTranslation(this._hass, 'warm_night_alert'),
          "alert_snow": getTranslation(this._hass, 'snow_alert')
        };
        let detailsHtml = '';
        let hasActiveAlerts = false;
        for (const key of alertKeys) {
          const entityId = this._config[`${key}_entity`];
          if (entityId) {
            const specific = this._hass.states[entityId];
            if (specific?.state === "opened") {
              hasActiveAlerts = true;
              let attrDetails = '';
              const attrs = specific.attributes ?? {};
              const attrKeys = ["inicio", "fin", "fecha", "periodo", "comentario", "umbral", "peligro", "nivel"];
              attrKeys.forEach(attrKey => {
                if (attrs[attrKey] !== undefined && attrs[attrKey] !== null) {
                  const displayValue = attrKey === "umbral"
                    ? getThresholdTranslation(this._hass, key, attrs[attrKey], attrs[attrKey])
                    : attrs[attrKey];
                  attrDetails += `<div class="alert-attr"><span class="alert-attr-name">${getTranslation(this._hass, attrKey)}:</span> <span class="alert-attr-value">${displayValue}</span></div>`;
                }
              });
              detailsHtml += `
                <div class="alert-detail-item">
                  <div class="alert-name">${alertMap[key]}</div>
                  ${attrDetails}
                </div>
              `;
            }
          }
        }
        if (alertCount > 0) {
          alertsHtml += `
            <div class="alerts-details-section">
              <div class="alerts-details-title">${getTranslation(this._hass, 'alerts_details')}</div>
              ${detailsHtml}
            </div>
          `;
        }
        alertsHtml += `</div>`;
      }

      const formattedTimestamp = this._formatStationTimestamp(stationTimestamp?.state);

      this._content.innerHTML = `
        <ha-card>
          <style>
            .header { font-size: 1.8em; font-weight: normal; margin: 8px 20px 0; font-family: sans-serif; }
            .town-name { font-size: 1.2em; color: var(--secondary-text-color); margin: 0 20px 0; font-family: sans-serif; }
            .station-timestamp { font-size: 0.8em; color: var(--secondary-text-color); margin: 0 20px 8px; font-family: sans-serif; }
            .current { display: flex; justify-content: space-between; align-items: center; padding: 0 16px 2px; }
            .current-left { display: flex; align-items: center; gap: 8px; }
            .current-left img { width: 100px; height: 100px; }
            .current-condition { font-size: 1.6em; font-weight: normal; font-family: sans-serif; }
            .current-right { text-align: right; }
            .current-temp { font-size: 2.5em; font-weight: normal; font-family: sans-serif; }
            .current-feels { font-size: 0.9em; color: var(--secondary-text-color); margin-top: -10px; font-family: sans-serif; }
            .details { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 2px 12px; padding: 6px 20px 10px; font-size: 1.0em; font-family: sans-serif; }
            .detail { display: flex; align-items: center; gap: 4px; }
            .detail ha-icon { color: var(--secondary-text-color); }
            .forecast-toggle { display: flex; gap: 8px; padding: 8px 20px; }
            .toggle-btn { padding: 4px 8px; border: 1px solid var(--divider-color); background: none; cursor: pointer; border-radius: 4px; font-family: sans-serif; }
            .toggle-btn.active { background-color: var(--primary-color); color: white; }
            .forecast-section { padding: 8px 20px; opacity: 1; transition: opacity ${this._fadeDuration}s ease-in-out; }
            .forecast-title { font-size: 1.1em; font-weight: 500; margin-bottom: 4px; font-family: sans-serif; }
            .forecast-slider { position: relative; }
            .slider-container { overflow: hidden; cursor: grab; user-select: none; }
            .slider-container.dragging { cursor: grabbing; }
            .slider-track { display: flex; transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1); }
            .forecast-item { display: flex; flex-direction: column; align-items: center; padding: 2px; min-width: 100px; margin-right: 8px; }
            .forecast-icon { width: 48px; height: 48px; }
            .forecast-day, .forecast-hour { font-weight: 500; font-family: sans-serif; }
            .forecast-temp { font-size: 0.9em; font-family: sans-serif; }
            .forecast-humidity { font-size: 0.9em; display: flex; align-items: center; gap: 2px; font-family: sans-serif; }
            .forecast-precip, .forecast-wind { font-size: 0.9em; display: flex; align-items: center; gap: 2px; font-family: sans-serif; }
            .forecast-precip ha-icon, .forecast-wind ha-icon, .forecast-humidity ha-icon { font-size: 0.8em; }
            .slider-bar { position: relative; height: 8px; background: var(--slider-track-color, #e0e0e0); border-radius: 4px; margin: 8px 0; cursor: pointer; }
            .slider-bg { position: absolute; top: 0; left: 0; height: 100%; width: var(--slider-value, 0%); background: var(--slider-color, var(--primary-color, #03a9f4)); border-radius: 4px; transition: width 0.3s cubic-bezier(0.25, 0.1, 0.25, 1); }
            .slider-bar.dragging .slider-bg { transition: none; }
            .alerts-section { padding: 8px 20px; }
            .alerts-title { font-size: 1.3em; font-weight: 500; margin-bottom: 4px; font-family: sans-serif; }
            .alerts-summary { display: flex; align-items: center; gap: 4px; font-size: 1.0em; font-family: sans-serif; }
            .alerts-details-section { margin-top: 8px; }
            .alerts-details-title { font-size: 1.3em; font-weight: 500; margin-bottom: 4px; font-family: sans-serif; }
            .alert-detail-item { margin-bottom: 12px; }
            .alert-name { font-weight: bold; font-size: 1.0em; text-decoration: underline; font-family: sans-serif; }
            .alert-attr { font-size: 0.9em; color: var(--secondary-text-color); font-family: sans-serif; }
            .alert-attr-name { font-weight: bold; }
            .alert-attr-value { }
            .attribution { text-align: center; font-size: 0.8em; color: var(--secondary-text-color); padding: 8px 20px; font-family: sans-serif; }
          </style>

          <div class="header">Meteocat</div>
          <div class="town-name">${townName}</div>
          <div class="station-timestamp">${formattedTimestamp}</div>

          <div class="current">
            <div class="current-left">
              <img src="${iconFile}" alt="${condition}">
              <div class="current-condition">${condition}</div>
            </div>
            <div class="current-right">
              <div class="current-temp">${entity.attributes?.temperature ?? "-"}°C</div>
              <div class="current-feels">${getTranslation(this._hass, 'feels_like', { value: feelsLike?.state ?? "-" })}</div>
            </div>
          </div>

          <div class="details">
            <div class="detail"><ha-icon icon="mdi:thermometer-high"></ha-icon>${getTranslation(this._hass, 'max_temp', { value: forecastMax?.state ?? "-" })}</div>
            <div class="detail"><ha-icon icon="mdi:thermometer-low"></ha-icon>${getTranslation(this._hass, 'min_temp', { value: forecastMin?.state ?? "-" })}</div>
            <div class="detail"><ha-icon icon="mdi:water-percent"></ha-icon>${getTranslation(this._hass, 'humidity', { value: entity.attributes?.humidity ?? "-" })}</div>
            <div class="detail"><ha-icon icon="mdi:weather-windy"></ha-icon>${windDisplay}</div>
            <div class="detail"><ha-icon icon="mdi:weather-rainy"></ha-icon>${getTranslation(this._hass, 'precipitation', { value: precipitation?.state ?? entity.attributes?.precipitation ?? "-" })}</div>
            <div class="detail"><ha-icon icon="mdi:weather-pouring"></ha-icon>${getTranslation(this._hass, 'precipitation_probability', { value: precipitationProbability?.state ?? entity.attributes?.precipitation_probability ?? "-" })}</div>
            <div class="detail"><ha-icon icon="mdi:gauge"></ha-icon>${getTranslation(this._hass, 'pressure', { value: entity.attributes?.pressure ?? "-" })}</div>
            <div class="detail"><ha-icon icon="mdi:weather-sunny-alert"></ha-icon>${getTranslation(this._hass, 'uv_index', { value: entity.attributes?.uv_index ?? "-" })}</div>
            <div class="detail"><ha-icon icon="mdi:weather-sunset-up"></ha-icon>${getTranslation(this._hass, 'sunrise', { value: this._formatTimestamp(sunrise?.state) })}</div>
            <div class="detail"><ha-icon icon="mdi:weather-sunset-down"></ha-icon>${getTranslation(this._hass, 'sunset', { value: this._formatTimestamp(sunset?.state) })}</div>
          </div>

          ${forecastHtml}

          ${alertsHtml}

          <div class="attribution">Powered by Meteocatpy</div>
        </ha-card>
      `;

      const dailyBtn = this.shadowRoot.querySelector('#daily-btn');
      const hourlyBtn = this.shadowRoot.querySelector('#hourly-btn');
      const sliderTrack = this.shadowRoot.querySelector('.slider-track');
      const sliderBar = this.shadowRoot.querySelector('.slider-bar');
      const sliderContainer = this.shadowRoot.querySelector('.slider-container');
      const card = this.shadowRoot.querySelector('ha-card');

      if (dailyBtn) dailyBtn.addEventListener('click', () => this._toggleForecast('daily'));
      if (hourlyBtn) hourlyBtn.addEventListener('click', () => this._toggleForecast('hourly'));

      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
      }
      this.resizeObserver = new ResizeObserver((entries) => {
        const cardWidth = entries[0].contentRect.width;
        this.visibleItems = cardWidth < 400 ? 3 : 4;
        if (sliderContainer) {
          sliderContainer.style.width = `calc(100px * ${this.visibleItems} + ${8 * (this.visibleItems - 1)}px)`;
        }
        this._setupSlider();
      });
      if (card) {
        this.resizeObserver.observe(card);
      }

      if (sliderTrack && sliderBar && sliderContainer) {
        this._setupSlider();
      }
      this._log("Update completed");
    }, this._updateDebounceDelay);
  }

  _setupSlider() {
    const sliderTrack = this.shadowRoot.querySelector('.slider-track');
    const sliderBar = this.shadowRoot.querySelector('.slider-bar');
    const sliderContainer = this.shadowRoot.querySelector('.slider-container');

    if (!sliderTrack || !sliderBar || !sliderContainer) return;

    const itemWidth = 108; // 100px width + 8px margin-right
    const totalItems = this._currentForecast === 'daily' ? this._dailyForecasts.length : this._hourlyForecasts.length;
    const maxSlides = Math.max(0, totalItems - this.visibleItems);
    const maxTranslate = maxSlides * itemWidth;

    const updateSliderPosition = (percentage, animate = true) => {
      if (totalItems <= this.visibleItems) {
        this._sliderValue = 0;
        sliderTrack.style.transform = `translateX(0px)`;
        sliderBar.style.setProperty('--slider-value', `0%`);
        return;
      }
      this._sliderValue = Math.max(0, Math.min(100, percentage));
      const translateX = (this._sliderValue / 100) * maxTranslate;
      this._currentSlide = Math.round(translateX / itemWidth);
      sliderTrack.style.transition = animate ? 'transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)' : 'none';
      sliderTrack.style.transform = `translateX(-${translateX}px)`;
      sliderBar.style.setProperty('--slider-value', `${this._sliderValue}%`);
      if (animate) {
        const onTransitionEnd = () => {
          sliderTrack.removeEventListener('transitionend', onTransitionEnd);
        };
        sliderTrack.addEventListener('transitionend', onTransitionEnd);
      }
    };

    // Eventos para el slider-bar
    let barStartX = 0;
    const onBarPointerDown = (event) => {
      if (totalItems <= this.visibleItems) return;
      event.preventDefault();
      this._isDragging = true;
      sliderBar.classList.add('dragging');
      sliderBar.setPointerCapture(event.pointerId);
      barStartX = event.clientX;
    };

    const onBarPointerMove = (event) => {
      if (!this._isDragging) return;
      const { left, width } = sliderBar.getBoundingClientRect();
      const x = Math.max(0, Math.min(width, event.clientX - left));
      const percentage = (x / width) * 100;
      updateSliderPosition(percentage, false);
    };

    const onBarPointerUp = (event) => {
      if (!this._isDragging) return;
      this._isDragging = false;
      sliderBar.classList.remove('dragging');
      sliderBar.releasePointerCapture(event.pointerId);
      const newSlide = Math.round((this._sliderValue / 100) * maxSlides);
      const percentage = (newSlide / maxSlides) * 100;
      updateSliderPosition(percentage);
    };

    const onBarClick = (event) => {
      if (totalItems <= this.visibleItems) return;
      event.preventDefault();
      const { left, width } = sliderBar.getBoundingClientRect();
      const x = Math.max(0, Math.min(width, event.clientX - left));
      const percentage = (x / width) * 100;
      const newSlide = Math.round((percentage / 100) * maxSlides);
      const adjustedPercentage = (newSlide / maxSlides) * 100;
      updateSliderPosition(adjustedPercentage);
    };

    // Eventos para drag en container (carrusel)
    let containerStartX = 0;
    let containerStartTranslate = 0;
    const onContainerPointerDown = (event) => {
      if (totalItems <= this.visibleItems) return;
      event.preventDefault();
      this._isDragging = true;
      sliderContainer.classList.add('dragging');
      sliderContainer.setPointerCapture(event.pointerId);
      containerStartX = event.clientX;
      const transform = window.getComputedStyle(sliderTrack).transform;
      containerStartTranslate = transform === 'none' ? 0 : parseFloat(transform.split(',')[4].trim());
    };

    const onContainerPointerMove = (event) => {
      if (!this._isDragging) return;
      const delta = event.clientX - containerStartX;
      let newTranslate = containerStartTranslate + delta;
      newTranslate = Math.min(0, Math.max(-maxTranslate, newTranslate));
      sliderTrack.style.transition = 'none';
      sliderTrack.style.transform = `translateX(${newTranslate}px)`;
      const percentage = (-newTranslate / maxTranslate) * 100;
      sliderBar.style.setProperty('--slider-value', `${percentage}%`);
      this._sliderValue = percentage;
    };

    const onContainerPointerUp = (event) => {
      if (!this._isDragging) return;
      this._isDragging = false;
      sliderContainer.classList.remove('dragging');
      sliderContainer.releasePointerCapture(event.pointerId);
      const currentTranslate = parseFloat(window.getComputedStyle(sliderTrack).transform.split(',')[4].trim());
      const newSlide = Math.round(-currentTranslate / itemWidth);
      const percentage = (newSlide / maxSlides) * 100;
      updateSliderPosition(percentage);
    };

    // Soporte legacy para touch en slider-bar
    const onBarTouchStart = (event) => {
      if ('PointerEvent' in window) return;
      if (totalItems <= this.visibleItems) return;
      event.preventDefault();
      this._isDragging = true;
      sliderBar.classList.add('dragging');
      this._legacySliderTouchCapture = event.touches[0].identifier;
      barStartX = event.touches[0].clientX;
    };

    const onBarTouchMove = (event) => {
      if ('PointerEvent' in window) return;
      if (!this._isDragging || this._legacySliderTouchCapture !== event.touches[0].identifier) return;
      event.preventDefault();
      const { left, width } = sliderBar.getBoundingClientRect();
      const x = Math.max(0, Math.min(width, event.touches[0].clientX - left));
      const percentage = (x / width) * 100;
      updateSliderPosition(percentage, false);
    };

    const onBarTouchEnd = () => {
      if ('PointerEvent' in window) return;
      if (!this._isDragging) return;
      this._isDragging = false;
      sliderBar.classList.remove('dragging');
      this._legacySliderTouchCapture = undefined;
      const newSlide = Math.round((this._sliderValue / 100) * maxSlides);
      const percentage = (newSlide / maxSlides) * 100;
      updateSliderPosition(percentage);
    };

    // Limpiar eventos anteriores si existen
    sliderBar.removeEventListener('pointerdown', this._onBarPointerDown);
    sliderBar.removeEventListener('pointermove', this._onBarPointerMove);
    sliderBar.removeEventListener('pointerup', this._onBarPointerUp);
    sliderBar.removeEventListener('click', this._onBarClick);
    sliderBar.removeEventListener('touchstart', this._onBarTouchStart);
    sliderBar.removeEventListener('touchmove', this._onBarTouchMove);
    sliderBar.removeEventListener('touchend', this._onBarTouchEnd);

    sliderContainer.removeEventListener('pointerdown', this._onContainerPointerDown);
    sliderContainer.removeEventListener('pointermove', this._onContainerPointerMove);
    sliderContainer.removeEventListener('pointerup', this._onContainerPointerUp);

    // Asignar nuevos eventos
    this._onBarPointerDown = onBarPointerDown;
    this._onBarPointerMove = onBarPointerMove;
    this._onBarPointerUp = onBarPointerUp;
    this._onBarClick = onBarClick;
    this._onBarTouchStart = onBarTouchStart;
    this._onBarTouchMove = onBarTouchMove;
    this._onBarTouchEnd = onBarTouchEnd;

    this._onContainerPointerDown = onContainerPointerDown;
    this._onContainerPointerMove = onContainerPointerMove;
    this._onContainerPointerUp = onContainerPointerUp;

    sliderBar.addEventListener('pointerdown', onBarPointerDown);
    sliderBar.addEventListener('pointermove', onBarPointerMove);
    sliderBar.addEventListener('pointerup', onBarPointerUp);
    sliderBar.addEventListener('click', onBarClick);
    sliderBar.addEventListener('touchstart', onBarTouchStart, { passive: false });
    sliderBar.addEventListener('touchmove', onBarTouchMove, { passive: false });
    sliderBar.addEventListener('touchend', onBarTouchEnd);

    sliderContainer.addEventListener('pointerdown', onContainerPointerDown);
    sliderContainer.addEventListener('pointermove', onContainerPointerMove);
    sliderContainer.addEventListener('pointerup', onContainerPointerUp);

    // Inicializar posición
    updateSliderPosition(this._sliderValue, false);
  }

  _getIconFile(condition, isDay) {
    const raw = String(condition || "unknown").toLowerCase();
    const prefix = this.useStaticIcons ? "s-" : "a-";
    const map = {
      clear_night: "clear",
      clear: "clear",
      sunny: "clear-day",
      partlycloudy: "cloudy-1",
      cloudy: "cloudy-3",
      rainy: "rainy-2",
      pouring: "rainy-3",
      lightning_rainy: "scattered-thunderstorms",
      fog: "fog",
      hail: "hail",
      snowy: "snowy-3",
      snowy_rainy: "snowy-1",
      unknown: "unknown"
    };
    let base = map[raw] || map[raw.replace(/\s/g, "")] || "unknown";
    if (base !== "unknown" && base !== "clear-day") {
      base += isDay ? "-day" : "-night";
    }
    const icon = `${this.iconPath}${prefix}${base}.svg`;
    this._log("_getIconFile called with condition =", condition, "isDay =", isDay, "resulting icon =", icon);
    return icon;
  }

  getCardSize() {
    return 6;
  }

  disconnectedCallback() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
}

if (!customElements.get("meteocat-card")) {
  customElements.define("meteocat-card", MeteocatCard);
  console.log("MeteocatCard: Registering custom element meteocat-card");
}

window.customCards = window.customCards || [];
window.customCards.push({
  type: "meteocat-card",
  name: getTranslation(null, 'card_name', {}, "Meteocat Card"),
  description: getTranslation(null, 'card_description', {}, "Tarjeta personalizada para mostrar datos de Meteocat."),
  preview: false,
});