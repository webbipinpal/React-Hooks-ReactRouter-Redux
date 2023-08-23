import { useState, useEffect } from "react";
import MeetupList from "../component/meetups/MeetupList";

const AllMeetupsPage = () => {
  const [isLoading, setIsloading] = useState(true);
  const [loadedMeetup, setLoadedMeetup] = useState([]);

  useEffect( () => {
    fetch('https://react-getting-started-444a0-default-rtdb.firebaseio.com/meetups.json').then( 
    (response) => {
      return response.json();
    }).then( (data) => {
      const meetups = [];

      for(const key in data){
        const meetup = {
          id:key,
          ...data[key]
        };
        meetups.push(meetup);
      }

      setIsloading(false);
      setLoadedMeetup(meetups);
    });
  }, []);

    if(isLoading){
      return <sction> <p>Loading...</p> </sction>
    }

    return <section>
        <h1> All Meetups Page  </h1>
        <MeetupList meetups={loadedMeetup} />
    </section>
}

export default AllMeetupsPage;