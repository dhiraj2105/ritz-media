import React from "react";
import "./Prices.css";

const Prices = () => {
  return (
    <div className="prices-section" id="prices">
      <div className="prices-content">
        <h1>Price List</h1>
        <div className="price-cards">
          <div className="price-card">
            <h1>Hillview Residences</h1>
            <h1>3 BR Residence</h1>
            <p>1.8 CR Onwards</p>
            <button>Enquire now</button>
          </div>
          <div className="price-card">
            <h1>Garden Residences</h1>
            <h1>4 BR Residence</h1>
            <p>2.1 CR Onwards</p>
            <button>Enquire now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
