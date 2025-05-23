import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// import img1 from "../../assets/images/gallery-1.jpg";
// import img2 from "../../assets/images/gallery-2.jpg";
// import img3 from "../../assets/images/gallery-3.jpg";
// import img4 from "../../assets/images/gallery-4.jpg";
import img5 from "../../assets/images/gallery-5.jpg";

const GallerySection = () => {
  const images = [img5, img5, img5, img5];

  return (
    <section
      id="gallery"
      className="px-2 md:px-10 py-10 pb-0 mx-auto sm:h-[85vh] bg-[#f5f8fa]"
    >
      <div className="flex flex-col md:flex-row h-full">
        {/* Left Side: Text */}
        <div className="md:w-1/2 w-full flex items-start sm:items-center text-left p-2">
          <div>
            <p className="text-[#6565A4] font-bold">
              Sector 22D, Yamuna Expressway
            </p>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-[#33398B]">
              ELDECO
            </h2>
            {/* <p className="text-[#6565A4] text-xl">5.0 lakh</p> */}
            <p className="text-lg text-[#6565A4]">
              Get a glimpse of the lifestyle that awaits you at Song of Life.
              From elegant interiors and lush landscapes to aerial views and
              architectural renders, our upcoming gallery will bring the project
              to life. Stay tuned for exclusive visuals as we approach the grand
              launch.
            </p>
          </div>
        </div>

        {/* Right Side: Swiper Slider */}
        <div className="md:w-1/2 w-full h-[250px] md:h-[90%]">
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
                  className="object-cover w-full h-full rounded-br-[20px] rounded-tr-[20px]"
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
