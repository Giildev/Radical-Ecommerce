// Dependencies
import React, { Component } from "react";

// Components & Containers
import "./style.css";

export class ButtonRound extends Component {
  render() {
    return (
      <div>
        <button className="btn">{this.props.buttonText}</button>
      </div>
    );
  }
}
