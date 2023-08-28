import React, { useState } from "react";
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense";

const dummy_expenses = [
    { id: 'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 4) },
    { id: 'e2', title: 'Food', amount: 294.67, date: new Date(2021, 2, 4) },
    { id: 'e3', title: 'Rent', amount: 294.67, date: new Date(2021, 2, 4) },
    { id: 'e4', title: 'Gas', amount: 294.67, date: new Date(2021, 2, 4) }
]

function App() {
    const [expenses, setExpenses] = useState(dummy_expenses);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    }

    return (
        <div>
            <NewExpense onAddExpenses={addExpenseHandler} />
            {expenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </div>
    );
}

export default App;
