<template>
<nav class="nav-menu">
    <ul class="nav-list">
        <li class="nav-item" v-for="item in itemList" :key="item.name">
          <a class="nav-item-anchor" :href="item.href">{{ item.name }}</a>
        </li>
    </ul>
</nav>
</template>
  
  <script lang="ts">
  import Vue from 'vue';
  import { PropType } from 'vue/types/v3-component-props';
  import INavMenuItem from './interfaces/INavMenuItem';
  
  export default Vue.extend({
    name: 'NavMenu',
    props: {
      itemList: Array as PropType<INavMenuItem[]>,
    },
  });
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
    .nav-menu {
      .nav-list {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .nav-item {
        .nav-item-anchor {
          font-size: 1.25em;
          display: block;
          padding: 10px;
          transition: all .5s;
          outline: 2px solid transparent;
          text-decoration: none;
          color: #000;
          transition: outline-width 200ms ease, outline-offset 200ms ease;
          border-radius: 15px;
          @media (prefers-color-scheme: dark) { 
              color: white;
          }

          &:hover {
            outline: 2px solid #000;
            outline-offset: -5px;

            @media (prefers-color-scheme: dark) {
              &:nth-of-type(odd){
                outline: solid $primary-color 2px; 
              }
              &:nth-of-type(even){
                outline: solid $secondary-color 2px; 
              }
              
            }
          }
        }
      }
    }
  </style>
  