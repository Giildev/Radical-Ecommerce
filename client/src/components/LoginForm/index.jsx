// Dependencies
import React, { Component } from "react";

// Components & Containers
import "./style.css";
import { Input } from "../Input/";
import { Button } from "../Button/";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  changeHandler(event) {
    console.log(event);
  }

  render() {
    return (
      <div>
        <h1>Inicia Sesión!</h1>
        <h3>Ingresa para poder realizar tus compras</h3>
        <div>
          <div className="contact__row">
            <Input
              inputType="email"
              inputName="email"
              inputPlaceHolder="Email"
              inputLabel="Email"
              onChange={event => {
                this.changeHandler(event.target);
              }}
            />
          </div>
          <div className="contact__row">
            <Input
              inputType="password"
              inputName="password"
              inputPlaceHolder="Contraseña"
              inputLabel="Contraseña"
              onChange={event => {
                this.changeHandler(event.target);
              }}
            />
          </div>
          <div>
            <Button
              bgColor="primary"
              btnType="round"
              buttonText="Enviar"
              btnAction="Send"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
