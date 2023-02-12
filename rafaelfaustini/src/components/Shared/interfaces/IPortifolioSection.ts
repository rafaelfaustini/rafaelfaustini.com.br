import IProject from "@/components/Projects/interface/IProject";
import IButton from "./IButton";

export default interface IPortifolioSection {
    title: string,
    searchPlaceholder: string,
    githubButton: IButton,
    projects: IProject[]
}