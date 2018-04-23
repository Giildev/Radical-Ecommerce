// Dependencies
import React, { Component } from "react";
//import axios from "axios";

// Components & Containers
import "./style.css";
import { Input } from "../Input/";
import { Button } from "../Button/";

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  changesHandler = (event) => {
    console.log(event);
  };

  render() {
    return (
      <div>
        <h1>Regístrate!</h1>
        <h3>Llena el formulario para comenzar a disfrutar de nuesto portal</h3>
        <div>
          <div className="contact__row">
            <Input
              inputType="text"
              inputName="name"
              inputPlaceHolder="Nombre"
              inputLabel="Nombre"
              test={(event) => {console.log(event.target.value)}}
            />
          </div>
          <div className="contact__row">
            <Input
              inputType="text"
              inputName="lastName"
              inputPlaceHolder="Apellido"
              inputLabel="Apellido"
              onChange={event => {
                this.changeHandler(event.target);
              }}
            />
          </div>
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
              inputType="text"
              inputName="phone"
              inputPlaceHolder="Teléfono"
              inputLabel="Número Telefónico"
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
          <div className="contact__row">
            <Input
              inputType="password"
              inputName="confPass"
              inputPlaceHolder="Confirmar Contraseña"
              inputLabel="Confirmar Contraseña"
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


