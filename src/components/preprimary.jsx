import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Preprimary = () => {
    const { isOpen, setOpen } = useState(false);
    return (
        <div class="container">
            <h1>Pre-Primary School Data</h1>
            <table class="table table-striped table-dark">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Grade</th>
                        <th scope="col">Fees</th>
                        <th scope="col">Seats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Nursery</td>
                        <td>50000</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jr. KG</td>
                        <td>65000</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Sr. KG</td>
                        <td>65000</td>
                        <td>50</td>
                    </tr>
                </tbody>
            </table>

            <ul>
                <NavLink className="navbar-item" to={"/admission"}>
                    Back To Admission
                </NavLink>
                <NavLink className="navbar-item" to={"/"}>
                    Home
                </NavLink>
            </ul>
        </div>
    );
};
 
export default Preprimary;