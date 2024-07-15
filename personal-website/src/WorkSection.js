import { SkillSection } from './SkillSection.js'
import {Work} from './Work.js'

export function WorkSection() {
    const workJson = {
        
        "1": {
            "role": "UI/UX Designer",
            "company": "SAP Innovation Center Network",
            "startDate": "September 2023",
            "endDate": "Present",
            "bulletPoints": [" Designed and developed UI flows on 3 product prototypes using Figma", 
             " Created educational flows and content for developers on our team", 
             " Coordinated and collaborated with remote team members in Germany"
            ],
            "skills": ["UI/UX", "Figma"]
        },
        "2": {
            "role": "Android Mobile Developer",
            "company": "SAP Mobile Experience",
            "startDate": "April 2023",
            "endDate": "September 2023",
            "bulletPoints": ["Developed an Android mobile application start to finish for at least 2 SAP Mobile Day events", 
             " Improved apps based on user feedback and stakeholder input", 
             "Updated and maintained mobile templates for future customers and developers"
            ],
            "skills": ["Android Studio", "Kotlin", "Git", "UI/UX"]
        },
        "3": {
            "role": "Web Developer",
            "company": "SAP Recommerce",
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
            "role": "Developer",
            "company": "SAP North American Innovation Advisory",
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
            "endDate": "June 2024",
            "bulletPoints": [" Assisted in university admissions by sharing my experience with prospective students", 
             "Spoke in panel discussions to groups of over 100 people",
             "Mentored and supported new Ambassadors to learn the responsibilities of the role"
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