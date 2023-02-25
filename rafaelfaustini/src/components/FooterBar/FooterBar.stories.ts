import INavMenuItem from "../NavMenu/interfaces/INavMenuItem";
import FooterBar from "./FooterBar.vue";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'FooterBar',
  component: FooterBar,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: any, { argTypes }: any) => ({
  components: { FooterBar },
  props: Object.keys(argTypes),
  template: '<FooterBar v-bind="$props"/>',
});

export const FirstStory : any = Template.bind({});
FirstStory.args = {
  email: 'sample@email.com' 
};