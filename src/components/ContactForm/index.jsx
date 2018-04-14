// Dependencies
import React from "react";
import { Input, TextArea } from "../Input/";
import { Button } from "../Button/";

// Components & Containers
import "./style.css";

const ContactForm = () => (
  <div className="contact">
    <div className="contact__info">
      <h1 className="contact__info__title">Ponte en contacto con nosotros</h1>
      <h3 className="contact__info__subTitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu metus
        eu augue commodo hendrerit ac sit amet nisl. Praesent sit amet dictum
        lorem.
      </h3>
    </div>
    <div className="contact__container">
      <div className="contact__address">
        <span className="contact__address__title">Direccion 1:</span>
        <p className="contact__address__subTitle">
          Calle 97 No 23 - 37 Centro 710 Caracas, Venezuela
        </p>
        <p className="contact__address__subTitle">Tlf: 0212-555.55.55</p>
        <span className="contact__address__title">Direccion 1:</span>
        <p className="contact__address__subTitle">
          Calle 97 No 23 - 37 Centro 710 Caracas, Venezuela
        </p>
        <p className="contact__address__subTitle">Tlf: 0212-555.55.55</p>
        <span className="contact__address__title">Direccion 1:</span>
        <p className="contact__address__subTitle">
          Calle 97 No 23 - 37 Centro 710 Caracas, Venezuela
        </p>
        <p className="contact__address__subTitle">Tlf: 0212-555.55.55</p>
        <span className="contact__address__title">Direccion 1:</span>
        <p className="contact__address__subTitle">
          Calle 97 No 23 - 37 Centro 710 Caracas, Venezuela
        </p>
        <p className="contact__address__subTitle">Tlf: 0212-555.55.55</p>
        <span className="contact__address__title">Direccion 1:</span>
        <p className="contact__address__subTitle">
          Calle 97 No 23 - 37 Centro 710 Caracas, Venezuela
        </p>
        <p className="contact__address__subTitle">Tlf: 0212-555.55.55</p>
        <span className="contact__address__title">Direccion 1:</span>
        <p className="contact__address__subTitle">
          Calle 97 No 23 - 37 Centro 710 Caracas, Venezuela
        </p>
        <p className="contact__address__subTitle">Tlf: 0212-555.55.55</p>
      </div>
      <div className="contact__form">
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
            inputType="tel"
            inputName="phone"
            inputPlaceHolder="Teléfono"
            inputLabel="Teléfono"
          />
        </div>
        <div className="contact__row">
          <TextArea textAreaPlaceHolder="Mensaje" />
        </div>
        <div className="contact__row__send">
          <Button buttonText="Enviar" />
        </div>
      </div>
    </div>
  </div>
);

export default ContactForm;
