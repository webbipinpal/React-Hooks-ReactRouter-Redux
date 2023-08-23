
import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favotites-context";
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
    const favoritesCtx = useContext(FavoritesContext);
    return <header className={classes.header}>
        <div className={classes.logo}> React Router </div>
        <nav>
            <ul>
                <li> <Link to='/'> All Meetups </Link> </li>
                <li> <Link to='/newmeetup'> New Meetups</Link> </li>
                <li> <Link to='/favorites'> Favorites <span className={classes.badge}> {favoritesCtx.totalFavorites} </span> </Link> </li>
            </ul>
        </nav>
    </header>
}
export default MainNavigation;