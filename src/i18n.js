import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./imports/locales/en/translation.json";
import translationIT from "./imports/locales/it/translation.json";

const resources = {
  it: { translation: translationIT },
  en: { translation: translationEN },
};

i18n.use(initReactI18next).init(
  {
    resources,
    lng: "it",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  },
  (err, t) => {
    err && console.log(err);
  }
);

export default i18n;
