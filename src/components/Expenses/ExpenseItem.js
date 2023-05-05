import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import { Button } from 'react-bootstrap';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle('Title Changed!');
        // console.log(title);
    };

    return (
        <div className='expense_item'>
            <ExpenseDate date={ props.date }/>
            <h2 className='item_name'>{title}</h2>
            <Button className='item_price' variant="success" onClick={clickHandler}>${props.amount}</Button>{' '}
        </div>
    );
}

export default ExpenseItem