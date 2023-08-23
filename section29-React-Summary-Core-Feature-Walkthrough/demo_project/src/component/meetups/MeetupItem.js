
import { useContext } from 'react';
import Card from '../ui/Card';
import FavoritesContext from '../../store/favotites-context';
import classes from './MeetupItem.module.css';

const MeetupItem = (props) => {
   const favoritesCtx = useContext(FavoritesContext);
   const itemIsFavorites = favoritesCtx.itemIsFavorites(props.id);

    const toggleFavoritesStatusHandler = () => {
        if(itemIsFavorites){
            favoritesCtx.removeFavorites(props.id);
        }else{
            favoritesCtx.addFavorites({
                id:props.id,
                title:props.title,
                image: props.image,
                description : props.description,
                address : props.address
            });
        }
    }

    return <li className={classes.item}>
        <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address> {props.address} </address>
                <p> {props.description} </p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavoritesStatusHandler}> {itemIsFavorites ? 'Remove from Favorites' : 'To Favorites'} </button>
            </div>
        </Card>
    </li>
}

export default MeetupItem;