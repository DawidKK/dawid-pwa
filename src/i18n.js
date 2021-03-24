import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import intervalPlural from 'i18next-intervalplural-postprocessor'

i18n
  .use(Backend)
  .use(initReactI18next)
  .use(intervalPlural)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      format: function(value, format, lng) {
          if (format === 'bold') return console.log(`value`, value) || value.toUpperCase();
          return value;
      }
    }
  })


export default i18n
