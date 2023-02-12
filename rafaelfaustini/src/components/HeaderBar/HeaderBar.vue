<template>
    <header class="header-bar">
        <generic-navbar :color="navbarColor">
            <template v-slot:bar-left>
                <div class="menu-logo">
                    <h1>{{logoName}}</h1>
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
    data() {
        return {
            navbarColor: NavColorEnum.Default
        }
    }
  });

  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
    .header-bar {
        .menu-logo {
            h1 {
                font-size: 2.25em;
                font-weight: bold;
                margin: 0 10px;
            }
        }
    }
  </style>
  