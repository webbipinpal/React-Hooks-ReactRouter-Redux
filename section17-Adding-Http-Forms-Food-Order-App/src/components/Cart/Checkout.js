import {useRef, useState} from 'react';
import classes from './Checkout.module.css';

const isEmpty = value => value.trim() === '' ;
const isFiveChars = value => value.trim().length === 5;

const Checkout = (props) => {
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        postal: true,
        city: true,

    });
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

    

    const checkoutSubmitHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;
        const enteredcity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredcity);
        const enteredPostalIsValid = isFiveChars(enteredPostal);

        setFormInputValidity({
            name:enteredNameIsValid,
            street:enteredStreetIsValid,
            city:enteredCityIsValid,
            postal: enteredPostalIsValid,
        });

    
        const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalIsValid;

        if(!formIsValid){
            return;
        }

        props.onConfirm({
            name:enteredName,
            street:enteredStreet,
            city:enteredcity,
            postal:enteredPostal
        });

    }

    const formInputinValidityClass = `${classes.control} ${formInputValidity.name ? '' : classes.invalid}` ;
    const formStreetinValidityClass = `${classes.control} ${formInputValidity.street ? '' : classes.invalid}` ;
    const formPostalinValidityClass = `${classes.control} ${formInputValidity.postal ? '' : classes.invalid}` ;
    const formCityinValidityClass = `${classes.control} ${formInputValidity.city ? '' : classes.invalid}` ;

    return <form className={classes.form} onSubmit={ checkoutSubmitHandler}>
            <div className={formInputinValidityClass}> 
                <label htmlFor="name"> Your Name  </label>
                <input ref={nameInputRef} type="text" id="name" />
                {!formInputValidity.name && <p>Please enter your valid Name</p>}
            </div>
            <div className={formStreetinValidityClass}> 
                <label htmlFor="street"> Street  </label>
                <input ref={streetInputRef} type="text" id="street" />
                {!formInputValidity.street && <p>Please enter your valid Street</p>}
            </div>
            <div className={formPostalinValidityClass}> 
                <label htmlFor="postal"> Postal  </label>
                <input ref={postalInputRef} type="text" id="postal" />
               {!formInputValidity.postal && <p>Please enter your valid postal (5 character)</p>}
            </div>
            <div className={formCityinValidityClass}> 
                <label htmlFor="city"> City  </label>
                <input ref={cityInputRef} type="text" id="city" />
                {!formInputValidity.city && <p>Please enter your valid City</p>}
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>Cancel</button> 
                <button className={classes.submit}>Confirm</button>
            </div>
            
        </form>
};

export default Checkout;