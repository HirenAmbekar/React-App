import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const { isOpen, setOpen } = useState(false);
    return (
        <nav className="navbar navbar-expand bg-dark">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">
                        Learning Curve
                    </a>
                </div>
                <div className="navbar-nav mr-auto" style={{ float: "left" }}>
                    <NavLink className="navbar-item" to={"/"}>
                        Home
                    </NavLink>
                    <NavLink className="navbar-item" to={"/about"}>
                        About Us
                    </NavLink>
                    <NavLink className="navbar-item" to={"/admission"}>
                        Admission
                    </NavLink>
                    <NavLink className="navbar-item" to={"/contact"}>
                        Contact Us
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;
