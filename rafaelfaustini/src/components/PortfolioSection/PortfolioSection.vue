<template>
    <section id="portfolio" class="portfolio-section">
        <div class="container">
            <div class="inner-container">
                <h1 class="title">
                    {{ title }}
                </h1>
                <projects v-if="projects" :placeholder="searchPlaceholder" :projects="projects"></projects>
                <div class="button-toolbar" v-if="githubButton">
                    <material-button size="lg" :text="githubButton.name" :color="githubButton.color" :href="githubButton.href"></material-button>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import IButton from '../Shared/interfaces/IButton';
import MaterialButton from '../MaterialButton/MaterialButton.vue';
import Projects from '../Projects/Projects.vue';
import IProject from '../Projects/interface/IProject';

export default Vue.extend({
  name: 'PortfolioSection',
  props: {
    title: String,
    searchPlaceholder: String,
    projects: Array as PropType<IProject[]>,
    githubButton: Object as PropType<IButton>
  },
  components: {
    MaterialButton,
    Projects
  }
});
</script>

<style scoped lang="scss">
    .portfolio-section {
        .container {
            max-width: 1242px;
            margin: 0 auto;
            padding: 0px 0 5px 0;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            padding: 50px;
            .title {
                font-size: 3em;
                text-align: center;
                margin-block-start: 0;
                margin-block-end: 0;
                margin-bottom: 1.5em;
            }

            .button-toolbar {
                text-align: center;
            }
        }
    }
</style>
