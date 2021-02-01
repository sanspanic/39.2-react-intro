const Tweet = (props) => {
    return (
    <div>
        Username: {props.username}
        <br/>
        Date: {props.date}
        <p>
           Message: {props.msg}
        </p>
    </div>
    )
}
