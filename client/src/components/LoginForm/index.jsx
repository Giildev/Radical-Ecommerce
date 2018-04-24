// Dependencies
import React, { Component } from "react";
import axios from "axios";

// Components & Containers
import "./style.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  Login = () => {
    axios
      .post(`http://localhost:4000/api/login`, this.state)
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
        <h1>Inicia Sesión!</h1>
        <h3>Ingresa para poder realizar tus compras</h3>
        <div>
          <div className="contact__row">
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
          <div className="contact__row">
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
          <div>
            <button
              className="btn btn__primary btn__round"
              onClick={event => this.Login()}
            >
              Ingresar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
