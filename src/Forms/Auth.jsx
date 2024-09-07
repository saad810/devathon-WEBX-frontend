import React from "react";
import { FaGoogle } from "react-icons/fa";

const Auth = () => {
  const handleGoogleLogin = () => {
    // Add the URL for your Google login endpoint
    window.location.href = `${process.env.REACT_APP_BASE_URL}/auth/google`;
  };
  return (
    <div className="login-container">
      <h3 className="font-bold text-3xl py-1">Welcome</h3>
      <span className="font-medium text-base">
        Continue with Google to login
      </span>
      <div className="mt-8 flex flex-col gap-5">
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center bg-white border border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-100 transition duration-200"
        >
          <FaGoogle className="text-red-500 mr-2" size={20} />
          <span className="text-gray-800 font-bold">Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Auth;
