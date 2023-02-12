import { TFunction } from "i18next";
import IWorkExperience from "./components/ExperienceSection/interfaces/IWorkExperience";
import IAboutSection from "./components/Shared/interfaces/IAboutSection";
import IButton from "./components/Shared/interfaces/IButton";
import IExperienceSection from "./components/Shared/interfaces/IExperienceSection";
import IHeaderBar from "./components/Shared/interfaces/IHeaderBar";
import IHeaderSection from "./components/Shared/interfaces/IHeaderSection";

   export function createHeaderBar(translations : TFunction) : IHeaderBar {
        const headerBar = {
            logoName: translations("headerBar:logoName"),
            navItemList: [
                { name: translations("headerBar:navItemList.home"), href: '#' },
                { name: translations("headerBar:navItemList.about"), href: '#about'},
                { name: translations("headerBar:navItemList.portfolio"), href: '#portfolio'},
            ]
        } as IHeaderBar
        return headerBar
    }

    export function createHeaderSection(translations : TFunction) : IHeaderSection {
        const headerSection = {
            title: translations("headerSection:title"),
            subtitle: translations("headerSection:subtitle")
        } as IHeaderSection
        return headerSection
    }
    
    export function createAboutSection(translations : TFunction) : IAboutSection {
        const aboutSection = {
            title: translations("aboutSection:title"),
            paragraphs: translations("aboutSection:paragraphs", { returnObjects: true }),
        } as IAboutSection
        return aboutSection
    }
    
    export function createExperienceSection(translations : TFunction) {
        const experienceSection = {
            title: translations("experienceSection:title"),
            currentWorks: translations("experienceSection:currentWorks", { returnObjects: true }) as IWorkExperience,
            pastWorks: translations("experienceSection:pastWorks", { returnObjects: true }) as IWorkExperience,
            resumeButtonOption: translations("experienceSection:resumeButton", { returnObjects: true }),
        }

        return experienceSection
    }

    export function createPortfolioSection(translations : TFunction) {
        const portfolioSection = {
            title: translations("portfolioSection:title"),
            searchPlaceholder: translations("portfolioSection:searchPlaceholder"),
            projects: translations("portfolioSection:projects", { returnObjects: true }),
        }
        debugger

        return portfolioSection
    }
