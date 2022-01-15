<template>
  <section class="portfolio" id="portfolio">
      <div class="content">
          <h1>{{$t('home.projects.title')}}</h1>
          <Projects></Projects>
          <div class="seemore">
              <a href="https://github.com/rafaelfaustini" class="btn btn-secondary">{{$t('home.projects.github')}}</a>
          </div>
      </div>
  </section>
</template>
<script>
import Projects from "../Projects.vue";
export default {
    name: "Portfolio",
    components: { Projects }
}
</script>