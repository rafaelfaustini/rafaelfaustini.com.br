<template>
  <div id="app">
    <layout-container>
      <HeaderBar v-bind="headerBar"></HeaderBar>
      <header-section v-bind="headerSection"></header-section>
      <about-section v-bind="aboutSection"></about-section>
      <wave-divider></wave-divider>
      <experience-section v-bind="experienceSection"></experience-section>
      <wave-divider :flipDown="true"></wave-divider>
      <portfolio-section v-bind="portifolioSection"></portfolio-section>
      <footer-bar email="📬 contato@rafaelfaustini.com.br"></footer-bar>
    </layout-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HeaderSection from './components/HeaderSection/HeaderSection.vue';
import LayoutContainer from './components/LayoutContainer/LayoutContainer.vue';
import AboutSection from './components/AboutSection/AboutSection.vue';
import ExperienceSection from './components/ExperienceSection/ExperienceSection.vue';
import WaveDivider from './components/WaveDivider/WaveDivider.vue'
import HeaderBar from './components/HeaderBar/HeaderBar.vue';
import FooterBar from './components/FooterBar/FooterBar.vue';
import PortfolioSection from './components/PortfolioSection/PortfolioSection.vue';
import IAboutSection from './components/Shared/interfaces/IAboutSection';
import IHeaderSection from './components/Shared/interfaces/IHeaderSection';
import IHeaderBar from './components/Shared/interfaces/IHeaderBar';

import {createHeaderBar, createHeaderSection, createAboutSection, createExperienceSection, createPortfolioSection} from './TranslationValues'
import i18next from 'i18next';

export default Vue.extend({
  name: 'App',
  
  components: {
    LayoutContainer,
    HeaderSection,
    AboutSection,
    ExperienceSection,
    WaveDivider,
    HeaderBar,
    FooterBar,
    PortfolioSection
  },
  data() {
    return {
     headerBar: createHeaderBar(this.$t) as IHeaderBar,
     headerSection : createHeaderSection(this.$t) as IHeaderSection,
     aboutSection : createAboutSection(this.$t) as IAboutSection,
     experienceSection : createExperienceSection(this.$t),
     portifolioSection : createPortfolioSection(this.$t)
    }
  },
  mounted() {
    i18next.changeLanguage("br");
  },
});
</script>

<style lang="scss">
@import url(./scss/_reset.scss);
html,
body {
    scroll-behavior: smooth;
}
body {
  background-color: #f2f2f2;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: auto;
}

::-webkit-scrollbar {
    width: 0.75em;
    height: 0.5em;
    @media screen and (max-width: 768px) {
      -webkit-appearance: none;
      width: 0;
      height: 0;
    }
}

::-webkit-scrollbar-track {
    background: #f2f2f2;
    border-radius: 100vw;
    margin-block: 0.75em;
}

::-webkit-scrollbar-thumb {
    background: darken(#f2f2f2, 60%);
    border: 0.15em solid #f2f2f2;
    border-radius: 100vw;

    &:hover {
        background: darken(#f2f2f2, 41%);
    }
}


</style>