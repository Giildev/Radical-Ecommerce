// Dependencies
import React, { Component } from "react";
import axios from "axios";

// Components & Containers
import "./style.css";

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      lastName: "",
      phone: "",
      email: "",
      password: ""
    };
  }

  Singup = () => {
    axios
      .post(`http://localhost:4000/api/signup`, this.state)
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log("error", error);
      });
  };

  render() {
    return (
      <div>
        <h1>Regístrate!</h1>
        <h3>Llena el formulario para comenzar a disfrutar de nuesto portal</h3>
        <div>
          <div className="contact__row">
            <div className="input__container">
              <input
                id="name"
                className="input"
                placeholder="Nombre"
                type="text"
                onInput={e => {
                  this.setState({ name: e.target.value });
                }}
              />
              <label className="label" htmlFor="name">
                Nombre
              </label>
            </div>
          </div>
          <div className="contact__row">
            <div className="input__container">
              <input
                id="lastName"
                className="input"
                placeholder="Apellido"
                type="text"
                onInput={e => {
                  this.setState({ lastName: e.target.value });
                }}
              />
              <label className="label" htmlFor="lastName">
                Apellido
              </label>
            </div>
          </div>
          <div className="contact__row">
            <div className="input__container">
              <input
                id="email"
                className="input"
                placeholder="Email"
                type="email"
                onInput={e => {
                  this.setState({ email: e.target.value });
                }}
              />
              <label className="label" htmlFor="email">
                Email
              </label>
            </div>
          </div>
          <div className="contact__row">
            <div className="input__container">
              <input
                id="phone"
                className="input"
                placeholder="Teléfono"
                type="text"
                onInput={e => {
                  this.setState({ phone: e.target.value });
                }}
              />
              <label className="label" htmlFor="phone">
                Número Telefónico
              </label>
            </div>
          </div>
          <div className="contact__row">
            <div className="input__container">
              <input
                id="password"
                className="input"
                placeholder="Contraseña"
                type="password"
                onInput={e => {
                  this.setState({ password: e.target.value });
                }}
              />
              <label className="label" htmlFor="password">
                Contraseña
              </label>
            </div>
          </div>
          <div>
            <button
              className="btn btn__primary btn__round"
              onClick={event => this.Singup()}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    );
  }
}