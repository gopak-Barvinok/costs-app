import CostItem from "./CostItem";
import './CostLst.css'

function CostLst(props) {

  if(props.costs.length === 0) {
    return <h2 className="cost-list__fallback">
      Costs is absent in this year
    </h2>
  }

  return (<ul className="cost-list">
    {props.costs.map((costs) => (
        <CostItem
          key={costs.id}
          date={costs.date}
          description={costs.description}
          amount={costs.amount}
        />
    ))}
  </ul>)
}

export default CostLst;