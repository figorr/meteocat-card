class MeteocatCardEditor extends HTMLElement {
  constructor() {
    super();
    this._config = {};
  }

  setConfig(config) {
    this._config = config;
    this.render();
  }

  set hass(hass) {
    this._hass = hass;
    this.render();
  }

  getConfig() {
    return this._config;
  }

  render() {
    if (!this._hass) return;

    this.innerHTML = `
      <ha-form
        .hass=${this._hass}
        .data=${this._config}
        .schema=${[
          {
            name: "entity",
            selector: { entity: { domain: "weather" } },
          },
          {
            name: "feels_like_entity",
            selector: { entity: { domain: "sensor" } },
          },
          {
            name: "icons",
            selector: { text: {} },
          },
          {
            name: "option_static_icons",
            selector: { boolean: {} },
          },
        ]}
      ></ha-form>
    `;

    this.querySelector("ha-form").addEventListener("value-changed", (ev) => {
      ev.stopPropagation();
      this._config = ev.detail.value;
      this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: this._config } }));
    });
  }
}

customElements.define("meteocat-card-editor", MeteocatCardEditor);
