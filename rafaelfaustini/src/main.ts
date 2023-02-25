import Vue from 'vue'
import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import App from './App.vue'

import en_headerBar from '@/locales/en/headerBar.json';
import en_headerSection from '@/locales/en/headerSection.json'
import en_aboutSection from '@/locales/en/aboutSection.json'
import en_experienceSection from '@/locales/en/experienceSection.json'
import en_portfolioSection from '@/locales/en/portfolioSection.json'


import br_headerBar from '@/locales/br/headerBar.json';
import br_headerSection from '@/locales/br/headerSection.json'
import br_aboutSection from '@/locales/br/aboutSection.json'
import br_experienceSection from '@/locales/br/experienceSection.json'
import br_portfolioSection from '@/locales/br/portfolioSection.json'




Vue.use(I18NextVue, { i18next })

Vue.config.productionTip = false
i18next.on("initialized", () => {
  new Vue({
    render: h => h(App),
  }).$mount('#app')
});

i18next
  .init({
    resources: {
      en: {
        headerBar: en_headerBar,
        headerSection: en_headerSection,
        aboutSection: en_aboutSection,
        experienceSection: en_experienceSection,
        portfolioSection: en_portfolioSection
      },
      br: {
        headerBar: br_headerBar,
        headerSection: br_headerSection,
        aboutSection: br_aboutSection,
        experienceSection: br_experienceSection,
        portfolioSection: br_portfolioSection
      }
    },
  lng: process.env.VUE_APP_LANG,
  fallbackLng: 'en',
  debug: process.env.NODE_ENV !== 'production',
});

