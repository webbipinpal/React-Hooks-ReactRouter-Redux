import React, {useState} from "react";
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) =>{
    const [enterUsername, setEnterUsername] = useState('');
    const [enterAge, setEnterAge] = useState('');
    const [error, setError] = useState('');

    const AddUserHandler = (event) => {
        event.preventDefault();
        if(enterUsername.trim().length === 0 || enterAge.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).',
            });
            return;
        }
        if(+enterAge < 1){
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).',
            });
            return;
        };
        props.onAddUser(enterUsername, enterAge);
        console.log(enterUsername, enterAge);
        setEnterUsername('');
        setEnterAge('');
    }


    const UsernameChangeHandler = (event) =>{
        setEnterUsername(event.target.value);
    }
    const AgeChangeHandler = (event) =>{
        setEnterAge(event.target.value);
    }
    const ErrowHandler = () => {
        setError(null)
    }

    return(
        <div>
        {error && <ErrorModal onConfirm={ErrowHandler} title={error.title} message={error.message} /> }
        <Card className={'addUserWrapper'}>
            <form onSubmit={AddUserHandler}> 
                <div className="formrow">
                    <label htmlFor="username">Username: </label><br />
                    <input id="username" type="text" value={enterUsername} onChange={UsernameChangeHandler} />
                </div>
                <div className="formrow">
                    <label htmlFor="age">Age Years: </label><br />
                    <input id="number" type="text" value={enterAge} onChange={AgeChangeHandler} /> <br />
                </div>
                <div className="formrow">
                    <Button type="submit">Add User </Button>
                </div>
            </form>
        </Card>
        </div>
    )
}
export default AddUser;