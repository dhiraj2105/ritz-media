import React from "react";
import "./Gallery.css";

// Import images properly
import Bedroom1 from "../assets/Assets/BEDROOM.jpg";
import Bedroom2 from "../assets/Assets/BEDROOM.jpg";
import Bedroom3 from "../assets/Assets/BEDROOM.jpg";
import Bedroom4 from "../assets/Assets/BEDROOM.jpg";
import Bedroom5 from "../assets/Assets/BEDROOM.jpg";

// Assign imported images to objects
const images = [
  { id: 1, url: Bedroom1, title: "Modern Villa" },
  { id: 2, url: Bedroom2, title: "Cozy Cottage" },
  { id: 3, url: Bedroom3, title: "Luxury Mansion" },
  { id: 4, url: Bedroom4, title: "Urban Apartment" },
  { id: 5, url: Bedroom5, title: "Beach House" },
  { id: 6, url: Bedroom5, title: "Beach House" },
  { id: 7, url: Bedroom5, title: "Beach House" },
];

const Gallery = () => {
  return (
    <div className="gallery-container" id="gallery">
      <h2 className="gallery-title">Featured Properties</h2>
      <div className="gallery-grid">
        {images.map((image) => (
          <div className="gallery-item" key={image.id}>
            <div className="gallery-card">
              <img src={image.url} alt={image.title} className="gallery-img" />
              <div className="image-title">{image.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
