import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../component/meetups/NewMeetupForm";
import Card from "../component/ui/Card"

const NewMeetupsPage = () => {
    const navigate = useNavigate();
    const addMeetupHandler = (meetupData) => {
        fetch('https://react-getting-started-444a0-default-rtdb.firebaseio.com/meetups.json', 
        {
            method: 'POST',
            body : JSON.stringify(meetupData),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then( () => {
            navigate('/');
        });
    }

    return <div>
        <h1> NewMeetups  Page  </h1>
        <Card>
         <NewMeetupForm onAddMeeuup={addMeetupHandler} />
        </Card>
    </div>
    
}

export default NewMeetupsPage;