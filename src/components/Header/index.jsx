// Dependencies
import React from "react";
import Logo from "../../assets/img/logo-web.png";

// Components & Containers
import "./style.css";

const Header = () => (
  <header className="headerContainer">
    <img src={Logo} alt="Logo Radical" className="logo" />

    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__list__item__dropdown">
          Tienda
          <ul className="dropdown">
            <li className="dropdown__item">Caballeros</li>
            <li className="dropdown__item">Damas</li>
            <li className="dropdown__item">Niños</li>
          </ul>
        </li>

        <li className="menu__list__item">Ofertas</li>
        <li className="menu__list__item">Nuevo</li>
        <li className="menu__list__item">Contacto</li>
      </ul>
    </nav>

    <div className="userMeta">
      <div className="cart">
        <div className="cart__icon"/>
        <span className="cart__notification">5</span>
      </div>

      <button className="btnRound btnRound--red">Registrarse</button>

      <button className="btnRound btnRound--black">Iniciar Sesión</button>
    </div>
  </header>
);

export default Header;
