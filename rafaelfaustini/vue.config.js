process.env.VUE_APP_VERSION = require('./package.json').version

function getPublicPath(enviroment, language = "en") {
  switch (enviroment) {
    case "production":
      if(language === "br") {
        return "/home/";
      }
      return "/";
    case "development":
      return "/dev/";  
    case "beta":
      return "/beta/";  
    default:
      break;
  }
}

const { argv } = require('yargs')
module.exports = {
  css: {
      loaderOptions: {
        scss: {
          prependData: `
          @import "@/scss/_reset.scss";
          @import "@/scss/_variables.scss";
          `,
        },
      },
    },
      chainWebpack: config => {
        config.plugin('define').tap(options => {
            options[0]['process.env'].VUE_APP_LANG = `"${argv.lang}"`;
            return options;
        })
     },
     publicPath: getPublicPath(process.env.NODE_ENV, argv.lang),
  }

  
  