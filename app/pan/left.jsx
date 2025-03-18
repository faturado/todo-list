"use client";
import React, { useState } from "react";

const Left = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState(""); // Store input value

  const handleSave = () => {
    if (task.trim() === "") return; // Prevent empty tasks
    console.log("Task Saved:", task); // You can replace this with actual saving logic
    setTask(""); // Clear input field
    setIsOpen(false); // Close modal after saving
  };

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-2">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-center font-mono font-semibold">To Do List</h1>

        {/* Add Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center text-white w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-200"
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
            {/* Close Button (Top-Right) */}
            <button
              onClick={() => setIsOpen(false)}
              className="modal-close-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="modal-close-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h2 className="modal-title">Add New Task</h2>
            <input
              type="text"
              placeholder="Task name"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="modal-input"
            />

            {/* Save Button (Lower-Right) */}
            <div className="flex justify-end mt-4">
              <button onClick={handleSave} className="modal-button">
                Save Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Left;
