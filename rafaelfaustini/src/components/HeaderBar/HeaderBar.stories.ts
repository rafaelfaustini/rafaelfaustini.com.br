import INavMenuItem from "../NavMenu/interfaces/INavMenuItem";
import HeaderBar from "./HeaderBar.vue";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'HeaderBar',
  component: HeaderBar,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: any, { argTypes }: any) => ({
  components: { HeaderBar },
  props: Object.keys(argTypes),
  template: `<HeaderBar v-bind="$props"/>`,
});

export const WithLogoName : any = Template.bind({});
WithLogoName.args = {
    logoName: "Rafael Faustini"
};

export const WithLogoNameNavItem : any = Template.bind({});
WithLogoNameNavItem.args = {
    ...WithLogoName.args,
    headerNavItemList: [
      { name: 'Home', href: '#' },
      { name: 'About', href: '#about'}
   ] as INavMenuItem[]
};