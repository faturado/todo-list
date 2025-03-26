import React from "react";
import Profile from "../assets/marilag.png"; // Ensure correct path

const Header = ({ onAddNote }) => {
  return (
    <div className="w-full flex justify-center items-center p-4 relative">
      <button
        onClick={onAddNote}
        className="px-4 py-2 rounded-md border-2 border-white bg-black text-white text-sm hover:bg-gray-800 transition"
      >
        Add New Note
      </button>

      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <img
          src={Profile} // Ensure Profile is being used properly
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover border-2 border-white"
        />
      </div>
    </div>
  );
};

export default Header;
