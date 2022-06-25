import React from "react";
import "./Introduction.css";
import clean01 from "../../images/wash_01.jpg";
import Quote from "../Quote/Quote";

const Introduction = () => {
  const [quotePressed, setQuotePressed] = React.useState(false);
  let time = new Date().getHours();
  return (
    <section className="intro">
      <div className="hero-wrap">
        <h1 className="hero-title">Pretty Neat Maids</h1>
        <div className="notification">
          <span className="desc">Cleaning Service</span>
        </div>
        <div className="strapline">
          <span className="hours">
            {time > 17 ? "Opening at 8:00 AM tomorrow" : "Closing at 5:00 PM"}
          </span>
        </div>
        <a className="cta" onClick={() => setQuotePressed(!quotePressed)}>
          <span className="get-quote__intro">get quote</span>
        </a>
      </div>
      <div className="img-wrap">
        <img className="img" src={clean01} alt="Header for the intro of page" />
      </div>
      {
        <Quote
          buttonState={quotePressed ? "active" : "hide"}
          form={quotePressed ? "info" : "hide"}
          iconState={() => setQuotePressed(!quotePressed)}
        />
      }
    </section>
  );
};

export default Introduction;
