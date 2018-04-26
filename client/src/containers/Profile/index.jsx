// Dependencies
import React, { Component } from "react";

// Components & Containers
import "./style.css";
import svgIcons from "../../assets/img/icons.svg";

class Profile extends Component {
  render() {
    return (
      <div>

        <div className="titleContainer">
          <h1 className="profileTitle">Tu Perfil</h1>
          <h3 className="profileSubTitle">Bienvenido @Usuario</h3>
        </div>

        <div className="panelOptions">
          <div className="panelCard">
            <svg className="panelCard__ico">
               <use xlinkHref={`${svgIcons}#icon-shopping-cart`} />
            </svg>
            <p className="panelCard__text">Ordenes</p>   
          </div>
          <div className="panelCard">
             <svg className="panelCard__ico">
              <use xlinkHref={`${svgIcons}#icon-settings`} />
             </svg>
             <p className="panelCard__text">Cambiar info de Perfil</p>
             </div>
          <div className="panelCard">
             <svg className="panelCard__ico">
               <use xlinkHref={`${svgIcons}#icon-map-pin`} />
            </svg>
            <p className="panelCard__text">Dirección de Envío</p>
            </div>
        </div>

      </div>
    );
  }
}

export default Profile;
