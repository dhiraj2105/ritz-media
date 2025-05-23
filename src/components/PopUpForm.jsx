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
            <div className="bg-white w-[90%] max-w-4xl p-0 rounded-3xl shadow-xl relative flex flex-col md:flex-row overflow-hidden">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-4 text-black font-bold  hover:text-gray-800 text-4xl cursor-pointer z-10"
              >
                ×
              </button>

              {/* Image Section */}
              <div className="w-full md:w-1/2 h-64 md:h-auto hidden sm:flex">
                <img
                  src={eldecoImg}
                  alt="Eldeco"
                  className="w-full h-full md:rounded-r-3xl"
                />
              </div>

              {/* Form Section */}
              <div className="w-full md:w-1/2 p-6">
                <h2 className="text-xl font-semibold mb-4">Book a Visit</h2>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border rounded-xl"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border rounded-xl"
                    required
                  />
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="w-full px-4 py-2 border rounded-xl"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Write Your Message Here"
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
