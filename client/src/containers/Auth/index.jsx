// Dependencies
import React, { Component } from "react";
import RegisterForm from "../../components/RegisterForm/";
import LoginForm from "../../components/LoginForm/index";


// Components & Containers
import "./style.css";

class Container extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="container__register">
            <RegisterForm/>
          </div>
          <div className="container__login">
            <LoginForm/>
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
