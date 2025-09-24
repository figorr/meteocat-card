// Traducciones embebidas
const translations = {
  en: {
    title_default: "Meteocat",
    card_name: "Meteocat Card",
    card_description: "Custom card to display Meteocat weather data.",
    editor_not_available: "Visual editor not available. Please use the YAML editor.",
    entity: "Weather entity",
    sunrise_entity: "Sunrise",
    sunset_entity: "Sunset",
    option_static_icons: "Static icons",
  },
  es: {
    title_default: "Meteocat",
    card_name: "Tarjeta Meteocat",
    card_description: "Tarjeta personalizada para mostrar datos de clima de Meteocat.",
    editor_not_available: "Editor visual no disponible. Por favor, usa el editor YAML.",
    entity: "Weather entidad",
    sunrise_entity: "Amanecer",
    sunset_entity: "Atardecer",
    option_static_icons: "Iconos estáticos",
  },
  ca: {
    title_default: "Meteocat",
    card_name: "Targeta Meteocat",
    card_description: "Targeta personalitzada per mostrar dades de clima de Meteocat.",
    editor_not_available: "Editor visual no disponible. Si us plau, usa l'editor YAML.",
    entity: "Weather entitat",
    sunrise_entity: "Sortida del sol",
    sunset_entity: "Posta de sol",
    option_static_icons: "Icones estàtiques",
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
      type: "meteocat-card",
      entity: "weather.home",
      sunrise_entity: "sensor.sun_next_rising",
      sunset_entity: "sensor.sun_next_setting",
      option_static_icons: false,
      ...config,
      title: undefined,
    };
    delete this._config.title;
    delete this._config.icons;
    console.log(
      "MeteocatCardEditor: setConfig called with config =",
      this._config
    );
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
      { name: "entity", selector: { entity: { domain: "weather" } } },
      { name: "sunrise_entity", selector: { entity: { domain: "sensor" } } },
      { name: "sunset_entity", selector: { entity: { domain: "sensor" } } },
      { name: "option_static_icons", selector: { boolean: {} } },
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
        sunrise_entity: this._config.sunrise_entity,
        sunset_entity: this._config.sunset_entity,
        option_static_icons: this._config.option_static_icons,
      };
      form.schema = this._schema(this._hass);

      // 👇 Asigna traducciones a los labels
      form.computeLabel = (schema) => {
        return getTranslation(this._hass, schema.name);
      };

      form.addEventListener("value-changed", (ev) =>
        this._onFormValueChanged(ev)
      );
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

  _onFormValueChanged(ev) {
    ev.stopPropagation();
    const v = ev.detail && ev.detail.value ? ev.detail.value : null;
    if (!v) return;
    this._config = { ...this._config, ...v };
    delete this._config.title;
    delete this._config.icons;
    this._dispatchConfigChanged();
  }

  _dispatchConfigChanged() {
    const config = { ...this._config };
    delete config.title;
    delete config.icons;
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config },
        bubbles: true,
        composed: true,
      })
    );
  }

  get value() {
    const config = { ...this._config };
    delete config.title;
    delete config.icons;
    return config;
  }
}

if (!customElements.get("meteocat-card-editor")) {
  console.log(
    "MeteocatCardEditor: Registering custom element meteocat-card-editor"
  );
  customElements.define("meteocat-card-editor", MeteocatCardEditor);
} else {
  console.log(
    "MeteocatCardEditor: Custom element meteocat-card-editor already defined"
  );
}
