<template>
    <section id="experience" class="experience-section">
        <div class="container">
            <div class="inner-container">
                <h1 class="title">
                 {{ title }}
                </h1>
                <div data-cy="current-works" class="current-works">
                    <work-experience v-for="currentWork in currentWorks" :key="currentWork.title" :title="currentWork.title" :workTopics="currentWork.workTopics" :toolbarButton="currentWork.toolbarButton" ></work-experience>
                </div>
                <div data-cy="past-works" class="past-works">
                    <work-experience v-for="pastWork in pastWorks" :key="pastWork.title" :title="pastWork.title" :workTopics="pastWork.workTopics" :toolbarButton="pastWork.toolbarButton" ></work-experience>
                </div>
                <div class="button-container">
                    <material-button color="primary" :size="'lg'" :text="resumeButtonOption?.name" :href="resumeButtonOption?.href"></material-button>
                </div>
            </div>
        </div>
    </section>
</template>
  
  <script lang="ts">
  import Vue, { PropType } from 'vue';
  import MaterialButton from '../MaterialButton/MaterialButton.vue';
  import IButton from '../Shared/interfaces/IButton';
  import WorkExperience from '../WorkExperience/WorkExperience.vue';
  import IWorkExperience from './interfaces/IWorkExperience';
  
  export default Vue.extend({
    name: 'ExperienceSection',
    props: {
        title: String,
        currentWorks: Array as PropType<IWorkExperience[]>,
        pastWorks: Array as PropType<IWorkExperience[]>,
        resumeButtonOption: Object as PropType<IButton>
    },
    components: {
        WorkExperience,
        MaterialButton
    }
  });
  </script>
  
  <style scoped lang="scss">
    .experience-section {
        background-color: $primary-color;
        @media (prefers-color-scheme: dark) { 
            background: darken($inner-background-color-dark, 10%);
        }
        .container {
            max-width: 1242px;
            margin: 0 auto;
            padding: 0px 0 5px 0;
            flex-wrap: wrap;
            padding: 50px;
            .title {
                font-size: 3em;
                text-align: center;
                margin-block-start: 0;
                margin-block-end: 0;
                margin-bottom: 1.5em;

            }
            .current-works {
                max-width: 500px;
                margin: 0 auto;
                display: flex;
                align-items: center;
                gap: 0.75em;
                margin-bottom: 1.5rem;

                grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
            }
            .past-works {
                margin-top: 10px;
                display: grid;
                grid-gap: 0.75rem;
                justify-content: center;
                grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
            }

            .button-container {
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
  </style>
  