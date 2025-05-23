export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-4 md:px-8 mx-auto bg-[#eff5fa] rounded-3xl flex flex-col md:flex-row items-center justify-evenly gap-12"
    >
      <div className="text-center md:text-left max-w-xl">
        <h2 className="text-3xl md:text-5xl font-bold text-[#33398B]">
          Schedule Your Private Consultation Now – Before Pre-Launch Offers
          Expire!
        </h2>
        <p className="text-[#6565A4] mt-4">
          Fill out the form below to connect with our property experts and book
          your dream home before exclusive offers end.
        </p>

        {/* Agent Info
        <div className="mt-8 flex items-center gap-4">
          <img
            src="https://via.placeholder.com/60"
            alt="Agent"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div className="text-sm text-gray-700">
            <strong>Ravi Sharma</strong>
            <br />
            Senior Property Consultant
            <br />
            📞 +91-9876543210
          </div>
        </div> */}
      </div>

      {/* Contact Form */}
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl w-full">
        {/* Full Name */}
        <div className="col-span-1 sm:col-span-2">
          <input
            type="text"
            placeholder="Full Name *"
            required
            className="w-full px-4 py-3 rounded-xl border border-[#abc5f5] focus:ring-2 focus:ring-primary outline-none"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address *"
          required
          className="w-full px-4 py-3 rounded-xl border border-[#abc5f5] focus:ring-2 focus:ring-primary outline-none"
        />

        {/* Mobile */}
        <input
          type="tel"
          placeholder="Mobile Number *"
          required
          pattern="[0-9]{10}"
          className="w-full px-4 py-3 rounded-xl border border-[#abc5f5] focus:ring-2 focus:ring-primary outline-none"
        />

        {/* Unit Type Dropdown */}
        <div className="col-span-1 sm:col-span-2">
          <select
            required
            className="w-full px-4 py-3 rounded-xl border border-[#abc5f5] focus:ring-2 focus:ring-primary outline-none text-gray-500 "
          >
            <option value="">Select Unit Type *</option>
            <option value="1BHK">1 BHK</option>
            <option value="2BHK">2 BHK</option>
            <option value="3BHK">3 BHK</option>
            <option value="Penthouse">Penthouse</option>
          </select>
        </div>

        {/* Message */}
        <div className="col-span-1 sm:col-span-2">
          <textarea
            rows="5"
            placeholder="Your Message (optional)"
            className="w-full px-4 py-3 rounded-xl border border-[#abc5f5] focus:ring-2 outline-none"
          ></textarea>
        </div>

        {/* CTA Buttons */}
        <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row gap-4 justify-center mt-2">
          <button
            type="submit"
            className="w-full sm:w-auto bg-[#0041D9] font-bold px-8 py-4 rounded-full shadow-md hover:bg-blue-800 hover:scale-105 transition-transform duration-300 ease-in-out text-white cursor-pointer"
          >
            Register for Pre-Launch Offers{" "}
          </button>
          <button
            type="button"
            onClick={() => alert("Connecting you to our expert...")}
            className="w-full sm:w-auto bg-[#6565A4] text-white font-bold px-8 py-4 rounded-full  hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
          >
            Talk to Our Expert Now
          </button>
        </div>
      </form>
    </section>
  );
}
