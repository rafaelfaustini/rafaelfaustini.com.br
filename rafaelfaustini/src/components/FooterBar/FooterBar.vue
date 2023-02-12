<template>
    <footer class="footer-bar">
        <generic-navbar :color="navbarColor">
            <template v-slot:bar-center>
                <div class="footer-container">
                    <p class="contact-email">{{ email }}</p>
                    <a class="website-version" :href="githubUrl" data-cy="website-version">{{ websiteVersionText }}</a>
                </div>
            </template>
        </generic-navbar>
    </footer>
  </template>
  
  <script lang="ts">
import Vue from 'vue';
import GenericNavbar from '../GenericNavbar/GenericNavbar.vue';
import NavColorEnum from './enum/NavColorEnum';
  
  export default Vue.extend({
  components: { GenericNavbar },
    name: 'FooterBar',
    props: {
      email: String,
    },
    computed: {
        websiteVersion: function() : string {
            return process.env.VUE_APP_VERSION || '0.0.0'
        },
        githubUrl: function() : string {
            return `https://github.com/rafaelfaustini/rafaelfaustini.com.br/releases/tag/${this.websiteVersion}`
        },
        websiteVersionText: function() : string {
            return `v${this.websiteVersion}`;
        }
    },
    data() {
        return {
            navbarColor: NavColorEnum.Primary
        }
    }
  });

  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
    .footer-bar {
        .footer-container {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            p,a {
                flex: 1 1 100%;
                text-align: center;
            }

            .website-version, .contact-email  {
                text-align: center;
                font-size: 1.25em;
            }
        }
    }
  </style>
  