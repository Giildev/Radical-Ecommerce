// Dependencies
import React, { Component } from "react";
import Gmap from "../../components/Gmap/";
import ContactForm from "../../components/ContactForm/";

// Components & Containers
import "./style.css";

class Contact extends Component {
  render() {
    return (
      <div>
        <Gmap />
        
        <ContactForm />
      </div>
    );
  }
}

export default Contact;
