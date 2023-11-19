import './CostItem.css';
import CostDate from './CostDate';
import Card from "../UI/Card";

function CostItem(props) {

    /**С помощью второй функции устанавливаем новое состояние для значения 
     * Используется useState для отображения нового состояния (текст и т.п.)
    */

    return (
        <li>
        <Card className='cost-item'>
            <CostDate date={props.date}/>
            <div className='cost-item__description'>
                <h2>{props.description}</h2>
                <div className='cost-item__price'>${props.amount}</div>
            </div>
        </Card>
        </li>
    );
}

export default CostItem;