// Dependencies
import React, { Component } from "react";
import Gmap from "../../components/Gmap/";
import ContactForm from "../../components/ContactForm/";
import SubHeader from "../../components/SubHeader/";

// Components & Containers
import "./style.css";

class Contact extends Component {
  render() {
    return (
      <div>
        <SubHeader />

        <Gmap />
        
        <ContactForm />
      </div>
    );
  }
}

export default Contact;
