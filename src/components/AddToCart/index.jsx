// Dependencies
import React from "react";
import { ButtonWithIcon } from "../Button/";
import Img from "../../favicon.ico";

// Components & Containers
import "./style.css";

const AddToCart = () => (
  <div>
    <ButtonWithIcon
      bgColor="primary"
      btnType=""
      btnAction="Add to Cart"
      icoLeft={Img}
      buttonText="Add to Cart"
      icoRight={Img}
    />
  </div>
);

export default AddToCart;
