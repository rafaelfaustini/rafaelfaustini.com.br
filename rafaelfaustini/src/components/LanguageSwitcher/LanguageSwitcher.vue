<template>
    <div class="dropdown" :class="{'active': isDropdownOpen}">
        <div class="language-switcher" @click="isDropdownOpen = !isDropdownOpen">
            <img src="https://hatscripts.github.io/circle-flags/flags/br.svg" v-if="currentLanguage == 'br'" width="48" loading="lazy">
            <img src="https://hatscripts.github.io/circle-flags/flags/gb.svg"  v-if="currentLanguage == 'en'" width="48" loading="lazy">
            <svg :class="{'caret': true, 'active': isDropdownOpen}" width="10" height="24" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.62351 3.56999L0.225505 0.829489C-0.0574945 0.505989 0.172505 -1.12057e-05 0.602005 -1.12057e-05H5.39801C5.49413 -9.36985e-05 5.58824 0.0275326 5.66906 0.0795591C5.74989 0.131586 5.814 0.205807 5.85373 0.293335C5.89346 0.380863 5.90711 0.477988 5.89306 0.573077C5.87901 0.668167 5.83785 0.757191 5.77451 0.829489L3.37651 3.56949C3.32957 3.62319 3.2717 3.66624 3.20676 3.69573C3.14182 3.72522 3.07133 3.74048 3.00001 3.74048C2.92868 3.74048 2.85819 3.72522 2.79325 3.69573C2.72831 3.66624 2.67044 3.62369 2.62351 3.56999Z" fill="black"/>
            </svg>

        </div>
        <div :class="{'dropdown-menu': true, 'active': isDropdownOpen}" v-click-outside-element="handleClick">
            <div :class="{'dropdown-item': true, 'active': currentLanguage == 'en'}" :disabled="currentLanguage == 'en'" @click="changeLanguage('en')">English</div>
            <div :class="{'dropdown-item': true, 'active': currentLanguage == 'br'}" :disabled="currentLanguage == 'br'" @click="changeLanguage('br')">Português</div>
        </div>
    </div>

</template>
  
  <script lang="ts">
  import i18next from 'i18next';
  import Vue from 'vue';
  
  export default Vue.extend({
    name: 'LanguageSwitcher',
    data() {
        return {
            currentLanguage: i18next.language,
            isDropdownOpen: false
        }
    },
    methods: {
        changeLanguage(language : string) {
            this.currentLanguage = language;
            this.$i18next.changeLanguage(language);
            this.isDropdownOpen = false;
            
        },
        handleClick(el: any): void {
            if(!this.isDropdownOpen) {
                return;
            }
        }
    },
  });
  </script>
  
  <style scoped lang="scss">
    .language-switcher {
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .dropdown {
        position: relative;
        padding: 0.25rem;
        border-radius: .25rem;
        &:hover {
            box-shadow:  0 2px 5px 0 rgba(0, 0, 0, .35);
        }
    }

    .dropdown-item {
        width: 100%;
        padding: 5px 10px;

        &:hover {
            background-color: rgb(194, 194, 194);
        }

        &.active {
            background-color: rgb(195, 226, 192);
        }
    }

    .caret {
        transform: rotate(0deg);
        transition: transform 150ms ease-in-out;
        &.active {
            transform: rotate(180deg);
        }
    }

    .dropdown-menu {
        position: absolute;
        left: 0;
        top: calc(100% + .25rem);
        background-color: white;
        border-radius: .25rem;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .35);
        opacity: 0;
        pointer-events: none;
        transform: translateY(-10px);
        transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;

        &.active {
            opacity: 1;
            transform: translateY(10px);
            pointer-events: auto;
        }
    }

    @media screen and (max-width: 600px) {
        .dropdown {
            display: none;
        }
    }


    
  </style>
  