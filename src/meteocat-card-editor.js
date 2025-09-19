class MeteocatCardEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.config = {};
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
          <input type="text" id="entityInput" value="${entity}">
        </div>
        <div>
          <label>Feels like entity:</label>
          <input type="text" id="feelsLikeInput" value="${feelsLike}">
        </div>
        <div>
          <label>Icons path (opcional):</label>
          <input type="text" id="iconPathInput" value="${iconPath}">
        </div>
        <div>
          <label>
            <input type="checkbox" id="staticIconsCheckbox" ${useStaticIcons ? "checked" : ""}>
            Usar iconos estáticos
          </label>
        </div>
      </div>
    `;

    // Agregar listeners
    this._attachListeners();
  }

  _attachListeners() {
    const entityInput = this.shadowRoot.querySelector("#entityInput");
    const feelsLikeInput = this.shadowRoot.querySelector("#feelsLikeInput");
    const iconPathInput = this.shadowRoot.querySelector("#iconPathInput");
    const staticIconsCheckbox = this.shadowRoot.querySelector("#staticIconsCheckbox");

    entityInput.addEventListener("input", (e) => {
      this.config.entity = e.target.value;
      this._fireChange();
    });

    feelsLikeInput.addEventListener("input", (e) => {
      this.config.feels_like_entity = e.target.value;
      this._fireChange();
    });

    iconPathInput.addEventListener("input", (e) => {
      this.config.icons = e.target.value;
      this._fireChange();
    });

    staticIconsCheckbox.addEventListener("change", (e) => {
      this.config.option_static_icons = e.target.checked;
      this._fireChange();
    });
  }

  _fireChange() {
    this.dispatchEvent(new CustomEvent("config-changed", {
      detail: { config: this.config },
      bubbles: true,
      composed: true
    }));
  }
}

customElements.define("meteocat-card-editor", MeteocatCardEditor);
