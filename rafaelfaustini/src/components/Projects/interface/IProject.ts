import IProjectImage from "@/components/Project/interface/IProjectImage";
import IButton from "@/components/Shared/interfaces/IButton";

export default interface IProject {
    id: Number,
    title: string,
    year: Number,
    language: string,
    tags: string[],
    description: string,
    actionButton: IButton,
    sourceCodeButton: IButton,
    projectImage: IProjectImage 
}