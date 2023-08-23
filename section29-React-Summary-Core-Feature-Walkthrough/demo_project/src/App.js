import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from './pages/AllMeetupsPage';
import NewMeetupsPage from './pages/NewMeetupsPage';
import FavoritesPage from './pages/FavoritesPage';
import MainNavigation from "./component/layout/MainNavigation";
import Layout from "./component/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={ <AllMeetupsPage />} />
        <Route path="/newmeetup" element={ <NewMeetupsPage />} />
        <Route path="/favorites" element={ <FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
