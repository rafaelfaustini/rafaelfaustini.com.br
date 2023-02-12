import MaterialButton from "./MaterialButton.vue";
import ButtonSizeEnum from "./enum/ButtonSizeEnum";
import ButtonColorEnum from "./enum/ButtonColorEnum";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MaterialButton',
  component: MaterialButton,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: any, { argTypes }: any) => ({
  components: { MaterialButton },
  props: Object.keys(argTypes),
  template: `
    <MaterialButton v-bind="$props"></MaterialButton>
  `,
});

export const WithText = Template.bind({}) as any
WithText.args = {
  text: `Sample Button`,
}

export const WithTextPrimaryColor : any = Template.bind({});
WithTextPrimaryColor.args = {
  ...WithText.args,
  color: ButtonColorEnum.Primary,
};

export const WithTextPrimaryOutlineColor : any = Template.bind({});
WithTextPrimaryOutlineColor.args = {
  ...WithText.args,
  color: ButtonColorEnum.PrimaryOutline,
};

export const WithTextSecondaryColor : any = Template.bind({});
WithTextSecondaryColor.args = {
  ...WithText.args,
  color: ButtonColorEnum.Secondary,
};

export const WithTextSecondaryOutlineColor : any = Template.bind({});
WithTextSecondaryOutlineColor.args = {
  ...WithText.args,
  color: ButtonColorEnum.SecondaryOutline,
};

export const WithTextPrimaryColorLarge : any = Template.bind({});
WithTextPrimaryColorLarge.args = {
  ...WithTextPrimaryColor.args,
  size: ButtonSizeEnum.Large
};