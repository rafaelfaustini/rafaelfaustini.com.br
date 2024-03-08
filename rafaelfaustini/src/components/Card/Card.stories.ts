import Card from "./Card.vue";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Card',
  component: Card,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: any, { argTypes }: any) => ({
  components: { Card },
  props: Object.keys(argTypes),
  template: `
    <Card v-bind="$props">
      <template v-if="${'default' in args}" v-slot>${args.default}</template>
    </Card>
  `,
});

export const WithDefaultSlotContent = Template.bind({}) as any
WithDefaultSlotContent.args = {
  default: `<p>Sample Component</p>`,
}

export const WithDefaultSlotContentAndTitle : any = Template.bind({});
WithDefaultSlotContentAndTitle.args = {
  ...WithDefaultSlotContent.args,
  title: "Sample",
};