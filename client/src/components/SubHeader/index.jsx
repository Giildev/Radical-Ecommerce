// Dependencies
import React, { Component } from "react";

// Components & Containers
import "./style.css";

export default class SubHeader extends Component {
  render() {
    return (
      <div style={{ backgroundImage: `url(${this.props.img})` }} className="container">
        <div className="container__overlay">
          <h1 className="title">{this.props.title}</h1>
          <h2 className="title--sub">{this.props.subTitle}</h2>
        </div>
      </div>
    );
  }
}
