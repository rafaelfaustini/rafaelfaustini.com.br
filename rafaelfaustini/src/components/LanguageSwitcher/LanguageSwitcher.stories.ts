import LanguageSwitcher from "./LanguageSwitcher.vue";
export default {
  title: 'LanguageSwitcher',
  component: LanguageSwitcher,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: any, { argTypes }: any) => ({
  components: { LanguageSwitcher },
  props: Object.keys(argTypes),
  template: '<LanguageSwitcher v-bind="$props"/>',
});

export const Switcher : any = Template.bind({});
Switcher.args = {

};