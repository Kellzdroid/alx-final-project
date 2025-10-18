import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock, FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#1F2629]50 text-[#d9d9d9]">
      <div className="bg-[#1F2629] p-10 rounded-2xl shadow-lg w-[90%] md:w-[450px]">
        <h1 className="text-center text-3xl mb-8 font-serif tracking-widest">
          WELCOME BACK!
        </h1>

        <div className="mb-6">
          <label className="flex items-center border-b border-gray-500 pb-2">
            <FaUser className="mr-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent outline-none text-gray-200 w-full"
            />
          </label>
        </div>

        <div className="mb-6">
          <label className="flex items-center border-b border-gray-500 pb-2">
            <FaLock className="mr-3 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent outline-none text-gray-200 w-full"
            />
          </label>
        </div>

        <div className="flex justify-between items-center mb-6 text-sm">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-yellow-200" />
            <span>Remember</span>
          </label>
          <a href="#" className="text-yellow-200 hover:underline">
            Forgot password?
          </a>
        </div>

        <button className="w-full border border-gray-400 rounded-md py-2 hover:bg-yellow-200 hover:text-black transition">
          Log in
        </button>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-600" />
          <span className="mx-3 text-gray-400 text-sm">Or</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        <div className="flex justify-between space-x-4">
          <button className="flex-1 border border-gray-400 py-3 rounded-md hover:bg-gray-800 transition">
            <FaGoogle className="mx-auto text-2xl" />
          </button>
          <button className="flex-1 border border-gray-400 py-3 rounded-md hover:bg-gray-800 transition">
            <FaFacebookF className="mx-auto text-2xl" />
          </button>
          <button className="flex-1 border border-gray-400 py-3 rounded-md hover:bg-gray-800 transition">
            <FaApple className="mx-auto text-2xl" />
          </button>
        </div>

        <p className="text-center text-sm mt-8">
          Don't have an account?{" "}
          <Link to="/signup" className="text-yellow-200 hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
