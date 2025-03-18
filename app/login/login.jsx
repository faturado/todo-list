import React from "react";

const Login = () => {
  return (
    <div className="modal-login flex flex-col items-center justify-center">
      <h2 className="text-white text-xl font-semibold">Login</h2>
      <input type="text" placeholder="Username" className="modal-input mt-2" />
      <input
        type="password"
        placeholder="Password"
        className="modal-input mt-2"
      />
      <button className="modal-button w-full mt-4">Login</button>
    </div>
  );
};

export default Login;
