import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'

export function Project({name, startDate, endDate, information, github}) {
    return (
        <div className="project">
            <h3>{name}</h3>
            <p>{startDate} - {endDate}</p>
            <p>{information}</p>
            <a href = {github}><FontAwesomeIcon icon={faSquareGithub} color='#f3be4c' size='2x' /></a>
        </div>
    )
  }