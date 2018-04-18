// Dependencies
import React, { Component } from "react";
import Carousel from 'nuka-carousel';
import Cart from "../../assets/img/icon/cart.png";

// Components & Containers
import "./style.css";
import { auto } from "async";

export default class Slider extends Component {


  render() {
    return (
      <div>
        <Carousel speed={1000} autoplay={true} autoplayInterval={500} slideIndex={0} dragging={true} renderCenterRightControls={({ nextSlide }) => (
          <div className="btnSlider" onClick={nextSlide}> ></div>
        )}
          renderCenterLeftControls={({ previousSlide }) => (
            <div className="btnSlider" onClick={previousSlide}> {`  <  `} </div>
          )}

        >
          <img src={Slide1} alt="Slide 1" />
          <img src={Slide2} alt="Slide 2" />
          <img src={Slide3} alt="Slide 3" />
        </Carousel> 
      </div>
    );
  }
}
