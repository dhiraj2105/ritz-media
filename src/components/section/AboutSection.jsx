import aboutImage from "../../assets/images/eldecosquare.jpeg";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-[#f5f8fa] px-4 sm:px-6 md:px-10 py-10 md:py-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white rounded-3xl md:rounded-[2.5rem] relative z-10 p-6 md:p-10 overflow-hidden">
        {/* 📷 Image Section */}
        <div className="relative overflow-hidden h-[300px] sm:h-[400px] md:h-[600px] border border-[#6565A4] rounded-2xl z-10">
          <img
            src={aboutImage}
            alt="Eldeco Ballads of Bliss"
            className="w-full h-full object-contain sm:object-contain rounded-2xl transition-transform duration-500"
          />
        </div>

        {/* 📝 Text Content */}
        <div className="z-10 px-2 md:px-4">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#33398B] mb-6">
            Introducing ‘Song of Life’ – The New Chapter of Elevated Living
          </h2>

          <p className="text-[#6565A4] mb-6 text-base sm:text-lg leading-relaxed">
            Set in the fast-evolving locale of Sector 22D, Yamuna Expressway,
            <strong> Song of Life</strong> is a pre-launch residential project
            by Eldeco Group, designed for those who appreciate expansive green
            views, smart amenities, and meaningful spaces. From premium 3 BHK
            apartments to duplex penthouses, every residence is a note in a
            lifestyle symphony you’ll call your own.
          </p>

          <p className="text-[#6565A4] text-base sm:text-lg leading-relaxed">
            With a legacy of 175+ projects and a footprint across 30+ cities,
            Eldeco Group brings its hallmark of quality, transparency, and
            timely delivery to this prestigious new address on the Yamuna
            Expressway.
          </p>
        </div>
      </div>

      {/* Wave Animation (shared with HeroSection) */}
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
}
