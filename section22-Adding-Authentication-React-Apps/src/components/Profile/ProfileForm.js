import React, { useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';
import { useHistory } from 'react-router-dom';

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredPassword= newPasswordInputRef.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCNCC4k1Y4KPJhqgcshvYuAgI1Vivo5h6c', {
      method:'POST',
      body:JSON.stringify({
        idToken:authCtx.token,
        password:enteredPassword,
        returnSecureToken:false
      }),
      headers: {
        'Content-Type':'application/json'
      }
    }).then( (res => {
      console.log('sus');
      history.replace('/auth');
    }) );

  }

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
