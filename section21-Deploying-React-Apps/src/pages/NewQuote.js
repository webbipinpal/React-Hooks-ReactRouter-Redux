import { Fragment, useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";


const NewQuotes = () => {

    const {sendRequest, status} = useHttp(addQuote);
    const history = useHistory();

    useEffect(() => {
        if(status === 'completed'){
            history.push('/quotes');
        }
    }, [status, history]);

    const onAddQuoteHandler = (quoteData) => {
       sendRequest(quoteData); 
    } 
    return <Fragment>
        <h1> New Quotes Page </h1>
        <QuoteForm isLoading={status === 'pending'} onAddQuote={onAddQuoteHandler} />
    </Fragment>
};

export default NewQuotes;