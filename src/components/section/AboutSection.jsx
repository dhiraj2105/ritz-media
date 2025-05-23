import aboutImage from "../../assets/images/eldecosquare.jpeg";

export default function AboutSection() {
  return (
    <section id="about" className="py-10 px-2 md:px-10 mx-auto bg-[#f5f8fa]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white rounded-4xl relative">
        {/* Decorative pink blob top-right */}
        <div
          className="absolute -top-0 -right-0 w-60 h-60 bg-pink-200 opacity-50 z-0 wave-blob"
          style={{
            borderRadius: "49% 25% 25% 71% / 30% 25% 25% 70%",
          }}
        />
        {/* <div
          className="absolute top-100 right-0 w-90 h-75 bg-green-200 opacity-50 z-0 pointer-events-none wave-blob"
          style={{
            borderRadius: "60% 15% 40% 70% / 20% 50% 15% 60%",
          }}
        /> */}

        {/* 📷 Image Section */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[700px] border-[#6565A4]  border rounded-2xl">
          <img
            src={aboutImage}
            alt="Eldeco Ballads of Bliss"
            className="w-full h-full transition-transform duration-500 rounded-2xl"
          />
        </div>

        {/* 📝 Text Content */}
        <div>
          <h2 className="text-3xl md:text-6xl font-bold text-[#33398B] mb-6">
            Live the Ballads of Bliss – A Signature Lifestyle Experience by
            Eldeco Group
          </h2>

          <p className="text-[#6565A4] mb-6 text-lg leading-relaxed">
            Located in Sector 22D, Yamuna Expressway,{" "}
            <strong>Eldeco Ballads of Bliss</strong> offers a refined collection
            of 3 BHK premium apartments and ultra-luxury duplex penthouses,
            spread over 5 acres of thoughtfully designed space. This
            RERA-approved project ensures high-end living with the perfect blend
            of privacy, elegance, connectivity, and nature.
          </p>

          <p className="text-[#6565A4] text-lg leading-relaxed">
            With 175+ delivered projects and presence across 30 cities,{" "}
            <strong>Eldeco Group</strong> stands for trust, innovation, and
            timely delivery. As a listed and established real estate powerhouse,
            Eldeco brings its legacy of quality and transparency to Greater
            Noida’s most promising new address.
          </p>
        </div>
      </div>
    </section>
  );
}
