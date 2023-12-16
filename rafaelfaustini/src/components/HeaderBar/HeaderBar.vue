<template>
    <header class="header-bar">
        <generic-navbar :color="navbarColor">
            <template v-slot:bar-left>
                <div class="menu-logo">
                    <h1>{{logoName}} 
                    </h1>
                    <span class="suffix">.com</span>
                </div>
                <span v-if="EnvironmentBadgeText && false" class="environment-badge">{{ EnvironmentBadgeText }}</span>
            </template>
            <template v-slot:bar-right>
                <nav-menu :itemList="navItemList"></nav-menu>
                <LanguageSwitcher></LanguageSwitcher>
            </template>
        </generic-navbar>
    </header>
  </template>
  
  <script lang="ts">
import Vue, { PropType } from 'vue';
import GenericNavbar from '../GenericNavbar/GenericNavbar.vue';
import INavMenuItem from '../NavMenu/interfaces/INavMenuItem';
import NavColorEnum from './enum/NavColorEnum';
import NavMenu from '../NavMenu/NavMenu.vue';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.vue';
  
  export default Vue.extend({
  components: { GenericNavbar, NavMenu, LanguageSwitcher },
    name: 'HeaderBar',
    props: {
      logoName: String,
      navItemList: Array as PropType<INavMenuItem[]>
    },
    computed: {
        EnvironmentBadgeText() {
            switch (process.env.VUE_APP_ENV) {
                default:
                case "development":
                case "beta":
                    return process.env.VUE_APP_ENV_SHORT_NAME
            }
        }
    },
    data() {
        return {
            navbarColor: NavColorEnum.Default
        }
    },
    methods: {
        getCurrentEnv() {
            return process.env.VUE_APP_ENV;
        }
    },
  });

  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
    .header-bar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: white;
        z-index: 100;
        .menu-logo {
            display: flex;
            justify-content: flex-end;
            flex-wrap: wrap;
            max-width: 230px;
            .environment-badge {
                display: inline-block;
                padding: 0.25em 0.3em;
                font-size: 45%;
                font-weight: 700;
                line-height: 1;
                text-align: center;
                white-space: nowrap;
                vertical-align: middle;
                border-radius: 0.25rem;
                color: #fff;
                background-color: #6002ee;
            }
            h1 {
                font-size: 30px;
                font-weight: bold;
                line-height: 1;
                color: #D76262;
                flex: 0 0 100%;
            }
            .suffix {
                font-size: 17px;
                font-weight: normal;
                color: #D76262;
                margin-top: -8px;
            }
        }
    }
  </style>
  