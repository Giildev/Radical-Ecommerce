// Dependencies
import React, { Component } from "react";
import SubHeader from "../../components/SubHeader/";

// Components & Containers
import "./style.css";
import FaqImg from "../../assets/img/faqImg.jpg";

class Faq extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleToggle = e => {
    document.getElementById(e).classList.toggle("faq__answer__a-hide");
  };

  render() {
    return (
      <div className="faq">
        <SubHeader
          img={FaqImg}
          title="Preguntas Frecuentes"
          subTitle="Resuelve tus dudas antes de comprar"
        />
        <div className="faq__container">
          <h1 className="faq__title">
            <strong className="faq__title-strong">¿Dudas?</strong> No te
            preocupes
          </h1>
          <h3 className="faq__subTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            quis voluptatum eveniet molestias enim maxime rem quisquam!
            Distinctio est, quisquam, nemo doloribus nesciunt harum laborum quae
            consectetur vitae obcaecati voluptates?
          </h3>
          <div className="faq__container__content">
            <div className="faq__category">
              <div className="faq__category__title">Categorias</div>
              <div className="faq__category__item">item 1</div>
              <div className="faq__category__item">item 2</div>
              <div className="faq__category__item">item 3</div>
            </div>

            <div className="faq__answer">
              <div className="faq__answer__container">
                <button
                  name="question-1"
                  onClick={e => {
                    this.handleToggle(e.target.name);
                  }}
                  className="faq__answer__q"
                >
                  Pregunta 1
                </button>
                <div id="question-1" className="faq__answer__a">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  non tempora magnam error id architecto dolor culpa beatae
                  minus, aperiam, eius repellat animi. Culpa impedit repellendus
                  omnis, fuga quia soluta?
                </div>
              </div>
              <button
                name="question-2"
                onClick={e => {
                  this.handleToggle(e.target.name);
                }}
                className="faq__answer__q"
              >
                Pregunta 2
              </button>
              <div id="question-2" className="faq__answer__a">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                non tempora magnam error id architecto dolor culpa beatae minus,
                aperiam, eius repellat animi. Culpa impedit repellendus omnis,
                fuga quia soluta?
              </div>
              <button
                name="question-3"
                onClick={e => {
                  this.handleToggle(e.target.name);
                }}
                className="faq__answer__q"
              >
                Pregunta 3
              </button>
              <div id="question-3" className="faq__answer__a">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                non tempora magnam error id architecto dolor culpa beatae minus,
                aperiam, eius repellat animi. Culpa impedit repellendus omnis,
                fuga quia soluta?
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
