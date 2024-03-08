import NavMenu from './NavMenu.vue';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'NavMenu',
  component: NavMenu,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: any, { argTypes }: any) => ({
  components: { NavMenu },
  props: Object.keys(argTypes),
  template: '<NavMenu v-bind="$props"/>',
});

export const FirstStory : any = Template.bind({});
FirstStory.args = {
  //👇 The args you need here will depend on your component
  itemList: [
    { name: 'Home', href: '#' },
    { name: 'About', href: 'about/'}
  ]
};