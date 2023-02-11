import ButtonColorEnum from "../MaterialButton/enum/ButtonColorEnum";
import IToolbarButton from "../WorkExperience/interfaces/IToolbarButton";
import ExperienceSection from "./ExperienceSection.vue";
import IResumeButtonOptions from "./interfaces/IResumeButtonOptions";
import IWorkExperience from "./interfaces/IWorkExperience";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'ExperienceSection',
  component: ExperienceSection,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: any, { argTypes }: any) => ({
  components: { ExperienceSection },
  props: Object.keys(argTypes),
  template: `
    <ExperienceSection v-bind="$props"></ExperienceSection>
  `,
});

export const WithText = Template.bind({}) as any
WithText.args = {
  title: `Sample Title`,
  currentWorks: [
    {
      title: 'Work Experience 1',
      workTopics: [
        "Topic 1",
        "Topic 2",
        "Topic 3"
      ],
      toolbarButton: {
        name: "ButtonName",
        href: "https://google.com.br",
        color: ButtonColorEnum.Primary
      } as IToolbarButton
    },
    {
      title: 'Work Experience 2',
      workTopics: [
        "Topic 4",
        "Topic 5",
      ],
    },
  ] as IWorkExperience[],

  pastWorks: [
    {
      title: 'Work Experience 3',
      workTopics: [
        "Topic 6",
      ],
    },
    {
      title: 'Work Experience 4',
      workTopics: [
        "Topic 7",
        "Topic 8",
      ],
    },
    {
      title: 'Work Experience 5',
      workTopics: [
        "Topic 9",
        "Topic 10",
        "Topic 11",
        "Topic 12",
      ],
    },
    {
      title: 'Work Experience 6',
      workTopics: [
        "Topic 11",
      ],
    },
  ] as IWorkExperience[],

  resumeButtonOption: {
    text: "Resume",
    href: "/docs/teste.pdf"
  } as IResumeButtonOptions

}
