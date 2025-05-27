import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import heroImage from "../../assets/images/hero.jpeg";
import heroImage2 from "../../assets/images/gallery-1.jpg";
import heroImage3 from "../../assets/images/gallery-2.jpg";

const slides = [
  {
    title: "A New Melody in Luxury Living is Coming.",
    description:
      "3 BHK Apartments & Duplex Penthouses | Sector 22D, Yamuna Expressway.",
    buttonText: "Download Brochure",
    image: heroImage,
  },
  {
    title: "Crafted for Comfort, Composed for Joy.",
    description:
      "Low-density, podium-based homes with central greens and smart living features.",
    buttonText: "Register Your Interest",
    image: heroImage2,
  },
  {
    title: "Launching Soon – Where Every Note Feels Like Home",
    description:
      "Register Now for Priority Access, EOI Benefits & Pre-Launch Offers",
    buttonText: "Pre-Launch Offers",
    image: heroImage3,
  },
];

const HeroSection = () => {
  return (
    <section
      id="hero"
      className=" px-4 md:px-10 relative h-[90vh] overflow-hidden bg-[#f5f8fa] mt-15"
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
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="h-full">
            <div className="relative grid grid-cols-1 md:grid-cols-2 h-full items-center rounded-bl-[3rem] md:rounded-bl-[5rem] rounded-tr-[3rem] md:rounded-tr-[5rem] bg-white overflow-hidden">
              {/* Decorative pink blob */}
              <div
                className="absolute sm:-top-10 sm:-right-10 right-0 bottom-0 w-60 h-60 bg-pink-200 opacity-50 z-0 wave-blob pointer-events-none"
                style={{
                  borderRadius: "49% 25% 25% 71% / 30% 25% 25% 70%",
                }}
              />

              {/* Left image */}
              <div className="relative z-10 w-full h-full">
                <img
                  src={slide.image}
                  alt={`hero ${index}`}
                  className="w-full h-full object-cover rounded-bl-[3rem] md:rounded-bl-[5rem]"
                />
              </div>

              {/* Right content */}
              <div className="relative z-10 px-6 md:px-10 text-center md:text-left min-w-0 h-full flex flex-col justify-center">
                <h1 className="text-[30px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#33398B] mb-4">
                  {slide.title}
                </h1>
                <p className="text-[#6565A4] mb-6 text-sm md:text-base lg:text-lg">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 text-white">
                  <button
                    className="rounded-lg border bg-[#33398B] px-6 py-3 font-semibold cursor-pointer"
                    onClick={() => window.dispatchEvent(new Event("openPopup"))}
                  >
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper Navigation */}
      <div className="absolute bottom-6 right-6 z-20 hidden sm:flex gap-3">
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
