<template>
    <header class="nav-header" :class="{ 'background-primary': isPrimaryColor, 'background-secondary': isSecondaryColor }">
        <div class="container">
            <div class="container-left">
                <div class="menu-logo">
                    <h1>{{logoName}}</h1>
                </div>
            </div>
            <div class="container-center"></div>
            <div class="container-right">
                <div class="nav-menu">
                    <slot name="nav-menu"></slot>
                </div>
            </div>
        </div>
    </header>
  </template>
  
  <script lang="ts">
  import Vue, { PropType } from 'vue';
import NavColorEnum from './enum/NavColorEnum';
  
  export default Vue.extend({
    name: 'Navbar',
    props: {
      logoName: String,
      color: String as PropType<NavColorEnum>
    },
    computed: {
        isPrimaryColor: function() : boolean {
            return this.color == NavColorEnum.Primary
        },
        isSecondaryColor: function() : boolean {
            return this.color == NavColorEnum.Secondary
        },
    },
  });

  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
    .nav-header {
        background-color: white;
        &.background-primary {
            background-color: #e65050;
            color: white;
        }
        &.background-secondary {
            background-color: #6002ee;
            color: white;
        }
        .container {
            max-width: 1800px;
            margin: 0 auto;
            padding: 15px 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }
        .menu-logo {
            h1 {
                font-size: 2.25em;
                font-weight: bold;
                margin: 0 10px;
            }
        }
    }
  </style>
  