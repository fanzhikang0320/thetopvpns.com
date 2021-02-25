import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

export default ({ app, store }) => {
    app.i18n = new VueI18n({
        locale: store.state.locales.locale,
        fallbackLocale: 'en',
        messages: {
            en: require('~/locales/en.json'),
            de: require('~/locales/de.json'),
            es: require('~/locales/es.json'),
            fr: require('~/locales/fr.json')
        },
        silentFallbackWarn: true
    })
    app.i18n.path = (link) => {
        if (app.i18n.locale === app.i18n.fallbackLocale) {
            return `/${link}`
        }
        return `/${app.i18n.locale}/${link}`
    }
}