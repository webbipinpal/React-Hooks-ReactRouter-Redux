import { NavLink } from "react-router-dom";
import classes from './MainHeader.module.css';

const MainHeader = () => {
    return <header className={classes.header}>
        <nav>
            <li>
                <NavLink activeClassName={classes.active} to="/home"> Home </NavLink>
            </li>
            <li>
                <NavLink activeClassName={classes.active} to="/welcome"> Welcome </NavLink>
            </li>
            <li>
                <NavLink activeClassName={classes.active} to="/products">Products </NavLink>
            </li>
        </nav>
    </header>
};

export default MainHeader;