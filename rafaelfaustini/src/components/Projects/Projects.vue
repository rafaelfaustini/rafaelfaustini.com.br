<template>
    <div class="projects">
      <material-input v-model="searchText" :placeholder="placeholder"></material-input>
      <div class="projects-wrapper">
        <project class="project" v-for="project in filteredProjects" :key="project.id" v-bind="project"></project>
      </div>
    </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import IProject from './interface/IProject';
import Project from '../Project/Project.vue';
import MaterialInput from '../MaterialInput/MaterialInput.vue';

export default Vue.extend({
  name: 'Projects',
  props: {
    placeholder: String,
    projects: Array as PropType<IProject[]>
  },
  components: {
    Project,
    MaterialInput
  },
  data() {
    return {
      searchText: "",
    }
  },

  computed: {
    filteredProjects: function() : any {
      if(!this.searchText) {
        return this.sortProjects(this.projects);
      }
      return this.sortProjects(this.projects.filter((project : IProject) : boolean => this.doesProjectMatchSearch(project, this.searchText)))
    }
  },

  methods: {
    containsString(baseString : string, searchString: string) {
      if(baseString.trim().toLowerCase().indexOf(searchString.trim().toLowerCase()) > -1) {
        return true
      }
      return false;
    },
    doesProjectMatchSearch(project : IProject, searchString : string) {
      let doesTitleMatch : boolean = this.containsString(project.title, searchString);
      let doesDescriptionMatch : boolean = this.containsString(project.description, searchString);
      let doesYearMatch : boolean = this.containsString(project.year.toString(), searchString);
      let doesLanguageMatch : boolean = this.containsString(project.language, searchString);
      let doesTagMatch = false;
      for(let tag of project.tags) {
        doesTagMatch = doesTagMatch || this.containsString(tag, searchString);
      }

      return doesTitleMatch || doesDescriptionMatch || doesYearMatch || doesLanguageMatch || doesTagMatch;
    },
    sortProjects(projects : any) {
      return projects.sort((a : any, b : any) => b.year - a.year || a.title.localeCompare(b.title));
    }

  },
});
</script>

<style scoped lang="scss">
  .projects {
    .projects-wrapper {
      height: 30vw;
      overflow: auto;
      .project {
        margin-bottom: 15px;
      }
    }
  }
</style>
