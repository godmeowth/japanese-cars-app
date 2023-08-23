import React, { useState } from "react";
import darkThemeStyles from "./../common/DarkTheme.module.css";

const Navbar = () => {
  const [isDarkTheme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!isDarkTheme);

    document.getElementById("root").childNodes.forEach((e) => {
      e.classList.toggle(darkThemeStyles["dark-theme"]);
    });
  };

  return (
    <nav>
      <h1>Japanese Cars For Sale</h1>
      <button onClick={toggleTheme}>Toggle Dark Theme</button>
    </nav>
  );
};

export default Navbar;
