<template>
    <div class="nav-head" :class="{ 'background-primary': isPrimaryColor, 'background-secondary': isSecondaryColor }">
        <div class="container">
            <div class="container-left">
                <slot name="bar-left"></slot>
            </div>
            <div class="container-center">
                <slot name="bar-center"></slot>
            </div>
            <div class="container-right">
                <slot name="bar-right"></slot>
            </div>
        </div>
    </div>
  </template>
  
  <script lang="ts">
  import Vue, { PropType } from 'vue';
  import NavColorEnum from './enum/NavColorEnum';
  
  export default Vue.extend({
    name: 'GenericNavbar',
    props: {
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
    .nav-head {
        background-color: transparent;
        &.background-primary {
            background-color: $primary-color;
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
        .container-right {
            display: flex;
            gap: 1rem;
            align-items: center;
        }
    }
  </style>
  