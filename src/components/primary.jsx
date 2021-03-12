import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Primary = () => {
    const { isOpen, setOpen } = useState(false);
    return (
        <div class="container">
            <h1>Primary School Data</h1>
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
                        <td>I</td>
                        <td>70000</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>II</td>
                        <td>70000</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>III</td>
                        <td>70000</td>
                        <td>50</td>
                    </tr>

                    <tr>
                        <th scope="row">4</th>
                        <td>IV</td>
                        <td>75000</td>
                        <td>50</td>
                    </tr>

                    <tr>
                        <th scope="row">5</th>
                        <td>V</td>
                        <td>75000</td>
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

export default Primary;
