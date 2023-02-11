import LayoutContainer from "./LayoutContainer.vue";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'LayoutContainer',
  component: LayoutContainer,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: any, { argTypes }: any) => ({
  components: { LayoutContainer },
  props: Object.keys(argTypes),
  template: `
  <LayoutContainer v-bind="$props">
    ${args.default}
  </LayoutContainer>
  `,
});

export const FirstStory : any = Template.bind({});
FirstStory.args = {
    default: ''
};