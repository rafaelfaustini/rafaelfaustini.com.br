let BASE_URL = '';
switch (process.env.VUE_APP_ENV) {
    case 'beta':
        BASE_URL = '/beta';
        break;
    case 'dev':
        BASE_URL = '/dev';
        break;
    case 'production':
        if (process.env.VUE_APP_I18N_LOCALE == 'en') {
            BASE_URL = '/';
            break;
        }
        BASE_URL = '/website';
        break;

    default:
        BASE_URL = '/';
        break;
}
module.exports = {
    pluginOptions: {
        i18n: {
            locale: 'pt-br',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: true,
            enableBridge: false,
        },
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
          @import "@/assets/scss/styles.scss";
        `,
                implementation: require('node-sass'),
            },
        },
    },
    publicPath: BASE_URL,
};
