import React, {useState} from 'react';
import './ExpenseRenderer.css'
import FilterExpenses from './FilterExpenses';
import ExpenseList from './ExpenseList';
import ChartExpenses from './ChartExpenses';

function ExpenseRenderer(props) {
    const [yearValue, setYearValue] = useState('2020');
    const filterExpensesChangeHandler = selectedYear => {
        setYearValue(selectedYear);
    };
    const filteredExpenses = props.expenses.filter(expense=>expense.date.getFullYear().toString()===yearValue);
    if (filteredExpenses.length > 0) {
        props.viewDateChangeHandler(filteredExpenses[0].date);
    }
    return (
        <div className='render-expenses'>
            <ChartExpenses expenses={filteredExpenses}/>
            <FilterExpenses onChangeFilter={filterExpensesChangeHandler} />
            <ExpenseList filteredList={filteredExpenses}/>
        </div>
    );
}
export default ExpenseRenderer