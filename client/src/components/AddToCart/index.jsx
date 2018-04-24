// Dependencies
import React from "react";
import { ButtonWithIcon } from "../Button/";
import ShoppingBbag from "../../assets/img/svg/shopping-bag.svg";
import Plus from "../../assets/img/svg/plus.svg";

// Components & Containers
import "./style.css";

const AddToCart = () => (
  <div className="atc__container">
    <ButtonWithIcon
      bgColor="primary"
      btnType=""
      btnAction="Add to Cart"
      icoLeft={ShoppingBbag}
      buttonText="Add to Cart"
      icoRight={Plus}
    />
  </div>
);

export default AddToCart;
