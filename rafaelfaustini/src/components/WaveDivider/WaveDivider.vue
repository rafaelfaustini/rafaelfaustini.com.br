<template>
      <div class="wave-divider" :class="{ 'flip-down': flipDown }">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" alt="wave">
                <path :fill="color" fill-opacity="1" d="M0,128L60,133.3C120,139,240,149,360,144C480,139,600,117,720,133.3C840,149,960,203,1080,202.7C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
      </div>
</template>
  
  <script lang="ts">
  import Vue from 'vue';
  
  export default Vue.extend({
    name: 'WaveDivider',
    props: {
        color: String,
        flipDown: Boolean,
    },
    components: {
    }
  });
  </script>
  
  <style scoped lang="scss">
    .wave-divider{
      margin-bottom: -1px;
      margin-top: -1px;
        svg {
            background-color: transparent;
            display: block;
            fill: $primary-color;
        }
        &.flip-down {
          transform: rotate(180deg) scaleX(-1);
        }
    }
  </style>
  