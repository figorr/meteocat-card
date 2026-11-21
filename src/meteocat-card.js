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
    precipitation: "{value}",
    precipitation_probability: "{value}%",
    pressure: "{value} hPa",
    uv_index: "{value}",
    solar_global_irradiance: "{value} W/m²",
    eto_daily: "ETo {value} mm",
    eto_hourly: "ETo {value} mm/h",
    below_horizon: "Below horizon",
    above_horizon: "Above horizon",
    azimuth: "{value}°",
    sunrise: "{value}",
    sunset: "{value}",
    lightning_town: "{value}",
    lightning_region: "{value}",
    moon_phase: "{value}",
    illuminated_percentage: "{value}%",
    moonrise: "{value}",
    moonset: "{value}",
    daily_forecast: "Daily Forecast",
    hourly_forecast: "Hourly Forecast",
    daily: "Daily",
    hourly: "Hourly",
    forecast_trend: "Forecast trend",
    chart_temperature: "Temperature",
    chart_max: "Max",
    chart_min: "Min",
    chart_rain: "Rain",
    chart_rain_max: "max {value} mm",
    chart_first_rain: "Start",
    chart_go_max_temp: "Go to highest temperature",
    chart_go_min_temp: "Go to lowest temperature",
    chart_go_first_rain: "Go to first rain",
    chart_go_max_rain: "Go to peak rain",
    today: "Today",
    tomorrow: "Tomorrow",
    no_forecast_data: "No forecast data available. Check entity or logs.",
    no_hourly_forecast: "Hourly forecasts not supported by this entity.",
    alerts: "Alerts",
    no_alerts: "No alerts",
    active_alerts: "Active alerts = {count}",
    alerts_details: "Alerts details",
    alert_level_active: "Active",
    alert_level_moderate: "Moderate",
    alert_level_high: "High",
    alert_level_very_high: "Very high",
    wind_alert: "Wind",
    rain_intensity_alert: "Rain Intensity",
    rain_intensity_alert_30_min: "Rain Intensity 30 min",
    rain_intensity_alert_3_hours: "Rain Intensity 3 hours",
    rain_alert: "Rain",
    sea_alert: "Sea",
    cold_alert: "Cold",
    warm_alert: "Warm",
    warm_night_alert: "Warm Night",
    snow_alert: "Snow",
    inicio: "Start",
    fin: "End",
    until: "Until {value}",
    upcoming: "Upcoming",
    fecha: "Date",
    periodo: "Period",
    comentario: "Comment",
    umbral: "Threshold",
    peligro: "Danger",
    nivel: "Level",
    source: "Source",
    source_api: "API",
    source_public: "Public feed",
    attribution: "Powered by Meteocatpy & Solarmoonpy",
    sun: "Sun",
    mon: "Mon",
    tue: "Tue",
    wed: "Wed",
    thu: "Thu",
    fri: "Fri",
    sat: "Sat",
    unknown: "Unknown",
    new_moon: "New Moon",
    waxing_crescent: "Waxing Crescent",
    first_quarter: "First Quarter",
    waxing_gibbous: "Waxing Gibbous",
    full_moon: "Full Moon",
    waning_gibbous: "Waning Gibbous",
    last_quarter: "Last Quarter",
    waning_crescent: "Waning Crescent",
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
        wind_72: "Max. wind speed > 72 km/h",
        wind_90: "Max. wind speed > 90 km/h",
        wind_108: "Max. wind speed > 108 km/h",
        wind_126: "Max. wind speed > 126 km/h",
        wind_144: "Max. wind speed > 144 km/h",
        unknown: "Unknown",
      },
      alert_rain_intensity: {
        hail_2_cm: "Hail with diameter > 2 cm",
        microburst: "Microburst",
        intensity_40_30: "Intensity > 40 mm / 30 minutes",
        intensity_20_30: "Intensity > 20 mm / 30 minutes",
        intensity_60_3: "Intensity > 60 mm / 3 hours",
        intensity_90_3: "Intensity > 90 mm / 3 hours",
        unknown: "Unknown",
      },
      alert_rain_intensity_30_min: {
        hail_2_cm: "Hail with diameter > 2 cm",
        microburst: "Microburst",
        intensity_40_30: "Intensity > 40 mm / 30 minutes",
        intensity_20_30: "Intensity > 20 mm / 30 minutes",
        intensity_60_3: "Intensity > 60 mm / 3 hours",
        intensity_90_3: "Intensity > 90 mm / 3 hours",
        unknown: "Unknown",
      },
      alert_rain_intensity_3_hours: {
        hail_2_cm: "Hail with diameter > 2 cm",
        microburst: "Microburst",
        intensity_40_30: "Intensity > 40 mm / 30 minutes",
        intensity_20_30: "Intensity > 20 mm / 30 minutes",
        intensity_60_3: "Intensity > 60 mm / 3 hours",
        intensity_90_3: "Intensity > 90 mm / 3 hours",
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
        thickness_50_at_1000: "Thickness > 50 cm at altitudes above 1000 meters up to 1500 meters",
        thickness_30_at_800: "Thickness > 30 cm at altitudes above 800 meters up to 1000 meters",
        thickness_20_at_600: "Thickness > 20 cm at altitudes above 600 meters up to 800 meters",
        thickness_20_at_1000: "Thickness > 20 cm at altitudes above 1000 meters up to 1500 meters",
        thickness_15_at_300: "Thickness > 15 cm at altitudes above 300 meters up to 600 meters",
        thickness_10_at_800: "Thickness > 10 cm at altitudes above 800 meters up to 1000 meters",
        thickness_5_at_300: "Thickness > 5 cm at altitudes below 300 meters",
        thickness_5_at_600: "Thickness > 5 cm at altitudes above 600 meters up to 800 meters",
        thickness_2_at_400: "Thickness > 2 cm at altitudes above 400 meters",
        thickness_2_at_300: "Thickness > 2 cm at altitudes above 300 meters up to 600 meters",
        thickness_0_at_300: "Thickness ≥ 0 cm at altitudes below 300 meters",
        thickness_0_at_200: "Thickness ≥ 0 cm at altitudes above 200 meters",
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
    precipitation: "{value}",
    precipitation_probability: "{value}%",
    pressure: "{value} hPa",
    uv_index: "{value}",
    solar_global_irradiance: "{value} W/m²",
    eto_daily: "ETo {value} mm",
    eto_hourly: "ETo {value} mm/h",
    below_horizon: "Bajo horizonte",
    above_horizon: "Sobre horizonte",
    azimuth: "{value}°",
    sunrise: "{value}",
    sunset: "{value}",
    lightning_town: "{value}",
    lightning_region: "{value}",
    moon_phase: "{value}",
    illuminated_percentage: "{value}%",
    moonrise: "{value}",
    moonset: "{value}",
    daily_forecast: "Pronóstico diario",
    hourly_forecast: "Pronóstico horario",
    daily: "Diario",
    hourly: "Horario",
    forecast_trend: "Tendencia de la previsión",
    chart_temperature: "Temperatura",
    chart_max: "Máx",
    chart_min: "Mín",
    chart_rain: "Lluvia",
    chart_rain_max: "máx. {value} mm",
    chart_first_rain: "Inicio",
    chart_go_max_temp: "Ir a la temperatura máxima",
    chart_go_min_temp: "Ir a la temperatura mínima",
    chart_go_first_rain: "Ir a la primera lluvia",
    chart_go_max_rain: "Ir a la lluvia máxima",
    today: "Hoy",
    tomorrow: "Mañana",
    no_forecast_data: "No hay datos de pronóstico disponibles. Verifica la entidad o los registros.",
    no_hourly_forecast: "Pronósticos horarios no soportados por esta entidad.",
    alerts: "Alertas",
    no_alerts: "Sin alertas",
    active_alerts: "Alertas activas = {count}",
    alerts_details: "Detalles de alertas",
    alert_level_active: "Activa",
    alert_level_moderate: "Moderado",
    alert_level_high: "Alto",
    alert_level_very_high: "Muy alto",
    wind_alert: "Viento",
    rain_intensity_alert: "Intensidad de lluvia",
    rain_intensity_alert_30_min: "Intensidad de lluvia 30 min",
    rain_intensity_alert_3_hours: "Intensidad de lluvia 3 horas",
    rain_alert: "Lluvia",
    sea_alert: "Mar",
    cold_alert: "Frío",
    warm_alert: "Calor",
    warm_night_alert: "Noche cálida",
    snow_alert: "Nieve",
    inicio: "Inicio",
    fin: "Fin",
    until: "Hasta {value}",
    upcoming: "Prevista",
    fecha: "Fecha",
    periodo: "Período",
    comentario: "Comentario",
    umbral: "Umbral",
    peligro: "Peligro",
    nivel: "Nivel",
    source: "Origen",
    source_api: "API",
    source_public: "Feed público",
    attribution: "Powered by Meteocatpy & Solarmoonpy",
    sun: "Dom",
    mon: "Lun",
    tue: "Mar",
    wed: "Mié",
    thu: "Jue",
    fri: "Vie",
    sat: "Sáb",
    unknown: "Desconocido",
    new_moon: "Luna nueva",
    waxing_crescent: "Luna creciente",
    first_quarter: "Cuarto creciente",
    waxing_gibbous: "Gibosa creciente",
    full_moon: "Luna llena",
    waning_gibbous: "Gibosa menguante",
    last_quarter: "Cuarto menguante",
    waning_crescent: "Luna menguante",
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
        wind_72: "Velocidad máxima del viento > 72 km/h",
        wind_90: "Velocidad máxima del viento > 90 km/h",
        wind_108: "Velocidad máxima del viento > 108 km/h",
        wind_126: "Velocidad máxima del viento > 126 km/h",
        wind_144: "Velocidad máxima del viento > 144 km/h",
        unknown: "Desconocido",
      },
      alert_rain_intensity: {
        hail_2_cm: "Granizo con diámetro > 2 cm",
        microburst: "Microburst",
        intensity_40_30: "Intensidad > 40 mm / 30 minutos",
        intensity_20_30: "Intensidad > 20 mm / 30 minutos",
        intensity_60_3: "Intensidad > 60 mm / 3 horas",
        intensity_90_3: "Intensidad > 90 mm / 3 horas",
        unknown: "Desconocido",
      },
      alert_rain_intensity_30_min: {
        hail_2_cm: "Granizo con diámetro > 2 cm",
        microburst: "Microburst",
        intensity_40_30: "Intensidad > 40 mm / 30 minutos",
        intensity_20_30: "Intensidad > 20 mm / 30 minutos",
        intensity_60_3: "Intensidad > 60 mm / 3 horas",
        intensity_90_3: "Intensidad > 90 mm / 3 horas",
        unknown: "Desconocido",
      },
      alert_rain_intensity_3_hours: {
        hail_2_cm: "Granizo con diámetro > 2 cm",
        microburst: "Microburst",
        intensity_40_30: "Intensidad > 40 mm / 30 minutos",
        intensity_20_30: "Intensidad > 20 mm / 30 minutos",
        intensity_60_3: "Intensidad > 60 mm / 3 horas",
        intensity_90_3: "Intensidad > 90 mm / 3 horas",
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
        thickness_50_at_1000: "Grosor > 50 cm en cotas superiores a 1000 metros hasta 1500 metros",
        thickness_30_at_800: "Grosor > 30 cm en cotas superiores a 800 metros hasta 1000 metros",
        thickness_20_at_600: "Grosor > 20 cm en cotas superiores a 600 metros hasta 800 metros",
        thickness_20_at_1000: "Grosor > 20 cm en cotas superiores a 1000 metros hasta 1500 metros",
        thickness_15_at_300: "Grosor > 15 cm en cotas superiores a 300 metros hasta 600 metros",
        thickness_10_at_800: "Grosor > 10 cm en cotas superiores a 800 metros hasta 1000 metros",
        thickness_5_at_300: "Grosor > 5 cm en cotas inferiores a 300 metros",
        thickness_5_at_600: "Grosor > 5 cm en cotas superiores a 600 metros hasta 800 metros",
        thickness_2_at_400: "Grosor > 2 cm en cotas superiores a 400 metros",
        thickness_2_at_300: "Grosor > 2 cm en cotas superiores a 300 metros hasta 600 metros",
        thickness_0_at_300: "Grosor ≥ 0 cm en cotas inferiores a 300 metros",
        thickness_0_at_200: "Grosor ≥ 0 cm en cotas superiores a 200 metros",
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
    precipitation: "{value}",
    precipitation_probability: "{value}%",
    pressure: "{value} hPa",
    uv_index: "{value}",
    solar_global_irradiance: "{value} W/m²",
    eto_daily: "ETo {value} mm",
    eto_hourly: "ETo {value} mm/h",
    below_horizon: "Sota horitzó",
    above_horizon: "Sobre horitzó",
    azimuth: "{value}°",
    sunrise: "{value}",
    sunset: "{value}",
    lightning_town: "{value}",
    lightning_region: "{value}",
    moon_phase: "{value}",
    illuminated_percentage: "{value}%",
    moonrise: "{value}",
    moonset: "{value}",
    daily_forecast: "Previsió diària",
    hourly_forecast: "Previsió horària",
    daily: "Diari",
    hourly: "Horari",
    forecast_trend: "Tendència de la previsió",
    chart_temperature: "Temperatura",
    chart_max: "Màx",
    chart_min: "Mín",
    chart_rain: "Pluja",
    chart_rain_max: "màx. {value} mm",
    chart_first_rain: "Inici",
    chart_go_max_temp: "Anar a la temperatura màxima",
    chart_go_min_temp: "Anar a la temperatura mínima",
    chart_go_first_rain: "Anar a la primera pluja",
    chart_go_max_rain: "Anar a la pluja màxima",
    today: "Avui",
    tomorrow: "Demà",
    no_forecast_data: "No hi ha dades de previsió disponibles. Comprova l'entitat o els registres.",
    no_hourly_forecast: "Previsions horàries no suportades per aquesta entitat.",
    alerts: "Alertes",
    no_alerts: "Sense alertes",
    active_alerts: "Alertes actives = {count}",
    alerts_details: "Detalls de les alertes",
    alert_level_active: "Activa",
    alert_level_moderate: "Moderat",
    alert_level_high: "Alt",
    alert_level_very_high: "Molt alt",
    wind_alert: "Vent",
    rain_intensity_alert: "Intensitat de pluja",
    rain_intensity_alert_30_min: "Intensitat de pluja 30 min",
    rain_intensity_alert_3_hours: "Intensitat de pluja 3 hores",
    rain_alert: "Pluja",
    sea_alert: "Mar",
    cold_alert: "Fred",
    warm_alert: "Calor",
    warm_night_alert: "Nit càlida",
    snow_alert: "Neu",
    inicio: "Inici",
    fin: "Fi",
    until: "Fins {value}",
    upcoming: "Prevista",
    fecha: "Data",
    periodo: "Període",
    comentario: "Comentari",
    umbral: "Llindar",
    peligro: "Perill",
    nivel: "Nivell",
    source: "Origen",
    source_api: "API",
    source_public: "Feed públic",
    attribution: "Powered by Meteocatpy & Solarmoonpy",
    sun: "Dg",
    mon: "Dl",
    tue: "Dt",
    wed: "Dc",
    thu: "Dj",
    fri: "Dv",
    sat: "Ds",
    unknown: "Desconegut",
    new_moon: "Lluna nova",
    waxing_crescent: "Lluna creixent",
    first_quarter: "Quart creixent",
    waxing_gibbous: "Gibosa creixent",
    full_moon: "Lluna plena",
    waning_gibbous: "Gibosa minvant",
    last_quarter: "Quart minvant",
    waning_crescent: "Lluna minvant",
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
        wind_72: "Velocitat màx. del vent > 72 km/h",
        wind_90: "Velocitat màx. del vent > 90 km/h",
        wind_108: "Velocitat màx. del vent > 108 km/h",
        wind_126: "Velocitat màx. del vent > 126 km/h",
        wind_144: "Velocitat màx. del vent > 144 km/h",
        unknown: "Desconegut",
      },
      alert_rain_intensity: {
        hail_2_cm: "Calamarsa amb diàmetre > 2 cm",
        microburst: "Microburst",
        intensity_40_30: "Intensitat > 40 mm / 30 minuts",
        intensity_20_30: "Intensitat > 20 mm / 30 minuts",
        intensity_60_3: "Intensitat > 60 mm / 3 hores",
        intensity_90_3: "Intensitat > 90 mm / 3 hores",
        unknown: "Desconegut",
      },
      alert_rain_intensity_30_min: {
        hail_2_cm: "Calamarsa amb diàmetre > 2 cm",
        microburst: "Microburst",
        intensity_40_30: "Intensitat > 40 mm / 30 minuts",
        intensity_20_30: "Intensitat > 20 mm / 30 minuts",
        intensity_60_3: "Intensitat > 60 mm / 3 hores",
        intensity_90_3: "Intensitat > 90 mm / 3 hores",
        unknown: "Desconegut",
      },
      alert_rain_intensity_3_hours: {
        hail_2_cm: "Calamarsa amb diàmetre > 2 cm",
        microburst: "Microburst",
        intensity_40_30: "Intensitat > 40 mm / 30 minuts",
        intensity_20_30: "Intensitat > 20 mm / 30 minuts",
        intensity_60_3: "Intensitat > 60 mm / 3 hores",
        intensity_90_3: "Intensitat > 90 mm / 3 hores",
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
        thickness_50_at_1000: "Gruix > 50 cm a cotes superiors a 1000 metres fins a 1500 metres",
        thickness_30_at_800: "Gruix > 30 cm a cotes superiors a 800 metres fins a 1000 metres",
        thickness_20_at_600: "Gruix > 20 cm a cotes superiors a 600 metres fins a 800 metres",
        thickness_20_at_1000: "Gruix > 20 cm a cotes superiors a 1000 metres fins a 1500 metres",
        thickness_15_at_300: "Gruix > 15 cm a cotes superiors a 300 metres fins a 600 metres",
        thickness_10_at_800: "Gruix > 10 cm a cotes superiors a 800 metres fins a 1000 metres",
        thickness_5_at_300: "Gruix > 5 cm a cotes inferiors a 300 metres",
        thickness_5_at_600: "Gruix > 5 cm a cotes superiors a 600 metres fins a 800 metres",
        thickness_2_at_400: "Gruix > 2 cm a cotes superiors a 400 metres",
        thickness_2_at_300: "Gruix > 2 cm a cotes superiors a 300 metres fins a 600 metres",
        thickness_0_at_300: "Gruix ≥ 0 cm a cotes inferiors a 300 metres",
        thickness_0_at_200: "Gruix ≥ 0 cm a cotes superiors a 200 metres",
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

function getAlertSourceLabel(hass, source) {
  if (source === "public") return getTranslation(hass, "source_public");
  if (source === "api") return getTranslation(hass, "source_api");
  return source || getTranslation(hass, "unknown");
}

// Helper para obtener el color y la etiqueta de la escala SMP segun el grado de peligro
function getAlertLevelMeta(hass, danger) {
  const level = Number.parseInt(danger, 10);
  if (!Number.isFinite(level) || level <= 0) {
    return {
      key: "active",
      color: "#546e7a",
      background: "#dfe6e9",
      textColor: "#34464e",
      label: getTranslation(hass, "alert_level_active"),
    };
  }
  if (level <= 2) {
    return {
      key: "moderate",
      color: "#8a6d00",
      background: "#ffe79a",
      textColor: "#5f4b00",
      label: getTranslation(hass, "alert_level_moderate"),
    };
  }
  if (level <= 4) {
    return {
      key: "high",
      color: "#b45309",
      background: "#ffd1a3",
      textColor: "#6b3b00",
      label: getTranslation(hass, "alert_level_high"),
    };
  }
  return {
    key: "very_high",
    color: "#b71c1c",
    background: "#ffc9cc",
    textColor: "#6b1b1b",
    label: getTranslation(hass, "alert_level_very_high"),
  };
}

function getNoAlertMeta(hass) {
  return {
    key: "none",
    color: "#2e7d32",
    background: "#dff3d8",
    textColor: "#1f4d1f",
    label: getTranslation(hass, "no_alerts"),
  };
}

// Helper para obtener el array de direcciones cardinales traducidas
function getCardinalDirections(hass) {
  const lang = hass?.language || 'en';
  return translations[lang]?.cardinal_directions || translations.en.cardinal_directions;
}

const MARKETPLACE_ICON_PATH = "/local/community/meteocat-card/";
const MANUAL_ICON_PATH = "/local/meteocat-card/icons/";
const LEGACY_HACS_ICON_PREFIX = "/hacsfiles/meteocat-card";
const MARKETPLACE_ICON_PREFIX = "/local/community/meteocat-card";
const FORECAST_ITEM_WIDTH = 108;
const FORECAST_ITEM_CENTER = 50;
const FORECAST_CHART_HEIGHT = 150;

function normalizeIconPathType(type) {
  return type === "manual" ? "manual" : "marketplace";
}

function isLegacyHacsIconPath(path) {
  return typeof path === "string" && path.startsWith(LEGACY_HACS_ICON_PREFIX);
}

function resolveIconPath(config) {
  const type = normalizeIconPathType(config.icon_path_type);
  if (isLegacyHacsIconPath(config.iconPath)) {
    return config.iconPath.replace(
      LEGACY_HACS_ICON_PREFIX,
      MARKETPLACE_ICON_PREFIX
    );
  }
  if (config.iconPath) {
    return config.iconPath;
  }
  return type === "manual" ? MANUAL_ICON_PATH : MARKETPLACE_ICON_PATH;
}

function detectInstalledIconPath() {
  try {
    const basePath = new URL("./", import.meta.url).pathname;
    if (basePath.includes("/community/meteocat-card/")) {
      return { type: "marketplace", path: basePath };
    }
    if (basePath.startsWith(LEGACY_HACS_ICON_PREFIX)) {
      return { type: "marketplace", path: MARKETPLACE_ICON_PATH };
    }
    if (basePath.endsWith("/meteocat-card/")) {
      return { type: "manual", path: `${basePath}icons/` };
    }
  } catch {
    return { type: "marketplace", path: MARKETPLACE_ICON_PATH };
  }
  return { type: "marketplace", path: MARKETPLACE_ICON_PATH };
}

class MeteocatCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._content = document.createElement("div");
    this.shadowRoot.appendChild(this._content);
    this._content.addEventListener("click", (event) => this._handleMoreInfoClick(event));
    this._content.addEventListener("keydown", (event) => this._handleMoreInfoKeyDown(event));
    this.iconPath = MARKETPLACE_ICON_PATH;
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
    this._alertsExpanded = null;
    this._selectedAlertKey = null;
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

  _getMoreInfoEntity(...entityIds) {
    if (this._config?.option_detail_tap_more_info === false) return null;
    for (const entityId of entityIds) {
      if (!entityId || typeof entityId !== "string" || entityId.startsWith("weather.")) continue;
      const state = this._hass?.states?.[entityId];
      if (state && state.state !== "unavailable") return entityId;
    }
    return null;
  }

  _getMoreInfoAttributes(entityId) {
    return entityId
      ? ` data-entity="${entityId}" role="button" tabindex="0"`
      : "";
  }

  _renderDetail(entityId, icon, content) {
    const actionClass = entityId ? " more-info-action" : "";
    return `<div class="detail${actionClass}"${this._getMoreInfoAttributes(entityId)}><ha-icon icon="${icon}"></ha-icon>${content}</div>`;
  }

  _openMoreInfo(entityId) {
    if (!entityId || this._config?.option_detail_tap_more_info === false) return;
    if (!this._hass?.states?.[entityId]) return;
    this.dispatchEvent(new CustomEvent("hass-more-info", {
      detail: { entityId },
      bubbles: true,
      composed: true,
    }));
  }

  _openAlertDetails(alertKey) {
    if (!alertKey || !this.shadowRoot) return;

    const details = this.shadowRoot.querySelector('.alerts-details');
    const target = this.shadowRoot.querySelector(`.alert-detail-item[data-alert-key="${alertKey}"]`);
    if (!target) return;

    this._alertsExpanded = true;
    this._selectedAlertKey = alertKey;
    if (details) details.open = true;

    this.shadowRoot.querySelectorAll('.alert-detail-item--highlighted').forEach((item) => {
      item.classList.remove('alert-detail-item--highlighted');
    });
    target.classList.add('alert-detail-item--highlighted');

    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      target.focus({ preventScroll: true });
    });
  }

  _handleMoreInfoClick(event) {
    const action = event.target.closest?.(".more-info-action");
    if (!action) return;
    event.preventDefault();
    event.stopPropagation();
    this._openMoreInfo(action.dataset.entity);
  }

  _handleMoreInfoKeyDown(event) {
    if (event.repeat || (event.key !== "Enter" && event.key !== " ")) return;
    const action = event.target.closest?.(".more-info-action");
    if (!action) return;
    event.preventDefault();
    event.stopPropagation();
    this._openMoreInfo(action.dataset.entity);
  }

  static getConfigElement() {
    return document.createElement("meteocat-card-editor");
  }

  static getStubConfig(hass) {
    const weatherEntities = Object.keys(hass?.states || {}).filter(
      (entityId) => entityId.startsWith("weather.")
    );
    const meteocatWeather = weatherEntities.find(
      (entityId) => hass?.entities?.[entityId]?.platform === "meteocat"
    );
    const iconConfig = detectInstalledIconPath();
    return {
      entity: meteocatWeather || weatherEntities[0] || "weather.home",
      option_static_icons: false,
      icon_path_type: iconConfig.type,
      iconPath: iconConfig.path,
      debug: false,
      fade_duration: 0.3, // Duración por defecto del fade
      option_show_sun_info: true,
      option_show_sun_times: true,
      option_show_moon_info: true,
      option_show_moon_times: true,
      option_show_eto: true,
      option_show_chart: true,
      option_detail_tap_more_info: true,
      option_show_alert_badges: true,
      option_alert_details_collapsed: true,
    };
  }

  setConfig(config) {
    if (!config?.entity) throw new Error(getTranslation(this._hass, 'entity_not_found', { entity: config?.entity || 'unknown' }));
    this._config = {
      type: "meteocat-card",
      default_forecast_view: "daily",
      option_static_icons: false,
      icon_path_type: "marketplace",
      debug: false,
      fade_duration: 0.3, // Duración por defecto del fade
      option_show_sun_info: true,
      option_show_sun_times: true,
      option_show_moon_info: true,
      option_show_moon_times: true,
      option_show_eto: true,
      option_show_chart: true,
      option_detail_tap_more_info: true,
      option_show_alert_badges: true,
      option_alert_details_collapsed: true,
      ...config,
      title: undefined,
      sunrise_entity: undefined,
      sunset_entity: undefined,
    };
    delete this._config.title;
    delete this._config.icons;
    delete this._config.sunrise_entity;
    delete this._config.sunset_entity;
    this._alertsExpanded = this._config.option_alert_details_collapsed === false;
    this._selectedAlertKey = null;
    this._currentForecast = this._config.default_forecast_view === "hourly" ? "hourly" : "daily";
    this._config.icon_path_type = normalizeIconPathType(
      this._config.icon_path_type
    );
    this.iconPath = resolveIconPath(this._config);
    this._config.iconPath = this.iconPath;
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

  connectedCallback() {
    if (this._hass && this._config) {
      this._update();
    }
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

      this._config.feels_like_entity = this._config.feels_like_entity || findByKey("feels_like");
      this._config.forecast_max_entity = this._config.forecast_max_entity || findByKey("max_temperature_forecast");
      this._config.forecast_min_entity = this._config.forecast_min_entity || findByKey("min_temperature_forecast");
      this._config.precipitation_entity = this._config.precipitation_entity || findByKey("precipitation_accumulated");
      this._config.precipitation_probability_entity = this._config.precipitation_probability_entity || findByKey("precipitation_probability");
      this._config.precipitation_intensity_entity = this._config.precipitation_intensity_entity || findByKey("precipitation_intensity");
      this._config.town_name_entity = this._config.town_name_entity || findByKey("town_name");
      this._config.alerts_entity = this._config.alerts_entity || findByKey("alerts");
      this._config.sunrise_entity = this._config.sunrise_entity || findByKey("sunrise") || "sensor.sun_next_rising";
      this._config.sunset_entity = this._config.sunset_entity || findByKey("sunset") || "sensor.sun_next_setting";
      this._config.lightning_town_entity = this._config.lightning_town_entity || findByKey("lightning_town");
      this._config.lightning_region_entity = this._config.lightning_region_entity || findByKey("lightning_region");
      this._config.moon_phase_entity = this._config.moon_phase_entity || findByKey("moon_phase");
      this._config.moonrise_entity = this._config.moonrise_entity || findByKey("moonrise");
      this._config.moonset_entity = this._config.moonset_entity || findByKey("moonset");
      this._config.station_timestamp_entity = this._config.station_timestamp_entity || findByKey("station_timestamp");
      this._config.humidity_entity = this._config.humidity_entity || findByKey("humidity");
      this._config.solar_global_irradiance_entity = this._config.solar_global_irradiance_entity || findByKey("solar_global_irradiance");
      this._config.sun_entity = this._config.sun_entity || findByKey("sun");

      // Sensores de evapotranspiración (gardenpy-meteocat)
      this._config.eto_daily_entity = this._config.eto_daily_entity || findByKey("eto_daily");
      this._config.eto_hourly_entity = this._config.eto_hourly_entity || findByKey("eto_hourly");

      // Nuevas entidades agregadas para overrides
      this._config.pressure_entity = this._config.pressure_entity || findByKey("pressure");
      this._config.uv_index_entity = this._config.uv_index_entity || findByKey("uv_index");
      this._config.temperature_entity = this._config.temperature_entity || findByKey("temperature");
      this._config.wind_bearing_entity = this._config.wind_bearing_entity || findByKey("wind_bearing");
      this._config.wind_gust_speed_entity = this._config.wind_gust_speed_entity || findByKey("wind_gust_speed");
      this._config.wind_speed_entity = this._config.wind_speed_entity || findByKey("wind_speed");

      const alertKeys = [
        "alert_wind",
        "alert_rain_intensity",
        "alert_rain_intensity_30_min",
        "alert_rain_intensity_3_hours",
        "alert_rain",
        "alert_sea",
        "alert_cold",
        "alert_warm",
        "alert_warm_night",
        "alert_snow"
      ];

      for (const key of alertKeys) {
        this._config[`${key}_entity`] = this._config[`${key}_entity`] || findByKey(key);
      }

      this._entitiesDiscovered = true;
      this._log("autodiscovered entities:", {
        feels_like: this._config.feels_like_entity,
        forecast_max: this._config.forecast_max_entity,
        forecast_min: this._config.forecast_min_entity,
        precipitation: this._config.precipitation_entity,
        precipitation_probability: this._config.precipitation_probability_entity,
        precipitation_intensity: this._config.precipitation_intensity_entity,
        town_name: this._config.town_name_entity,
        alerts: this._config.alerts_entity,
        sunrise: this._config.sunrise_entity,
        sunset: this._config.sunset_entity,
        lightning_town: this._config.lightning_town_entity,
        lightning_region: this._config.lightning_region_entity,
        moon_phase: this._config.moon_phase_entity,
        moonrise: this._config.moonrise_entity,
        moonset: this._config.moonset_entity,
        station_timestamp: this._config.station_timestamp_entity,
        humidity: this._config.humidity_entity,
        solar_global_irradiance: this._config.solar_global_irradiance_entity,
        sun: this._config.sun_entity,
        eto_daily: this._config.eto_daily_entity,
        eto_hourly: this._config.eto_hourly_entity,
        pressure: this._config.pressure_entity,
        uv_index: this._config.uv_index_entity,
        temperature: this._config.temperature_entity,
        wind_bearing: this._config.wind_bearing_entity,
        wind_gust_speed: this._config.wind_gust_speed_entity,
        wind_speed: this._config.wind_speed_entity,
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

  _getTimeZone() {
    return this._hass?.config?.time_zone || this._hass?.time_zone || "Europe/Madrid";
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
      timeZone: this._getTimeZone(),
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
      timeZone: this._getTimeZone()
    });

    if (dateStr === todayStr) {
      return timeStr;
    } else if (dateStr === tomorrowStr) {
      return `${dayAbbr} ${timeStr}`;
    } else {
      const dateFormatted = date.toLocaleDateString(this._hass?.language || "es-ES", {
        day: "2-digit",
        month: "2-digit",
        timeZone: this._getTimeZone(),
      });
      return `${dayAbbr} (${dateFormatted}) ${timeStr}`;
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
      timeZone: this._getTimeZone(),
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
      timeZone: this._getTimeZone(),
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

  _toFiniteNumber(value) {
    if (value === null || value === undefined || value === "") return null;
    const number = Number(value);
    return Number.isFinite(number) ? number : null;
  }

  _isCardPickerPreview() {
    const root = this.getRootNode?.();
    return root?.host?.localName === "hui-card-picker";
  }

  _buildForecastChart(type, forecasts) {
    if ((!this._config?.option_show_chart && !this._isCardPickerPreview()) || !Array.isArray(forecasts) || forecasts.length < 2) {
      return "";
    }

    const isDaily = type === "daily";
    const width = forecasts.length * FORECAST_ITEM_WIDTH;
    const height = FORECAST_CHART_HEIGHT + (isDaily ? 0 : 26);
    const plotTop = 10;
    const xLabelY = height - 5;
    const rainLaneHeight = isDaily ? 0 : 24;
    const rainLaneBottom = isDaily ? 0 : xLabelY - 10;
    const rainLaneTop = rainLaneBottom - rainLaneHeight;
    const plotBottom = isDaily ? height - 22 : rainLaneTop - 16;
    const plotHeight = plotBottom - plotTop;

    const points = forecasts.map((forecast, index) => ({
      index,
      x: index * FORECAST_ITEM_WIDTH + FORECAST_ITEM_CENTER,
      label: isDaily
        ? this._formatForecastDate(forecast.datetime)
        : this._formatForecastHour(forecast.datetime),
      dayLabel: isDaily ? "" : this._formatForecastDate(forecast.datetime),
      temp: this._toFiniteNumber(forecast.temperature),
      templow: isDaily ? this._toFiniteNumber(forecast.templow) : null,
      precip: isDaily ? null : this._toFiniteNumber(forecast.precipitation),
    }));

    const tempValues = [];
    for (const point of points) {
      if (point.temp !== null) tempValues.push(point.temp);
      if (point.templow !== null) tempValues.push(point.templow);
    }
    if (tempValues.length < 2) return "";

    const rawMin = Math.min(...tempValues);
    const rawMax = Math.max(...tempValues);
    const span = rawMax - rawMin || 1;
    const padding = Math.max(span * 0.15, 1);
    const scaleMin = rawMin - padding;
    const scaleMax = rawMax + padding;
    const scaleSpan = scaleMax - scaleMin;
    const yForTemp = (value) => plotBottom - ((value - scaleMin) / scaleSpan) * plotHeight;

    let maxPrecip = 0;
    let maxPrecipIndex = -1;
    let maxTempIndex = -1;
    let minTempIndex = -1;
    let maxTempValue = -Infinity;
    let minTempValue = Infinity;
    let firstRainIndex = -1;
    points.forEach((point, index) => {
      if (point.precip !== null && point.precip > maxPrecip) {
        maxPrecip = point.precip;
        maxPrecipIndex = index;
      }

      if (point.temp !== null && point.temp > maxTempValue) {
        maxTempValue = point.temp;
        maxTempIndex = index;
      }

      const lowValue = isDaily ? point.templow : point.temp;
      if (lowValue !== null && lowValue < minTempValue) {
        minTempValue = lowValue;
        minTempIndex = index;
      }

      if (!isDaily && firstRainIndex === -1 && point.precip !== null && point.precip > 0) {
        firstRainIndex = index;
      }
    });
    const barMaxHeight = isDaily ? 0 : rainLaneHeight;

    const ticks = [
      { value: scaleMax, y: plotTop },
      { value: (scaleMax + scaleMin) / 2, y: plotTop + plotHeight / 2 },
      { value: scaleMin, y: plotBottom },
    ];

    const grid = ticks
      .map((tick) => `<line x1="0" y1="${tick.y.toFixed(1)}" x2="${width}" y2="${tick.y.toFixed(1)}" class="chart-grid-line"></line>`)
      .join("");

    const barWidth = FORECAST_ITEM_WIDTH;
    const bars = !isDaily && maxPrecip > 0
      ? points
          .map((point, index) => {
            if (point.precip === null) return "";
            const barHeight = (point.precip / maxPrecip) * barMaxHeight;
            if (barHeight <= 0) return "";
            const x = index * FORECAST_ITEM_WIDTH;
            const barTop = rainLaneBottom - barHeight;
            const radius = Math.min(3, barHeight / 2);
            const path = `M${x.toFixed(1)} ${rainLaneBottom.toFixed(1)} V${(barTop + radius).toFixed(1)} Q${x.toFixed(1)} ${barTop.toFixed(1)} ${(x + radius).toFixed(1)} ${barTop.toFixed(1)} H${(x + barWidth - radius).toFixed(1)} Q${(x + barWidth).toFixed(1)} ${barTop.toFixed(1)} ${(x + barWidth).toFixed(1)} ${(barTop + radius).toFixed(1)} V${rainLaneBottom.toFixed(1)} Z`;
            return `<path d="${path}" class="chart-rain-bar"></path>`;
          })
          .join("")
      : "";

    const rainBadgeWidth = 52;
    const rainBadgeHeight = 15;
    const rainBadgeY = rainLaneBottom - rainBadgeHeight;
    const rainBadges = !isDaily && maxPrecip > 0
      ? points
          .map((point) => {
            if (point.precip === null || point.precip <= 0) return "";
            const isPeakRain = point.index === maxPrecipIndex;
            return `<g class="chart-rain-value${isPeakRain ? " chart-rain-value--peak" : ""}"><rect x="${(point.x - rainBadgeWidth / 2).toFixed(1)}" y="${rainBadgeY.toFixed(1)}" width="${rainBadgeWidth}" height="${rainBadgeHeight}" rx="4" class="chart-rain-value-bg"></rect><text x="${point.x.toFixed(1)}" y="${(rainBadgeY + rainBadgeHeight / 2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" class="chart-rain-value-label">${this._formatNumber(point.precip, 1)} mm</text></g>`;
          })
          .join("")
      : "";

    const tempPoints = points.filter((point) => point.temp !== null);
    const lowPoints = isDaily ? points.filter((point) => point.templow !== null) : [];

    const tempLine = tempPoints.length > 1
      ? `<polyline points="${tempPoints.map((point) => `${point.x.toFixed(1)},${yForTemp(point.temp).toFixed(1)}`).join(" ")}" class="chart-temp-line"></polyline>`
      : "";

    const lowLine = lowPoints.length > 1
      ? `<polyline points="${lowPoints.map((point) => `${point.x.toFixed(1)},${yForTemp(point.templow).toFixed(1)}`).join(" ")}" class="chart-temp-low-line"></polyline>`
      : "";

    const band = isDaily && tempPoints.length > 1 && lowPoints.length > 1
      ? `<polygon points="${tempPoints.map((point) => `${point.x.toFixed(1)},${yForTemp(point.temp).toFixed(1)}`).join(" ")} ${lowPoints.slice().reverse().map((point) => `${point.x.toFixed(1)},${yForTemp(point.templow).toFixed(1)}`).join(" ")}" class="chart-temp-band"></polygon>`
      : "";

    const badgeRadius = 13;
    const badgeY = (value) => Math.max(badgeRadius + 1, Math.min(plotBottom, yForTemp(value)));
    const valueBadge = (point, value, className) => {
      const isPeak = isDaily
        ? (className === "chart-value-max" && point.index === maxTempIndex)
          || (className === "chart-value-min" && point.index === minTempIndex)
        : point.index === maxTempIndex || point.index === minTempIndex;
      const cy = badgeY(value);
      return `<g class="chart-value ${className}${isPeak ? " chart-value--peak" : ""}"><circle cx="${point.x.toFixed(1)}" cy="${cy.toFixed(1)}" r="${badgeRadius}" class="chart-value-circle"></circle><text x="${point.x.toFixed(1)}" y="${cy.toFixed(1)}" text-anchor="middle" dominant-baseline="central" class="chart-value-label">${this._formatNumber(value, 1)}°</text></g>`;
    };
    const valueBadges = [
      ...tempPoints.map((point) => valueBadge(point, point.temp, "chart-value-max")),
      ...lowPoints.map((point) => valueBadge(point, point.templow, "chart-value-min")),
    ].join("");

    const labels = points
      .map((point) => {
        const dayLabel = point.dayLabel
          ? `<tspan class="chart-x-label-day" dx="3">${point.dayLabel}</tspan>`
          : "";
        return `<text x="${point.x.toFixed(1)}" y="${xLabelY}" text-anchor="middle" class="chart-x-label">${point.label}${dayLabel}</text>`;
      })
      .join("");

    const axisLabels = ticks
      .map((tick) => `<span style="top:${((tick.y / height) * 100).toFixed(2)}%">${Math.round(tick.value)}</span>`)
      .join("");

    const legendButton = (label, actionLabel, markerClass, targetIndex, markerType = "line") => {
      if (!Number.isInteger(targetIndex) || targetIndex < 0) return "";
      const marker = markerType === "bar"
        ? `<span class="chart-legend-bar"></span>`
        : `<span class="chart-legend-line ${markerClass}"></span>`;
      return `<button type="button" class="chart-legend-item chart-legend-action" data-chart-index="${targetIndex}" title="${actionLabel}" aria-label="${actionLabel}">${marker}${label}</button>`;
    };

    const legendAction = (label, actionLabel, targetIndex) => {
      if (!Number.isInteger(targetIndex) || targetIndex < 0) return "";
      return `<button type="button" class="chart-legend-action" data-chart-index="${targetIndex}" title="${actionLabel}" aria-label="${actionLabel}">${label}</button>`;
    };

    const maxTempAction = getTranslation(this._hass, "chart_go_max_temp");
    const minTempAction = getTranslation(this._hass, "chart_go_min_temp");
    const firstRainAction = getTranslation(this._hass, "chart_go_first_rain");
    const maxRainAction = getTranslation(this._hass, "chart_go_max_rain");

    const dailyLegend = `${legendButton(getTranslation(this._hass, "chart_max"), maxTempAction, "chart-legend-max", maxTempIndex)}${legendButton(getTranslation(this._hass, "chart_min"), minTempAction, "chart-legend-min", minTempIndex)}`;
    const tempActions = [
      legendAction(getTranslation(this._hass, "chart_max"), maxTempAction, maxTempIndex),
      legendAction(getTranslation(this._hass, "chart_min"), minTempAction, minTempIndex),
    ].filter(Boolean);
    const rainActions = [
      legendAction(getTranslation(this._hass, "chart_first_rain"), firstRainAction, firstRainIndex),
      legendAction(getTranslation(this._hass, "chart_max"), maxRainAction, maxPrecipIndex),
    ].filter(Boolean);
    const tempGroup = tempActions.length
      ? `<span class="chart-legend-item chart-legend-group"><span class="chart-legend-line chart-legend-temp"></span><span>${getTranslation(this._hass, "chart_temperature")}</span><span class="chart-legend-subactions">${tempActions.join('<span class="chart-legend-separator">/</span>')}</span></span>`
      : "";
    const rainGroup = rainActions.length
      ? `<span class="chart-legend-item chart-legend-group"><span class="chart-legend-bar"></span><span>${getTranslation(this._hass, "chart_rain")}</span><span class="chart-legend-subactions">${rainActions.join('<span class="chart-legend-separator">/</span>')}</span></span>`
      : "";
    const legend = isDaily ? dailyLegend : `${tempGroup}${rainGroup}`;

    const viewportWidth = this.visibleItems * FORECAST_ITEM_WIDTH - 8;
    return `
      <div class="chart-block">
        <div class="chart-header">
          <span class="chart-title">${getTranslation(this._hass, "forecast_trend")}</span>
          <span class="chart-legend">${legend}</span>
        </div>
        <div class="chart-body">
          <div class="chart-viewport" style="width:${viewportWidth}px;">
            <div class="chart-track" style="width:${width}px;">
              <svg class="forecast-chart" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" role="img" aria-label="${getTranslation(this._hass, "forecast_trend")}">
                ${grid}
                ${bars}
                ${band}
                ${lowLine}
                ${tempLine}
                ${rainBadges}
                ${valueBadges}
                ${labels}
              </svg>
            </div>
          </div>
          <div class="chart-y-axis" style="height:${height}px;">${axisLabels}</div>
        </div>
      </div>
    `;
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

  _getMoonIcon(phase) {
    const icon_map = {
      "new_moon": "mdi:moon-new",
      "waxing_crescent": "mdi:moon-waxing-crescent",
      "first_quarter": "mdi:moon-first-quarter",
      "waxing_gibbous": "mdi:moon-waxing-gibbous",
      "full_moon": "mdi:moon-full",
      "waning_gibbous": "mdi:moon-waning-gibbous",
      "last_quarter": "mdi:moon-last-quarter",
      "waning_crescent": "mdi:moon-waning-crescent",
      "unknown": "mdi:moon",
    };
    return icon_map[phase] || "mdi:moon";
  }

  _formatNumber(value, decimals = 1) {
    if (value === "-" || value === null || value === undefined || isNaN(value)) {
      return "-";
    }
    const lang = this._hass?.language || "es";
    const localeMap = {
      en: "en-US",
      "en-GB": "en-GB",
      es: "es-ES",
      ca: "ca-ES"
    };
    const locale = localeMap[lang] || "es-ES";
    return Number(value).toLocaleString(locale, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
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
      const precipitationIntensity = this._config.precipitation_intensity_entity ? this._hass.states[this._config.precipitation_intensity_entity] : null;
      const sunrise = this._hass.states[this._config.sunrise_entity];
      const sunset = this._hass.states[this._config.sunset_entity];
      const lightningTown = this._config.lightning_town_entity ? this._hass.states[this._config.lightning_town_entity] : null;
      const lightningRegion = this._config.lightning_region_entity ? this._hass.states[this._config.lightning_region_entity] : null;
      const moonPhase = this._config.moon_phase_entity ? this._hass.states[this._config.moon_phase_entity] : null;
      const moonrise = this._hass.states[this._config.moonrise_entity];
      const moonset = this._hass.states[this._config.moonset_entity];
      const alertsEntity = this._config.alerts_entity ? this._hass.states[this._config.alerts_entity] : null;
      const townName = this._config.town_name_entity ? this._hass.states[this._config.town_name_entity]?.state ?? "-" : "-";
      const stationTimestamp = this._config.station_timestamp_entity ? this._hass.states[this._config.station_timestamp_entity] : null;

      // Nuevas entidades para overrides
      const pressure = this._config.pressure_entity ? this._hass.states[this._config.pressure_entity]?.state ?? "-" : entity.attributes?.pressure ?? "-";
      const uvIndex = this._config.uv_index_entity ? this._hass.states[this._config.uv_index_entity]?.state ?? "-" : entity.attributes?.uv_index ?? "-";
      const temperature = this._config.temperature_entity ? this._hass.states[this._config.temperature_entity]?.state ?? "-" : entity.attributes?.temperature ?? "-";
      const windBearing = this._config.wind_bearing_entity ? this._hass.states[this._config.wind_bearing_entity]?.state ?? "-" : entity.attributes?.wind_bearing ?? "-";
      const windGustSpeed = this._config.wind_gust_speed_entity ? this._hass.states[this._config.wind_gust_speed_entity]?.state ?? "-" : entity.attributes?.wind_gust_speed ?? "-";
      const windSpeed = this._config.wind_speed_entity ? this._hass.states[this._config.wind_speed_entity]?.state ?? "-" : entity.attributes?.wind_speed ?? "-";
      const humidity = this._config.humidity_entity ? this._hass.states[this._config.humidity_entity]?.state ?? "-" : entity.attributes?.humidity ?? "-";
      const solarGlobalIrradiance = this._config.solar_global_irradiance_entity ? this._hass.states[this._config.solar_global_irradiance_entity]?.state ?? "-" : entity.attributes?.solar_global_irradiance ?? "-";
      const etoDaily = this._config.eto_daily_entity ? this._hass.states[this._config.eto_daily_entity]?.state ?? "-" : "-";
      const etoHourly = this._config.eto_hourly_entity ? this._hass.states[this._config.eto_hourly_entity]?.state ?? "-" : "-";
      const sun = this._config.sun_entity ? this._hass.states[this._config.sun_entity] : null;
      const sunState = sun?.state ? getTranslation(this._hass, sun.state, {}, sun.state) : "-";
      const sunAzimuth = sun?.attributes?.azimuth ?? "-";

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

      const cardinalDirection = this._convertDegreesToCardinal(windBearing);
      const windSpeedUnit = entity.attributes?.wind_speed_unit ?? "km/h";
      const windDisplay = windSpeed !== "-" && windGustSpeed !== "-"
        ? getTranslation(this._hass, 'wind', { value: `${cardinalDirection} ${this._formatNumber(windSpeed)} ${windSpeedUnit} (${getTranslation(this._hass, 'gust')} ${this._formatNumber(windGustSpeed)} ${windSpeedUnit})` })
        : windSpeed !== "-"
          ? getTranslation(this._hass, 'wind', { value: `${cardinalDirection} ${this._formatNumber(windSpeed)} ${windSpeedUnit}` })
          : getTranslation(this._hass, 'wind', { value: `${cardinalDirection} -` });

      this._dailyForecasts = await this._fetchForecasts("daily");
      this._hourlyForecasts = await this._fetchForecasts("hourly");
      const chartHtml = this._buildForecastChart(
        this._currentForecast,
        this._currentForecast === "daily" ? this._dailyForecasts : this._hourlyForecasts
      );

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
                    const forecastDay = this._formatForecastDate(forecast.datetime);
                    return `
                      <div class="forecast-item">
                        <div class="forecast-day">${forecastDay}</div>
                        <img src="${forecastIcon}" alt="${condition}" class="forecast-icon" draggable="false">
                        <div class="forecast-temp">${this._formatNumber(maxTemp)}°C / ${this._formatNumber(minTemp)}°C</div>
                        <div class="forecast-precip"><ha-icon icon="mdi:weather-rainy"></ha-icon>${this._formatNumber(pop, 0)}%</div>
                      </div>
                    `;
                  }).join("")}
                </div>
              </div>
              ${chartHtml}
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
                        <img src="${forecastIcon}" alt="${condition}" class="forecast-icon" draggable="false">
                        <div class="forecast-temp">${this._formatNumber(temp)}°C</div>
                        <div class="forecast-humidity"><ha-icon icon="mdi:water-percent"></ha-icon>${getTranslation(this._hass, 'humidity', { value: this._formatNumber(humidity, 0) })}</div>
                        <div class="forecast-precip"><ha-icon icon="mdi:weather-rainy"></ha-icon>${this._formatNumber(pos)} mm</div>
                        <div class="forecast-wind"><ha-icon icon="mdi:weather-windy"></ha-icon>${this._formatNumber(windSpeed)} km/h</div>
                      </div>
                    `;
                  }).join("")}
                </div>
              </div>
              ${chartHtml}
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
        const alertCount = Number.parseInt(alertsEntity.state ?? 0, 10) || 0;
        const alertKeys = [
          "alert_wind",
          "alert_rain_intensity",
          "alert_rain_intensity_30_min",
          "alert_rain_intensity_3_hours",
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
          "alert_rain_intensity_30_min": getTranslation(this._hass, 'rain_intensity_alert_30_min'),
          "alert_rain_intensity_3_hours": getTranslation(this._hass, 'rain_intensity_alert_3_hours'),
          "alert_rain": getTranslation(this._hass, 'rain_alert'),
          "alert_sea": getTranslation(this._hass, 'sea_alert'),
          "alert_cold": getTranslation(this._hass, 'cold_alert'),
          "alert_warm": getTranslation(this._hass, 'warm_alert'),
          "alert_warm_night": getTranslation(this._hass, 'warm_night_alert'),
          "alert_snow": getTranslation(this._hass, 'snow_alert')
        };
        const alertIconMap = {
          "alert_wind": "mdi:weather-windy",
          "alert_rain_intensity": "mdi:weather-pouring",
          "alert_rain_intensity_30_min": "mdi:weather-pouring",
          "alert_rain_intensity_3_hours": "mdi:weather-pouring",
          "alert_rain": "mdi:weather-rainy",
          "alert_sea": "mdi:waves",
          "alert_cold": "mdi:snowflake",
          "alert_warm": "mdi:thermometer-high",
          "alert_warm_night": "mdi:weather-night",
          "alert_snow": "mdi:weather-snowy"
        };
        const activeAlerts = [];
        for (const key of alertKeys) {
          const entityId = this._config[`${key}_entity`];
          if (!entityId) continue;
          const specific = this._hass.states[entityId];
          if (specific?.state !== "opened") continue;

          const attrs = specific.attributes ?? {};
          const levelMeta = getAlertLevelMeta(this._hass, attrs.peligro);
          const expiryTs = attrs.fin && isFinite(new Date(attrs.fin).getTime())
            ? new Date(attrs.fin).getTime()
            : Number.POSITIVE_INFINITY;
          const startTs = attrs.inicio && isFinite(new Date(attrs.inicio).getTime())
            ? new Date(attrs.inicio).getTime()
            : null;
          const expiry = Number.isFinite(expiryTs) ? this._formatTimestamp(attrs.fin) : "";
          const start = startTs !== null ? this._formatTimestamp(attrs.inicio) : "";
          const isUpcoming = startTs !== null && startTs > Date.now();
          const danger = Number.parseInt(attrs.peligro, 10);

          let attrDetails = '';
          const attrKeys = ["inicio", "fin", "fecha", "periodo", "source", "comentario", "umbral", "peligro", "nivel"];
          attrKeys.forEach(attrKey => {
            if (attrs[attrKey] !== undefined && attrs[attrKey] !== null) {
              const displayValue = attrKey === "source"
                ? getAlertSourceLabel(this._hass, attrs[attrKey])
                : attrKey === "umbral"
                  ? getThresholdTranslation(this._hass, key, attrs[attrKey], attrs[attrKey])
                  : (attrKey === "inicio" || attrKey === "fin")
                    ? this._formatTimestamp(attrs[attrKey])
                    : attrs[attrKey];
              attrDetails += `<div class="alert-attr"><span class="alert-attr-name">${getTranslation(this._hass, attrKey)}:</span> <span class="alert-attr-value">${displayValue}</span></div>`;
            }
          });
          activeAlerts.push({
            key,
            name: alertMap[key],
            icon: alertIconMap[key] || "mdi:alert",
            levelMeta,
            start,
            expiry,
            expiryTs,
            isUpcoming,
            danger: Number.isFinite(danger) ? danger : 0,
            sortIndex: alertKeys.indexOf(key),
            detailHtml: `
              <div class="alert-detail-item${this._alertsExpanded && this._selectedAlertKey === key ? " alert-detail-item--highlighted" : ""}" data-alert-key="${key}" id="alert-detail-${key}" tabindex="-1" style="--alert-detail-bg: ${levelMeta.background}; --alert-detail-fg: ${levelMeta.textColor};">
                <div class="alert-name">${alertMap[key]}</div>
                ${attrDetails}
              </div>
            `
          });
        }

        activeAlerts.sort((a, b) => {
          if (a.expiryTs !== b.expiryTs) return a.expiryTs - b.expiryTs;
          if (b.danger !== a.danger) return b.danger - a.danger;
          return a.sortIndex - b.sortIndex;
        });

        const detailsHtml = activeAlerts.map(({ detailHtml }) => detailHtml).join("");

        alertsHtml = `
          <div class="alerts-section">
            <div class="alerts-title">${getTranslation(this._hass, 'alerts')}</div>
        `;
        if (alertCount === 0) {
          const noAlertMeta = getNoAlertMeta(this._hass);
          alertsHtml += `
            <div class="alerts-badges">
              <div class="alert-badge alert-badge--none" style="--alert-badge-color: ${noAlertMeta.color}; --alert-badge-bg: ${noAlertMeta.background}; --alert-badge-fg: ${noAlertMeta.textColor};">
                <ha-icon icon="mdi:check-circle"></ha-icon>
                <span class="alert-badge-name">${noAlertMeta.label}</span>
              </div>
            </div>
          `;
        } else {
          alertsHtml += `
            <div class="alerts-summary">
              <ha-icon icon="mdi:alert-circle" style="color: red;"></ha-icon> ${getTranslation(this._hass, 'active_alerts', { count: alertCount })}
            </div>
          `;
        }

        if (alertCount > 0 && activeAlerts.length > 0 && this._config.option_show_alert_badges !== false) {
          alertsHtml += `
            <div class="alerts-badges">
              ${activeAlerts.map(({ key, name, icon, levelMeta, start, expiry, isUpcoming }) => {
                const upcomingLabel = getTranslation(this._hass, 'upcoming');
                const statusLabel = isUpcoming ? `${upcomingLabel} - ${levelMeta.label}` : levelMeta.label;
                const rightLines = [];
                if (isUpcoming) {
                  rightLines.push(`<span class="alert-badge-upcoming">${upcomingLabel}</span>`);
                  if (start) {
                    rightLines.push(`<span>${start}</span>`);
                  }
                } else if (expiry) {
                  rightLines.push(`<span>${getTranslation(this._hass, 'until', { value: expiry })}</span>`);
                }
                const rightInfoHtml = rightLines.length
                  ? `<span class="alert-badge-dates">${rightLines.join("")}</span>`
                  : "";
                return `
                  <button type="button" class="alert-badge alert-badge--${levelMeta.key}" data-alert-key="${key}" aria-controls="alert-detail-${key}" style="--alert-badge-color: ${levelMeta.color}; --alert-badge-bg: ${levelMeta.background}; --alert-badge-fg: ${levelMeta.textColor};" title="${name}: ${statusLabel}" aria-label="${name}: ${statusLabel}">
                    <ha-icon icon="${icon}"></ha-icon>
                    <span class="alert-badge-name">${name}</span>
                    <span class="alert-badge-level">${levelMeta.label}</span>
                    ${rightInfoHtml}
                  </button>
                `;
              }).join("")}
            </div>
          `;
        }

        if (alertCount > 0 && detailsHtml) {
          const detailsOpen = this._alertsExpanded ? " open" : "";
          alertsHtml += `
            <details class="alerts-details"${detailsOpen}>
              <summary class="alerts-details-summary">
                <span>${getTranslation(this._hass, 'alerts_details')}</span>
                <ha-icon class="alerts-details-chevron" icon="mdi:chevron-down"></ha-icon>
              </summary>
              <div class="alerts-details-content">${detailsHtml}</div>
            </details>
          `;
        }
        alertsHtml += `</div>`;
      }

      const formattedTimestamp = this._formatStationTimestamp(stationTimestamp?.state);
      const translatedMoonPhase = getTranslation(this._hass, moonPhase?.state || 'unknown');

      const sunriseTs = sunrise?.state ? new Date(sunrise.state).getTime() : null;
      const sunsetTs = sunset?.state ? new Date(sunset.state).getTime() : null;

      const sunriseInfo = this._getMoreInfoEntity(this._config.sunrise_entity);
      const sunsetInfo = this._getMoreInfoEntity(this._config.sunset_entity);
      const sunriseDetail = this._renderDetail(sunriseInfo, "mdi:weather-sunset-up", getTranslation(this._hass, 'sunrise', { value: this._formatTimestamp(sunrise?.state) }));
      const sunsetDetail = this._renderDetail(sunsetInfo, "mdi:weather-sunset-down", getTranslation(this._hass, 'sunset', { value: this._formatTimestamp(sunset?.state) }));

      let sunFirst = '';
      let sunSecond = '';
      if (sunriseTs !== null && sunsetTs !== null) {
        if (sunriseTs < sunsetTs) {
          sunFirst = sunriseDetail;
          sunSecond = sunsetDetail;
        } else {
          sunFirst = sunsetDetail;
          sunSecond = sunriseDetail;
        }
      } else {
        sunFirst = sunriseDetail;
        sunSecond = sunsetDetail;
      }

      const moonriseTs = moonrise?.state ? new Date(moonrise.state).getTime() : null;
      const moonsetTs = moonset?.state ? new Date(moonset.state).getTime() : null;
      const moonriseInfo = this._getMoreInfoEntity(this._config.moonrise_entity);
      const moonsetInfo = this._getMoreInfoEntity(this._config.moonset_entity);
      const moonriseDetail = this._renderDetail(moonriseInfo, "mdi:weather-moonset-up", getTranslation(this._hass, 'moonrise', { value: this._formatTimestamp(moonrise?.state) }));
      const moonsetDetail = this._renderDetail(moonsetInfo, "mdi:weather-moonset-down", getTranslation(this._hass, 'moonset', { value: this._formatTimestamp(moonset?.state) }));

      let moonFirst = '';
      let moonSecond = '';
      if (moonriseTs !== null && moonsetTs !== null) {
        if (moonriseTs < moonsetTs) {
          moonFirst = moonriseDetail;
          moonSecond = moonsetDetail;
        } else {
          moonFirst = moonsetDetail;
          moonSecond = moonriseDetail;
        }
      } else {
        moonFirst = moonsetDetail;
        moonSecond = moonriseDetail;
      }

      const precipitationValue = precipitation?.state ?? entity.attributes?.precipitation ?? "-";
      const precipitationIntensityValue =
        precipitationIntensity && precipitationIntensity.state
          ? ` (${this._formatNumber(precipitationIntensity.state)} mm/h)`
          : "";
      const precipitationDisplay =
        precipitationValue !== "-"
          ? `${this._formatNumber(precipitationValue)} mm${precipitationIntensityValue}`
          : "-";

      const maxTempInfo = this._getMoreInfoEntity(this._config.forecast_max_entity);
      const minTempInfo = this._getMoreInfoEntity(this._config.forecast_min_entity);
      const humidityInfo = this._getMoreInfoEntity(this._config.humidity_entity);
      const windInfo = this._getMoreInfoEntity(this._config.wind_speed_entity, this._config.wind_gust_speed_entity);
      const precipitationProbabilityInfo = this._getMoreInfoEntity(this._config.precipitation_probability_entity);
      const precipitationInfo = this._getMoreInfoEntity(this._config.precipitation_entity);
      const pressureInfo = this._getMoreInfoEntity(this._config.pressure_entity);
      const lightningInfo = this._getMoreInfoEntity(this._config.lightning_town_entity, this._config.lightning_region_entity);
      const uvIndexInfo = this._getMoreInfoEntity(this._config.uv_index_entity);
      const solarInfo = this._getMoreInfoEntity(this._config.solar_global_irradiance_entity);
      const etoHourlyInfo = this._getMoreInfoEntity(this._config.eto_hourly_entity);
      const etoDailyInfo = this._getMoreInfoEntity(this._config.eto_daily_entity);
      const sunInfo = this._getMoreInfoEntity(this._config.sun_entity);
      const moonInfo = this._getMoreInfoEntity(this._config.moon_phase_entity);

      let detailsHtml = `
        <div class="details">
          ${this._renderDetail(maxTempInfo, "mdi:thermometer-high", getTranslation(this._hass, 'max_temp', { value: this._formatNumber(forecastMax?.state ?? "-") }))}
          ${this._renderDetail(minTempInfo, "mdi:thermometer-low", getTranslation(this._hass, 'min_temp', { value: this._formatNumber(forecastMin?.state ?? "-") }))}
          ${this._renderDetail(humidityInfo, "mdi:water-percent", getTranslation(this._hass, 'humidity', { value: this._formatNumber(humidity, 0) }))}
          ${this._renderDetail(windInfo, "mdi:weather-windy", windDisplay)}
          ${this._renderDetail(precipitationProbabilityInfo, "mdi:weather-pouring", getTranslation(this._hass, 'precipitation_probability', { value: this._formatNumber(precipitationProbability?.state ?? entity.attributes?.precipitation_probability ?? "-", 0) }))}
          ${this._renderDetail(precipitationInfo, "mdi:weather-rainy", getTranslation(this._hass, 'precipitation', { value: precipitationDisplay }))}
          ${this._renderDetail(pressureInfo, "mdi:gauge", getTranslation(this._hass, 'pressure', { value: this._formatNumber(pressure, 0) }))}
          ${this._renderDetail(lightningInfo, "mdi:flash", `${lightningTown?.state ?? "-"} / ${lightningRegion?.state ?? "-"}`)}
          ${this._renderDetail(uvIndexInfo, "mdi:weather-sunny-alert", getTranslation(this._hass, 'uv_index', { value: `UV ${this._formatNumber(uvIndex)}` }))}
          ${this._renderDetail(solarInfo, "mdi:sun-wireless-outline", getTranslation(this._hass, 'solar_global_irradiance', { value: this._formatNumber(solarGlobalIrradiance, 0) }))}
      `;

      if (this._config.option_show_eto) {
        detailsHtml += `
          ${this._renderDetail(etoHourlyInfo, "mdi:water-outline", getTranslation(this._hass, 'eto_hourly', { value: this._formatNumber(etoHourly) }))}
          ${this._renderDetail(etoDailyInfo, "mdi:water-outline", getTranslation(this._hass, 'eto_daily', { value: this._formatNumber(etoDaily) }))}
        `;
      }

      if (this._config.option_show_sun_info) {
        detailsHtml += `
          ${this._renderDetail(sunInfo, "mdi:weather-sunny", sunState)}
          ${this._renderDetail(sunInfo, "mdi:sun-angle-outline", getTranslation(this._hass, 'azimuth', { value: this._formatNumber(sunAzimuth, 0) }))}
        `;
      }

      if (this._config.option_show_moon_info) {
        detailsHtml += `
          ${this._renderDetail(moonInfo, this._getMoonIcon(moonPhase?.state), getTranslation(this._hass, 'moon_phase', { value: translatedMoonPhase }))}
          ${this._renderDetail(moonInfo, "mdi:weather-night", getTranslation(this._hass, 'illuminated_percentage', { value: this._formatNumber(moonPhase?.attributes?.illuminated_percentage ?? "-", 0) }))}
        `;
      }

      if (this._config.option_show_sun_times) {
        detailsHtml += sunFirst + sunSecond;
      }

      if (this._config.option_show_moon_times) {
        detailsHtml += moonFirst + moonSecond;
      }

      detailsHtml += `</div>`;

      const temperatureInfo = this._getMoreInfoEntity(this._config.temperature_entity);
      const feelsLikeInfo = this._getMoreInfoEntity(this._config.feels_like_entity);

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
            .more-info-action { cursor: pointer; border-radius: 6px; user-select: none; transition: background 0.15s ease; }
            .detail.more-info-action { padding: 2px 4px; margin: -2px -4px; }
            .current-temp.more-info-action, .current-feels.more-info-action { padding: 0 6px; margin-left: -6px; margin-right: -6px; }
            .more-info-action:hover, .more-info-action:focus-visible { background: var(--secondary-background-color, rgba(127, 127, 127, 0.15)); }
            .more-info-action:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 2px; }
            .forecast-toggle { display: flex; gap: 8px; padding: 8px 20px; }
            .toggle-btn { padding: 4px 8px; border: 1px solid var(--divider-color); background: none; cursor: pointer; border-radius: 4px; font-family: sans-serif; }
            .toggle-btn.active { background-color: var(--primary-color); color: white; }
            .forecast-section { padding: 8px 20px; opacity: 1; transition: opacity ${this._fadeDuration}s ease-in-out; }
            .forecast-title { font-size: 1.1em; font-weight: 500; margin-bottom: 4px; font-family: sans-serif; }
            .chart-block { --mc-chart-max: var(--warning-color, #ef6c00); --mc-chart-min: var(--info-color, #1e88e5); --mc-chart-temp: var(--warning-color, #ef6c00); --mc-chart-rain: var(--primary-color, #2196f3); margin: 4px 0 6px; }
            .chart-header { display: flex; flex-wrap: wrap; align-items: center; gap: 4px 12px; margin-bottom: 4px; font-family: sans-serif; }
            .chart-title { font-size: 0.95em; font-weight: 500; }
            .chart-legend { display: flex; flex-wrap: wrap; align-items: center; gap: 2px 8px; color: var(--secondary-text-color); font-size: 0.74em; }
            .chart-legend-item { display: flex; align-items: center; gap: 4px; white-space: nowrap; }
            .chart-legend-group { gap: 3px; }
            .chart-legend-subactions { display: inline-flex; align-items: center; gap: 2px; }
            .chart-legend-subactions::before { content: "("; }
            .chart-legend-subactions::after { content: ")"; }
            .chart-legend-subactions .chart-legend-action { padding: 0 2px; }
            .chart-legend-separator { color: var(--secondary-text-color); opacity: 0.65; }
            .chart-legend-action { padding: 1px 4px; border: 0; border-radius: 4px; background: none; color: inherit; font: inherit; cursor: pointer; }
            .chart-legend-action:hover { color: var(--primary-text-color); background: var(--secondary-background-color, rgba(127, 127, 127, 0.12)); }
            .chart-legend-action:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 2px; }
            .chart-legend-line { display: inline-block; width: 14px; height: 3px; border-radius: 2px; }
            .chart-legend-max, .chart-legend-temp { background: var(--mc-chart-max); }
            .chart-legend-min { background: var(--mc-chart-min); }
            .chart-legend-bar { display: inline-block; width: 8px; height: 10px; border-radius: 1px; background: var(--mc-chart-rain); opacity: 0.5; }
            .chart-body { position: relative; }
            .chart-viewport { overflow: hidden; max-width: 100%; cursor: grab; touch-action: pan-y; user-select: none; }
            .chart-viewport.dragging { cursor: grabbing; }
            .chart-track { transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1); will-change: transform; }
            .forecast-chart { display: block; overflow: visible; }
            .chart-grid-line { stroke: var(--divider-color, rgba(127, 127, 127, 0.2)); stroke-width: 1; }
            .chart-x-label { fill: var(--secondary-text-color, #727272); font-size: 10px; font-family: sans-serif; }
            .chart-x-label-day { font-size: 8px; }
            .chart-temp-line { fill: none; stroke: var(--mc-chart-max); stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
            .chart-temp-low-line { fill: none; stroke: var(--mc-chart-min); stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
            .chart-temp-band { fill: var(--mc-chart-max); opacity: 0.12; }
            .chart-value, .chart-rain-value { transform-box: fill-box; transform-origin: center; transition: transform 0.2s ease; }
            .chart-value--peak { transform: scale(1.25); }
            .chart-rain-value--peak { transform: scale(1.15); }
            .chart-value-circle { fill: var(--ha-card-background, var(--card-background-color, #fff)); stroke: var(--mc-chart-max); stroke-width: 1.5; }
            .chart-value-label { fill: var(--mc-chart-max); font-size: 9px; font-weight: 600; font-family: sans-serif; }
            .chart-value-min .chart-value-circle { stroke: var(--mc-chart-min); }
            .chart-value-min .chart-value-label { fill: var(--mc-chart-min); }
            .chart-rain-bar { fill: var(--mc-chart-rain); opacity: 0.28; }
            .chart-rain-value-bg { fill: var(--ha-card-background, var(--card-background-color, #fff)); stroke: var(--mc-chart-rain); stroke-width: 1; }
            .chart-rain-value-label { fill: var(--mc-chart-rain); font-size: 8.5px; font-weight: 600; font-family: sans-serif; }
            .chart-y-axis { position: absolute; left: 0; top: 0; width: 36px; pointer-events: none; font-family: sans-serif; }
            .chart-y-axis span { position: absolute; left: 0; transform: translateY(-50%); padding: 0 2px; border-radius: 2px; background: var(--ha-card-background, var(--card-background-color, transparent)); color: var(--secondary-text-color, #727272); font-size: 10px; line-height: 1; }
            .forecast-slider { position: relative; }
            .slider-container { overflow: hidden; cursor: grab; user-select: none; max-width: 100%; touch-action: pan-y; }
            .slider-container.dragging { cursor: grabbing; }
            .slider-track { display: flex; transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1); will-change: transform; }
            .forecast-item { display: flex; flex-direction: column; align-items: center; padding: 2px; width: 100px; min-width: 100px; flex: 0 0 100px; margin-right: 8px; box-sizing: border-box; }
            .forecast-icon { width: 48px; height: 48px; -webkit-user-drag: none; user-select: none; }
            .forecast-day, .forecast-hour { font-weight: 500; font-family: sans-serif; }
            .forecast-temp { font-size: 0.9em; font-family: sans-serif; }
            .forecast-humidity { font-size: 0.9em; display: flex; align-items: center; gap: 2px; font-family: sans-serif; }
            .forecast-precip, .forecast-wind { font-size: 0.9em; display: flex; align-items: center; gap: 2px; font-family: sans-serif; }
            .forecast-precip ha-icon, .forecast-wind ha-icon, .forecast-humidity ha-icon { font-size: 0.8em; }
            .slider-bar { position: relative; height: 8px; background: var(--slider-track-color, #e0e0e0); border-radius: 4px; margin: 8px 0; cursor: pointer; }
            .slider-bg { position: absolute; top: 0; left: 0; height: 100%; width: var(--slider-value, 0%); background: var(--slider-color, var(--primary-color, #03a9f4)); border-radius: 4px; transition: width 0.3s cubic-bezier(0.25, 0.1, 0.25, 1); }
            .slider-bar.dragging .slider-bg { transition: none; }
            .alerts-section { padding: 8px 20px; }
            .alerts-title { font-size: 1.3em; font-weight: 700; margin-bottom: 4px; font-family: sans-serif; }
            .alerts-summary { display: flex; align-items: center; gap: 4px; flex-wrap: wrap; font-size: 1.0em; font-family: sans-serif; }
            .alerts-badges { display: flex; flex-direction: column; gap: 6px; margin-top: 8px; }
            .alert-badge { display: flex; align-items: center; gap: 8px; width: 100%; box-sizing: border-box; padding: 7px 10px; appearance: none; -webkit-appearance: none; border: 0; border-left: 4px solid var(--alert-badge-color, #546e7a); border-radius: 6px; background-color: var(--alert-badge-bg, #dfe6e9); color: var(--alert-badge-fg, #1f2a30); font-size: 0.9em; font-family: sans-serif; line-height: 1.35; text-align: left; white-space: normal; cursor: pointer; user-select: none; }
            .alert-badge:hover { filter: brightness(0.97); }
            .alert-badge--none { cursor: default; }
            .alert-badge--none:hover { filter: none; }
            .alert-badge:focus-visible { outline: 2px solid var(--primary-color, #03a9f4); outline-offset: 2px; }
            .alert-badge ha-icon { --mdc-icon-size: 18px; width: 18px; height: 18px; flex: 0 0 auto; color: var(--alert-badge-color, #ffffff); }
            .alert-badge-name { flex: 1 1 auto; min-width: 0; font-weight: 600; overflow-wrap: break-word; }
            .alert-badge-level { flex: 0 0 auto; font-weight: 600; }
            .alert-badge-upcoming { align-self: flex-end; padding: 2px 7px; border: 1px solid currentColor; border-radius: 999px; color: var(--alert-badge-color); font-size: 0.95em; font-weight: 600; letter-spacing: 0.03em; opacity: 1; text-transform: uppercase; }
            .alert-badge-dates { flex: 0 0 auto; display: flex; flex-direction: column; align-items: flex-end; gap: 1px; margin-left: 6px; font-size: 0.82em; font-weight: 400; line-height: 1.2; opacity: 1; white-space: nowrap; }
            .alert-badge-dates > span:not(.alert-badge-upcoming) { opacity: 0.72; }
            .alerts-details { margin-top: 8px; border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12)); padding-top: 4px; }
            .alerts-details-summary { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 5px 0; cursor: pointer; list-style: none; font-size: 1.15em; font-weight: 700; font-family: sans-serif; color: var(--primary-text-color); }
            .alerts-details-summary::-webkit-details-marker { display: none; }
            .alerts-details-chevron { transition: transform 0.2s ease; }
            .alerts-details[open] .alerts-details-chevron { transform: rotate(180deg); }
            .alerts-details-content { padding-top: 4px; }
            .alert-detail-item { margin-bottom: 10px; padding: 6px 8px; border-radius: 6px; outline: none; transition: background-color 0.2s ease, color 0.2s ease; }
            .alert-detail-item--highlighted { background-color: var(--alert-detail-bg, var(--secondary-background-color, rgba(127, 127, 127, 0.12))); color: var(--alert-detail-fg, var(--primary-text-color)); }
            .alert-name { font-weight: bold; font-size: 1.0em; text-decoration: underline; font-family: sans-serif; }
            .alert-attr { font-size: 0.9em; color: var(--secondary-text-color); font-family: sans-serif; }
            .alert-detail-item--highlighted .alert-attr { color: var(--alert-detail-fg, var(--secondary-text-color)); opacity: 0.82; }
            .alert-attr-name { font-weight: bold; }
            .alert-attr-value { }
            .attribution { text-align: center; font-size: 0.8em; color: var(--secondary-text-color); padding: 8px 20px; font-family: sans-serif; }
            :host(.narrow) .header { font-size: 1.45em; margin: 8px 12px 0; }
            :host(.narrow) .town-name, :host(.narrow) .station-timestamp { margin-left: 12px; margin-right: 12px; }
            :host(.narrow) .current { padding: 0 8px 2px; gap: 4px; }
            :host(.narrow) .current-left { gap: 4px; min-width: 0; }
            :host(.narrow) .current-left img { width: 64px; height: 64px; }
            :host(.narrow) .current-condition { font-size: 1.2em; }
            :host(.narrow) .current-temp { font-size: 1.9em; }
            :host(.narrow) .current-feels { font-size: 0.8em; margin-top: 0; }
            :host(.narrow) .details { padding: 6px 12px 8px; font-size: 0.9em; }
            :host(.narrow) .forecast-toggle, :host(.narrow) .alerts-section, :host(.narrow) .attribution { padding-left: 12px; padding-right: 12px; }
            :host(.narrow) .forecast-section { padding: 8px 12px; }
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
              <div class="current-temp${temperatureInfo ? " more-info-action" : ""}"${this._getMoreInfoAttributes(temperatureInfo)}>${this._formatNumber(temperature)}°C</div>
              <div class="current-feels${feelsLikeInfo ? " more-info-action" : ""}"${this._getMoreInfoAttributes(feelsLikeInfo)}>${getTranslation(this._hass, 'feels_like', { value: this._formatNumber(feelsLike?.state ?? "-") })}</div>
            </div>
          </div>

          ${detailsHtml}

          ${forecastHtml}

          ${alertsHtml}

          <div class="attribution">Powered by Meteocatpy & Solarmoonpy</div>
        </ha-card>
      `;

      const dailyBtn = this.shadowRoot.querySelector('#daily-btn');
      const hourlyBtn = this.shadowRoot.querySelector('#hourly-btn');
      const sliderTrack = this.shadowRoot.querySelector('.slider-track');
      const sliderBar = this.shadowRoot.querySelector('.slider-bar');
      const sliderContainer = this.shadowRoot.querySelector('.slider-container');
      const chartViewport = this.shadowRoot.querySelector('.chart-viewport');
      const card = this.shadowRoot.querySelector('ha-card');

      if (dailyBtn) dailyBtn.addEventListener('click', () => this._toggleForecast('daily'));
      if (hourlyBtn) hourlyBtn.addEventListener('click', () => this._toggleForecast('hourly'));

      const alertsDetails = this.shadowRoot.querySelector('.alerts-details');
      const alertsDetailsSummary = this.shadowRoot.querySelector('.alerts-details-summary');
      if (alertsDetails && alertsDetailsSummary) {
        alertsDetailsSummary.addEventListener('click', () => {
          if (alertsDetails.open) {
            this._selectedAlertKey = null;
            this.shadowRoot.querySelectorAll('.alert-detail-item--highlighted').forEach((item) => {
              item.classList.remove('alert-detail-item--highlighted');
            });
          }
        });
      }

      if (alertsDetails) {
        alertsDetails.addEventListener('toggle', () => {
          this._alertsExpanded = alertsDetails.open;
          const selected = this._selectedAlertKey
            ? this.shadowRoot.querySelector(`.alert-detail-item[data-alert-key="${this._selectedAlertKey}"]`)
            : null;

          if (alertsDetails.open) {
            if (selected) selected.classList.add('alert-detail-item--highlighted');
          } else {
            this._selectedAlertKey = null;
            this.shadowRoot.querySelectorAll('.alert-detail-item--highlighted').forEach((item) => {
              item.classList.remove('alert-detail-item--highlighted');
            });
          }
        });
      }

      this.shadowRoot.querySelectorAll('.alert-badge[data-alert-key]').forEach((badge) => {
        badge.addEventListener('click', (event) => {
          event.preventDefault();
          event.stopPropagation();
          this._openAlertDetails(badge.dataset.alertKey);
        });
      });

      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
      }
      this.resizeObserver = new ResizeObserver((entries) => {
        const cardWidth = entries[0].contentRect.width;
        this.classList.toggle("narrow", cardWidth < 464);
        this.visibleItems = cardWidth >= 448 ? 4 : cardWidth >= 340 ? 3 : cardWidth >= 232 ? 2 : 1;
        const visibleWidth = `calc(100px * ${this.visibleItems} + ${8 * (this.visibleItems - 1)}px)`;
        if (sliderContainer) {
          sliderContainer.style.width = visibleWidth;
        }
        if (chartViewport) {
          chartViewport.style.width = visibleWidth;
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
    const chartTrack = this.shadowRoot.querySelector('.chart-track');
    const chartViewport = this.shadowRoot.querySelector('.chart-viewport');

    if (!sliderTrack || !sliderBar || !sliderContainer) return;

    const itemWidth = FORECAST_ITEM_WIDTH;
    const totalItems = this._currentForecast === 'daily' ? this._dailyForecasts.length : this._hourlyForecasts.length;
    const maxSlides = Math.max(0, totalItems - this.visibleItems);
    const maxTranslate = maxSlides * itemWidth;
    let activeDragSurface = null;

    const setTrackTranslate = (translateX, animate) => {
      const transition = animate ? 'transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)' : 'none';
      sliderTrack.style.transition = transition;
      sliderTrack.style.transform = `translateX(${translateX}px)`;
      if (chartTrack) {
        chartTrack.style.transition = transition;
        chartTrack.style.transform = `translateX(${translateX}px)`;
      }
    };

    const updateSliderPosition = (percentage, animate = true) => {
      if (totalItems <= this.visibleItems) {
        this._sliderValue = 0;
        setTrackTranslate(0, false);
        sliderBar.style.setProperty('--slider-value', `0%`);
        return;
      }
      this._sliderValue = Math.max(0, Math.min(100, percentage));
      const translateX = (this._sliderValue / 100) * maxTranslate;
      this._currentSlide = Math.round(translateX / itemWidth);
      setTrackTranslate(-translateX, animate);
      sliderBar.style.setProperty('--slider-value', `${this._sliderValue}%`);
      if (animate) {
        const onTransitionEnd = () => {
          sliderTrack.removeEventListener('transitionend', onTransitionEnd);
        };
        sliderTrack.addEventListener('transitionend', onTransitionEnd);
      }
    };

    this.shadowRoot.querySelectorAll('.chart-legend-action').forEach((legendAction) => {
      legendAction.onclick = () => {
        const targetIndex = Number(legendAction.dataset.chartIndex);
        if (!Number.isInteger(targetIndex) || targetIndex < 0 || maxSlides <= 0) return;
        const centerOffset = Math.floor((this.visibleItems - 1) / 2);
        const targetSlide = Math.max(0, Math.min(maxSlides, targetIndex - centerOffset));
        updateSliderPosition((targetSlide / maxSlides) * 100);
      };
    });

    // Eventos para el slider-bar
    const onBarPointerDown = (event) => {
      if (totalItems <= this.visibleItems) return;
      event.preventDefault();
      this._isDragging = true;
      sliderBar.classList.add('dragging');
      sliderBar.setPointerCapture(event.pointerId);
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
      activeDragSurface = event.currentTarget;
      activeDragSurface.classList.add('dragging');
      activeDragSurface.setPointerCapture(event.pointerId);
      containerStartX = event.clientX;
      const transform = window.getComputedStyle(sliderTrack).transform;
      containerStartTranslate = transform === 'none' ? 0 : parseFloat(transform.split(',')[4].trim());
    };

    const onContainerPointerMove = (event) => {
      if (!this._isDragging) return;
      const delta = event.clientX - containerStartX;
      let newTranslate = containerStartTranslate + delta;
      newTranslate = Math.min(0, Math.max(-maxTranslate, newTranslate));
      setTrackTranslate(newTranslate, false);
      const percentage = (-newTranslate / maxTranslate) * 100;
      sliderBar.style.setProperty('--slider-value', `${percentage}%`);
      this._sliderValue = percentage;
    };

    const onContainerPointerUp = (event) => {
      if (!this._isDragging) return;
      this._isDragging = false;
      if (activeDragSurface) {
        activeDragSurface.classList.remove('dragging');
        if (activeDragSurface.hasPointerCapture(event.pointerId)) {
          activeDragSurface.releasePointerCapture(event.pointerId);
        }
        activeDragSurface = null;
      }
      const currentTranslate = parseFloat(window.getComputedStyle(sliderTrack).transform.split(',')[4].trim());
      const newSlide = Math.round(-currentTranslate / itemWidth);
      const percentage = (newSlide / maxSlides) * 100;
      updateSliderPosition(percentage);
    };

    const onContainerPointerCancel = (event) => {
      if (!this._isDragging) return;
      this._isDragging = false;
      if (activeDragSurface) {
        activeDragSurface.classList.remove('dragging');
        if (activeDragSurface.hasPointerCapture(event.pointerId)) {
          activeDragSurface.releasePointerCapture(event.pointerId);
        }
        activeDragSurface = null;
      }
      updateSliderPosition(this._sliderValue, false);
    };

    // Soporte legacy para touch en slider-bar
    const onBarTouchStart = (event) => {
      if ('PointerEvent' in window) return;
      if (totalItems <= this.visibleItems) return;
      event.preventDefault();
      this._isDragging = true;
      sliderBar.classList.add('dragging');
      this._legacySliderTouchCapture = event.touches[0].identifier;
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
    sliderContainer.removeEventListener('pointercancel', this._onContainerPointerCancel);
    if (chartViewport) {
      chartViewport.removeEventListener('pointerdown', this._onContainerPointerDown);
      chartViewport.removeEventListener('pointermove', this._onContainerPointerMove);
      chartViewport.removeEventListener('pointerup', this._onContainerPointerUp);
      chartViewport.removeEventListener('pointercancel', this._onContainerPointerCancel);
    }

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
    this._onContainerPointerCancel = onContainerPointerCancel;

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
    sliderContainer.addEventListener('pointercancel', onContainerPointerCancel);
    if (chartViewport) {
      chartViewport.addEventListener('pointerdown', onContainerPointerDown);
      chartViewport.addEventListener('pointermove', onContainerPointerMove);
      chartViewport.addEventListener('pointerup', onContainerPointerUp);
      chartViewport.addEventListener('pointercancel', onContainerPointerCancel);
    }

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
  preview: true,
  getEntitySuggestion: (hass, entityId) => {
    if (typeof entityId !== "string" || !entityId.startsWith("weather.")) return null;
    if (hass?.entities?.[entityId]?.platform !== "meteocat") return null;
    return { config: { type: "custom:meteocat-card", entity: entityId } };
  },
});