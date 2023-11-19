import DiagramBar from "./DiagramBar";
import "./Diagram.css";

function Diagram(props) {

    const dataSetsValues = props.dataSets.map(dataSet => dataSet.value);

    //Находим максимальное значение
    const maxMonthCosts = Math.max(...dataSetsValues);

    return (
        <div className="diagram">
            {props.dataSets.map(dataSet => 
            <DiagramBar
                key={dataSet.label}
                value={dataSet.value}
                maxValue={maxMonthCosts}
                label={dataSet.value}
            />)}
        </div>
    )
}

export default Diagram;