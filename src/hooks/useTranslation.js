// src/hooks/useTranslation.js
import { useState, useEffect } from 'react';
import frTranslations from '../locales/fr.json';
import enTranslations from '../locales/en.json';
import jaTranslations from '../locales/ja.json';

const translations = {
  fr: frTranslations,
  en: enTranslations,
  ja: jaTranslations
};

export const useTranslation = () => {
  // Récupérer la langue depuis localStorage ou défaut 'fr'
  const [lang, setLang] = useState(() => {
    const savedLang = localStorage.getItem('blockrush_lang');
    return savedLang || 'fr';
  });

  // Sauvegarder la langue quand elle change
  useEffect(() => {
    localStorage.setItem('blockrush_lang', lang);
    // Mettre à jour l'attribut lang du HTML
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang] || translations.fr;

  const changeLanguage = (newLang) => {
    if (translations[newLang]) {
      setLang(newLang);
    }
  };

  return { t, lang, changeLanguage };
};