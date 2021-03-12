import logo from "./logo.svg";
import "./App.css";
import Title from "./components/title";
import Image from "./components/image.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import "./index.css";
import Home from "./components/home";
import About from "./components/aboutus";
import Contact from "./components/contactus";
import Admission from "./components/admission";
import Preprimary from "./components/preprimary";
import Primary from "./components/primary";
import Primarysec from "./components/primarysec";

function App() {
    return (
        <Router>
            <Header />
            <Title />
            <Image />
            <br></br>
            <div className="contentProvider">
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/about" component={About} />
                        <Route path="/admission" component={Admission} />
                        <Route path="/preprimary" component={Preprimary} />
                        <Route path="/primary" component={Primary} />
                        <Route path="/primarysec" component={Primarysec} />
                    </Switch>
                </div>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
