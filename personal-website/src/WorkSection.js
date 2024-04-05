import { SkillSection } from './SkillSection.js'
import {Work} from './Work.js'

export function WorkSection() {
    const workJson = {
        
        "1": {
            "role": "SAP Innovation Center Network",
            "company": "SAP STAR Co-op",
            "startDate": "September 2023",
            "endDate": "Present",
            "bulletPoints": ["Designing and developing page layouts using Figma", 
             "Following design requirements and style to create application layouts within restrictions", 
             "Coordinating and collaborating with remote team members in Germany"
            ],
            "skills": ["UI/UX", "Figma"]
        },
        "2": {
            "role": "SAP Mobile Experience",
            "company": "SAP STAR Co-op",
            "startDate": "April 2023",
            "endDate": "September 2023",
            "bulletPoints": ["Developed and designed an Android mobile application for SAP Mobile Day and improved the design from user feedback", 
             "Coordinated and collaborated with remote team members in Germany", 
             "Updated and maintained mobile templates for future customers"
            ],
            "skills": ["Android Studio", "Kotlin", "Git", "UI/UX"]
        },
        "3": {
            "role": "SAP Recommerce",
            "company": "SAP STAR Co-op",
            "startDate": "April 2022",
            "endDate": "March 2023",
            "bulletPoints": ["Lead development of client-side web application for 3 months",
                 "Collaborated with the Lead Engineer to deliver on 3 applications",
                 "Presented and discussed development progress to stakeholders bi-weekly",
                 "Transitioned from front-end development to back-end maintenance and testing"
            ],
            "skills": ["TypeScript", "SAP UI5", "React", "Testing", "Git"]
        },
        "4": {
            "role": "North American Innovation Advisory",
            "company": "SAP STAR Co-op",
            "startDate": "April 2021",
            "endDate": "April 2022",
            "bulletPoints": ["Designed and created 6 microsites for presentation of demos to potential customers",
             "Collaborated to design two productivity tools for the team",
             "Presented my designs and development to technical and non-technical team members"
            ],
            "skills": ["HTML", "CSS", "JavaScript", "SAP BAS", "Git"]
        },
        "5": {
            "role": "Senior Dean's Ambassador",
            "company": "Drexel University",
            "startDate": "September 2020",
            "endDate": "Present",
            "bulletPoints": ["Assist with university admissions events by presenting my experience prospective students", 
             "Speak in panel discussions about student life and academics",
             "Mentor and support new Dean’s Ambassadors to learn the responsibilities of the role"
            ],
            "skills": ["Communication", "Presentation", "Leadership", "Public Speaking"]
        },
    }
    return(
        <div className='workSection'>
            {Object.keys(workJson).map((key, i) => (
                <div key={i}>
                    <Work
                        role = {workJson[key].role}
                        company = {workJson[key].company}
                        startDate = {workJson[key].startDate}
                        endDate = {workJson[key].endDate}
                        bulletPoints = {workJson[key].bulletPoints}
                    />
                    <SkillSection 
                        skillList = {workJson[key].skills}
                    />
                </div>
            ))}
        </div>
    )
}