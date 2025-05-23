import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-0 rounded-t-3xl pt-10 pb-6 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Branding */}
        <div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#007B51] mb-2">
            ELDECO
          </h3>
          <p className="text-sm text-gray-600">
            Modern living, elevated. A perfect blend of luxury and convenience
            in the heart of the city.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-2xl font-bold text-[#6565A4] mb-2">
            Quick Links
          </h4>
          <ul className="space-y-1 text-md text-[#6565A4]">
            <li>
              <a href="#amenities" className="hover:underline">
                Amenities
              </a>
            </li>
            <li>
              <a href="#location" className="hover:underline">
                Location
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact / Socials */}
        <div>
          <h4 className="text-xl font-semibold text-[#6565A4] mb-2">Connect</h4>
          <p className="text-md text-[#6565A4] mb-2">Email: info@skyline.com</p>
          <div className="flex justify-center md:justify-start gap-4 text-xl text-[#6565A4]">
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-300" />

      <div className="text-center text-sm text-gray-500 sm:mb-1 mb-10">
        © {new Date().getFullYear()} Eldeco. All rights reserved.
      </div>

      {/* 👉 Popup Trigger Button */}
      {/* <div className="text-center block md:hidden">
        <button
          onClick={() => window.dispatchEvent(new Event("openPopup"))}
          className="bg-[#33398B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4a4fa0] transition cursor-pointer"
        >
          Book a Visit
        </button>
      </div> */}
    </footer>
  );
}
