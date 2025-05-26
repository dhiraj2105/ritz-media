import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import img5 from "../../assets/images/gallery-5.jpg";

const GallerySection = () => {
  const images = [img5, img5, img5, img5];

  return (
    <section
      id="gallery"
      className="bg-[#f5f8fa] px-4 md:px-10 py-10 md:py-16 sm:h-[85vh] overflow-hidden"
    >
      <div className="flex flex-col md:flex-row h-full items-stretch gap-10">
        {/* Left Side: Text */}
        <div className="w-full md:w-1/2 flex items-center">
          <div className="space-y-4 px-2 md:px-4">
            <p className="text-[#6565A4] font-bold">
              Sector 22D, Yamuna Expressway
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-[#007B51]">
              ELDECO
            </h2>
            <p className="text-lg text-[#6565A4] leading-relaxed">
              Get a glimpse of the lifestyle that awaits you at Song of Life.
              From elegant interiors and lush landscapes to aerial views and
              architectural renders, our upcoming gallery will bring the project
              to life. Stay tuned for exclusive visuals as we approach the grand
              launch.
            </p>
          </div>
        </div>

        {/* Right Side: Swiper Slider */}
        <div className="w-full md:w-1/2 h-[300px] md:h-full">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            className="h-full"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-[20px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
