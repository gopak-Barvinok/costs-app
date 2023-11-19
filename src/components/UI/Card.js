import "./Card.css"

function Card(props) {
    const classes = 'card ' + props.className;
    return (
        /**Вставляем внутренние компоненты */
        <div className={classes}>{props.children}</div>
    )
}

export default Card