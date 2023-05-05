import React, { useState } from 'react';
import ExpenseRenderer from './components/Expenses/ExpenseRenderer';
import NewExpense from './components/NewExpense/NewExpense';
import Calendar from './components/Calendar/Calendar';

const dummy_expenses = [
  { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14) },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
  { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12) }
];

function App() {
  const [expenses, setExpenses] = useState(dummy_expenses);
  const [viewDate, setViewDate] = useState(new Date());

  const viewDateSetter = newViewDate => { 
    setViewDate(newViewDate);
  }

  const addExpenseHandler = new_expense => {
    setExpenses(prev_expenses => {
      // console.log(new_expense);
      // console.log([new_expense, ...prev_expenses]);
      return [new_expense, ...prev_expenses];
      // return [...prev_expenses, new_expense];
    });
  };

  return (
    <div>
      <NewExpense addExpense={ addExpenseHandler }></NewExpense>
      <ExpenseRenderer expenses={ expenses } viewDateChangeHandler={viewDateSetter}/>
      {/* <div>Hi there</div> */}
      <Calendar expenses={expenses} date={viewDate}/>
    </div>
  );
}
export default App;