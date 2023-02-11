import AboutSection from "./AboutSection.vue";
//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'AboutSection',
  component: AboutSection,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: any, { argTypes }: any) => ({
  components: { AboutSection },
  props: Object.keys(argTypes),
  template: '<AboutSection v-bind="$props"/>',
});

export const FirstStory : any = Template.bind({});
FirstStory.args = {
  //👇 The args you need here will depend on your component
  title: "Title",
  paragraphs: [
    "First Paragraph",
    "Second Paragraph"
  ]
};