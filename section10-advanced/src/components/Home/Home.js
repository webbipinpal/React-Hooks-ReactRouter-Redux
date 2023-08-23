import React, {useContext} from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../store/auth-context';

const Home = (props) => {
  const AuthCtx = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button className={classes.btn} onClick={AuthCtx.onLogout} >Logout</Button>
    </Card>
  );
};

export default Home;
