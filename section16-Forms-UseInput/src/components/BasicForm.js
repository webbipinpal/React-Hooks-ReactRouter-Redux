import React from "react";
import useInput from "../hooks/use-input";


const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');

const BasicForm = (props) => {

  const {
    value:enteredName,
    isValid:enteredNameIsValid,
    hasError:nameInputHasError,
    valueChangeHandler:nameChangeHandler,
    inputBlurHandler:nameBlurHandler,
    reset:resetNameInput,
  } = useInput(isNotEmpty);
  const {
    value:enteredLName,
    isValid:enteredLNameIsValid,
    hasError:lnameInputHasError,
    valueChangeHandler:lnameChangeHandler,
    inputBlurHandler:lnameBlurHandler,
    reset:resetlNameInput,
  } = useInput(isNotEmpty);
  const {
    value:enteredEmail,
    isValid:enteredEmailIsValid,
    hasError:emailInputHasError,
    valueChangeHandler:emailChangeHandler,
    inputBlurHandler:emailBlurHandler,
    reset:resetEmailInput,
  } = useInput(isEmail);

  let formIsValid = false;
  if(enteredNameIsValid && enteredLNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  };

  const formSubmitonHandler = (event) => {
    event.preventDefault();
    if(!formIsValid){
      return;
    }
    
    console.log(enteredName);
    console.log(enteredLName);
    console.log(enteredEmail);
    resetNameInput();
    resetlNameInput();
    resetEmailInput();

    

  }

    const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control' ;
    const lnameInputClasses = lnameInputHasError ? 'form-control invalid' : 'form-control' ;
    const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control' ;


  return (
    <form onSubmit={formSubmitonHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name'
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          />
         {nameInputHasError && <p className="error-text">Please Enter First Name</p> } 
        </div>
        <div className={lnameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input 
          type='text' 
          id='name'
          value={enteredLName}
          onChange={lnameChangeHandler}
          onBlur={lnameBlurHandler}
          />
          {lnameInputHasError && <p className="error-text">Please Enter Last Name</p> } 
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
        type='text'
        id='name'
        value={enteredEmail}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        />
        {emailInputHasError && <p className="error-text">Please Enter Correct Email</p> } 
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
