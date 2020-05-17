import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

// TODO: Enable when multiple languages required
// import detector from "i18next-browser-languagedetector";
// import backend from "i18next-xhr-backend";
import ja from '../locales/ja/translation.json';

i18n
  // TODO: Enable when multiple languages required
  //   .use(detector)
  //   .use(backend)
  .use(initReactI18next)
  .init({
    resources: {
      ja: {
        translation: ja,
      },
    },
    lng: 'ja',
    fallbackLng: 'ja',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
