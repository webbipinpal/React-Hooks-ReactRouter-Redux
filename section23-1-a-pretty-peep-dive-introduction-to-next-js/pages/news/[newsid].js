
// our-comain.com/news/newsDetails
import { useRouter } from 'next/router'; 

const newsDetails = () => {
    const router = useRouter();

    const newsid = router.query.newsid;
    console.log(newsid);

    return <h1> The News Details under news  Page </h1>
}

export default newsDetails;