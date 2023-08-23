import React, {useRef} from 'react';
import classes from './NewMeetupForm.module.css';

const NewMeetupForm = (props) => {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title : enteredTitle,
            image : enteredImage,
            address : enteredAddress,
            description : enteredDescription
        }
        props.onAddMeeuup(meetupData);
    }

    return <form className={classes.form} onSubmit={onSubmitHandler}>
            <div className={classes.control}>
                <label htmlfor="title"> Meetup Title </label>
                <input type="text" id="title" requried ref={titleInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlfor="image"> Meetup Image </label>
                <input type="url" id="image" requried ref={imageInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlfor="address"> Meetup address </label>
                <input type="text" id="address" requried ref={addressInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlfor="description"> Meetup Description </label>
                <textarea id="description" rows="5" requried  ref={descriptionInputRef}> </textarea>
            </div>
            <div className={classes.actions}>
                <button> Add Meetup</button>
            </div>
    </form>
}
export default NewMeetupForm;