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
        background-color: #e65050;
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
            .current-works {
                display: grid;
                grid-auto-rows: 1fr;
                grid-template-columns: repeat(2, 1fr);
                grid-column-gap: 30px;
                grid-row-gap: 30px;
            }
            .past-works {
                margin-top: 10px;
                display: grid;
                grid-auto-rows: 1fr;
                grid-template-columns: repeat(3, 1fr);
                grid-column-gap: 10px;
                grid-row-gap: 30px;
            }

            .button-container {
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
  </style>
  