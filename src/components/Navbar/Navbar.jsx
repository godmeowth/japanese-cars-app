import React, {useState} from "react";
import darkThemeStyles from "../../common/DarkTheme.module.css";
import {filterByAscendingPrice, filterByDescendingPrice, cancelFilter} from "../../redux/actions";
import {connect} from "react-redux";
import classes from "./Navbar.module.css";
import CheckBoxStyle from './Checkbox.module.css'
import SelectMenuStyles from "./SelectMenu.module.css";
import './CheckBox.css'

const Navbar = ({filterByAscendingPrice, filterByDescendingPrice, cancelFilter}) => {
    const [isDarkTheme, setTheme] = useState(false);

    const [selectedFilter, setSelectedFilter] = useState("");

    const handleFilterChange = (event) => {
        setSelectedFilter(event.target.value);
        if (event.target.value === "ascending") {
            filterByAscendingPrice();
        } else if (event.target.value === "descending") {
            filterByDescendingPrice();
        } else if (event.target.value === "cancel") {
            cancelFilter();
            setSelectedFilter("");
        }
    };
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

            <div className={classes.switcher}>
                <div className="checkbox-wrapper-20">
                    <div className="switch">
                        <input id="one-20" className="input" type="checkbox" checked={isDarkTheme}
                               onChange={toggleTheme}/>
                        <label htmlFor="one-20" className="slider"> </label>
                        Toggle Dark Theme
                    </div>
                </div>
            </div>

            <div className={classes.selector}>
                <select className={SelectMenuStyles.customSelect} value={selectedFilter} onChange={handleFilterChange}>
                    <option value="">Sort by Price</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                    {/*not working*/}
                    {/*<option value="cancel">Cancel Filter</option>*/}
                </select>
            </div>

        </nav>
    );
};

const mapDispatchToProps = {
    filterByAscendingPrice,
    filterByDescendingPrice,
    cancelFilter,
};

export default connect(null, mapDispatchToProps)(Navbar);
