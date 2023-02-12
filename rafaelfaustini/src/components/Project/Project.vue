<template>
    <div class="project">
        <div class="container">
            <div class="project-image">
                <img class="image" v-if="projectImage" loading="lazy" :src="projectImage.src" :alt="projectImage.alt">
                <placeholder-image class="image" :text="title" v-else></placeholder-image>
            </div>
            <div class="project-content">
                <h3 class="project-title">
                    <span class="title">{{ title }} </span>
                    <span class="tag" v-if="year">{{ year }}</span>
                    <span class="tag" v-if="language">{{ language }}</span>
                    <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}&#32;</span>
                </h3>
                <p class="project-description">{{ description }}</p>
                <div class="project-buttons">
                    <material-button v-if="actionButton" :color="actionButtonColor" :href="actionButton.href" :text="actionButton.name"></material-button>
                    <material-button v-if="sourceCodeButton" :color="sourceCodeButtonColor" :href="sourceCodeButton.href" :text="sourceCodeButton.name"></material-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import ButtonColorEnum from '../MaterialButton/enum/ButtonColorEnum';
import MaterialButton from '../MaterialButton/MaterialButton.vue';
import IButton from '../Shared/interfaces/IButton';
import IProjectImage from './interface/IProjectImage';
import PlaceholderImage from '../PlaceholderImage/PlaceholderImage.vue';

export default Vue.extend({
  name: 'Project',
  props: {
      title: String,
      year: Number,
      language: String,
      tags: Array as PropType<string[]>,
      description: String,
      actionButton: Object as PropType<IButton>,
      sourceCodeButton: Object as PropType<IButton>,
      projectImage: Object as PropType<IProjectImage> 
  },
  data() {
    return {
        actionButtonColor: ButtonColorEnum.Secondary,
        sourceCodeButtonColor: ButtonColorEnum.SecondaryOutline
    }
  },
  components: {
    MaterialButton,
    PlaceholderImage
  }
});
</script>

<style scoped lang="scss">
    .project {
        .container {
            display: flex;
            align-content: center;
            justify-content: center; 
            gap: 20px; 
            .project-image {
                flex: 1 1 329px;
                max-width: 600px;
                .image {
                    max-width: 600px;
                }
            }
            .project-content {
                .project-title {
                    display: flex;
                    gap: 5px;
                    align-items: center;
                    .title {
                        padding: 0 2px;
                    }
                    .tag {
                        margin: 0px 1px;
                        padding: 0.05em 0.2em;
                        color: #000;
                        background-color: #e65050;
                        display: inline-block;
                        border-radius: 0.25rem;
                        vertical-align: middle;
                    }
                }
            }
        }
    }
</style>