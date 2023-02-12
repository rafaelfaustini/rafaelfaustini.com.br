process.env.VUE_APP_VERSION = require('./package.json').version

const { argv } = require('yargs')
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/'
      : '/',
      chainWebpack: config => {
        config.plugin('define').tap(options => {
            options[0]['process.env'].VUE_APP_LANG = `"${argv.lang}"`;
            return options;
        })
     },
     
  }

  
  