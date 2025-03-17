"use client";

import React, { useState } from "react";

const Left = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-2">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-center font-mono font-semibold">To Do List</h1>

        {/* Add Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center text-white w-10 h-10 rounded-lg hover:bg-gray-700 transition duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>

      {/* Pop-up Card */}
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-card">
            <h2 className="modal-title">Add New Task</h2>
            <input
              type="text"
              placeholder="Task name"
              className="modal-input"
            />
            <div className="flex justify-end mt-4">
              <button onClick={() => setIsOpen(false)} className="modal-button">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Left;
