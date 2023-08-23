import React, { useEffect, useRef, useState} from 'react';

const SimpleInput = (props) => {

  const nameInputRef = useRef();
  const [enterName, setEnterName] = useState('');
  const [enterNameIsValid, setEnterNameIsValid ] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  

  useEffect( () => {
    if(enterNameIsValid){
      console.log("name input is valid")
    }
  }, [enterNameIsValid]);

  const nameEnterChangeHandler = (event) => {
      setEnterName(event.target.value);
      if(event.target.value.trim() !== ''){
      setEnterNameIsValid(true);
    }
  }

  const nameInputBlurHandler = () => {

    setEnteredNameTouched(true);
    if(enterName.trim() === ''){
      setEnterNameIsValid(false);
    }

  }

  const formSubmitonHandler = (event) => {

    event.preventDefault();
    setEnteredNameTouched(true);

    if(enterName.trim() === ''){
      setEnterNameIsValid(false);
      return;
    }
    setEnterNameIsValid(true);
    console.log(enterName);
    const enterValueRef = nameInputRef.current.value;
    console.log(enterValueRef);
    setEnterName('');
  }

  const nameInputIsInvalid = !enterNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control ';

  return (
    <form onSubmit={formSubmitonHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
        ref={nameInputRef} 
        type='text' 
        id='name' 
        onChange={nameEnterChangeHandler}
        onBlur={nameInputBlurHandler}
        value={enterName} 
        />
        {nameInputIsInvalid && <p className="error-text">Name must not be Empty</p> }
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
