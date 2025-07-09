export enum WorkExperience {
    DropPoint,
    StyleTechSolutions,
    HighfieldQualifications
}


export enum WorkExperienceFields{
    EmployerName,
    EmployerUrl,
    JobTitle,
    JobDescription,
    StartDate,
    EndDate,
    Technologies
}

export const WorkExperienceData: any = {
    [WorkExperience.DropPoint]:{
        [WorkExperienceFields.EmployerName]: "DropPoint",
        [WorkExperienceFields.EmployerUrl]: "https://droppoint.org/",
        [WorkExperienceFields.JobTitle]: "Junior Software Developer",
        [WorkExperienceFields.JobDescription]: "Working with a small to drive more traffic through the site and highlight pain points to resolve, this role had me interacting the the user base for testing and feedback to steamline the user experience.",
        [WorkExperienceFields.StartDate]: "Nov 2018",
        [WorkExperienceFields.EndDate]: "Feb 2019",
        [WorkExperienceFields.Technologies]: ["JS", "Pug.js", "SQL", "CSS"]
    },
    [WorkExperience.StyleTechSolutions]:{
        [WorkExperienceFields.EmployerName]: "StyleTech Solutions",
        [WorkExperienceFields.EmployerUrl]: "https://www.styletech.co.uk/",
        [WorkExperienceFields.JobTitle]: "Software Developer",
        [WorkExperienceFields.JobDescription]: "Responsible for liasing with clients for requirements, designs to take back to my team for implementation. Leading the developments from the first stages to completion ensuring the customer is always in the loop. Contracted out to other companies to work on their internal systems this role allowed me to see a wide range of technologies whilst working with external software teams to get their products over the line.",
        [WorkExperienceFields.StartDate]: "Feb 2019",
        [WorkExperienceFields.EndDate]: "Sep 2022",
        [WorkExperienceFields.Technologies]: ["C#", ".NET", "T-SQL","XUnit","GraphQL", "VB", "TS", "PHP"]

    },
    [WorkExperience.HighfieldQualifications]:{
        [WorkExperienceFields.EmployerName]: "Highfield Qualifications",
        [WorkExperienceFields.EmployerUrl]: "https://www.highfieldqualifications.com/",
        [WorkExperienceFields.JobTitle]: "Senior Software Developer",
        [WorkExperienceFields.JobDescription]: "Build and maintain a wide range of sites for Highfield Qualifications spanning E-Assessment, question paper authoring, remote invigilation and certification. Work closely with the PM, PO and the wider business teams to nail the requirements first time round. Advocate for best practives, mentoring, self learning and always pushing for our teams to have their voices heard.",
        [WorkExperienceFields.StartDate]: "Oct 2022",
        [WorkExperienceFields.EndDate]: "Present",
        [WorkExperienceFields.Technologies]: ["C#", ".NET", "Azure","Docker", "T-SQL", "Kotlin", "Angular","TS", "VB"]

    }
}