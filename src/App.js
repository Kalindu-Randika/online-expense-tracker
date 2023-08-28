import React from "react";
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense";

function App() {
    const expenses = [
        {id: 'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 4)},
        {id: 'e2', title: 'Food', amount: 294.67, date: new Date(2021, 2, 4)},
        {id: 'e3',title: 'Rent', amount: 294.67, date: new Date(2021, 2, 4)},
        {id: 'e4',title: 'Gas', amount: 294.67, date: new Date(2021, 2, 4)}
    ]

    const addExpenseHandler = (expense) => {
        console.log('in app js');
        console.log(expense);
    };

  return (
    <div>
      <NewExpense onAddExpenses={addExpenseHandler} />
        <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}> </ExpenseItem>
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}> </ExpenseItem>
        <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}> </ExpenseItem>
        <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}> </ExpenseItem>
    </div>
  );
}

export default App;
