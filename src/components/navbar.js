import React from "react";
import logo from "../assets/login.jpg";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark shadow-sm">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img 
                        src={logo} 
                        alt="Logo del Proyecto" 
                        width="50"
                        className="d-inline-block align-top rounded-circle"
                    />
                    <span className="ms-3">
                        Senati
                    </span>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;