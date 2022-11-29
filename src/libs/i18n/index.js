import { createI18n } from 'vue-i18n'

import es from './locales/es.json' 
import en from './locales/en.json'

const loadLocaleMessages = ()  => {

  const locales  = {es,en}

  console.log(es)
    // const locales = [
   //    import('./locales/en.json') assert {type:'json'},
   //    import('./locales/es.json')
   // ]

   // require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
   const messages = {}

   

   // locales.keys().forEach(key => {
   //    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
   //    if (matched && matched.length > 1) {
   //       const locale = matched[1]
   //       messages[locale] = locales(key)
   //    }
   // })

   return messages
}

const i18n = createI18n({
   locale: 'es',
   fallbackLocale: 'es',
   messages: {
      es,
      en
   },
});

export default i18n;
