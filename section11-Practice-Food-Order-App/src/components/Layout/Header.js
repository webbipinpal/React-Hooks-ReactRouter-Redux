import React, { Fragment } from 'react';
import classes from "./Header.module.css"
import BannerImage from "../../assets/bannerImage.jpg"
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>HBKU</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={BannerImage} alt="Banner Image" />
        </div>
    </Fragment>
}
export default Header;