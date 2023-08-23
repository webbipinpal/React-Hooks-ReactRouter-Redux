
import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetUpDetails = () => {
    return <MeetupDetail
    image="https://dev-hlayout.pantheonsite.io/HBKU/EN/images/html-image/chls-newdesign/qbri/ic-image-1-2-2.png"
    title=" This is first MeetUpDetails Page "
    address=" Muscribe 13, Ezzdan 22, C003, 7th floor, Flate no: 1"
    description="Jingle Bells by Muscribe was written by James Pierpont and was first ... The Royal Philharmonic Orchestra mit Wiener Sängerknaben, November 13, 2015."
    />
    
}

export async function getStaticPaths (){
    return{
        fallback:true,
        paths:[
            {
                params: {
                    meetupId:'m1'
                }
            },
            {
                params: {
                    meetupId:'m2'
                }
            }
        ]
    }
}

export async function getStaticProps( context ){
    // fetch data from signle meetup

    const meetupId = context.params.meetupId;
    console.log(meetupId);
    return{
        props:{
            meetupData:{
                image:"https://dev-hlayout.pantheonsite.io/HBKU/EN/images/html-image/chls-newdesign/qbri/ic-image-1-2-2.png",
                id: meetupId,
                title:" This is first MeetUpDetails Page ",
                address:" Muscribe 13, Ezzdan 22, C003, 7th floor, Flate no: 1",
                description:"Jingle Bells by Muscribe was written by James Pierpont and was first ... The Royal Philharmonic Orchestra mit Wiener Sängerknaben, November 13, 2015."
            }
        }
    }
}

export default MeetUpDetails;