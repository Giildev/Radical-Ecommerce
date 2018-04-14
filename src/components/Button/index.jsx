// Dependencies
import React, { Component } from "react";

// Components & Containers
import "./style.css";

export class Button extends Component {
  render() {
    return (
      <div>
        <button
          className={`
          btn btn__${this.props.bgColor} 
          btn__${this.props.btnType}
          `}
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
      <div>
        <button
          className={`
          btn btn__${this.props.bgColor} 
          btn__${this.props.btnType}
          `}
          onClick={event => this.changesHandler("Click", this.props.btnAction)}
        >
          <img className="btn__ico" src={this.props.icoLeft} alt="Svg" />
          {this.props.buttonText}
          <img className="btn__ico" src={this.props.icoRight} alt="Svg" />
        </button>
      </div>
    );
  }
}
