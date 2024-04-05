export function Work({role, company, startDate, endDate, bulletPoints}) {
    return (
        <div className="work">
            <h3>{role}</h3>
            <h4>{company}</h4>
            <p>{startDate} - {endDate}</p>
            <ul>
                {Object.keys(bulletPoints).map((key, i) => (
                    <li key = {i}>{bulletPoints[key]}</li>
                ))}
            </ul>
        </div>
    )
  }