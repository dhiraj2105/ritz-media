import aboutImage from "../../assets/images/eldecosquare.jpeg";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-5 sm:py-0 px-2 md:px-10 mx-auto bg-[#f5f8fa]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white rounded-4xl relative">
        {/* Decorative pink blob top-right */}
        <div
          className="absolute -top-0 -right-0 w-60 h-60 bg-pink-200 opacity-50 z-0 wave-blob"
          style={{
            borderRadius: "49% 25% 25% 71% / 30% 25% 25% 70%",
          }}
        />
        {/* 📷 Image Section */}
        <div className="relative overflow-hidden h-[270px] sm:h-[400px] md:h-[700px] border-[#6565A4]  border rounded-2xl">
          <img
            src={aboutImage}
            alt="Eldeco Ballads of Bliss"
            className="w-full h-full sm:object-contain  transition-transform duration-500 rounded-2xl"
          />
        </div>

        {/* 📝 Text Content */}
        <div className="px-2">
          <h2 className="text-3xl md:text-6xl font-bold text-[#33398B] mb-6">
            Introducing ‘Song of Life’ – The New Chapter of Elevated Living
          </h2>

          <p className="text-[#6565A4] mb-6 text-lg leading-relaxed">
            Set in the fast-evolving locale of Sector 22D, Yamuna Expressway,
            <strong> Song of Life</strong> is a pre-launch residential project
            by Eldeco Group, designed for those who appreciate expansive green
            views, smart amenities, and meaningful spaces. From premium 3 BHK
            apartments to duplex penthouses, every residence is a note in a
            lifestyle symphony you’ll call your own.
          </p>

          <p className="text-[#6565A4] text-lg leading-relaxed">
            With a legacy of 175+ projects and a footprint across 30+ cities,
            Eldeco Group brings its hallmark of quality, transparency, and
            timely delivery to this prestigious new address on the Yamuna
            Expressway.
          </p>
        </div>
      </div>
    </section>
  );
}
