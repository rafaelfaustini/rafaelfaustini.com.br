<template>
  <div id="app">
    <layout-container>
      <HeaderBar v-bind="headerBar"></HeaderBar>
      <header-section v-bind="headerSection"></header-section>
      <about-section v-bind="aboutSection"></about-section>
      <wave-divider></wave-divider>
      <experience-section v-bind="experienceSection"></experience-section>
      <wave-divider :flipDown="true"></wave-divider>
      <portfolio-section v-bind="portifolioSection"></portfolio-section>
      <footer-bar email="📬 contato@rafaelfaustini.com.br"></footer-bar>
    </layout-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HeaderSection from './components/HeaderSection/HeaderSection.vue';
import LayoutContainer from './components/LayoutContainer/LayoutContainer.vue';
import AboutSection from './components/AboutSection/AboutSection.vue';
import ExperienceSection from './components/ExperienceSection/ExperienceSection.vue';
import WaveDivider from './components/WaveDivider/WaveDivider.vue'
import IWorkExperience from './components/ExperienceSection/interfaces/IWorkExperience';
import ButtonColorEnum from './components/MaterialButton/enum/ButtonColorEnum';
import IButton from './components/Shared/interfaces/IButton';
import INavMenuItem from './components/NavMenu/interfaces/INavMenuItem';
import HeaderBar from './components/HeaderBar/HeaderBar.vue';
import FooterBar from './components/FooterBar/FooterBar.vue';
import IProjectImage from './components/Project/interface/IProjectImage';
import PortfolioSection from './components/PortfolioSection/PortfolioSection.vue';
import IPortifolioSection from './components/Shared/interfaces/IPortifolioSection';
import IProject from './components/Projects/interface/IProject';
import IExperienceSection from './components/Shared/interfaces/IExperienceSection';
import IAboutSection from './components/Shared/interfaces/IAboutSection';
import IHeaderSection from './components/Shared/interfaces/IHeaderSection';
import IHeaderBar from './components/Shared/interfaces/IHeaderBar';

export default Vue.extend({
  name: 'App',
  components: {
    LayoutContainer,
    HeaderSection,
    AboutSection,
    ExperienceSection,
    WaveDivider,
    HeaderBar,
    FooterBar,
    PortfolioSection
  },
  data() {
    return {
     headerBar: {
      logoName: "Rafael Faustini",
      navItemList: [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about'}
      ] as INavMenuItem[],
     } as IHeaderBar,
     headerSection : {
      title: "Rafael Faustini", 
      subtitle: "I want to improve people's lives with technology"
     } as IHeaderSection,
     aboutSection : {
        title: "🧑🏻‍ Um pouco sobre mim" as string,
        paragraphs: [
        `Meu nome é Rafael Faustini, tenho 23 anos, sou um desenvolvedor de software full-stack, brasileiro e italiano, bacharel em sistemas de informação pelo <a href="https://www.unilasalle.edu.br/rj" class="destaque">Centro Universitário La Salle do Rio de Janeiro</a>, morando em Lisboa.`, 
        `Comecei a programar quando eu tinha 11 anos de idade e nunca parei e desde então sempre procurando novas soluções para novos problemas.</p>`
      ] as string[],
     } as IAboutSection,
     experienceSection : {
        title: "💼 Experiência Profissional",
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
          } as IButton
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
          name: "Resume",
          href: "/docs/curriculo.pdf"
        } as IButton,
     } as IExperienceSection,
    portifolioSection : {
      title: "Portfolio",
      searchPlaceholder: "Busque por uma palavra chave, tecnologia ou year",
      projects: [
      {
        id: 1,
        title: "Project Title",
        year: 2023,
        language: "PHP",
        tags: ["tags1", "tags2", "tags3"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non eros eget orci tempor luctus. Duis pharetra lectus nisi, vitae sollicitudin massa blandit vel. Pellentesque aliquet cursus quam, ut pulvinar lacus ullamcorper hendrerit. Etiam condimentum felis a est consequat, at facilisis lacus molestie. Sed malesuada fermentum consectetur. Praesent sit amet lacus ac sapien blandit mollis non at ex. Ut mollis dui eget cursus interdum. Proin gravida ullamcorper eleifend. Nullam sit amet convallis ante, sit amet fermentum sapien. In erat neque, pulvinar vel magna quis, maximus euismod nunc. Nulla non dignissim dui. Maecenas elit leo, ullamcorper et diam quis, aliquam aliquam metus. Etiam vulputate tortor orci, sit amet pretium est lobortis et. Vivamus eu nunc odio.",
        actionButton: {
          name: "See More",
          href: "#",
          color: ButtonColorEnum.Secondary
        } as IButton,
        sourceCodeButton: {
          name: "Source-Code",
          href: "#",
          color: ButtonColorEnum.SecondaryOutline
        } as IButton,
        projectImage: {
          src: "https://picsum.photos/1000/500",
          alt: ""
        } as IProjectImage
      },
      {
        id: 2,
        title: "Project Title 2",
        year: 2019,
        language: "PHP",
        tags: ["tags1"],
        description: "Donec congue dapibus justo, sagittis hendrerit mi sagittis id. Suspendisse aliquet ante massa, ut vehicula tellus fringilla sit amet. Nunc faucibus risus magna, a rutrum dui bibendum eget. Mauris in arcu gravida, bibendum enim ac, finibus lectus. Vivamus sapien tellus, molestie quis ante non, ornare posuere est. Integer sed massa pretium, molestie lorem nec, ultrices mi. In hac habitasse platea dictumst. Aliquam at feugiat dui.",
        actionButton: {
          name: "Preview",
          href: "#",
          color: ButtonColorEnum.Secondary
        } as IButton,
        sourceCodeButton: {
          name: "Source-Code",
          href: "#",
          color: ButtonColorEnum.SecondaryOutline
        } as IButton,
        projectImage: {
          src: "https://picsum.photos/960/540",
          alt: ""
        } as IProjectImage
      },
      {
        id: 3,
        title: "Project Title 3",
        year: 2015,
        language: "Python",
        tags: ["tags1"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non eros eget orci tempor luctus. Duis pharetra lectus nisi, vitae sollicitudin massa blandit vel. Pellentesque aliquet cursus quam, ut pulvinar lacus ullamcorper hendrerit. Etiam condimentum felis a est consequat, at facilisis lacus molestie. Sed malesuada fermentum consectetur. Praesent sit amet lacus ac sapien blandit mollis non at ex. Ut mollis dui eget cursus interdum. Proin gravida ullamcorper eleifend. Nullam sit amet convallis ante, sit amet fermentum sapien. In erat neque, pulvinar vel magna quis, maximus euismod nunc. Nulla non dignissim dui. Maecenas elit leo, ullamcorper et diam quis, aliquam aliquam metus. Etiam vulputate tortor orci, sit amet pretium est lobortis et. Vivamus eu nunc odio.",
        actionButton: {
          name: "Preview",
          href: "#",
          color: ButtonColorEnum.Secondary
        } as IButton, 
      },
      ] as IProject[],
      githubButton: {
        name: "See More",
        href: "https://github.com",
        color: ButtonColorEnum.Primary
      } as IButton,
    } as IPortifolioSection,
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
