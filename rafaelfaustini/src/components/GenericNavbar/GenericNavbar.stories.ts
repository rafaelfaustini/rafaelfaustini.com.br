import NavColorEnum from "./enum/NavColorEnum";
import GenericNavbar from "./GenericNavbar.vue";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'GenericNavbar',
  component: GenericNavbar,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: any, { argTypes }: any) => ({
  components: { GenericNavbar },
  props: Object.keys(argTypes),
  template: `
  <GenericNavbar v-bind="$props">
    <template v-slot:bar-left>
      ${args.barLeft || ''}
    </template>
    <template v-slot:bar-center>
      ${args.barCenter || ''}
    </template>
    <template v-slot:bar-right>
      ${args.barRight || ''}
    </template>
  </GenericNavbar>
  
  `,
});

export const PrimaryColorStory : any = Template.bind({});
PrimaryColorStory.args = {
  color: NavColorEnum.Primary
};

export const SecondaryColorStory : any = Template.bind({});
SecondaryColorStory.args = {
  color: NavColorEnum.Secondary
};

export const LeftContentStory : any = Template.bind({});
LeftContentStory.args = {
    ...PrimaryColorStory.args,
    barLeft: '<b>Left Content</b>'
};

export const LeftCenterContentStory : any = Template.bind({});
LeftCenterContentStory.args = {
    ...LeftContentStory.args,
    barCenter: '<a href="#">Center Content</a>'
};

export const LeftCenterRightContentStory : any = Template.bind({});
LeftCenterRightContentStory.args = {
    ...LeftCenterContentStory.args,
    barRight: '<p>Right Content</p>'
};