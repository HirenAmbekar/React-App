import React, { Component } from "react";

class Contactus extends Component {
    state = {};
    render() {
        return (
            <div class="footer-top">
                <div class="container">
                    <div class="row">
                        <div class="col footer-contact">
                            <h3>Contact Details</h3>
                            <p>
                                Learning Curve Public School <br></br>
                                Phase 1, Hinjewadi, Pimpri-Chinchwad,<br></br>
                                Near Hotel Lemon Tree, Pune, Maharastra 411 057{" "}
                                <br></br>
                                <br></br>
                            </p>
                        </div>

                        <div class="col footer-contact">
                            <div>
                                <h3>Phone</h3>
                                Pre-Primary:
                                <a href="tel:+919503115106">+91 9503115106</a>
                                <br></br>
                                Primary & Secondary:
                                <a href="tel:+919503115107">+91 9503115107</a>
                                <br></br>
                                <br></br>
                            </div>
                            <div>
                                <h3>Email</h3>
                                Pre-Primary:{" "}
                                <a href="mailto:lcps.preprimanry@learningcurve.in">
                                    lcps.preprimanry@learningcurve.in
                                </a>
                                <br></br>
                                Primary & Secondary:{" "}
                                <a href="mailto:lcps.primarysec@learningcurve.in">
                                    lcps.primarysec@learningcurve.in
                                </a>
                                <br></br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contactus;
