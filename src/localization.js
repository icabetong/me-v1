import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import english from "./locales/en";
import deutsch from "./locales/de";

i18n.use(initReactI18next).use(LanguageDetector).init({
  resources: {
    en: english,
    de: deutsch
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: true
  },
  detection: {
    order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
    lookupQuerystring: 'lng',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    lookupSessionStorage: 'i18nextLng',

    caches: ['localStorage'],
    excludeCacheFor: ['cimode'],
  }
});

export default i18n;