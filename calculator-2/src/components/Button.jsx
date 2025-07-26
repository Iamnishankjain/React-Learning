function Button(props){
    return <button className="btn" onClick={props.onClickButton} value={props.field}>{props.field}</button>;
}

export default Button;