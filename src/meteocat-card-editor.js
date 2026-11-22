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
    icon_path_type_marketplace: "Marketplace installation",
    icon_path_type_manual: "Manual installation",
    debug: "Enable debug logging",
    option_show_sun_times: "Sunrise / Sunset",
    option_show_moon_times: "Moonrise / Moonset",
    option_show_sun_info: "State / Azimuth",
    option_show_moon_info: "Phase / Illumination",
    sun_options: "Sun options",
    moon_options: "Moon options",
    eto_options: "Evapotranspiration options",
    option_show_eto: "Evapotranspiration",
    option_show_chart: "Show forecast trend",
    option_detail_tap_more_info: "Open entity on click",
    alert_options: "Alert options",
    option_show_alert_badges: "Alert level badges",
    option_alert_details_collapsed: "Collapse alert details by default",
    option_highlight_alert_details: "Highlight alert details in color",
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
    icon_path_type_marketplace: "Instalación Marketplace",
    icon_path_type_manual: "Instalación manual",
    debug: "Habilitar registro de depuración",
    option_show_sun_times: "Amanecer / Atardecer",
    option_show_moon_times: "Salida / Puesta",
    option_show_sun_info: "Estado / Acimut",
    option_show_moon_info: "Fase / Iluminación",
    sun_options: "Opciones sol",
    moon_options: "Opciones luna",
    eto_options: "Opciones de evapotranspiración",
    option_show_eto: "Evapotranspiración",
    option_show_chart: "Mostrar gráfico de tendencia",
    option_detail_tap_more_info: "Abrir entidad al hacer clic",
    alert_options: "Opciones de alertas",
    option_show_alert_badges: "Indicadores de nivel de alerta",
    option_alert_details_collapsed: "Contraer detalles de alertas por defecto",
    option_highlight_alert_details: "Resaltar detalles de alertas en color",
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
    icon_path_type_marketplace: "Instal·lació Marketplace",
    icon_path_type_manual: "Instal·lació manual",
    debug: "Habilitar registre de depuració",
    option_show_sun_times: "Sortida / Posta de sol",
    option_show_moon_times: "Sortida / Posta",
    option_show_sun_info: "Estat / Azimut",
    option_show_moon_info: "Fase / Il·luminació",
    sun_options: "Opcions sol",
    moon_options: "Opcions lluna",
    eto_options: "Opcions d'evapotranspiració",
    option_show_eto: "Evapotranspiració",
    option_show_chart: "Mostrar gràfic de tendència",
    option_detail_tap_more_info: "Obrir entitat en fer clic",
    alert_options: "Opcions d'alertes",
    option_show_alert_badges: "Indicadors de nivell d'alerta",
    option_alert_details_collapsed: "Replegar detalls d'alertes per defecte",
    option_highlight_alert_details: "Ressaltar detalls d'alertes en color",
  },
};

const MARKETPLACE_ICON_PATH = "/local/community/meteocat-card/";
const MANUAL_ICON_PATH = "/local/meteocat-card/icons/";
const LEGACY_HACS_ICON_PREFIX = "/hacsfiles/meteocat-card";
const MARKETPLACE_ICON_PREFIX = "/local/community/meteocat-card";

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
      icon_path_type: "marketplace",
      option_show_sun_info: true,
      option_show_sun_times: true,
      option_show_moon_info: true,
      option_show_moon_times: true,
      option_show_eto: true,
      option_show_chart: true,
      option_detail_tap_more_info: true,
      option_show_alert_badges: true,
      option_alert_details_collapsed: true,
      option_highlight_alert_details: true,
      debug: false,
      ...config,
    };

    this._config.icon_path_type = normalizeIconPathType(
      this._config.icon_path_type
    );
    this._config.iconPath = resolveIconPath(this._config);

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
      this._form.alertForm.hass = hass;
      this._form.sunForm.hass = hass;
      this._form.moonForm.hass = hass;
      this._form.etoForm.hass = hass;
    } else if (this.isConnected) {
      this._render();
    }
  }

  connectedCallback() {
    if (!this.shadowRoot.innerHTML) this._render();
  }

  _compactEditorForm(form) {
    try {
      const addStyle = (root, cssText) => {
        if (!root || root.querySelector("style[data-meteocat-compact]")) return;
        const style = document.createElement("style");
        style.dataset.meteocatCompact = "true";
        style.textContent = cssText;
        root.appendChild(style);
      };

      const applyFormSpacing = () => {
        addStyle(
          form.shadowRoot,
          `.root > *:not([own-margin]):not(:last-child) { margin-bottom: 8px; }
           .root > *.meteocat-boolean-row:not([own-margin]):not(:last-child) { margin-bottom: 4px; }
           .root > *:last-child { margin-bottom: 0; }`
        );
      };

      const applyBooleanRow = (selector) => {
        const apply = () => {
          if (
            !selector.selector ||
            !Object.prototype.hasOwnProperty.call(selector.selector, "boolean")
          ) {
            return;
          }

          selector.classList.add("meteocat-boolean-row");
          const booleanSelector = selector.shadowRoot?.querySelector("ha-selector-boolean");
          if (!booleanSelector) return;

          const applySwitchHeight = () => {
            addStyle(booleanSelector.shadowRoot, `ha-switch { min-height: 40px; }`);
          };

          if (typeof booleanSelector.updateComplete?.then === "function") {
            booleanSelector.updateComplete.then(applySwitchHeight).catch(() => {});
          } else {
            applySwitchHeight();
          }
        };

        if (typeof selector.updateComplete?.then === "function") {
          selector.updateComplete.then(apply).catch(() => {});
        } else {
          apply();
        }
      };

      const apply = () => {
        applyFormSpacing();
        form.shadowRoot?.querySelectorAll("ha-selector").forEach(applyBooleanRow);
      };

      if (typeof form.updateComplete?.then === "function") {
        form.updateComplete.then(() => {
          apply();
          if (typeof requestAnimationFrame === "function") requestAnimationFrame(apply);
        }).catch(() => {});
      } else {
        apply();
      }
    } catch (err) {
      console.debug("MeteocatCardEditor: compact form styles skipped", err);
    }
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
        --mc-form-vertical-spacing: 0px;
      }

      .section-label {
        font-size: var(--mc-general-label-font-size);
        font-weight: normal;
        margin: 8px 0 8px;
        padding-top: 6px;
        border-top: 2px solid var(--divider-color, rgba(0,0,0,0.06));
        color: var(--primary-text-color);
      }

      .group { margin-bottom: 2px; }
      .indented-form { margin-left: 16px; }
      .indented-form ha-formfield:not(:last-child) {
        margin-bottom: var(--mc-form-vertical-spacing);
      }
      .indented-form ha-form ha-formfield {
        min-height: 32px;
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
          option_show_chart: this._config.option_show_chart,
          option_detail_tap_more_info: this._config.option_detail_tap_more_info,
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
                  { value: "marketplace", label: getTranslation(this._hass, "icon_path_type_marketplace") },
                  { value: "manual", label: getTranslation(this._hass, "icon_path_type_manual") },
                ],
              },
            },
          },
          { name: "option_static_icons", selector: { boolean: {} } },
          { name: "option_show_chart", selector: { boolean: {} } },
          { name: "option_detail_tap_more_info", selector: { boolean: {} } },
        ]
      );

      // Alertas
      const alertForm = makeForm(
        {
          option_show_alert_badges: this._config.option_show_alert_badges,
          option_alert_details_collapsed: this._config.option_alert_details_collapsed,
          option_highlight_alert_details: this._config.option_highlight_alert_details,
        },
        [
          { name: "option_show_alert_badges", selector: { boolean: {} } },
          { name: "option_alert_details_collapsed", selector: { boolean: {} } },
          { name: "option_highlight_alert_details", selector: { boolean: {} } },
        ],
        "indented-form"
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

      // Evapotranspiración
      const etoForm = makeForm(
        {
          option_show_eto: this._config.option_show_eto,
        },
        [
          { name: "option_show_eto", selector: { boolean: {} } },
        ],
        "indented-form"
      );

      // === Manejador común de eventos ===
      const handleChange = (ev) => {
        const v = ev.detail.value || {};
        const updated = { ...this._config, ...v };
        updated.type = "custom:meteocat-card";
        const iconPathType = normalizeIconPathType(v.icon_path_type);
        if (
          v.icon_path_type !== undefined &&
          iconPathType !== this._config.icon_path_type
        ) {
          updated.icon_path_type = iconPathType;
          updated.iconPath =
            iconPathType === "manual" ? MANUAL_ICON_PATH : MARKETPLACE_ICON_PATH;
        }
        this._config = updated;
        this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: updated }, bubbles: true, composed: true }));
      };

      [generalForm, alertForm, sunForm, moonForm, etoForm].forEach((f) =>
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
        makeSection("alert_options", alertForm),
        makeSection("sun_options", sunForm),
        makeSection("moon_options", moonForm),
        makeSection("eto_options", etoForm)
      );

      this.shadowRoot.appendChild(wrapper);
      [generalForm, alertForm, sunForm, moonForm, etoForm].forEach((form) =>
        this._compactEditorForm(form)
      );
      this._form = { generalForm, alertForm, sunForm, moonForm, etoForm };
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
