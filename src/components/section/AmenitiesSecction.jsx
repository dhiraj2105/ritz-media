import React, { useState } from "react";
import {
  FaSwimmingPool,
  FaSpa,
  FaTree,
  FaDog,
  FaBicycle,
  FaChild,
  FaUserShield,
  FaParking,
  FaBolt,
  FaTint,
  FaHome,
  FaTv,
  FaSmileBeam,
  FaSeedling,
  FaBasketballBall,
  FaRunning,
} from "react-icons/fa";

const iconColors = [
  "bg-red-100",
  "bg-green-100",
  "bg-yellow-100",
  "bg-blue-100",
  "bg-purple-100",
  "bg-pink-100",
  "bg-orange-100",
  "bg-teal-100",
  "bg-indigo-100",
  "bg-emerald-100",
  "bg-rose-100",
  "bg-lime-100",
];

const amenitiesByCategory = [
  {
    category: "Luxury Amenities",
    items: [
      { icon: <FaHome />, title: "Clubhouse" },
      { icon: <FaSwimmingPool />, title: "Half Olympic-size Pool" },
      { icon: <FaSpa />, title: "Spa" },
      { icon: <FaSmileBeam />, title: "Party Hall" },
      { icon: <FaDog />, title: "Pet Park" },
    ],
  },
  {
    category: "Wellness & Leisure",
    items: [
      { icon: <FaTree />, title: "Yoga Lawn" },
      { icon: <FaBicycle />, title: "Cycling Track" },
      { icon: <FaTv />, title: "Badminton & Squash Courts" },
      { icon: <FaRunning />, title: "Lawn Tennis" },
      { icon: <FaBasketballBall />, title: "Basketball" },
    ],
  },
  {
    category: "Family-Centric",
    items: [
      { icon: <FaChild />, title: "Kids' Play Area" },
      { icon: <FaUserShield />, title: "Senior Citizen Deck" },
      { icon: <FaParking />, title: "Dedicated Parking" },
    ],
  },
  {
    category: "Smart Living",
    items: [
      { icon: <FaHome />, title: "Home Automation" },
      { icon: <FaTv />, title: "High-Speed Elevators" },
      { icon: <FaBolt />, title: "24x7 Power & Water Supply" },
    ],
  },
  {
    category: "Nature-Focused",
    items: [
      { icon: <FaTree />, title: "3-Acre Central Green" },
      { icon: <FaTint />, title: "Multiple Water Bodies" },
      { icon: <FaSeedling />, title: "80% Open Area" },
      { icon: <FaTint />, title: "Rainwater Harvesting" },
    ],
  },
];

const AmenitiesSection = () => {
  const [activeCategory, setActiveCategory] = useState(
    amenitiesByCategory[0].category
  );

  const activeAmenities =
    amenitiesByCategory.find((cat) => cat.category === activeCategory)?.items ||
    [];

  return (
    <section
      id="amenities"
      className="px-4 md:px-10 py-15 sm:py-0 bg-[#f5f8fa]"
    >
      <div className="relative bg-white rounded-tr-[4rem] rounded-2xl p-6 md:p-12  overflow-hidden">
        <div
          className="absolute -top-10 -right-10 w-50 h-50 bg-pink-200 opacity-50 z-0 wave-blob pointer-events-none"
          style={{
            borderRadius: "49% 25% 25% 71% / 30% 25% 25% 70%",
          }}
        />

        {/* Heading */}
        <h2 className="text-3xl md:text-6xl font-bold text-[#33398B] mb-8 text-left">
          Amenities
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-10 border-b pb-4">
          {amenitiesByCategory.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-4 py-2 rounded-full text-base font-medium transition ${
                activeCategory === cat.category
                  ? "bg-[#33398B] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
          {activeAmenities.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center px-4 py-5 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition duration-300"
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-lg mb-3 text-4xl text-[#33398B] ${
                  iconColors[idx % iconColors.length]
                }`}
              >
                {item.icon}
              </div>
              <div className="text-lg md:text-xl font-bold text-[#33398B] mb-1">
                {item.title}
              </div>
              <p className="text-sm md:text-base text-[#6565A4]">
                Experience our top-notch {item.title.toLowerCase()} designed for
                your lifestyle.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Wave Animation */}
      <style>
        {`
          @keyframes wave {
            0%, 100% {
              border-radius: 49% 25% 25% 71% / 30% 25% 25% 70%;
            }
            50% {
              border-radius: 40% 35% 30% 60% / 40% 35% 30% 60%;
            }
          }
          .wave-blob {
            animation: wave 6s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default AmenitiesSection;
