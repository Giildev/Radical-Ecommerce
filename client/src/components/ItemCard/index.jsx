// Dependencies
import React, { Component } from "react";

// Components & Containers
import "./style.css";
import AddToCart from "../AddToCart/";

export default class ItemCard extends Component {
  render() {
    return (
      <div className="itemCard">
        <img src="https://goo.gl/6wJhfY" alt="" className="itemCard__img" />
        <div className="itemCard__row">
          <div className="itemCard__model">{this.props.model}</div>
          <div className="itemCard__gender">{this.props.gender}</div>
        </div>
        <div className="itemCard__price">{this.props.price} Bs</div>
        <AddToCart />
      </div>
    );
  }
}
