<template>
    <header class="header-bar">
        <generic-navbar :color="navbarColor">
            <template v-slot:bar-left>
                <div class="menu-logo">
                    <h1>{{logoName}} <span v-if="EnvironmentBadgeText" class="environment-badge">{{ EnvironmentBadgeText }}</span></h1>
                    
                </div>
            </template>
            <template v-slot:bar-right>
                <nav-menu :itemList="navItemList"></nav-menu>
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
  
  export default Vue.extend({
  components: { GenericNavbar, NavMenu },
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
        .menu-logo {
            display: flex;
            justify-items: center;
            gap: 2px;
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
                font-size: 2.25em;
                font-weight: bold;
                margin: 0 10px;
                line-height: 1;
            }
        }
    }
  </style>
  