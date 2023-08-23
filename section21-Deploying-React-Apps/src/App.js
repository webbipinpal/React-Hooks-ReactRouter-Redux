import React, { Suspense } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

const AllQuotes = React.lazy( () => import('./pages/AllQuotes'));
const QuoteDetails = React.lazy( () => import('./pages/QuoteDetails'));
const NewQuotes = React.lazy( () => import('./pages/NewQuote'));
const NotFound = React.lazy( () => import('./pages/NotFound'));

function App() {
  return (
    <div>
      <Layout>
        <Suspense fallback={ 
          <div className="centered">
            <LoadingSpinner />
          </div>
          }>  
          <Switch>
            <Route path='/' exact>
              <Redirect to="/quotes" />
            </Route>       
            <Route path='/quotes' exact>
              <AllQuotes />
            </Route>
            <Route path='/quotes/:quoteId'>
              <QuoteDetails />
            </Route>
            <Route path='/new-quotes'>
              <NewQuotes />
            </Route>
            <Route to='*'>
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
