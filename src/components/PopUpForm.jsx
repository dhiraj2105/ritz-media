// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import eldecoImg from "../assets/images/eldecoWide.jpeg";

// export default function PopupForm() {
//   const [isOpen, setIsOpen] = useState(false);

//   // Show on load
//   useEffect(() => {
//     const timer = setTimeout(() => setIsOpen(true), 1000); // 1s delay
//     return () => clearTimeout(timer);
//   }, []);

//   const closeModal = () => setIsOpen(false);

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           {/* Backdrop */}
//           <motion.div
//             className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={closeModal}
//           />

//           {/* Modal */}
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center z-50"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//           >
//             <div className="bg-white w-[90%] max-w-md p-6 rounded-3xl shadow-xl relative">
//               <button
//                 onClick={closeModal}
//                 className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-2xl cursor-pointer"
//               >
//                 ×
//               </button>

//               <h2 className="text-xl font-semibold mb-4">Book a Visit</h2>
//               <form className="space-y-4">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="w-full px-4 py-2 border rounded-xl"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="w-full px-4 py-2 border rounded-xl"
//                 />
//                 <button
//                   type="submit"
//                   className="w-full bg-primary  py-2 rounded-xl hover:bg-primary/90 border bg-[#0041D9] text-white font-bold cursor-pointer"
//                 >
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import eldecoImg from "../assets/images/eldecoWide.jpeg";

export default function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <div className="bg-white w-[90%] max-w-4xl p-0 rounded-3xl shadow-xl relative flex overflow-hidden">
              <button
                onClick={closeModal}
                className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-2xl cursor-pointer z-10"
              >
                ×
              </button>

              <div className="w-1/2 h-full hidden md:block">
                <img
                  src={eldecoImg}
                  alt="Eldeco"
                  className="w-full h-full object-cover rounded-r-3xl"
                />
              </div>

              <div className="w-1/2 p-6">
                <h2 className="text-xl font-semibold mb-4">Book a Visit</h2>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border rounded-xl"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border rounded-xl"
                  />
                  <button
                    type="submit"
                    className="w-full bg-primary py-2 rounded-xl hover:bg-primary/90 border bg-green-700 text-white font-bold cursor-pointer"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
