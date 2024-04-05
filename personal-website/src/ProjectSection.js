import {Project} from './Project.js'
import { SkillSection } from './SkillSection.js'

export function ProjectSection() {
    const projectJson = {
        "1": {
            "name": "CSVApp",
            "startDate": "February 2021",
            "endDate": "March 2021",
            "information": "During the course SE211, we were tasked to create a CSVapp and CSVlibrary that could be used to modify CSV files. The priamry purpose was to hone our skills in creating Software Requirements and Specifications and Software Design Documents. Those can be found within the GitHub page.",
            "technologies": ["Python", "PySimpleGUI", "Git"],
            "github": "https://github.com/systemc12ashe/se211CourseProject"
        },
        "2": {
            "name": "Personal Website",
            "startDate": "2021",
            "endDate": "Present",
            "information": "My personal website! You're here right now! I have been updating and changing this website since 2021. This most recent version was created in April 2024.",
            "technologies": ["React", "Javascript", "CSS", "HTML", "Git"],
            "github": "https://github.com/systemc12ashe/systemc12ashe.github.io"
        },
        "3": {
            "name": "Calendar",
            "startDate": "February 2022",
            "endDate": "March 2022",
            "information": "The Palendar, is an online web application that automatically generates a calendar by allowing people to input their calendar events with their scheduling preferences all with the help of their little Pal. Users are able to input each event alongside the name of the event, the time of the event, the duration of the event, and the calendar will be generated upon those requirements.",
            "technologies": ["React", "NodeJS", "Firebase", "Google Calendar API", "Git"],
            "github": "https://github.com/systemc12ashe/calendarApp"
        },
        "4": {
            "name": "Blockly",
            "startDate": "September 2023",
            "endDate": "December 2023",
            "information": "During the course SE420, we were encouraged to contribute to an opensource project of our choice. I chose to contribute to the block programming language by Google, Blockly. During this experience, I resolved 2 tickets and was able to contribute to the community and learn more about the project.",
            "technologies": ["TypeScript", "Git"],
            "github": "https://github.com/systemc12ashe/blockly"
        },
        "5": {
            "name": "Data Mining Project",
            "startDate": "January 2024",
            "endDate": "March 2024",
            "information": "A data mining project with a group of 4, created for INFO371. The problem we chose to investigate was an exploration of the correlation between layoffs and acquisitions in businesses. Utilizing data from recent tech company layoffs, as well as recent acquisitions, this project will investigate common trends in an attempt to find predictors for oncoming layoffs. This project also attempted to determine whether trends in the tech industry carry over to other industries as well, and explore the relationships between tech and non-tech in the modern business world. To analyze the data we used Naive Bayes, Random Forest Tree and CVParamter methods. My personal contributions were the Python script to merge data, data cleaning for one data set, and the Naive Bayes analysis.",
            "technologies": ["Python", "Pandas", "Weka", "Git"],
            "github": "https://github.com/systemc12ashe/data_mining"
        },
        "6": {
            "name": "GattegnoType",
            "startDate": "September 2024",
            "endDate": "June 2024",
            "information": "Senior capstone for Drexel University. In our group of 6, we are creating a program that associates each sound in the English language with a color or combination of colors, which can help students learning English as a Second Language understand which sounds to make when pronouncing words. It's intended to transcribe text into color-coded systems.",
            "technologies": ["C", "Python", "Figma", "Gitlab", "WSL", "NLTK" ,"Project Management", "Software Engineering"],
            "github": "Coming Soon"
        }
    }
    return(
        <div>
            {Object.keys(projectJson).map((key, i) => (
                <div key={i}>
                    <Project
                        name = {projectJson[key].name}
                        startDate = {projectJson[key].startDate}
                        endDate = {projectJson[key].endDate}
                        information = {projectJson[key].information}
                        github = {projectJson[key].github}
                    />
                    <SkillSection 
                        skillList = {projectJson[key].technologies}
                    />
                </div>
            ))}
        </div>
    )
}