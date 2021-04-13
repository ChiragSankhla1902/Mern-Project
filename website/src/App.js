import React from 'react';
import "./App.css"
import {Switch,Route,Router} from "react-router-dom";
import Home from "./Home/Home";
import Contact from "./Contact us/Contact";
import About from "./About us/About";
import Navbar1 from "./Component/Navbar1";
import Error from "./Error/Error";
import history from "./Component/History/History";
import Service from "./Services/Service";
import ScrollToTop from "./Component/ScrollToTop";
import Footer from "./Component/footer/Footer";

const App = () => {
  return (
    <div className="page-container">
      <Router history={history}>
      <ScrollToTop/>
      <div className="content-wrap">
      <Navbar1/>
      <Switch>
        <Route exact path={["/","/Home","/home"]} component={Home}/>
        <Route exact path={["/contact","/contactus"]} component={Contact}/>
        <Route exact path={["/About","/Aboutus","/about","/aboutus"]} component={About}/>
        <Route exact path={["/Service","/services","/Services","/service"]} component={Service}/>
        <Route component={Error}/>
      </Switch>
      </div>
      <Footer/>
      </Router>
      </div>
  )
}

export default App;

