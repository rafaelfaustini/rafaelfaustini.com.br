import ButtonColorEnum from "../MaterialButton/enum/ButtonColorEnum";
import IButton from "../Shared/interfaces/IButton";
import IProjectImage from "./interface/IProjectImage";
import Project from "./Project.vue";
//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Project',
  component: Project,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: any, { argTypes }: any) => ({
  components: { Project },
  props: Object.keys(argTypes),
  template: '<Project v-bind="$props"/>',
});

export const FirstStory : any = Template.bind({});
FirstStory.args = {
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
    src: "https://picsum.photos/400/200",
    alt: ""
  } as IProjectImage
};