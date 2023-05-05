import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [displayContent, setDisplayContent] = useState(false);
    const toggleDisplay = () => {
        setDisplayContent(!displayContent);
    };
    const onSubmitResponseHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData
        };
        props.addExpense(expenseData);
    };

    return <div>
        {/* <ExpenseForm onSubmitResponse={ onSubmitResponseHandler }></ExpenseForm> */}
        {!displayContent && <div className='text-center m-3'><button className='btn btn-secondary' onClick={toggleDisplay}>Add Expense</button></div>}
        {displayContent && <ExpenseForm onSubmitResponse={ onSubmitResponseHandler } onCancel={toggleDisplay}></ExpenseForm>}
    </div>
};

export default NewExpense;