<template>
    <section id="header" class="header-section">
        <div class="container">
            <div class="inner-container">
                <h1 class="title">
                  <country-flag :slideAnimation="true" :slideInterval="5" />{{ title }}<country-flag :slideAnimation="true" :slideInterval="5" />
                </h1>
                <p class="subtitle">{{ subtitle }}</p>
            </div>
        </div>
    </section>
</template>
  
  <script lang="ts">
  import Vue from 'vue';
  import CountryFlag from '../CountryFlag/CountryFlag.vue';
  
  export default Vue.extend({
    name: 'HeaderSection',
    props: {
        title: String,
        subtitle: String
    },
    components: {
        CountryFlag
    }
  });
  </script>
  
  <style scoped lang="scss">
    @keyframes circle-out{
        0%{
            clip-path:circle(20%)
        }
        100%{
            clip-path:circle(80%)
        }
    }
    .header-section {
        background-color: #e65050;
        height: 85vh;
        animation: circle-out .65s;
        .container {
            padding: 60px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: inherit;
            .inner-container {
                flex: 11 1 100px;
                .title {
                    text-align: center;
                    font-size: 3.5em;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                }
                .subtitle {
                    text-align: center;
                    font-size: 1.5em;
                }
            }

        }
    }
  </style>
  