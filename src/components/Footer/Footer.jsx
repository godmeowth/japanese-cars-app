import React from 'react';
import classes from "./Footer.module.css";
import darkThemeStyles from './../../common/DarkTheme.module.css'

const Footer = () => {
    return (
        <div>
            <footer className={classes.content}>
                copyright 2023
            </footer>
        </div>
    );
};

export default Footer;