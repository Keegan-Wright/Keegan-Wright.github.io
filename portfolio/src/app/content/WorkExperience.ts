export enum WorkExperience {
    DropPoint,
    StyleTechSolutions,
    HighfieldQualifications
}


export enum WorkExperienceFields{
    employerName,
    employerUrl,
    jobTitle,
    jobDescription,
    startDate,
    endDate,
    technologies
}

export const WorkExperienceData: any = {
    [WorkExperience.DropPoint]:{
        [WorkExperienceFields.employerName]: "DropPoint",
        [WorkExperienceFields.employerUrl]: "https://droppoint.org/",
        [WorkExperienceFields.jobTitle]: "Junior Software Developer",
        [WorkExperienceFields.jobDescription]: "Working with a small to drive more traffic through the site and highlight pain points to resolve, this role had me interacting the the user base for testing and feedback to steamline the user experience.",
        [WorkExperienceFields.startDate]: "Nov 2018",
        [WorkExperienceFields.endDate]: "Feb 2019",
        [WorkExperienceFields.technologies]: ["JS", "Pug.js", "SQL", "CSS"]
    },
    [WorkExperience.StyleTechSolutions]:{
        [WorkExperienceFields.employerName]: "StyleTech Solutions",
        [WorkExperienceFields.employerUrl]: "https://www.styletech.co.uk/",
        [WorkExperienceFields.jobTitle]: "Software Developer",
        [WorkExperienceFields.jobDescription]: "Responsible for liasing with clients for requirements, designs to take back to my team for implementation. Leading the developments from the first stages to completion ensuring the customer is always in the loop. Contracted out to other companies to work on their internal systems this role allowed me to see a wide range of technologies whilst working with external software teams to get their products over the line.",
        [WorkExperienceFields.startDate]: "Feb 2019",
        [WorkExperienceFields.endDate]: "Sep 2022",
        [WorkExperienceFields.technologies]: ["C#", ".NET", "T-SQL","XUnit","GraphQL", "VB", "TS", "PHP"]

    },
    [WorkExperience.HighfieldQualifications]:{
        [WorkExperienceFields.employerName]: "Highfield Qualifications",
        [WorkExperienceFields.employerUrl]: "https://www.highfieldqualifications.com/",
        [WorkExperienceFields.jobTitle]: "Senior Software Developer",
        [WorkExperienceFields.jobDescription]: "Build and maintain a wide range of sites for Highfield Qualifications spanning E-Assessment, question paper authoring, remote invigilation and certification. Work closely with the PM, PO and the wider business teams to nail the requirements first time round. Advocate for best practives, mentoring, self learning and always pushing for our teams to have their voices heard.",
        [WorkExperienceFields.startDate]: "Oct 2022",
        [WorkExperienceFields.endDate]: "Present",
        [WorkExperienceFields.technologies]: ["C#", ".NET", "Azure","Docker", "T-SQL", "Kotlin", "Angular","TS", "VB"]

    }
}