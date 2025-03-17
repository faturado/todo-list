import React from "react";

const Divider = () => {
  return (
    <div className="w-full px-4 py-2">
      {/* Divider Line - Full Width */}
      <div className="border-t border-gray-600 w-full"></div>
      {/* Left Panel Content */}
      <div className="flex items-center justify-between w-full bg-gray-800"></div>
    </div>
  );
};

export default Divider;
