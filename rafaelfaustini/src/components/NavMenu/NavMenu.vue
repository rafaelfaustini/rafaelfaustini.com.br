<template>
<nav class="nav-menu">
    <ul class="nav-list">
        <li :class="{ 'nav-item': true, 'active': item.href == activeNav}" v-for="item in itemList" :key="item.name">
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
    data() {
    return {
      activeNav: "#",
    }
  },
    mounted() {
      let sections = document.querySelectorAll('section')
      window.onscroll = () => {
        sections.forEach(section => {
          let top = window.scrollY;
          let offset = section.offsetTop;
          let height = section.offsetHeight;
          let id = section.getAttribute('id');

          let href = id == 'header' ? "#" : `#${id}`;

          if(top >= offset && top < offset + height) {
            this.activeNav = href || '#'
            console.log(this.activeNav)
          }
        });
      }
    }
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
          font-size: 18px;
          font-style: normal;
          display: block;
          padding: 10px;
          transition: all .5s;
          text-decoration: none;
          color: #000;
          border-radius: 15px;
        }
        &:hover, &.active {
            font-weight: bold;
        }
      }
    }
  </style>
  