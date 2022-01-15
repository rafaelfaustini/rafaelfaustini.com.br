<template>

    <div data-cy="projects">
        <div class="container section">

            <div class="project-inner" data-cy="projects-inner" >
                <carousel>
                    <slide class="pj" v-for="(project, index) in $t('projects')" :key="index">
                        
                        <Project :title="project.title" :description="project.description" :year="project.year" :height="30" :image="project.image" :backgroundColor="project.style.backgroundColor">
                        </Project>
                    </slide>
                </carousel>

            </div>
        </div>

        
    </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';
import Project from './Project.vue';
export default {
    name: "Projects",
     components: {
    Carousel,
    Slide,
    Project
}
}
</script>
<i18n locale="en" src="@/locales/projects/projects_en.json"></i18n>
<i18n locale="pt-BR" src="@/locales/projects/projects_pt-BR.json"></i18n>