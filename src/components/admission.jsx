import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Admission = () => {
    const { isOpen, setOpen } = useState(false);
    return (
        <React.Fragment>
            <h3>Grades Available!</h3>
            <ul>
                <NavLink className="navbar-item" to={"/preprimary"}>Pre-Primary</NavLink>
                <NavLink className="navbar-item" to={"/primary"}>Primary</NavLink>
                <NavLink className="navbar-item" to={"/primarysec"}>Secondary</NavLink>
            </ul>

            <ul>
            <NavLink className="navbar-item" to={"/"}>Back To Home</NavLink>
            </ul>
        </React.Fragment>
    );
};

export default Admission;
