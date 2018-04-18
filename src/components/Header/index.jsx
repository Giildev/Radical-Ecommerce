// Dependencies
import React, { Component } from "react";
import Logo from "../../assets/img/logo-web.png";
import { Link } from "react-router-dom";

// Components & Containers
import "./style.css";
import { Button } from "../Button/";

export default class Header extends Component {
  render() {
    return (
      <header className="headerContainer">
        <Link to="/">
          <img src={Logo} alt="Logo Radical" className="logo" />
        </Link>
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__list__item__dropdown">
              Tienda
              <ul className="dropdown">
                <li className="dropdown__item">
                  <Link className="menu__list__item-link" to="/men">
                    Caballeros
                  </Link>
                </li>
                <li className="dropdown__item">
                  <Link className="menu__list__item-link" to="/women">
                    Damas
                  </Link>
                </li>
                <li className="dropdown__item">
                  <Link className="menu__list__item-link" to="/kid">
                    Niños
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu__list__item">
              <Link className="menu__list__item-link" to="/offer">
                Ofertas
              </Link>
            </li>
            <li className="menu__list__item">
              <Link className="menu__list__item-link" to="/new">
                Nuevo
              </Link>
            </li>
            <li className="menu__list__item">
              <Link className="menu__list__item-link" to="/contact">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
        <div className="userMeta">
          <div className="cart">
            <div className="cart__icon" />
            <span className="cart__notification">5</span>
          </div>
          <Button
            bgColor="primary"
            btnType="round"
            buttonText="Registrarse"
            btnAction="Sign Up"
          />
          <Button
            bgColor="black-2"
            btnType="round"
            buttonText="Iniciar Sesión"
            btnAction="Login"
          />
        </div>
      </header>
    );
  }
}
