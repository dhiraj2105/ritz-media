import React from "react";
import "./Amenities.css";

const amenities = [
  { emoji: "🏊‍♂️", title: "Swimming Pool" },
  { emoji: "🏋️‍♀️", title: "Gym" },
  { emoji: "🚗", title: "Parking" },
  { emoji: "☕", title: "Cafeteria" },
  { emoji: "🛋️", title: "Lounge Area" },
  { emoji: "🍽️", title: "Restaurant" },
  { emoji: "📶", title: "High-Speed WiFi" },
  { emoji: "🛏️", title: "Bedroom Suites" },
];

const Amenities = () => {
  return (
    <section className="amenities-section" id="amenities">
      <div className="amenities-content">
        <h1 className="section-title">Amenities</h1>
        <div className="amenities-cards">
          {amenities.map((amenity, index) => (
            <div className="amenity-card" key={index}>
              <div className="emoji" aria-hidden="true">
                {amenity.emoji}
              </div>
              <p className="amenity-title">{amenity.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
