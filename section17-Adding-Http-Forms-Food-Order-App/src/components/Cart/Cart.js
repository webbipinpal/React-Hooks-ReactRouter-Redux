import React, { Fragment, useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setdidSubmit] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  }

  const cartOnConfirmHandler = async (dataConfirm) => {
    setIsSubmitting(true);
  
     await fetch('https://myudemy-react-default-rtdb.asia-southeast1.firebasedatabase.app/ordered.json', {
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        user:dataConfirm,
        orderItem: cartCtx.items
      })
    })

    setIsSubmitting(false);
    setdidSubmit(true);
    cartCtx.clearCart();
  }


  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );


  const modalActions = <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
      </div>


    const cartModelContent = 
        <Fragment>
          {cartItems}
            <div className={classes.total}>
              <span>Total Amount</span>
              <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onConfirm={cartOnConfirmHandler} onCancel={props.onClose} />}
            {!isCheckout && modalActions}
        </Fragment>
    const cartModelContetnSending = <p> Submitting Data to Server ......</p>
    const cartModelContetnUpdated = 
        <Fragment>
        <p> your order has been placed successfully!, Thanks </p>
          <div className={classes.actions}>
            
            <button className={classes.button} onClick={props.onClose}>
                Close
              </button>
          </div>
        </Fragment>
  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModelContent}
      {isSubmitting && cartModelContetnSending}
      {!isSubmitting && didSubmit  && cartModelContetnUpdated}
    </Modal>
  );
};

export default Cart;
