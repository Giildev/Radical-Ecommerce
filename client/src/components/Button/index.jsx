// Dependencies
import React, { Component } from "react";

// Components & Containers
import "./style.css";
import svgIcons from "../../assets/img/icons.svg";

export class Button extends Component {
  changesHandler = (event, action) => {
    console.log(event, action);
  };
  render() {
    return (
      <div>
        <button
          className={`
          btn btn__${this.props.bgColor} 
          btn__${this.props.btnType}
          `}
          onClick={event => this.changesHandler("Click", this.props.btnAction)}
        >
          {this.props.buttonText}
        </button>
      </div>
    );
  }
}

export class ButtonWithIcon extends Component {
  changesHandler = (event, action) => {
    console.log(event, action);
  };
  render() {
    return (
      <button
        className={`
          btn btn__${this.props.bgColor} 
          btn__${this.props.btnType}
          `}
        onClick={event => this.changesHandler("Click", this.props.btnAction)}
      >
        <svg className="btn__ico">
          <use xlinkHref={`${svgIcons}#icon-shopping-cart`} />
        </svg>
        {this.props.buttonText}
        <svg className="btn__ico">
          <use xlinkHref={`${svgIcons}#icon-plus`} />
        </svg>
      </button>
    );
  }
}
