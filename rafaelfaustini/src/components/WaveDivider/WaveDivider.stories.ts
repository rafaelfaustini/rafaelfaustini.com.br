import WaveDivider from "./WaveDivider.vue";
//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'WaveDivider',
  component: WaveDivider,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: any, { argTypes }: any) => ({
  components: { WaveDivider },
  props: Object.keys(argTypes),
  template: '<WaveDivider v-bind="$props"/>',
});

export const FirstStory : any = Template.bind({});
FirstStory.args = {
    color: "#000"
};

export const FlippedDown : any = Template.bind({});
FlippedDown.args = {
    ...FirstStory.args,
    flipDown: true
};