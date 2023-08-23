import React from 'react';
import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem"

const ExpensesList = (props) => {
     if(props.items.length===0){ 
        return <h4 className='expenses-list__fallback'>No Expenses Found.</h4>
     }

    return(
        <ul className='expenses-list'>
            {
                props.items.map((expenses, id) => (
                    <li>
                <ExpenseItem
                    key={id}
                    title={expenses.title}
                    amount={expenses.amount}
                    date={expenses.date}
                />
                </li>
                ))
            }
            
        </ul>
    )
}

export default ExpensesList;