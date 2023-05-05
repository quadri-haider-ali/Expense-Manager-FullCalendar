import React, {useState} from 'react';
import './ExpenseForm.css';
import 'react-bootstrap';
import '../Expenses/ExpenseRenderer.css'

const ExpenseForm = (props) => {
    // Method 1 -> using multiple useStates
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');

    // Method 2 -> using single useState
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     exteredDate: '',
    //     enteredAmount: '',
    // });

    const titleChangeHandler = (event) => {
        // Updation method for Method 1
        setEnteredTitle(event.target.value);

        // Updation method for Method 2
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });

        // Updation method for Method 2 - best
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    };

    const dateChangeHandler = (event) => {
        // Updation method for Method 1
        setEnteredDate(event.target.value);

        // Updation method for Method 2
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });

        // Updation method for Method 2 - best
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: event.target.value };
        // });
    }

    const amountChangeHandler = (event) => {
        // Updation method for Method 1
        setEnteredAmount(event.target.value);

        // Updation method for Method 2
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });

        // Updation method for Method 2 - best
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: event.target.value };
        // });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSubmitResponse(expenseData);
        setEnteredDate('');
        setEnteredTitle('');
        setEnteredAmount('');
    }

    return <form className='expenseForm render-expenses jumbotron' onSubmit={submitHandler}>
        <div className='jumbotron render-expenses expenseForm'>
            <h1 className="display-4">Add a New Expense!</h1>

            <div className='form-group'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler} className='form-control' placeholder='Enter Title'/>
                <small id="emailHelp" className="text-white-50 form-text text-muted">Don't Worry!, We'll never share your personal details with anyone else.</small>
            </div>

            <div className='form-group'>
                <label>Date</label>
                <input type='date' value={enteredDate} className='form-control' min='2019-01-01' max='2025-12-31' onChange={ dateChangeHandler }/>
            </div>

            <div className='form-group'>
                <label>Amount</label>
                <input type='number' value={enteredAmount} className='form-control' min='0.01' step='0.01' placeholder='Enter Expenditure' onChange={amountChangeHandler}/>
            </div>
            <button type='submit' value='add' className='btn btn-primary'>Add Expense</button>
            <button type='button' value='cancel' className='btn btn-danger button' onClick={props.onCancel}>Cancel</button>
            {/* <Button className='item_price button' variant="danger">Cancel</Button> */}
        </div>
    </form>
};

export default ExpenseForm;