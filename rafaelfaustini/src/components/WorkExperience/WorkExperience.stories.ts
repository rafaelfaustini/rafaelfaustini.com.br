import ButtonColorEnum from "../MaterialButton/enum/ButtonColorEnum";
import IToolbarButton from "./interfaces/IToolbarButton";
import WorkExperience from "./WorkExperience.vue";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'WorkExperience',
  component: WorkExperience,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: any, { argTypes }: any) => ({
  components: { WorkExperience },
  props: Object.keys(argTypes),
  template: '<WorkExperience v-bind="$props"/>',
});

export const FirstStory : any = Template.bind({});
FirstStory.args = {
  title: "Role - Workplace, apr 2021 - now",
  workTopics: ["Topic1", "Topic2"],
};

export const WithButton : any = Template.bind({});
WithButton.args = {
  ...FirstStory.args,
  toolbarButton: {
    name: "Click Me",
    href: "https://google.com",
    color: ButtonColorEnum.Primary
  } as IToolbarButton
};