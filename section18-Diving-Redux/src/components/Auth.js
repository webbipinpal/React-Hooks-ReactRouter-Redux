
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import classes from './Auth.module.css';
import { authActions } from '../store/auth';

const Auth = () => {
  const dispatch = useDispatch();
  
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.includes('@');
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };


    const loginHandler = (event) => {
      event.preventDefault();
      dispatch( authActions.isLogin() );

      setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    setEnteredName('');
    setEnteredNameTouched(false);

    setEnteredEmail('');
    setEnteredEmailTouched(false);

    };

    const nameInputClasses = nameInputIsInvalid
    ? classes.control + ' invalid'
    : classes.control;

  const emailInputClasses = enteredEmailIsInvalid
    ? classes.control + ' invalid'
    : classes.control;

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={nameInputClasses}>
            <label htmlFor='email'>Email</label>
            <input 
              type='email' 
              id='email'
              onChange={emailInputChangeHandler}
              onBlur={emailInputBlurHandler}
              value={enteredEmail}
              />
             {enteredEmailIsInvalid  && <p className={classes.errortext}>Please enter valid email id</p>} 
          </div>
          <div className={emailInputClasses}>
            <label htmlFor='password'>Password</label>
            <input 
              type='password'
              id='password'
              onChange={nameInputChangeHandler}
              onBlur={nameInputBlurHandler}
              value={enteredName}
              />
              {nameInputIsInvalid  && <p className={classes.errortext}> Password more the 5</p>} 
          </div>
          <button disabled={!formIsValid} type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
