import "./CostList.css";
import CostLst from "./CostLst";
import Card from "../UI/Card";
import CostFilter from "./CostFilter";
import { useState } from "react";
import CostDiagram from "./CostDiagram";

function CostList(props) {
  const [selectedYear, setSelectedYear] = useState("2021");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  //Отфильтрованные данные 
  const filteredCosts = props.costs.filter(cost => {
    return cost.date.getFullYear().toString() === selectedYear;
  })

  return (
    <div>
      <Card className="costs">
        <CostFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostDiagram costs={filteredCosts}/>
        <CostLst costs={filteredCosts}/>
      </Card>
    </div>
  );
}

export default CostList;
