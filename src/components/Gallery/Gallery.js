import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <hr className="seperator" />
      <h2 className="section-heading">Gallery</h2>
      <div className="gallery-content">
        <div className="gallery-container">
          <a
            href="//www.google.com/maps/uv?pb=!1s0x880fcb9dff171047:0x810e8085339ac80a!3m1!7e131!4s!5sPretty+Neat+Maids,+LLC&hl=en&imagekey=!1e10!2sAF1QipMF8x_lbrpi2M6IvmK6X7SjuG7QYcour9OPhLcJ"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="gallery-img"
              src="https://lh3.googleusercontent.com/p/AF1QipMF8x_lbrpi2M6IvmK6X7SjuG7QYcour9OPhLcJ=w768-h768-n-o-v1"
              alt="Business card"
            />
          </a>
          <a
            href="//www.google.com/maps/uv?pb=!1s0x880fcb9dff171047%3A0x810e8085339ac80a!3m1!7e131!4s!5sPretty%20Neat%20Maids%2C%20LLC!15sCgIgAQ&hl=en&imagekey=!1e10!2sAF1QipOsvI9BwydCp531nLDWDt7wyxTa9GDt3il9obPv"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="gallery-img"
              src="https://lh3.googleusercontent.com/p/AF1QipOsvI9BwydCp531nLDWDt7wyxTa9GDt3il9obPv=w768-h768-n-o-v1"
              alt="Business card"
            />
          </a>
          <div className="filler"></div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
