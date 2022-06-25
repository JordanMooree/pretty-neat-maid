import React from "react";
import "./Navigation.css";
import ArticleIcon from "@mui/icons-material/Article";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import DirectionsIcon from "@mui/icons-material/Directions";
import Quote from "../Quote/Quote";

const Navigation = () => {
  const [isClicked, setIsClicked] = React.useState(false);
  const [quotePress, setQuotePress] = React.useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const handleQuotePress = () => {
    setQuotePress(!quotePress);
  };

  React.useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  return (
    <>
      <nav className="nav">
        <div className="hamburger" id="hamburger-1" onClick={handleClick}>
          <span
            className="line"
            style={
              isClicked
                ? { transform: "translateY(5px) rotate(45deg)" }
                : { transform: "none" }
            }
          ></span>
          <span
            className="line"
            style={isClicked ? { opacity: 0 } : { opacity: 1 }}
          ></span>
          <span
            className="line"
            style={
              isClicked
                ? { transform: "translateY(-5px) rotate(-45deg)" }
                : { transform: "none" }
            }
          ></span>
        </div>
        <div className="logo-text__container header-text">
          <a href="/" className="logo-text">
            Pretty Neat Maids, LLC
          </a>
        </div>
        <a className="get-quote links" onClick={handleQuotePress}>
          <span className="icon" aria-hidden="true">
            <ArticleIcon className="m-icon" />
          </span>
          <span> Get Quote</span>
        </a>
        <a className="phone links" href="tel:+1-630-785-0938">
          <span className="icon" aria-hidden="true">
            <LocalPhoneIcon className="m-icon" />
          </span>
          <span> Call Now</span>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com/maps/dir//Pretty+Neat+Maids,+LLC/data=!4m8!4m7!1m0!1m5!1m1!1s0x880fcb9dff171047:0x810e8085339ac80a!2m2!1d-87.7280033!2d41.9611218"
          className="directions links"
        >
          <span className="icon" aria-hidden="true">
            <DirectionsIcon className="m-icon" />
          </span>
          <span> Get Directions</span>
        </a>
      </nav>
      <div
        className="pnm-links"
        style={
          isClicked ? { transform: "none" } : { transform: "translateX(-105%)" }
        }
      >
        <ul className="list">
          <li className="item">
            <a
              href="/"
              onClick={(e) => {
                setIsClicked(!isClicked);
                let testimonials = document.getElementById("testimonials");
                e.preventDefault();
                testimonials &&
                  testimonials.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                window.history.pushState(
                  "testimonials",
                  "testimonials",
                  "/testimonials"
                );
              }}
              className="scroll-item"
            >
              Testimonials
            </a>
          </li>
          <li className="item">
            <a
              href="/"
              onClick={(e) => {
                setIsClicked(!isClicked);
                let gallery = document.getElementById("gallery");
                e.preventDefault();
                gallery &&
                  gallery.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                window.history.pushState("gallery", "gallery", "/gallery");
              }}
              className="scroll-item"
            >
              Gallery
            </a>
          </li>
          <li className="item">
            <a
              href="/"
              onClick={(e) => {
                setIsClicked(!isClicked);
                let contact = document.getElementById("contact");
                e.preventDefault();
                contact &&
                  contact.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                window.history.pushState("contact", "contact", "/contact");
              }}
              className="scroll-item"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <Quote
        buttonState={quotePress ? "active" : "hide"}
        form={quotePress ? "info" : "hide"}
        iconState={() => setQuotePress(!quotePress)}
      />
      <div className="mobile-menu">
        <a className="mobile" onClick={handleQuotePress}>
          <span className="icon" aria-hidden="true">
            <ArticleIcon className="m-icon" />
          </span>
          <span> Get Quote</span>
        </a>
        <a className="mobile" href="tel:+1-630-785-0938">
          <span className="icon" aria-hidden="true">
            <LocalPhoneIcon className="m-icon" />
          </span>
          <span> Call Now</span>
        </a>
        <a
          href="https://www.google.com/maps/dir//Pretty+Neat+Maids,+LLC/data=!4m8!4m7!1m0!1m5!1m1!1s0x880fcb9dff171047:0x810e8085339ac80a!2m2!1d-87.7280033!2d41.9611218"
          className="mobile"
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon" aria-hidden="true">
            <DirectionsIcon className="m-icon" />
          </span>
          <span> Get Directions</span>
        </a>
      </div>
    </>
  );
};

export default Navigation;
