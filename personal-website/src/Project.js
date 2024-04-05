export function Project({name, startDate, endDate, information, github}) {
    return (
        <div className="project">
            <h3>{name}</h3>
            <p>{startDate} - {endDate}</p>
            <p>{information}</p>
            <a href = {github}>Github</a>
        </div>
    )
  }