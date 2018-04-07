// Dependencies
import React from "react";
import { Input, TextArea } from "../Input/";

// Components & Containers
import "./style.css";

const ContactForm = () => (
  <div className="contact">
    <div className="contact__row">
      <Input
        inputType="text"
        inputName="name"
        inputPlaceHolder="Nombre"
        inputLabel="Nombre"
      />
      <Input
        inputType="text"
        inputName="lastName"
        inputPlaceHolder="Apellido"
        inputLabel="Apellido"
      />
    </div>
    <div className="contact__row">
      <Input
        inputType="email"
        inputName="email"
        inputPlaceHolder="Email"
        inputLabel="Email"
      />
      <Input
        inputType="number"
        inputName="phone"
        inputPlaceHolder="Teléfono"
        inputLabel="Teléfono"
      />
    </div>
    <div className="contact__row">
      <TextArea textAreaPlaceHolder="Mensaje" />
    </div>
  </div>
);

export default ContactForm;
