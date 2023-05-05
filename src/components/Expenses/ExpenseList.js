import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = props => {
    if (props.filteredList.length > 0) {
        return props.filteredList.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />);
    }
    return <h2 className='text-center'>No Data Found for the selected year</h2>
}
export default ExpenseList