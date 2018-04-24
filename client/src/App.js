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

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/faq" component={Faq} />
      <Route path="/register" component={Signin} />
      <Route path="/login" component={Login} />
      {/* <Route path="/about" component={About}/> */}
    </div>
  </Router>
);

export default App;
