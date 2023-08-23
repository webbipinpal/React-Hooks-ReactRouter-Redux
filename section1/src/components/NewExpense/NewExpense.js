import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  const saveExponseDateHandler=(enteredExpenseData) =>{
      const expenseData ={
        ...enteredExpenseData,
        id: Math.random().toString()
      };
      props.onAddExpense(expenseData);
  }
  const addNewExpensesHandler = () => {
    setIsEditing(true)
  }
  const stopCancelHandler = () => {
    setIsEditing(false)
  }

  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={addNewExpensesHandler}> Add New Expenses </button>}
      {isEditing && <ExpenseForm onSaveExponseData={saveExponseDateHandler} onCancel={stopCancelHandler} />}
      
    </div>
  );
};

export default NewExpense;
