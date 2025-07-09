export enum PersonalProjects {
    BudgetPlanner,
    GalleryManager,
    SteamDashboard
}


export enum PersonalProjectFields {
    Name,
    Description,
    Technologies,
    GithubLink,
    ImgSrc,
    ActiveDevelopment,
    LinkActive
}

export const PersonalProjectData: any = {
    [PersonalProjects.BudgetPlanner]: {
        [PersonalProjectFields.Name]: "Budget Planner",
        [PersonalProjectFields.Description]: "My personal budget planner with open banking integration to consolidate all banking info in one central location. Providing utilities to set goals, household members, forecast finances, generate reports and tag transactions with additional information for easier filtering. This project is built with Avalonia, allowing for use on all platforms. Backed with an Aspire orchestrator and setup for easy self hosting with a docker compose file.",
        [PersonalProjectFields.Technologies]: ["C#", ".NET", "Aspire", "Avalonia", "EF", "PostgreSQL", "Docker", "Redis", "Open Banking"],
        [PersonalProjectFields.GithubLink]: "https://github.com/Keegan-Wright/BudgetPlanner",
        [PersonalProjectFields.ImgSrc]: null,
        [PersonalProjectFields.ActiveDevelopment]: true,
        [PersonalProjectFields.LinkActive]: true
    },
    [PersonalProjects.GalleryManager]: {
        [PersonalProjectFields.Name]: "Gallery Manager",
        [PersonalProjectFields.Description]: "A custom built gallery management solution to aid in mass upload and backups of images/videos for easy searching and sharing with other users. This project is not finished at the moment has big plans in the works. Pending facial recognition, auto tagging and extraction of metadata.",
        [PersonalProjectFields.Technologies]: ["C#", ".NET", "Aspire", "Blazor", "EF", "PostgreSQL", "Channels"],
        [PersonalProjectFields.GithubLink]: "https://github.com/Keegan-Wright/GalleryManager",
        [PersonalProjectFields.ImgSrc]: null,
        [PersonalProjectFields.ActiveDevelopment]: false,
        [PersonalProjectFields.LinkActive]: false
    },
    [PersonalProjects.SteamDashboard]: {
        [PersonalProjectFields.Name]: "Steam Tracker",
        [PersonalProjectFields.Description]: "This project was developed before Steam had a visual refresh, the goal was to create a more friendly dashboard to display information for profiles tracked by the user. It would allow you to compare games, friends, achievements with easily filtering of those in common. Responsible for displaying all forms of statistics such as over all playtime, playtime per platform, last played. I'm not done with this project at the moment, I'd like to intergrate it more into a desktop experience where it can be used to launch installed games.",
        [PersonalProjectFields.Technologies]: ["C#", ".NET", "Blazor", "Redis", "EF", "Steam API"],
        [PersonalProjectFields.GithubLink]: "https://github.com/Keegan-Wright/SteamTracker",
        [PersonalProjectFields.ImgSrc]: null,
        [PersonalProjectFields.ActiveDevelopment]: false,
        [PersonalProjectFields.LinkActive]: false
    },

}
