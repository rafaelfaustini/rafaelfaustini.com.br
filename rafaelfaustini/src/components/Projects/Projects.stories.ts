import ButtonColorEnum from "../MaterialButton/enum/ButtonColorEnum";
import IProjectImage from "../Project/interface/IProjectImage";
import IButton from "../Shared/interfaces/IButton";
import Projects from "./Projects.vue";
//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Projects',
  component: Projects,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: any, { argTypes }: any) => ({
  components: { Projects },
  props: Object.keys(argTypes),
  template: '<Projects v-bind="$props"/>',
});

export const FirstStory : any = Template.bind({});
FirstStory.args = {
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
    ],
    placeholder: "Busque por uma palavra chave, tecnologia ou year"
};