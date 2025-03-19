import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center mt-25">
      {/* Login title positioned outside the card */}
      <h2 className="text-indigo-400 text-2xl font-semibold tracking-[0.1em] mb-2">
        Login
      </h2>

      {/* Login card */}
      <div className="card-wrapper h-[300px] w-[300px]">
        <div className="card-content flex flex-col p-4">
          {/* Username Field */}
          <div className="flex flex-col mb-3">
            <label className="text-white text-sm mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              className="modal-input border border-gray-600 bg-gray-800 text-white p-2 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col">
            <label className="text-white text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="modal-input border border-gray-600 bg-gray-800 text-white p-2 rounded-md focus:outline-none focus:border-blue-500"
            />
            {/* Forgot Password Button (Now Close to Password) */}
            <button className="text-blue-400 text-sm mt-2 hover:underline self-end">
              Forgot password?
            </button>
          </div>
          {/* Adds a large gap before the underline */}
          <div className="card-border w-full flex items-center justify-center mb-4"></div>

          {/* Login Button (Now Close to Forgot Password) */}
          <button className="card-button w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 ">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
