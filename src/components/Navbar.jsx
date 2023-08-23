import React, { useState } from 'react';
import darkThemeStyles from './../common/DarkTheme.module.css';

const Navbar = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        document.body.classList.toggle(darkThemeStyles['dark-theme']); // Toggle the class on body
    };

    return (
        <nav>
            <h1>Japanese Cars For Sale</h1>
            <button onClick={toggleTheme}>Toggle Dark Theme</button>
        </nav>
    );
};

export default Navbar;
