import React, { useState } from "react";
import darkThemeStyles from "./../common/DarkTheme.module.css";

const Navbar = () => {
  const [isDarkTheme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!isDarkTheme);

    // assigns dark theme to all children in root div
    document.getElementById("root").childNodes.forEach((e) => {
      e.classList.toggle(darkThemeStyles["dark-theme"]);
    });

    // get all elemets in root div whoose class does not include word "content"
    let nodes = document.getElementById("root").childNodes;
    for (let i = 0; i < nodes.length; i++) {
      if (!nodes[i].className.includes("content")) {
        nodes[i].classList.toggle(darkThemeStyles["light-theme"]);
      }
    }
  };

  return (
    <nav>
      <h1>Japanese Cars For Sale</h1>
      <button onClick={toggleTheme}>Toggle Dark Theme</button>
    </nav>
  );
};

export default Navbar;
