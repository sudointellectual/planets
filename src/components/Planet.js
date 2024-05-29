const Planet = ({body}) => {
    return (
        <div className="planet">
            <h2>{body.englishName}</h2>
            <ul>
                <li>Density: {body.density}</li>
                <li className="planet__gravity">Gravity: {body.gravity}</li>
                <li>Escape: {body.escape}</li>
            </ul>
        </div>
    )
}

export default Planet