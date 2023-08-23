import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesContextProvider } from './store/favotites-context';
import './index.css'

import App from './App';

ReactDOM.render( 
    <FavoritesContextProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </FavoritesContextProvider>, 
    document.getElementById('root'));
