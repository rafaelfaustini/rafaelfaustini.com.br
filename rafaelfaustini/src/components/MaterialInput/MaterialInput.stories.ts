import MaterialInput from "./MaterialInput.vue";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MaterialInput',
  component: MaterialInput,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: any, { argTypes }: any) => ({
  components: { MaterialInput },
  props: Object.keys(argTypes),
  template: `
    <MaterialInput v-bind="$props"></MaterialInput>
  `,
});

export const WithText = Template.bind({}) as any
WithText.args = {
  placeholder: `Placeholder test`,
}