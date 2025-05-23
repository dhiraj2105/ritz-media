// import heroImage from "../../assets/images/hero.jpeg";

// const HeroSection = () => {
//   return (
//     <section
//       id="hero"
//       className="px-2 md:px-10 py-20 md:py-25 mx-auto sm:h-screen bg-[#f5f8fa]"
//     >
//       <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center rounded-bl-[4rem] md:rounded-bl-[5rem] rounded-tr-[4rem] md:rounded-tr-[5rem] bg-white overflow-hidden">
//         {/* Decorative pink blob top-right */}
//         <div
//           className="absolute -top-10 -right-10 w-60 h-60 bg-pink-200 opacity-50  z-0 wave-blob"
//           style={{
//             borderRadius: "49% 25% 25% 71% / 30% 25% 25% 70%",
//           }}
//         />

//         {/* Left image */}
//         <div className="relative z-10 h-[300px] sm:h-[400px] md:h-[750px]">
//           <img
//             src={heroImage}
//             alt="hero image"
//             className="w-full h-full object-cover transition-transform duration-500 rounded-bl-[4rem] md:rounded-bl-[5rem]"
//           />
//         </div>

//         {/* Right content */}
//         <div className="relative z-10 px-4 text-center md:text-left">
//           <h1 className="text-3xl md:text-6xl font-bold text-[#33398B] mb-4">
//             Elegant homes
//           </h1>
//           <h1 className="text-3xl md:text-6xl font-bold text-[#33398B] mb-4">
//             for sale
//           </h1>
//           <p className="text-[#6565A4] mb-6 text-sm md:text-[17px]">
//             There are many variations of passages of lorem ipsum available, but
//             the majority have suffered alteration in some form by injected
//             humour or randomised words which don't look even slightly
//             believable.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 text-white">
//             <button className="rounded-lg border bg-[#33398B] px-6 py-3 font-semibold">
//               VIEW PROPERTIES
//             </button>
//             <button className="rounded-lg border bg-[#69AEF8] px-6 py-3 font-semibold">
//               GET IN TOUCH
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* wave animation */}
//       <style>
//         {`
//           @keyframes wave {
//             0%, 100% {
//               border-radius: 49% 25% 25% 71% / 30% 25% 25% 70%;
//             }
//             50% {
//               border-radius: 40% 35% 30% 60% / 40% 35% 30% 60%;
//             }
//           }
//           .wave-blob {
//             animation: wave 3s ease-in-out infinite;
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default HeroSection;

//        v2
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import heroImage from "../../assets/images/hero.jpeg";
// import heroImage2 from "../../assets/images/eldecosquare.jpeg";

// const slides = [
//   {
//     title: "Come Home to Harmony.",
//     description:
//       "3 BHK & Duplex Penthouses in Greater Noida’s next landmark address.",
//     buttonText: "Download Brochure",
//   },
//   {
//     title: "Where Architecture Meets Emotion.",
//     description:
//       "A podium-based masterpiece with 3-sided open apartments and natural green views.",
//     buttonText: "Book Site Visit",
//   },
//   {
//     title: "Bliss, Built Into Every Corner.",
//     description:
//       "Premium lifestyle with smart automation, central greens, and modern club life.",
//     buttonText: "Pre-Launch Offers",
//   },
// ];

// const HeroSection = () => {
//   return (
//     <section
//       id="hero"
//       className="px-2 md:px-10 py-28 pb-1 md:py-25 mx-auto sm:h-screen bg-[#f5f8fa]"
//     >
//       <Swiper
//         modules={[Navigation, Autoplay]}
//         spaceBetween={30}
//         slidesPerView={1}
//         loop={true}
//         autoplay={{ delay: 5000 }}
//         navigation={{
//           nextEl: ".hero-next",
//           prevEl: ".hero-prev",
//         }}
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center rounded-bl-[4rem] md:rounded-bl-[5rem] rounded-tr-[4rem] md:rounded-tr-[5rem] bg-white overflow-hidden">
//               {/* Decorative pink blob top-right */}
//               <div
//                 className="absolute -top-10 -right-10 w-60 h-60 bg-pink-200 opacity-50 z-0 wave-blob"
//                 style={{
//                   borderRadius: "49% 25% 25% 71% / 30% 25% 25% 70%",
//                 }}
//               />

//               {/* Left image */}
//               <div className="relative z-10 h-[300px] sm:h-[400px] md:h-[750px]">
//                 <img
//                   src={heroImage}
//                   alt="hero"
//                   className="w-full h-full object-cover transition-transform duration-500 rounded-bl-[4rem] md:rounded-bl-[5rem]"
//                 />
//                 <img
//                   src={heroImage2}
//                   alt="hero"
//                   className="w-full h-full object-cover transition-transform duration-500 rounded-bl-[4rem] md:rounded-bl-[5rem]"
//                 />
//               </div>

//               {/* Right content */}
//               <div className="relative z-10 px-4 text-center md:text-left">
//                 <h1 className="text-3xl md:text-6xl font-bold text-[#33398B] mb-4">
//                   {slide.title}
//                 </h1>
//                 <p className="text-[#6565A4] mb-6 text-sm md:text-[17px]">
//                   {slide.description}
//                 </p>
//                 <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 text-white">
//                   <button className="rounded-lg border bg-[#33398B] px-6 py-3 mb-6 font-semibold">
//                     {slide.buttonText}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Swiper Navigation */}
//       <div className="absolute bottom-15 right-6 gap-3 z-20 hidden sm:flex">
//         <button className="hero-prev bg-[#33398B] text-white px-4 py-2 rounded-full text-sm sm:text-base">
//           Prev
//         </button>
//         <button className="hero-next bg-[#33398B] text-white px-4 py-2 rounded-full text-sm sm:text-base">
//           Next
//         </button>
//       </div>

//       {/* Wave Animation */}
//       <style>
//         {`
//           @keyframes wave {
//             0%, 100% {
//               border-radius: 49% 25% 25% 71% / 30% 25% 25% 70%;
//             }
//             50% {
//               border-radius: 40% 35% 30% 60% / 40% 35% 30% 60%;
//             }
//           }
//           .wave-blob {
//             animation: wave 4s ease-in-out infinite;
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default HeroSection;

//        v3
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import heroImage from "../../assets/images/hero.jpeg";
import heroImage2 from "../../assets/images/gallery-1.jpg";
import heroImage3 from "../../assets/images/gallery-2.jpg"; // Add more if needed

const slides = [
  {
    title: "Come Home to Harmony.",
    description:
      "3 BHK & Duplex Penthouses in Greater Noida’s next landmark address.",
    buttonText: "Download Brochure",
    image: heroImage,
  },
  {
    title: "Where Architecture Meets Emotion.",
    description:
      "A podium-based masterpiece with 3-sided open apartments and natural green views.",
    buttonText: "Book Site Visit",
    image: heroImage2,
  },
  {
    title: "Bliss, Built Into Every Corner.",
    description:
      "Premium lifestyle with smart automation, central greens, and modern club life.",
    buttonText: "Pre-Launch Offers",
    image: heroImage3,
  },
];

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="px-2 md:px-10 py-28 pb-1 md:py-25 mx-auto sm:h-screen bg-[#f5f8fa]"
    >
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center rounded-bl-[4rem] md:rounded-bl-[5rem] rounded-tr-[4rem] md:rounded-tr-[5rem] bg-white overflow-hidden">
              {/* Decorative pink blob top-right */}
              <div
                className="absolute -top-10 -right-10 w-60 h-60 bg-pink-200 opacity-50 z-0 wave-blob"
                style={{
                  borderRadius: "49% 25% 25% 71% / 30% 25% 25% 70%",
                }}
              />

              {/* Left image */}
              <div className="relative z-10 h-[300px] sm:h-[400px] md:h-[750px]">
                <img
                  src={slide.image}
                  alt={`hero ${index}`}
                  className="w-full h-full object-cover transition-transform duration-500 rounded-bl-[4rem] md:rounded-bl-[5rem]"
                />
              </div>

              {/* Right content */}
              <div className="relative z-10 px-4 text-center md:text-left">
                <h1 className="text-3xl md:text-6xl font-bold text-[#33398B] mb-4">
                  {slide.title}
                </h1>
                <p className="text-[#6565A4] mb-6 text-sm md:text-[17px]">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 text-white">
                  <button className="rounded-lg border bg-[#33398B] px-6 py-3 mb-6 font-semibold">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper Navigation */}
      <div className="absolute bottom-15 right-6 gap-3 z-20 hidden sm:flex">
        <button className="hero-prev bg-[#33398B] text-white px-4 py-2 rounded-full text-sm sm:text-base">
          Prev
        </button>
        <button className="hero-next bg-[#33398B] text-white px-4 py-2 rounded-full text-sm sm:text-base">
          Next
        </button>
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
            animation: wave 4s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
