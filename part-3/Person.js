const Person = (props) => {
    let information;
    let nameShorthand = props.name
    if (props.age > 18 ) {
        information = <h3>Please go vote!</h3>
    } else {
        information = <h3>You must be 18 to vote</h3>
    }

    if (props.name.length > 8) {
        nameShorthand = props.name.substring(0, 6)
    }


    return (
        <div>
            <h2>{props.name}</h2>
            <p>
                Learn some information about this person
            </p>
            <p>
                Shorthand: {nameShorthand} 
            </p>
            <div>
                Voting: {information} 
            </div>
            <ul>{props.hobbies.map(h =>
                (
                    <li>{h}</li>
                )
            )}
            </ul>
        </div>
    )
}