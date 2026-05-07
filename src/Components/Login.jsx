
import React, { useState } from "react";

const Login = () => {
  const[signup,setsignup]=useState(true);
  function toggleSignup(){
    setsignup(!signup);
  }

  return (
    <div className=" h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input
          type="text"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
        />


       {!signup&&<input
          type="text"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
        />
       }
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
        />

      {signup && <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Login
        </button>}
        <button className="w-full mt-4 bg-gray-200 text-gray-700 p-2 rounded-md hover:bg-gray-300" onClick={toggleSignup}>Sign Up</button>
      </div>
    </div>
  );
};

export default Login;