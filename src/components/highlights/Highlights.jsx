import React from "react";
import "./Highlights.css";

// Import different images for each card
import LivingRoom from "../../assets/Assets/livingRoom.jpg";
import Bedroom from "../../assets/Assets/BEDROOM.jpg";
import Kitchen from "../../assets/Assets/kitchen.jpg";
import Bathroom from "../../assets/Assets/BATHROOM.jpg";

const images = [
  { src: LivingRoom, title: "Living Room" },
  { src: Bedroom, title: "Bedroom" },
  { src: Kitchen, title: "Kitchen" },
  { src: Bathroom, title: "Bathroom" },
  { src: Kitchen, title: "Garden" },
  { src: Bedroom, title: "Office" },
];

const Highlights = () => {
  return (
    <div className="section " id="highlights">
      <div className="content">
        <h1>Highlights</h1>
        <div className="highlight-zigzag">
          {images.map((item, index) => (
            <div
              className={`highlight-row ${index % 2 !== 0 ? "reverse" : ""}`}
              key={index}
            >
              <div className="highlight-image">
                <img src={item.src} alt={item.title} />
              </div>
              <div className="highlight-text">
                <h2>{item.title}</h2>
                <p>
                  Discover our beautiful {item.title.toLowerCase()} with modern
                  design, comfort, and elegance.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
