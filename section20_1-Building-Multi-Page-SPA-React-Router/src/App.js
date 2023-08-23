import { Route, Switch, Redirect } from 'react-router-dom';

import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from './components/MainHeader';
import ProductsDetails from './pages/ProductsDetails';

function App() {
  return (
    <div className="wrapper" >
      <MainHeader />
        <div className="section">
          <Switch>
            <Route path="/" exact>
              <Redirect to='/home' />
            </Route>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/welcome">
                <Welcome />
            </Route>
            <Route path="/products" exact>
                <Products />
            </Route>
            <Route path="/products/:productId">
              <ProductsDetails />
            </Route>
          </Switch>
        </div>
     </div>
  );
}

export default App;
