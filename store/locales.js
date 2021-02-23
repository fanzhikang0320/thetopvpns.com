export const state = () => ({
    locales: ['en','fr','es','it'],
    locale: 'en'
})

export const mutations = {
    SET_LANG (state,locale) {
        if (state.locales.includes(locale)) {
            state.locale = locale;
        }
    }
}