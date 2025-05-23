import React from "react";

const BookButton = () => {
  return (
    <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 z-50 md:hidden ">
      <button
        onClick={() => window.dispatchEvent(new Event("openPopup"))}
        className="bg-[#33398B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4a4fa0] transition cursor-pointer"
      >
        Book a Visit
      </button>
    </div>
  );
};

export default BookButton;
