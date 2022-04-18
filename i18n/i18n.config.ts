import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';
import {es, en, de, fr, pt, pl} from './traductions';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: getLocales()[0].languageCode,
  fallbackLng: 'en',
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
    fr: {
      translation: fr,
    },
    de: {
      translation: de,
    },
    pt: {
      translation: pt,
    },
    pl: {
      translation: pl,
    },
  },
});
export default i18n;
