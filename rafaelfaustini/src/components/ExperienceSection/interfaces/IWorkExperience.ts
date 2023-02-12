import IButton from "@/components/Shared/interfaces/IButton";
export default interface IWorkExperience {
    title: string,
    workTopics : string[],
    toolbarButton? : IButton
}