<template>
  <div id="app">
    <layout-container>
      <Navbar logoName="Rafael Faustini">
        <template v-slot:nav-menu>
          <nav-menu :itemList="itemList"></nav-menu>
        </template>
      </Navbar>
      <header-section title="Rafael Faustini" subtitle="I want to improve people's lives with technology"></header-section>
      <about-section title="🧑🏻‍ Um pouco sobre mim" :paragraphs="aboutPagraphs"></about-section>
      <wave-divider></wave-divider>
      <experience-section title="💼 Experiência Profissional" :currentWorks="currentWorks" :pastWorks="pastWorks" :resumeButtonOption="resumeButtonOption"></experience-section>
      <wave-divider :flipDown="true"></wave-divider>
      <Navbar color="primary"></Navbar>
    </layout-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HeaderSection from './components/HeaderSection/HeaderSection.vue';
import LayoutContainer from './components/LayoutContainer/LayoutContainer.vue';
import Navbar from './components/Navbar/Navbar.vue';
import NavMenu from './components/NavMenu/NavMenu.vue';
import AboutSection from './components/AboutSection/AboutSection.vue';
import ExperienceSection from './components/ExperienceSection/ExperienceSection.vue';
import WaveDivider from './components/WaveDivider/WaveDivider.vue'
import IWorkExperience from './components/ExperienceSection/interfaces/IWorkExperience';
import ButtonColorEnum from './components/MaterialButton/enum/ButtonColorEnum';
import IToolbarButton from './components/WorkExperience/interfaces/IToolbarButton';
import IResumeButtonOptions from './components/ExperienceSection/interfaces/IResumeButtonOptions';

export default Vue.extend({
  name: 'App',
  components: {
    LayoutContainer,
    Navbar,
    NavMenu,
    HeaderSection,
    AboutSection,
    ExperienceSection,
    WaveDivider
  },
  data() {
    return {
      itemList: [
        { name: 'Home', href: '#' },
        { name: 'About', href: 'about/'}
     ],
     aboutPagraphs: [
      `Meu nome é Rafael Faustini, tenho 23 anos, sou um desenvolvedor de software full-stack, brasileiro e italiano, bacharel em sistemas de informação pelo <a href="https://www.unilasalle.edu.br/rj" class="destaque">Centro Universitário La Salle do Rio de Janeiro</a>, morando em Lisboa.`, 
      `Comecei a programar quando eu tinha 11 anos de idade e nunca parei e desde então sempre procurando novas soluções para novos problemas.</p>`
     ],
     currentWorks: [
      {
        title: 'Work Experience 1',
        workTopics: [
          "Topic 1",
          "Topic 2",
          "Topic 3"
        ],
        toolbarButton: {
          name: "ButtonName",
          href: "https://google.com.br",
          color: ButtonColorEnum.Primary
        } as IToolbarButton
      },
      {
        title: 'Work Experience 2',
        workTopics: [
          "Topic 4",
          "Topic 5",
        ],
      },
    ] as IWorkExperience[],
  pastWorks: [
    {
      title: 'Work Experience 3',
      workTopics: [
        "Topic 6",
      ],
    },
    {
      title: 'Work Experience 4',
      workTopics: [
        "Topic 7",
        "Topic 8",
      ],
    },
    {
      title: 'Work Experience 5',
      workTopics: [
        "Topic 9",
        "Topic 10",
        "Topic 11",
        "Topic 12",
      ],
    },
    {
      title: 'Work Experience 6',
      workTopics: [
        "Topic 11",
      ],
    },
  ] as IWorkExperience[],
  
    resumeButtonOption: {
      text: "Resume",
      href: "/docs/curriculo.pdf"
    } as IResumeButtonOptions
      }
    
  },
});
</script>

<style lang="scss">
@import url(./scss/_reset.scss);
html,
body {
    scroll-behavior: smooth;
}
body {
  background-color: #f2f2f2;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: auto;
}

::-webkit-scrollbar {
    width: 0.75em;
    height: 0.5em;
}

::-webkit-scrollbar-track {
    background: #f2f2f2;
    border-radius: 100vw;
    margin-block: 0.75em;
}

::-webkit-scrollbar-thumb {
    background: darken(#f2f2f2, 60%);
    border: 0.15em solid #f2f2f2;
    border-radius: 100vw;

    &:hover {
        background: darken(#f2f2f2, 41%);
    }
}


</style>
