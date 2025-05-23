import { useState } from "react";

import img1 from "../../assets/images/gallery-5.jpg";
import img2 from "../../assets/images/gallery-5.jpg";
import img3 from "../../assets/images/gallery-5.jpg";

const floorPlans = [
  {
    title: "3 BHK with 2 Toilets – 1550 sq. ft.",
    imageUrl: img1,
  },
  {
    title: "3 BHK with 3 Toilets – Spacious & Elegant",
    imageUrl: img2,
  },
  {
    title: "Duplex Penthouses – 2500–2800 sq. ft.",
    imageUrl: "/images/duplex-penthouse.jpg",
  },
];

const FloorPlansSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section
      id="floorplans"
      className="px-4 md:px-10 py-10 bg-[#f5f8fa] sm-h-screen"
    >
      <div className="relative bg-[#FEFFFE] rounded-tr-[4rem] rounded-bl-[4rem] p-6 md:p-12  overflow-hidden  mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Decorative pink blob top-right */}
        <div
          className="absolute top-10 right-400 w-70 h-70 bg-green-200 opacity-50 z-0 wave-blob pointer-events-none"
          style={{
            borderRadius: "49% 25% 25% 71% / 30% 25% 25% 70%",
          }}
        />

        {/* Left: Floor plan options */}
        <div className="relative z-10 flex flex-col gap-6">
          <h2 className="text-3xl md:text-5xl font-bold text-[#33398B] mb-6">
            Choose the Layout That Complements Your Lifestyle
          </h2>
          {floorPlans.map((plan, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`cursor-pointer p-4 sm:w-[500px] md:w-[410px] border rounded-xl transition ${
                selectedIndex === idx
                  ? "bg-[#33398B] text-white"
                  : "bg-gray-50 text-[#33398B] hover:bg-gray-100"
              }`}
            >
              <h3 className="text-lg md:text-xl font-semibold">{plan.title}</h3>
              <p className="text-sm mt-2">
                Request Floor Plan & Pricing Details
              </p>
            </div>
          ))}
        </div>

        {/* Right: Display selected image */}
        <div className="relative z-10 w-full h-[300px] sm:h-[400px] md:h-[600px]">
          <img
            src={floorPlans[selectedIndex].imageUrl}
            alt="Selected Floor Plan"
            className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-300"
          />
        </div>
      </div>

      {/* Wave animation */}
      <style>{`
        @keyframes wave {
          0%, 100% {
            border-radius: 49% 25% 25% 71% / 30% 25% 25% 70%;
          }
          50% {
            border-radius: 40% 35% 30% 60% / 40% 35% 30% 60%;
          }
        }
        .wave-blob {
          animation: wave 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default FloorPlansSection;
