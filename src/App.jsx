import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Highlights from "./components/highlights/Highlights";
import Prices from "./components/prices/Prices";
import Amenities from "./Amenities/Amenities";
import Gallery from "./Gallery/Gallery";

const App = () => {
  return (
    <div className="main">
      <Navbar />
      <Hero />
      <Highlights />
      <Prices />
      <Amenities />
      <Gallery />
    </div>
  );
};

export default App;
