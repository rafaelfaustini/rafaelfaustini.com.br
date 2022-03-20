module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'pt-br',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
      enableBridge: false
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/styles.scss";
        `,
        implementation: require('node-sass')
      }
    }
  },
}
