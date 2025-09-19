// loader.js - registro de Meteocat Card
import "./meteocat-card.js";
import "./meteocat-card-editor.js";

window.customCards = window.customCards || [];
window.customCards.push({
  type: "meteocat-card",
  name: "Meteocat Card",
  description: "Muestra el tiempo actual y previsiones usando Meteocat",
});
