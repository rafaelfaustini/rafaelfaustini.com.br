<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <slot></slot>
        </div>
    </div>
</template>
  
  <script lang="ts">
  import Vue from 'vue';
  
  export default Vue.extend({
    name: 'Card',
    props: {
        title: String
    },
    components: {
        
    }
  });
  </script>
  
  <style scoped lang="scss">
    .card {
        border-radius: 5px;
        box-shadow: 0 1px 4px 0 rgb(0 0 0 / 18%), 0 2px 11px 0 rgb(0 0 0 / 15%);

        word-wrap: break-word;
        background-color: #fff;
        width: 100%;
        @media (prefers-color-scheme: dark) { 
              background: darken($inner-background-color-dark, 15%);
              .card-title {
                color: $primary-color;
              }
        }


        .card-body {
            padding: 1.20rem;

            .card-title {
                font-size: 1.25rem;
                margin-block-start: 0;
                margin-block-end: 0;
                margin-inline-start: 0;
                margin-inline-end: 0;
                margin-top: 0;
                margin-bottom: 0.7rem;
            }
        }
    }
  </style>
  