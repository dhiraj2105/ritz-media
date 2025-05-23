// export default function LocationSection() {
//   return (
//     <section id="location" className="py-10 px-4 md:px-8 bg-[#f5f8fa] mx-auto">
//       <div className="relative rounded-4xl p-6 md:p-12 overflow-hidden">
//         <div className="text-center mb-10">
//           <h2 className="text-3xl md:text-5xl font-bold text-[#33398B]">
//             Location Advantage – Sector 22D, Yamuna Expressway
//           </h2>
//           <p className="text-[#6565A4] mt-4 max-w-2xl mx-auto text-lg">
//             Skyline Residences is strategically located for convenience,
//             connectivity, and lifestyle. Enjoy access to key landmarks within
//             minutes.
//           </p>
//         </div>

//         {/* 🗺️ Embedded Google Map */}
//         <div
//           className="rounded-2xl overflow-hidden shadow-sm "
//           data-aos="fade-right"
//         >
//           <iframe
//             title="Google Maps Location"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4436.421936043241!2d77.54035157632673!3d28.311998075841394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc794f9451345%3A0x93102d4498257b2e!2sSector%2022D%20Yamuna%20Expressway%20Authority%20Flats!5e1!3m2!1sen!2sin!4v1747982840896!5m2!1sen!2sin"
//             width="100%"
//             height="400"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//             className="w-full sm:h-[400px] h-[300px]"
//           ></iframe>
//         </div>

//         {/* 📍 Location Advantages List */}
//         <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-gray-700 text-lg mt-12 px-4">
//           <li className="flex items-start gap-2  ">
//             <span className="text-xl">🚆</span>
//             <span>Near Proposed Metro Line (YEIDA)</span>
//           </li>
//           <li className="flex items-start gap-2">
//             <span className="text-xl">✈️</span>
//             <span>Close to Jewar International Airport</span>
//           </li>
//           <li className="flex items-start gap-2">
//             <span className="text-xl">🎥</span>
//             <span>Minutes from Proposed Noida Film City</span>
//           </li>
//           <li className="flex items-start gap-2">
//             <span className="text-xl">🛣️</span>
//             <span>
//               Seamless Access to Pari Chowk, Sector 150, Noida-Greater Noida
//               Expressway
//             </span>
//           </li>
//           <li className="flex items-start gap-2">
//             <span className="text-xl">🏫</span>
//             <span>Near top schools, hospitals, malls & entertainment hubs</span>
//           </li>
//           <li className="flex items-start gap-2">
//             <span className="text-xl">🌆</span>
//             <span>Easy access to IGI Airport via Noida Expressway</span>
//           </li>
//         </ul>
//       </div>
//     </section>
//   );
// }

export default function LocationSection() {
  return (
    <section id="location" className="py-10 px-4 md:px-8 bg-[#f5f8fa] mx-auto">
      <div className="relative rounded-4xl p-6 md:p-12 overflow-hidden">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-[#33398B]">
            Location Advantage – Sector 22D, Yamuna Expressway
          </h2>
          <p className="text-[#6565A4] mt-4 max-w-2xl mx-auto text-lg">
            Skyline Residences is strategically located for convenience,
            connectivity, and lifestyle. Enjoy access to key landmarks within
            minutes.
          </p>
        </div>

        {/* 🗺️ Embedded Google Map */}
        <div
          className="rounded-2xl overflow-hidden shadow-sm"
          data-aos="fade-right"
        >
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4436.421936043241!2d77.54035157632673!3d28.311998075841394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc794f9451345%3A0x93102d4498257b2e!2sSector%2022D%20Yamuna%20Expressway%20Authority%20Flats!5e1!3m2!1sen!2sin!4v1747982840896!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full sm:h-[400px] h-[300px]"
          ></iframe>
        </div>

        {/* 📍 Location Advantages List */}
        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-gray-700 text-lg mt-12 px-4 divide-y sm:divide-y-0 sm:divide-x-0">
          {[
            { icon: "🚆", text: "Near Proposed Metro Line (YEIDA)" },
            { icon: "✈️", text: "Close to Jewar International Airport" },
            { icon: "🎥", text: "Minutes from Proposed Noida Film City" },
            {
              icon: "🛣️",
              text: "Seamless Access to Pari Chowk, Sector 150, Noida-Greater Noida Expressway",
            },
            {
              icon: "🏫",
              text: "Near top schools, hospitals, malls & entertainment hubs",
            },
            {
              icon: "🌆",
              text: "Easy access to IGI Airport via Noida Expressway",
            },
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 border-b border-gray-200 py-3 sm:border-0"
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
