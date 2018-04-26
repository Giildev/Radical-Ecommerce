// Dependencies
import React, { Component } from "react";

// Components & Containers
import "./style.css";
import SubHeader from "../../components/SubHeader/";
import { Button } from "../../../src/components/Button";
import Img from "../../assets/img/discover.jpg";

class Discover extends Component {
  render() {
    return (
      <div>
        <SubHeader
          img={Img}
          title="Descubre"
          subTitle="Como comprar todo el calzado"
        />
        <div className="firstContainer">
          <h1 className="pageTitle">Proceso</h1>
          <h2 className="pageSubtitle">de Compras</h2>
          <p className="pageText">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
            iste, dignissimos suscipit nemo in ut,ametaksjdgh.
          </p>
        </div>

        <div className="contentContainer">
          <p className="textContent__end">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
            iste, dignissimos suscipit nemo in ut,amet, cupiditate eligendi
            consequatur culpa molestias! Sed minus consequuntur ipsam atque
            odio, doloribus vitae aut!
          </p>
          <p className="textContent">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
            iste, dignissimos suscipit nemo in ut,amet, cupiditate eligendi
            consequatur culpa molestias! Sed minus consequuntur ipsam atque
            odio, doloribus vitae aut!
          </p>
          <p className="textContent__end">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
            iste, dignissimos suscipit nemo in ut,amet, cupiditate eligendi
            consequatur culpa molestias! Sed minus consequuntur ipsam atque
            odio, doloribus vitae aut!
          </p>
          <p className="textContent">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
            iste, dignissimos suscipit nemo in ut,amet, cupiditate eligendi
            consequatur culpa molestias! Sed minus consequuntur ipsam atque
            odio, doloribus vitae aut!
          </p>
          <p className="textContent__end">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
            iste, dignissimos suscipit nemo in ut,amet, cupiditate eligendi
            consequatur culpa molestias! Sed minus consequuntur ipsam atque
            odio, doloribus vitae aut!
          </p>
          <p className="textContent">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
            iste, dignissimos suscipit nemo in ut,amet, cupiditate eligendi
            consequatur culpa molestias! Sed minus consequuntur ipsam atque
            odio, doloribus vitae aut!
          </p>
        </div>

        <div className="containerAction">
          <h3 className="primary">
            Asi de sencillo puedes comprar tu calzado favorito
          </h3>
          <h4 className="secondary">¿Que esperas? conoce nuestros productos</h4>
          <Button
            bgColor="primary"
            btnType="round"
            buttonText="Tienda"
            btnAction="Sign Up"
          />
        </div>
      </div>
    );
  }
}

export default Discover;
