import { useReducer, useCallback } from "react"

const initialState = {
    loading: false, 
    error:null,
    data:null,
    extra:null,
    inentifier:null
}

const httpsReducer = (curhttpState, action) => {
    switch (action.type) {
      case 'SEND' :
        return {loading: true, error: null, data:null, extra:null, inentifier: action.inentifier}
      case 'RESPONSE' :
        return { ...curhttpState, loading:false, data:action.responseData, extra: action.extra }
      case 'ERROR':
        return { loading: false, error: action.errorMessage}
      case 'CLEAR':
        return initialState
      default:
        throw new Error('Should not be reached!');
    }
  }

const useHttp = () => {
    const [httpState, dispatchHttp] = useReducer( httpsReducer, initialState);
    const clear = useCallback(() => {
        return dispatchHttp({type: 'CLEAR'})
    });

    const sendRequest = useCallback((url, method, body, reqExtra, reqInentifier) => {
        dispatchHttp({ type:'SEND', inentifier: reqInentifier})
        fetch(url, {
        method:method,
        body:body,
        headers: {
            'Content-Type' : 'application/json'
        }
        }).then( response => {
            return response.json();
        })
        .then( responseData => {
            dispatchHttp({type: 'RESPONSE', responseData: responseData, extra: reqExtra});
        })
        .catch( error => {
        dispatchHttp({type: 'ERROR', errorMessage:'Somthing went wrong!'});
        })
    }, [])

    return {
        isLoading: httpState.loading,
        data: httpState.data,
        error: httpState.error,
        sendRequest: sendRequest,
        reqExtra:httpState.extra,
        reqInentifier: httpState.inentifier,
        clear: clear
    }
};


export default useHttp;