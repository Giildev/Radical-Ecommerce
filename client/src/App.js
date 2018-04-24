// Dependencies
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components & Containers
import "./App.css";
import Header from "./components/Header/";
import Home from "./containers/Home/";
import Contact from "./containers/Contact/";
import Faq from "./containers/Faq/";
import Signin from "./containers/Signin/";
import Login from "./containers/Login/";
import Discover from "./containers/Discover/";

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
      <Route path={process.env.PUBLIC_URL + "/contact"} component={Contact} />
      <Route path={process.env.PUBLIC_URL + "/faq"} component={Faq} />
      <Route path={process.env.PUBLIC_URL + "/register"} component={Signin} />
      <Route path={process.env.PUBLIC_URL + "/login"} component={Login} />
      <Route path={process.env.PUBLIC_URL + "/discover"} component={Discover} />
      {/* <Route path={process.env.PUBLIC_URL + "/route"} component={Component} /> */}
    </div>
  </Router>
);

export default App;
