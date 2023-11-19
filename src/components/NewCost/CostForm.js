import { useState } from "react";
import  "./CostForm.css";

function CostForm(props) {

    /**Сохранение состояния в функции как в переменной с перезагрузкой оного */
    // const [name, setName] = useState(''); /**Пустой, бо вписывается строка (состояние) */
    
    const [userInput, setUserInput] = useState({description: '', amount: '', date: ''});

    const nameChangeHandler = (event) => {
        // setName(event.target.value);

        setUserInput((prevState) => {
            return {
                ...prevState,
                description: event.target.value
            }
        })
    }

    // const [amount, setAmount] = useState(''); 
    const amountChangeHandler = (event) => {
        // setAmount(event.target.value);
        setUserInput((prevState) => {
            return {
                ...prevState,
                amount: event.target.value
            }
        })
    }

    // const [date, setDate] = useState('');
    const dateChangeHandler = (event) => {
        // setDate(event.target.value);
        setUserInput((prevState) => {
            return {
                ...prevState,
                date: event.target.value
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault(); 
        /**
         * Предотвращение
           дефолтного поведения страницы
           (в данном случае перезагрузки страницы)
        */

        const costData = {
            description: userInput.description,
            amount: userInput.amount,
            date: new Date(userInput.date),
        }

        props.onSaveCostData(costData);
        setUserInput({
            description: '',
            amount: '',
            date: '',
        });
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Name</label>
                    <input type='text' value={userInput.description} onChange={nameChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>Amount</label>
                    <input type='number' value={userInput.amount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>Date</label>
                    <input type='date' min='2019-01-01' step='2022-12-31' value={userInput.date} onChange={dateChangeHandler}/>
                </div>
                <div className="new-cost__actions">
                    <button type="submit">
                        Add consuption
                    </button>
                    <button type="button"
                    onClick={props.onCancel}>Cancel</button>
                </div>
            </div>
        </form>
    )
}

export default CostForm;