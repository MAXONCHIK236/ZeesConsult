// Import necessary dependencies
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend"; // Import Backend
import LanguageDetector from 'i18next-browser-languagedetector';
import ru from "../src/locales/ru/translation.json";
import ger from "../src/locales/ger/translation.json";
import en from "../src/locales/en/translation.json";

// Define supported languages
const languages = ["en", "ger", "ru"];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: languages,
    fallbackLng: 'ru',
    debug: false,
    resources: {
      en: { translation: en },
      ger: { translation: ger },
      ru: { translation: ru },
    },
    react: {
      useSuspense: false,
    },
    backend: {
      loadPath: '/components/locales/{{lng}}/translation.json',
    },
    detection: {
      order: ['cookie', 'localStorage'],
      caches: ['cookie'],
    },
  });

export default i18n;
