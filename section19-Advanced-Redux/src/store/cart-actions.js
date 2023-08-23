import { uiAction } from "./ui-slice";
import { cartAction } from "./cart-slice";


export const fetchCartData = () => {
    return async dispatch => {
        const fetchData = async () => {
             const response = await fetch('https://myudemy-react-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json');

             if(!response.ok){
                throw new Error( 'Could not fetch data from server' );
             }
             const data = await response.json();
             return data;

        };

        try{
           const cartData = await fetchData();
           dispatch( cartAction.replaceCart({
            items : cartData.items || [],
            totalQuantity: cartData.totalQuantity,
           }) );

        }catch(error){
            dispatch( uiAction.showNotification({
            status:'error',
            title:'Error',
            message: 'Sent cart data Failed....',
        }));
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
       dispatch( uiAction.showNotification({
        status:'pending',
        title:'Pending',
        message: 'Sending cart data ....',
      }));

      const sendRequest = async () => {
        const response = await fetch('https://myudemy-react-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',  {
            method:'PUT',
            body: JSON.stringify(cart)
        });
        if(!response.ok){
            throw new Error('sending cart data failed.');
        }
      }

      try{
         await sendRequest();
          dispatch( uiAction.showNotification({
                status:'success',
                title:'Success',
                message: 'Sent cart data Success....',
            }));
      }catch(error){
        dispatch( uiAction.showNotification({
            status:'error',
            title:'Error',
            message: 'Sent cart data Failed....',
        }));
      }
  
    }
}