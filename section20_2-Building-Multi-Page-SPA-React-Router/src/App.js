import { Route, Switch, Redirect } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import QuotesDetails from './pages/QuoteDetails';
import NewQuotes from './pages/NewQuote';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <Layout> 
        <Switch>
          <Route path='/' exact>
            <Redirect to="/quotes" />
          </Route>       
          <Route path='/quotes' exact>
            <AllQuotes />
          </Route>
          <Route path='/quotes/:quoteId'>
            <QuotesDetails />
          </Route>
          <Route path='/new-quotes'>
            <NewQuotes />
          </Route>
          <Route to='*'>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
