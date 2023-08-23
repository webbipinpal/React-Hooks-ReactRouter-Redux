
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://dev-hlayout.pantheonsite.io/HBKU/EN/images/html-image/chls-newdesign/event/event02.jpg',
        address: 'Some address 5, 122354 some city and country',
        description: 'This is Bipin Kumar Pal, Qatar Doha',
    },
    {
        id: 'm2',
        title: 'A 2 Meetup',
        image: 'https://dev-hlayout.pantheonsite.io/HBKU/EN/images/html-image/chls-newdesign/event/event01.jpg',
        address: 'Some address 5, 122354 some city and country',
        description: 'This is Bipin Kumar Pal, Qatar Doha',
    },
    {
        id: 'm3',
        title: 'A 3 Meetup',
        image: 'https://dev-hlayout.pantheonsite.io/HBKU/EN/images/html-image/chls-newdesign/event/event03.jpg',
        address: 'Some address 5, 122354 some city and country',
        description: 'This is Bipin Kumar Pal, Qatar Doha',
    },
    {
        id: 'm4',
        title: 'A 4 Meetup',
        image: 'https://dev-hlayout.pantheonsite.io/HBKU/EN/images/html-image/chls-newdesign/event/event04.jpg',
        address: 'Some address 5, 122354 some city and country',
        description: 'This is Bipin Kumar Pal, Qatar Doha',
    },
    
]

function HomePage (props) {

    return (<MeetupList meetups={props.meetups} />
    )
    
}

// export async function getServerSideProps(context){
//     //fetch data from API
//     const req = context.req;
//     const res = context.res;
//     return{
//         props:{
//             meetups:DUMMY_MEETUPS
//         }
//     }
// }

export async function getStaticProps() {
    // fetch data from API
    return{
        props:{
            meetups:DUMMY_MEETUPS
        },
        revalidate:1
    }
}

export default HomePage;