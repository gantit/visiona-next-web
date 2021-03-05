import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import es from 'locales/es.json'
import ca from 'locales/ca.json'
import en from 'locales/en.json'

const detectionOptions = {
  order: ['navigator', 'path', 'localStorage', 'cookie', 'htmlTag'],
  lookupQuerystring: 'lng',
  lookupCookie: 'visionaCat',
  lookupLocalStorage: 'visionaCat',
  lookupSessionStorage: 'visionaCat',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'],
  // cookieDomain: 'visiona.cat',
  // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
  cookieOptions: { path: '/', sameSite: 'strict' },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      ca: { translations: ca },
      es: { translations: es },
      en: { translations: en }
    },
    fallbackLng: 'es',
    language: 'es',
    debug: false,
    trans: {
      component: 'Trans',
      i18nKey: 'i18nKey',
      defaultsKey: 'defaults',
      extensions: ['.js'],
      fallbackKey(_, value) {
        return value
      },
      acorn: {
        ecmaVersion: 10, // defaults to 10
        sourceType: 'module' // defaults to 'module'
      }
    },

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    detection: detectionOptions,

    keySeparator: false, // we use content as keys
    nsSeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ','
    },

    react: {
      wait: true
    }
  })

i18n.changeLanguage('es')

export default i18n
