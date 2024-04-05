export function SkillSection({skillList}) {
    return(
        <ul className="skillSection">
            {Object.keys(skillList).map((key, i) => (
                <li key = {i} className="skill">{skillList[key]}</li>
            ))}
        </ul>
    )
}