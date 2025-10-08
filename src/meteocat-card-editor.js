// Traducciones embebidas
const translations = {
  en: {
    title_default: "Meteocat",
    card_name: "Meteocat Card",
    card_description: "Custom card to display Meteocat integration weather data.",
    editor_not_available: "Visual editor not available. Please use the YAML editor.",
    entity: "Forecast",
    option_static_icons: "Static icons",
    icon_path_type: "Icons path",
    icon_path_type_hacs: "HACS installation",
    icon_path_type_manual: "Manual installation",
    debug: "Enable debug logging",
    option_show_sun: "Sun sensors (sunrise/sunset)",
    option_show_moon: "Moon sensors (moonrise/moonset)",
  },
  es: {
    title_default: "Meteocat",
    card_name: "Tarjeta Meteocat",
    card_description: "Tarjeta personalizada para mostrar datos del tiempo de la integración Meteocat.",
    editor_not_available: "Editor visual no disponible. Por favor, usa el editor YAML.",
    entity: "Previsión",
    option_static_icons: "Iconos estáticos",
    icon_path_type: "Ruta de iconos",
    icon_path_type_hacs: "Instalación HACS",
    icon_path_type_manual: "Instalación manual",
    debug: "Habilitar registro de depuración",
    option_show_sun: "Sensores de sol (amanecer/atardecer)",
    option_show_moon: "Sensores de luna (salida/puesta)",
  },
  ca: {
    title_default: "Meteocat",
    card_name: "Targeta Meteocat",
    card_description: "Targeta personalitzada per mostrar dades del temps de la integració Meteocat.",
    editor_not_available: "Editor visual no disponible. Si us plau, usa l'editor YAML.",
    entity: "Previsió",
    option_static_icons: "Icones estàtiques",
    icon_path_type: "Ruta d'icones",
    icon_path_type_hacs: "Instal·lació HACS",
    icon_path_type_manual: "Instal·lació manual",
    debug: "Habilitar registre de depuració",
    option_show_sun: "Sensors de sol (sortida/posta de sol)",
    option_show_moon: "Sensors de lluna (sortida/posta)",
  },
};

// Helper para obtener traducciones
function getTranslation(hass, key, params = {}, fallback = key) {
  const lang = hass?.language || "en";
  let text = translations[lang]?.[key] || translations.en[key] || fallback;
  Object.entries(params).forEach(([param, value]) => {
    text = text.replace(`{${param}}`, value);
  });
  return text;
}

class MeteocatCardEditor extends HTMLElement {
  constructor() {
    super();
    this._config = {};
    this._hass = null;
    this.attachShadow({ mode: "open" });
    this._form = null;
    console.log("MeteocatCardEditor: Constructor called");
  }

  setConfig(config) {
    this._config = {
      type: "custom:meteocat-card",
      entity: "weather.home",
      option_static_icons: false,
      icon_path_type: "hacs",
      option_show_sun: true,
      option_show_moon: true,
      debug: false,
      ...config,
      title: undefined,
    };
    this._config.iconPath = this._config.icon_path_type === "hacs" ? "/hacsfiles/meteocat-card/" : "/local/meteocat-card/icons/";
    delete this._config.title;
    delete this._config.icons;
    delete this._config.sunrise_entity;
    delete this._config.sunset_entity;
    console.log("MeteocatCardEditor: setConfig called with config =", this._config);
    this._render();
  }

  set hass(hass) {
    this._hass = hass;
    if (this._form) this._form.hass = hass;

    if (this._hass && this._config.entity && this._hass.states[this._config.entity]) {
      const friendlyName =
        this._hass.states[this._config.entity]?.attributes?.friendly_name ||
        this._config.entity;
      console.log("MeteocatCardEditor: friendly_name =", friendlyName);
    }

    this._render();
  }

  connectedCallback() {
    console.log("MeteocatCardEditor: connectedCallback called");
    this._render();
  }

  _schema() {
    return [
      {
        name: "entity",
        selector: {
          entity: {
            filter: [
              { domain: "weather", integration: "meteocat" },
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
      {
        name: "option_static_icons",
        selector: { boolean: {} },
      },
      {
        name: "option_show_sun",
        selector: { boolean: {} },
      },
      {
        name: "option_show_moon",
        selector: { boolean: {} },
      },
    ];
  }

  _render() {
    if (!this.shadowRoot) {
      console.error("MeteocatCardEditor: Shadow root not available");
      return;
    }
    this.shadowRoot.innerHTML = "";

    const wrapper = document.createElement("div");
    const style = document.createElement("style");
    style.textContent = `
      .row { margin-bottom: 10px; display:block; }
      label { font-weight: 600; display:block; margin-bottom:6px; color:var(--primary-text-color); }
      input[type="text"]{ width:100%; padding:6px 8px; box-sizing:border-box; border-radius:4px; border:1px solid rgba(0,0,0,0.12); background:var(--card-background-color); color:var(--primary-text-color); }
      .checkbox { display:flex; align-items:center; gap:8px; margin-top:8px; }
      .error { color: var(--error-color); padding: 16px; }
      ha-alert { margin-bottom: 16px; }
    `;
    wrapper.appendChild(style);

    if (!customElements.get("ha-form")) {
      console.error("MeteocatCardEditor: ha-form custom element not found");
      const errorDiv = document.createElement("div");
      errorDiv.className = "error";
      errorDiv.textContent = getTranslation(this._hass, "editor_not_available");
      wrapper.appendChild(errorDiv);
      this.shadowRoot.appendChild(wrapper);
      return;
    }

    try {
      const form = document.createElement("ha-form");
      form.hass = this._hass;
      form.data = {
        entity: this._config.entity,
        option_static_icons: this._config.option_static_icons,
        icon_path_type: this._config.icon_path_type || "hacs",
        option_show_sun: this._config.option_show_sun,
        option_show_moon: this._config.option_show_moon,
        debug: this._config.debug,
      };
      form.schema = this._schema();

      form.computeLabel = (schema) => {
        return getTranslation(this._hass, schema.name);
      };

      form.addEventListener("value-changed", (ev) => {
        // Crear un nuevo objeto de configuración con el orden deseado
        const updatedConfig = {
          type: "custom:meteocat-card",
          entity: ev.detail.value.entity,
          option_static_icons: ev.detail.value.option_static_icons,
          icon_path_type: ev.detail.value.icon_path_type,
          iconPath: ev.detail.value.icon_path_type === "hacs" ? "/hacsfiles/meteocat-card/" : "/local/meteocat-card/icons/",
          fade_duration: this._config.fade_duration,
          option_show_sun: ev.detail.value.option_show_sun,
          option_show_moon: ev.detail.value.option_show_moon,
          debug: ev.detail.value.debug,
        };
        // Mantener cualquier otra propiedad existente que no esté en el formulario
        Object.keys(this._config).forEach((key) => {
          if (!["type", "entity", "option_static_icons", "icon_path_type", "iconPath", "fade_duration", "option_show_sun", "option_show_moon", "debug"].includes(key)) {
            updatedConfig[key] = this._config[key];
          }
        });
        console.log("MeteocatCardEditor: Config changed =", updatedConfig);
        this.dispatchEvent(
          new CustomEvent("config-changed", {
            detail: { config: updatedConfig },
            bubbles: true,
            composed: true,
          })
        );
        this._config = updatedConfig;
      });

      wrapper.appendChild(form);
      this._form = form;
      console.log("MeteocatCardEditor: ha-form created successfully");
    } catch (error) {
      console.error("MeteocatCardEditor: Error creating ha-form:", error);
      const errorDiv = document.createElement("div");
      errorDiv.className = "error";
      errorDiv.textContent = getTranslation(this._hass, "editor_not_available");
      wrapper.appendChild(errorDiv);
    }

    this.shadowRoot.appendChild(wrapper);
  }
}

if (!customElements.get("meteocat-card-editor")) {
  console.log("MeteocatCardEditor: Registering custom element meteocat-card-editor");
  customElements.define("meteocat-card-editor", MeteocatCardEditor);
} else {
  console.log("MeteocatCardEditor: Custom element meteocat-card-editor already defined");
}