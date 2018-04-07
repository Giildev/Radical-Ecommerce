// Dependencies
import React, { Component } from "react";

// Components & Containers
import "./style.css";

export class Input extends Component {
  render() {
    return (
      <div>
        <input
          id={this.props.inputName}
          className="input"
          placeholder={this.props.inputPlaceHolder}
          type={this.props.inputType}
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
      <div>
        <textarea placeholder={this.props.textAreaPlaceHolder} name="" id="" className="textArea"></textarea>
      </div>
    )
  }
}
