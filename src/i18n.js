import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from "../src/locales/ru/translation.json"
import ger from "../src/locales/ger/translation.json"
import en from "../src/locales/en/translation.json"

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ger: { translation: ger },
    ru: { translation: ru },
  },
  lng: "ru",
  fallbackLng: "ru",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;