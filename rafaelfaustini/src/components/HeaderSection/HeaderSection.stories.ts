import HeaderSection from "./HeaderSection.vue";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'HeaderSection',
  component: HeaderSection,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: any, { argTypes }: any) => ({
  components: { HeaderSection },
  props: Object.keys(argTypes),
  template: '<HeaderSection v-bind="$props"/>',
});

export const FirstStory : any = Template.bind({});
FirstStory.args = {
  title: "Rafael Faustini",
  subtitle: "I want to improve people's lives with technology"
};