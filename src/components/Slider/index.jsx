// Dependencies
import React, { Component } from "react";
import Carousel from 'nuka-carousel';
import Slide1 from "../../assets/img/slider/slide1.jpg";
import Slide2 from "../../assets/img/slider/slide2.jpg";
import Slide3 from "../../assets/img/slider/slide3.jpg";

// Components & Containers
import "./style.css";
import { auto } from "async";

export default class Slider extends Component {


  render() {
    return (
      <div>
        <Carousel className="slider" initialSlideHeight={100} speed={1000} autoplay={true} autoplayInterval={3000} slideIndex={0} dragging={true} renderCenterRightControls={({ nextSlide }) => (
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
