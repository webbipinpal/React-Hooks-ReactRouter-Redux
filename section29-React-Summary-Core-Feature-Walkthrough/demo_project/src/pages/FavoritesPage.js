import { useContext } from "react";
import MeetupList from "../component/meetups/MeetupList";
import FavoritesContext from "../store/favotites-context";

const FavoritesPage = () => {

    const favoritesCtx = useContext(FavoritesContext);

    let content;
    if(favoritesCtx.totalFavorites === 0){
        content = <p>You don't have Favorites, Please add it.</p>
    }else{
        content = <MeetupList meetups={favoritesCtx.favorites}/>
    }

    return <section>
        <h1> Favorites Page  </h1>
        {content}
    </section>
}

export default FavoritesPage;