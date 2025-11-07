// Traducciones embebidas
const translations = {
  en: {
    title_default: "Meteocat",
    card_name: "Meteocat Card",
    card_description: "Custom card to display Meteocat integration weather data.",
    editor_not_available: "Visual editor not available. Please use the YAML editor.",
    entity: "Forecast",
    daily: "Daily",
    hourly: "Hourly",
    default_forecast_view: "Default forecast view",
    option_static_icons: "Static icons",
    icon_path_type: "Icons path",
    icon_path_type_hacs: "HACS installation",
    icon_path_type_manual: "Manual installation",
    debug: "Enable debug logging",
    option_show_sun_times: "Sunrise / Sunset",
    option_show_moon_times: "Moonrise / Moonset",
    option_show_sun_info: "State / Azimuth",
    option_show_moon_info: "Phase / Illumination",
    sun_options: "Sun options",
    moon_options: "Moon options",
  },
  es: {
    title_default: "Meteocat",
    card_name: "Tarjeta Meteocat",
    card_description: "Tarjeta personalizada para mostrar datos del tiempo de la integración Meteocat.",
    editor_not_available: "Editor visual no disponible. Por favor, usa el editor YAML.",
    entity: "Previsión",
    daily: "Diario",
    hourly: "Horario",
    default_forecast_view: "Vista de previsión por defecto",
    option_static_icons: "Iconos estáticos",
    icon_path_type: "Ruta de iconos",
    icon_path_type_hacs: "Instalación HACS",
    icon_path_type_manual: "Instalación manual",
    debug: "Habilitar registro de depuración",
    option_show_sun_times: "Amanecer / Atardecer",
    option_show_moon_times: "Salida / Puesta",
    option_show_sun_info: "Estado / Acimut",
    option_show_moon_info: "Fase / Iluminación",
    sun_options: "Opciones sol",
    moon_options: "Opciones luna",
  },
  ca: {
    title_default: "Meteocat",
    card_name: "Targeta Meteocat",
    card_description: "Targeta personalitzada per mostrar dades del temps de la integració Meteocat.",
    editor_not_available: "Editor visual no disponible. Si us plau, usa l'editor YAML.",
    entity: "Previsió",
    daily: "Diari",
    hourly: "Horari",
    default_forecast_view: "Vista de previsió per defecte",
    option_static_icons: "Icones estàtiques",
    icon_path_type: "Ruta d'icones",
    icon_path_type_hacs: "Instal·lació HACS",
    icon_path_type_manual: "Instal·lació manual",
    debug: "Habilitar registre de depuració",
    option_show_sun_times: "Sortida / Posta de sol",
    option_show_moon_times: "Sortida / Posta",
    option_show_sun_info: "Estat / Azimut",
    option_show_moon_info: "Fase / Il·luminació",
    sun_options: "Opcions sol",
    moon_options: "Opcions lluna",
  },
};

// Helper de traducciones
function getTranslation(hass, key, params = {}, fallback = key) {
  const lang = hass?.locale?.language || hass?.language || "en";
  let text = translations[lang]?.[key] || translations.en[key] || fallback;
  for (const [param, value] of Object.entries(params)) {
    text = text.replace(`{${param}}`, value);
  }
  return text;
}

// ==============================
// 🔹 Clase principal
// ==============================
class MeteocatCardEditor extends HTMLElement {
  constructor() {
    super();
    this._config = {};
    this._hass = null;
    this._form = null;
    this.attachShadow({ mode: "open" });
  }

  // ------------------------------
  // 🔹 Configuración inicial
  // ------------------------------
  setConfig(config) {
    this._config = {
      type: "custom:meteocat-card",
      entity: "weather.home",
      default_forecast_view: "daily",
      option_static_icons: false,
      icon_path_type: "hacs",
      option_show_sun_info: true,
      option_show_sun_times: true,
      option_show_moon_info: true,
      option_show_moon_times: true,
      debug: false,
      ...config,
    };

    this._config.iconPath =
      this._config.icon_path_type === "hacs"
        ? "/hacsfiles/meteocat-card/"
        : "/local/meteocat-card/icons/";

    // Limpieza de claves no necesarias
    delete this._config.title;
    delete this._config.icons;
    delete this._config.sunrise_entity;
    delete this._config.sunset_entity;

    this._render();
  }

  set hass(hass) {
    this._hass = hass;
    if (this._form) {
      this._form.generalForm.hass = hass;
      this._form.sunForm.hass = hass;
      this._form.moonForm.hass = hass;
    } else if (this.isConnected) {
      this._render();
    }
  }

  connectedCallback() {
    if (!this.shadowRoot.innerHTML) this._render();
  }

  // ------------------------------
  // 🔹 Renderizado del formulario
  // ------------------------------
  _render() {
    if (!this.shadowRoot) return;
    this.shadowRoot.innerHTML = "";

    const wrapper = document.createElement("div");
    const style = document.createElement("style");
    style.textContent = `
      :host {
        --mc-general-label-font-size: 1rem;
        --mc-label-font-size: 0.875rem;
        --mc-form-vertical-spacing: 8px;
      }

      .section-label {
        font-size: var(--mc-general-label-font-size);
        font-weight: normal;
        margin: 18px 0 8px;
        padding-top: 10px;
        border-top: 2px solid var(--divider-color, rgba(0,0,0,0.06));
        color: var(--primary-text-color);
      }

      .group { margin-bottom: 6px; }
      .indented-form { margin-left: 16px; }
      .indented-form ha-formfield:not(:last-child) {
        margin-bottom: var(--mc-form-vertical-spacing);
      }

      :not(.indented-form) ha-form ha-formfield label.mdc-label {
        font-size: var(--mc-general-label-font-size);
      }

      .indented-form ha-form ha-formfield label.mdc-label {
        font-size: var(--mc-label-font-size);
        line-height: normal;
      }

      ha-select option,
      ha-select .mdc-select__selected-text {
        font-size: var(--mc-label-font-size);
      }

      ha-formfield { align-items: center; }

      .error {
        color: var(--error-color);
        padding: 16px;
      }

      ha-form { display: block; }
    `;
    wrapper.appendChild(style);

    // Si no existe ha-form → error amigable
    if (!customElements.get("ha-form")) {
      const errorDiv = document.createElement("div");
      errorDiv.className = "error";
      errorDiv.textContent = getTranslation(this._hass, "editor_not_available");
      wrapper.appendChild(errorDiv);
      this.shadowRoot.appendChild(wrapper);
      return;
    }

    try {
      // === Formularios ===
      const makeForm = (data, schema, cls = "") => {
        const f = document.createElement("ha-form");
        f.hass = this._hass;
        f.data = data;
        f.schema = schema;
        if (cls) f.classList.add(cls);
        f.computeLabel = (s) => getTranslation(this._hass, s.name || s.label);
        f.computeHelper = () => "";
        return f;
      };

      // General
      const generalForm = makeForm(
        {
          entity: this._config.entity,
          default_forecast_view: this._config.default_forecast_view || "daily",
          icon_path_type: this._config.icon_path_type,
          option_static_icons: this._config.option_static_icons,
        },
        [
          { name: "entity", selector: { entity: { filter: [{ domain: "weather", integration: "meteocat" }] } } },
          {
            name: "default_forecast_view",
            selector: {
              select: {
                options: [
                  { value: "daily", label: getTranslation(this._hass, "daily") },
                  { value: "hourly", label: getTranslation(this._hass, "hourly") },
                ],
              },
            },
          },
          {
            name: "icon_path_type",
            selector: {
              select: {
                options: [
                  { value: "hacs", label: getTranslation(this._hass, "icon_path_type_hacs") },
                  { value: "manual", label: getTranslation(this._hass, "icon_path_type_manual") },
                ],
              },
            },
          },
          { name: "option_static_icons", selector: { boolean: {} } },
        ]
      );

      // Sol
      const sunForm = makeForm(
        {
          option_show_sun_info: this._config.option_show_sun_info,
          option_show_sun_times: this._config.option_show_sun_times,
        },
        [
          { name: "option_show_sun_info", selector: { boolean: {} } },
          { name: "option_show_sun_times", selector: { boolean: {} } },
        ],
        "indented-form"
      );

      // Luna
      const moonForm = makeForm(
        {
          option_show_moon_info: this._config.option_show_moon_info,
          option_show_moon_times: this._config.option_show_moon_times,
        },
        [
          { name: "option_show_moon_info", selector: { boolean: {} } },
          { name: "option_show_moon_times", selector: { boolean: {} } },
        ],
        "indented-form"
      );

      // === Manejador común de eventos ===
      const handleChange = (ev) => {
        const v = ev.detail.value || {};
        const updated = { ...this._config, ...v };
        updated.type = "custom:meteocat-card";
        if (v.icon_path_type !== undefined) {
          updated.iconPath =
            v.icon_path_type === "hacs"
              ? "/hacsfiles/meteocat-card/"
              : "/local/meteocat-card/icons/";
        }
        this._config = updated;
        this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: updated }, bubbles: true, composed: true }));
      };

      [generalForm, sunForm, moonForm].forEach((f) =>
        f.addEventListener("value-changed", handleChange)
      );

      // === Montaje del DOM ===
      const makeSection = (labelKey, form) => {
        const group = document.createElement("div");
        group.className = "group";
        if (labelKey) {
          const label = document.createElement("div");
          label.className = "section-label";
          label.textContent = getTranslation(this._hass, labelKey);
          group.appendChild(label);
        }
        group.appendChild(form);
        return group;
      };

      wrapper.append(
        makeSection(null, generalForm),
        makeSection("sun_options", sunForm),
        makeSection("moon_options", moonForm)
      );

      this.shadowRoot.appendChild(wrapper);
      this._form = { generalForm, sunForm, moonForm };
    } catch (err) {
      console.error("MeteocatCardEditor render error:", err);
      const errorDiv = document.createElement("div");
      errorDiv.className = "error";
      errorDiv.textContent = getTranslation(this._hass, "editor_not_available");
      wrapper.appendChild(errorDiv);
      this.shadowRoot.appendChild(wrapper);
    }
  }
}

// Registrar custom element
if (!customElements.get("meteocat-card-editor")) {
  customElements.define("meteocat-card-editor", MeteocatCardEditor);
}
