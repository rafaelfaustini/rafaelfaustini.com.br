import IWorkExperience from "@/components/ExperienceSection/interfaces/IWorkExperience";
import IButton from "./IButton";


export default interface IExperienceSection {
    title: string,
    currentWorks: IWorkExperience[],
    pastWorks: IWorkExperience[],
    resumeButtonOption: IButton
}