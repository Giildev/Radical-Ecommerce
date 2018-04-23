// Dependencies
import React, { Component } from "react";

// Components & Containers
import "./style.css";

export class Input extends Component {  
  render() {
    console.log(this.props.test)
    return (
      <div className="input__container">
        <input
          id={this.props.inputName}
          className="input"
          placeholder={this.props.inputPlaceHolder}
          type={this.props.inputType}      
          // onChange={console.log(this.props.test)}              
        />
        <label className="label" htmlFor={this.props.inputName}>
          {this.props.inputLabel}
        </label>
      </div>
    );
  }
}

export class TextArea extends Component {
  render() {
    return (
      <textarea
        placeholder={this.props.textAreaPlaceHolder}
        name=""
        id=""
        className="textArea"
      />
    );
  }
}
