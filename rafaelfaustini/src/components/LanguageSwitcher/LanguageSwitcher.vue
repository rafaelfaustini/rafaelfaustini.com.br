<template>
    <div class="language-switcher">
        <img src="https://hatscripts.github.io/circle-flags/flags/br.svg" v-if="currentLanguage == 'en'" width="48" @click="changeLanguage('br')" loading="lazy">
        <img src="https://hatscripts.github.io/circle-flags/flags/gb.svg"  v-if="currentLanguage == 'br'" width="48" @click="changeLanguage('en')" loading="lazy">
    </div>
</template>
  
  <script lang="ts">
  import i18next from 'i18next';
  import Vue from 'vue';
  
  export default Vue.extend({
    name: 'LanguageSwitcher',
    data() {
        return {
            currentLanguage: i18next.language
        }
    },
    methods: {
        changeLanguage(language : string) {
            this.currentLanguage = language;
            this.$i18next.changeLanguage(language);
            
        }
    },
  });
  </script>
  
  <style scoped lang="scss">
    .language-switcher {
        cursor: pointer;
    }
    
  </style>
  