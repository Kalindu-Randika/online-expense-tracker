import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense =(props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
          ...enteredExpenseData,
          id: Math.random().toString()
      }
    props.onAddExpenses(expenseData);
    };


    return (
       <div className="new-expense">
       <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
       </div>
    );

}

export default NewExpense;
