import CostList from "./components/Costs/CostList";
import NewCost from "./components/NewCost/NewCost";
import { useState } from "react";

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2021, 2, 12),
    description: 'Refrigerator',
    amount: 999.99
  },
  {
    id: 'c2',
    date: new Date(2021, 11, 25),
    description: 'MacBook',
    amount: 2000.99
  },
  {
    id: 'c3',
    date: new Date(2022, 3, 14),
    description: 'Jeens',
    amount: 49.99
  },
];

function App() {

  //Обновляем состояние
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    });
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <CostList costs={costs}/>
    </div>
  );
}

export default App;
