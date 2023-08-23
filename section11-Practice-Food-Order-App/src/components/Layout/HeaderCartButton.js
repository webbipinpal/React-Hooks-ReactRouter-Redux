import React, {useContext, useEffect, useState} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";


const HeaderCartButton = (props) =>{
    const CartCtx = useContext(CartContext);
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const {items} = CartCtx;

    const numberOfCartItem = items.reduce( (curNumber, item) => {
        return curNumber + item.amount ;
    }, 0);

    
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect( () => {
        if(items.length === 0){
            return;
        }
        setBtnIsHighlighted(true);
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);
        
        return () => {
            clearTimeout(timer);
        }
    }, [items]);

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span className={classes}>Your Cart</span>
        <span className={classes.badge}>
            {numberOfCartItem}
        </span>
    </button>
};

export default HeaderCartButton;