<template>
    <div class="layout-container">
        <slot></slot>
    </div>
</template>
  
  <script lang="ts">
  import Vue from 'vue';
  
  export default Vue.extend({
    name: 'LayoutContainer',
  });
  </script>
  
  <style scoped lang="scss">
    .layout-container {
        margin: 10px;
        background: $inner-background-color;
        border-radius: 16px;
        overflow: hidden;
        @media screen and (max-width: 768px) {
          margin: 0;
          border-radius: 0;
        }
    }
    
  </style>
  