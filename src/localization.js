import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "me": "Isaiah Collins",
        "navigation": {
          "about": "About",
          "works": "Works",
          "contact": "Contact",
        },
        "about": {
          "header_greet": "Hi, I'm ",
          "header_field": "I'm a mobile app ",
          "header_position": "developer",
          "header_basic": "Currently a student in Central Luzon State University, I specialize in creating mobile apps with both native and crossplatform solutions; with also some proficiency with web frameworks.",
          "lets_connect": "Let's Connect:",
          "linkedin": "LinkedIn",
          "github": "GitHub",
          "twitter": "Twitter",
          "footer_copyright": "© 2021 Isaiah Collins Abetong. All rights reserved."
        },
        
      }
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: true
  }
});

export default i18n;