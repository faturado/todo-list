import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center mt-24">
      {/* Login card */}
      <div className="login-card">
        <h2 className="text-white text-2xl font-semibold tracking-[0.1em] mb-2 items-center">
          Login
        </h2>
        {/* Username Field */}
        <div className="flex flex-col w-full">
          <label className="text-white text-sm mb-1">Username</label>
          <input
            type="text"
            placeholder="Enter username"
            className="border border-gray-600 bg-gray-800 text-white p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Password Field */}
        <div className="flex flex-col w-full">
          <label className="text-white text-sm mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="border border-gray-600 bg-gray-800 text-white p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button className="text-blue-400 text-sm mt-2 hover:underline self-end">
            Forgot password?
          </button>
        </div>

        {/* Login Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
