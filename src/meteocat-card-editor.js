class MeteocatCardEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  setConfig(config) {
    this.config = config || {};
    this._render();
  }

  set hass(hass) {
    this._hass = hass;
    this._render();
  }

  _render() {
    if (!this.shadowRoot) return;

    const entity = this.config.entity || "";
    const feelsLike = this.config.feels_like_entity || "";
    const iconPath = this.config.icons || "/local/meteocat-card/icons/";
    const useStaticIcons = !!this.config.option_static_icons;

    this.shadowRoot.innerHTML = `
      <style>
        .editor { font-family: sans-serif; display: flex; flex-direction: column; gap: 8px; }
        label { font-weight: bold; }
        input { padding: 4px; width: 100%; box-sizing: border-box; }
      </style>
      <div class="editor">
        <div>
          <label>Weather entity:</label>
          <input type="text" .value="${entity}" id="entityInput">
        </div>
        <div>
          <label>Feels like entity:</label>
          <input type="text" .value="${feelsLike}" id="feelsLikeInput">
        </div>
        <div>
          <label>Icons path (opcional):</label>
          <input type="text" .value="${iconPath}" id="iconPathInput">
        </div>
        <div>
          <label>
            <input type="checkbox" id="staticIconsCheckbox" ${useStaticIcons ? "checked" : ""}>
            Usar iconos estáticos
          </label>
        </div>
      </div>
    `;

    // Eventos de cambio
    this.shadowRoot.querySelector("#entityInput").addEventListener("change", e => {
      this.config.entity = e.target.value;
      this._fireChange();
    });

    this.shadowRoot.querySelector("#feelsLikeInput").addEventListener("change", e => {
      this.config.feels_like_entity = e.target.value;
      this._fireChange();
    });

    this.shadowRoot.querySelector("#iconPathInput").addEventListener("change", e => {
      this.config.icons = e.target.value;
      this._fireChange();
    });

    this.shadowRoot.querySelector("#staticIconsCheckbox").addEventListener("change", e => {
      this.config.option_static_icons = e.target.checked;
      this._fireChange();
    });
  }

  _fireChange() {
    const event = new Event("config-changed", { bubbles: true, composed: true });
    event.detail = { config: this.config };
    this.dispatchEvent(event);
  }
}

// Registrar el editor
customElements.define("meteocat-card-editor", MeteocatCardEditor);
