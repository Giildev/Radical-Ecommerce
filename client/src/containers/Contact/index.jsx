// Dependencies
import React, { Component } from "react";
import Gmap from "../../components/Gmap/";
import ContactForm from "../../components/ContactForm/";
import SubHeader from "../../components/SubHeader/";

// Components & Containers
import "./style.css";
import Img from "../../assets/img/subheaders/contact.jpg";

class Contact extends Component {
  render() {
    return (
      <div>
        <SubHeader
          img={Img}
          title="Contacto"
          subTitle="Te atenderemos lo mas pronto posible"
        />
        <Gmap />
        <ContactForm />
      </div>
    );
  }
}

export default Contact;
