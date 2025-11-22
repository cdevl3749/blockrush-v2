// src/utils/analytics.js

/**
 * Fonction pour envoyer des événements à Google Analytics
 * @param {string} eventName - Nom de l'événement
 * @param {object} params - Paramètres additionnels
 */
export const trackEvent = (eventName, params = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, {
      ...params,
      timestamp: new Date().toISOString(),
    });
    console.log('📊 Event tracked:', eventName, params);
  } else {
    console.warn('⚠️ Google Analytics not loaded');
  }
};

// Événements prédéfinis pour faciliter le tracking

export const trackParticipation = (plan, price) => {
  trackEvent('click_participate', {
    plan: plan,
    price: price,
    currency: 'EUR',
    button_location: 'pricing_section'
  });
};

export const trackCTA = (location, buttonText) => {
  trackEvent('click_cta', {
    button_location: location,
    button_text: buttonText
  });
};

export const trackLanguageChange = (newLang) => {
  trackEvent('change_language', {
    language: newLang
  });
};

export const trackModalOpen = (modalType) => {
  trackEvent('open_modal', {
    modal_type: modalType
  });
};

export const trackCopyAddress = () => {
  trackEvent('copy_bitcoin_address', {
    address_type: 'payment'
  });
};

export const trackPaymentIntent = (plan, amount) => {
  trackEvent('payment_intent', {
    plan: plan,
    amount: amount,
    currency: 'EUR'
  });
};