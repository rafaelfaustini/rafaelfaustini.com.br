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
        background: #fff;
        border-radius: 16px;
        overflow: hidden;
    }
  </style>
  