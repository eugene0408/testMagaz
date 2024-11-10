import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['ru', 'uk'],
    fallbackLng: 'uk',
    detection: {
      order: ['queryString', 'cookie'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    ns: ['common', 'tgoods', 'desctiption'],
    defaultNS: 'common',
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
  });

export default i18n;
