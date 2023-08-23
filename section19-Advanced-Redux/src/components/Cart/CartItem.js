import { useDispatch } from 'react-redux';

import classes from './CartItem.module.css';
import { cartAction } from '../../store/cart-slice';
const CartItem = (props) => {

  const dispatch = useDispatch();
  const { title, quantity, total, price, id } = props.item;

  const addItemInCart = () => {
    dispatch( cartAction.addItemToCart({
      id,
      price,
      title,
      quantity
    }));
  }
  const removeItemFromCart = () => {
    dispatch(cartAction.remveItemToCart(id));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemFromCart}>-</button>
          <button onClick={addItemInCart}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
