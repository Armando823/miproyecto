import React from "react";
import logo from "../assets/login.jpg";

const Navbar= ()=>{
    return(
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <img src={logo} alt="Logo" width="100"/>
                <span className="navbar-brand"></span>
            </div>
        </nav>
    );
};

export default Navbar;