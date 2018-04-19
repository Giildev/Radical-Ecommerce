// Dependencies
import React, { Component } from "react";

// Components & Containers
import "./style.css";
import FaqImg from "../../assets/img/faqImg.jpg";

class Faq extends Component {
  render() {
    return (
      <div className="faq">
        <div style={{ backgroundImage: `url(${FaqImg})` }} className="faq__Img">
          <div className="faq__Img__text">
            <div className="faq__Img__title">Preguntas Frecuentes</div>
            <div className="faq__Img__subTitle">
              Resuelve tus dudas antes de comprar
            </div>
          </div>
        </div>
        <h1 className="faq__title">
          <strong>¿Dudas?</strong> No te preocupes
        </h1>
        <h3 className="faq__subTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quis
          voluptatum eveniet molestias enim maxime rem quisquam! Distinctio est,
          quisquam, nemo doloribus nesciunt harum laborum quae consectetur vitae
          obcaecati voluptates?
        </h3>
        <div className="faq__category">
          <div className="faq__category__title">Categorias</div>
          <div className="faq__category__item">item 1</div>
          <div className="faq__category__item">item 2</div>
          <div className="faq__category__item">item 3</div>
          <div className="faq__category__item">item 4</div>
          <div className="faq__category__item">item 5</div>
        </div>
        <div className="faq__answer">
          <div className="faq__answer__q">Pregunta 1</div>
          <div className="faq__answer__a">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non
            tempora magnam error id architecto dolor culpa beatae minus,
            aperiam, eius repellat animi. Culpa impedit repellendus omnis, fuga
            quia soluta?
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
