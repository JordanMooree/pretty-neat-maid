import React from "react";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";
import Introduction from "./components/Introduction/Introduction";
import Navigation from "./components/Navigation/Navigation";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Introduction />
      <Testimonial />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
