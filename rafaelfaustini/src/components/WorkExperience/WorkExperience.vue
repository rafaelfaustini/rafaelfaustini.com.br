<template>
    <Card class="work-experience" :title="title">
      <p class="work-topic" v-for="workTopic in workTopics" :key="workTopic">- {{ workTopic }}</p>
      <div class="button-toolbar" v-if="toolbarButton">
        <material-button :text="toolbarButton.name" :color="toolbarButton.color || 'primary'" :href="toolbarButton.href"></material-button>
      </div>
    </Card>
</template>
  
  <script lang="ts">
  import Vue, { PropType } from 'vue';
  import Card from '../Card/Card.vue';
  import IButton from '../Shared/interfaces/IButton'
  import MaterialButton from '../MaterialButton/MaterialButton.vue'
  
  export default Vue.extend({
    name: 'WorkExperience',
    props: {
        title: String,
        workTopics: Array as PropType<string[]>,
        toolbarButton: Object as PropType<IButton>
    },
    components: {
        Card,
        MaterialButton
    }
  });
  </script>
  
  <style scoped lang="scss">
    .work-topic {
      line-height: normal;
      margin-bottom: 0.7em;
      font-size: 1em;
      line-height: 1.4;
      color: #7c7c7c;
    }
    .work-experience {
      width: 100%;
      height: 100%;
    }
  </style>
  