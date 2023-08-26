import React from "react";
import "./NavBar.css";
import arepaLogo from "../assets/arepa-logo.png";

// Component for the navbar. It only contains a logo and a title.
function Navbar() {
    return (
        <header>
            <div className="header-divider">
                <img src={ arepaLogo } alt="logo" />
                <h1>Rexburg Arepas</h1>
            </div>
            
            <div className="header-divider">
            
            <div className="flag-color blue"></div>
            <div className="flag-color red"></div>
            </div>
            
        </header>
    );
};
  
export default Navbar;