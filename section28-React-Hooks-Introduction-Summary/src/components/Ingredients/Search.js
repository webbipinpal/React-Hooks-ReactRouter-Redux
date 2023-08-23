import React, { useState, useEffect, useRef } from 'react';
import useHttp from '../../hooks/http';
import ErrorModal from '../UI/ErrorModal';
import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {

  const [enteredFilter, setEnteredFilter] = useState('');
  const {onLoadIngredient}  = props;
  const inputRef = useRef();

  const {isLoading, data, sendRequest, error, clear} = useHttp();

  useEffect(() => {
    const timer = setTimeout( () => {
      if(enteredFilter === inputRef.current.value){
        const query = enteredFilter.length === 0 ? '' : `?orderBy="title"&equalTo="${enteredFilter}"`;

        sendRequest('https://react-hook-update-c970b-default-rtdb.firebaseio.com/ingredient.json' + query, 'GET')

      }

    }, 500);
    return () => {
      clearTimeout(timer);
    }
   
  }, [enteredFilter, inputRef, sendRequest]);

  useEffect( () => {
    
    if(!isLoading && !error && data){
      const loadedingredient = [];
        for(const key in data) {
        loadedingredient.push({
          id : key,
          title: data[key].title,
          amount: data[key].amount
        })
        }
       onLoadIngredient(loadedingredient);
    }

  }, [isLoading, data, error, onLoadIngredient]);

  return (
    <section className="search">
      {error && <ErrorModal onClose={clear}> {error} </ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label> {isLoading && <span>Loading.... </span>}
          <input type="text" 
          ref={inputRef}
          value={enteredFilter} 
          onChange={ event => setEnteredFilter(event.target.value)} 
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
