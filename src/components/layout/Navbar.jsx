// import { useState } from "react";
// import { Link } from "react-scroll";
// import { HiMenu, HiX } from "react-icons/hi";

// const navLinks = [
//   { name: "Home", to: "hero" },
//   { name: "About", to: "about" },
//   { name: "Gallery", to: "gallery" },
//   { name: "Amenities", to: "amenities" },
//   { name: "Floor Plans", to: "floorplans" },
//   { name: "Location", to: "location" },
//   { name: "Contact", to: "contact" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className=" w-full z-10000">
//       <nav className="bg-[#eff5fa] backdrop-blur-lg px-10 py-9 flex justify-between items-center transition-all duration-300">
//         {/* Logo */}
//         <div className="text-3xl font-bold text-[#007B51]">
//           <a href="#">ELDECO</a>
//         </div>

//         {/* Desktop Nav */}
//         <ul className="hidden md:flex gap-7 text-gray-700 font-medium text-xl ">
//           {navLinks.map((link) => (
//             <li key={link.to}>
//               <Link
//                 to={link.to}
//                 spy={true}
//                 smooth={true}
//                 offset={-80}
//                 duration={500}
//                 className="cursor-pointer hover:text-[#abc5f5] transition"
//               >
//                 {link.name}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? (
//               <HiX className="text-2xl text-gray-800" />
//             ) : (
//               <HiMenu className="text-2xl text-gray-800" />
//             )}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden mt-2 bg-white shadow-lg rounded-xl py-4 px-6">
//           <ul className="flex flex-col gap-4 text-gray-700 font-medium">
//             {navLinks.map((link) => (
//               <li key={link.to}>
//                 <Link
//                   to={link.to}
//                   spy={true}
//                   smooth={true}
//                   offset={-80}
//                   duration={500}
//                   onClick={() => setIsOpen(false)}
//                   className="cursor-pointer block"
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// }

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Gallery", to: "gallery" },
  { name: "Amenities", to: "amenities" },
  { name: "Floor Plans", to: "floorplans" },
  { name: "Location", to: "location" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`w-full z-50 fixed top-0 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="bg-[#eff5fa] backdrop-blur-lg px-10 py-6 flex justify-between items-center transition-all duration-300">
        {/* Logo */}
        <div className="text-3xl font-bold text-[#007B51]">
          <a href="#">ELDECO</a>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-7 text-gray-700 font-medium text-xl">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer hover:text-[#abc5f5] transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <HiX className="text-2xl text-gray-800" />
            ) : (
              <HiMenu className="text-2xl text-gray-800" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-white shadow-lg rounded-xl py-4 px-6">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer block"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
