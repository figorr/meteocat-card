// loader.js - registro automático de la tarjeta Meteocat
(function() {
  if (!window.customCards) {
    window.customCards = [];
  }

  // Solo registra si HA está listo
  function registerCard() {
    if (customElements.get('meteocat-card')) return;

    // Importa dinámicamente la tarjeta
    const script = document.createElement('script');
    script.type = 'module';
    script.src = '/local/meteocat-card/meteocat-card.js';
    document.head.appendChild(script);

    window.customCards.push({
      type: 'meteocat-card',
      name: 'Meteocat Card',
      description: 'Muestra el tiempo actual y previsiones usando Meteocat',
    });
  }

  // Espera a que el frontend de HA esté cargado
  if (window.HA) {
    registerCard();
  } else {
    window.addEventListener('ha-panel-lovelace-ready', registerCard);
  }
})();
