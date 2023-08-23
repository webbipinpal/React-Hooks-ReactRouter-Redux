import React, { useReducer, useEffect, useCallback, useMemo } from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';
import useHttp from '../../hooks/http';

const ingredientReducer = (currentIngredient, action) => {
  switch (action.type) {
    case 'SET':
      return action.ingredients;
    case 'ADD':
      return [...currentIngredient, action.ingredient];
    case 'DELETE':
      return currentIngredient.filter( ing => ing.id !== action.id);
    default:
      throw new Error('should not get there!');
  }
}


const Ingredients = () => {
  const [userIngredients, dispatch] = useReducer( ingredientReducer, []);
  const {isLoading, data, error, sendRequest, reqExtra, reqInentifier, clear} = useHttp()
  
  // const [userIngredients, setUserIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  // useEffect( () => {
  //   fetch('https://react-hook-update-c970b-default-rtdb.firebaseio.com/ingredient.json').then( response => response.json()).then( responseData => {
  //     const loadedingredient = [];
  //     for(const key in responseData) {
  //     loadedingredient.push({
  //       id : key,
  //       title: responseData[key].title,
  //       amount: responseData[key].amount
  //     })
  //     }
  //     setUserIngredients(loadedingredient);

  //   })
  // }, []);

useEffect(() => {
  if( !isLoading && !error && reqInentifier === 'REMOVE_INGREDIENT'){
    dispatch({
      type: 'DELETE', 
      id:reqExtra
    });
  }else if(!isLoading && !error && reqInentifier === 'ADD_INGERDIENT'){
    dispatch({
      type : 'ADD', 
      ingredient: { id: data.name, ...reqExtra }
    });
  }
}, [data, reqExtra, reqInentifier, isLoading, error]);

const filterIngredientsHandler = useCallback(filterIngredients => {
  // setUserIngredients( filterIngredients );
  dispatch({type: 'SET', ingredients: filterIngredients});

}, []);

  const addIngredientsHandler = useCallback((ingredients) => {
    
    sendRequest('https://react-hook-update-c970b-default-rtdb.firebaseio.com/ingredient.json', 
      'POST', 
      JSON.stringify(ingredients),
      ingredients,
      'ADD_INGERDIENT'
      );

    // setIsLoading(true);
    // dispatchHttp({type: 'SEND'});

    // fetch('https://react-hook-update-c970b-default-rtdb.firebaseio.com/ingredient.json', {
    //   method:'POST',
    //   body: JSON.stringify(ingredients),
    //   headers: {'Content-Type': 'application/json'}
      
    // }).then( response => {
    //   dispatchHttp({type: 'RESPONSE'});
    //   return response.json();
    // }).then( responseData => {
    //   // setUserIngredients( prevIngredients => [
    //   //   ...prevIngredients, 
    //   //   { id: responseData.name, ...ingredients }
    //   // ])
    //   dispatch({type : 'ADD', ingredient: { id: responseData.name, ...ingredients }});

    // }).catch( error => {
    //   dispatchHttp({type: 'ERROR', errorMessage:'Somthing went wrong!'});
    // });
    
  }, [sendRequest]);
  const removeIngredientsHandler = useCallback((ingredientsId) => {
    sendRequest(`https://react-hook-update-c970b-default-rtdb.firebaseio.com/ingredient/${ingredientsId}.json`, 
    'DELETE',
    null,
    ingredientsId,
    'REMOVE_INGREDIENT'
    );
    
  }, [sendRequest]);

  const clearError = useCallback(() => {
    clear();
  }, []);

  const ingredientList = useMemo( () =>{
    return <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientsHandler} />
  }, [userIngredients, removeIngredientsHandler]);

  return (
    <div className="App">
      {error &&  <ErrorModal onClose={clearError}> {error} </ErrorModal>}
      <IngredientForm onAddIngredients={addIngredientsHandler} loading={isLoading}/>
     
      <section>
        <Search onLoadIngredient={filterIngredientsHandler} />
        {ingredientList}
      </section>
    </div>
  );
}

export default Ingredients;
