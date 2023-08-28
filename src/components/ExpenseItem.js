import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import React, {useState} from "react";

function ExpenseItem(props) {
    // const expenseDate = new Date(2021, 3, 28);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.36;

    const [title, setTitle] = useState(props.title);


    const clickHandler = () => {
        setTitle('Updated');
    }



    return (<div className="expense-item">
        <ExpenseDate date={props.date} />
        <h2 className="expense-item__description"> {title}</h2>
        <div className="expense-item__price"> {props.amount}</div>
        <button onClick={clickHandler}> Change Title </button>
    </div>);
}

export default ExpenseItem;
