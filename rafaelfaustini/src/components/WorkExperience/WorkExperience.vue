<template>
  <div class="work-experience" data-cy="work-experience">
    <Card :title="title">
      <p class="work-topic" v-for="workTopic in workTopics" :key="workTopic">- {{ workTopic }}</p>
      <div class="button-toolbar" v-if="toolbarButton">
        <material-button :text="toolbarButton.name" :color="toolbarButton.color || 'primary'" :href="toolbarButton.href"></material-button>
      </div>
    </Card>
  </div>
</template>
  
  <script lang="ts">
  import Vue, { PropType } from 'vue';
  import Card from '../Card/Card.vue';
  import IToolbarButton from './interfaces/IToolbarButton'
  import MaterialButton from '../MaterialButton/MaterialButton.vue'
  
  export default Vue.extend({
    name: 'WorkExperience',
    props: {
        title: String,
        workTopics: Array as PropType<string[]>,
        toolbarButton: Object as PropType<IToolbarButton>
    },
    components: {
        Card,
        MaterialButton
    }
  });
  </script>
  
  <style scoped lang="scss">
  .work-experience {
    .work-topic {
      line-height: normal;
      margin-bottom: 0.7em;
      font-size: 1em;
      line-height: 1.4;
      color: #7c7c7c;
    }
  }
  </style>
  