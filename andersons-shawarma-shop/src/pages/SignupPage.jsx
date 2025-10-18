import React from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaFacebookF,
  FaApple,
} from "react-icons/fa";

const SignupPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0D0F10] text-[#F5F5DC]">
      <div className="bg-[#1F2629] p-10 rounded-2xl shadow-lg w-[90%] md:w-[450px]">
        <h1 className="text-center text-3xl mb-8 font-serif tracking-widest">
          CREATE FREE ACCOUNT
        </h1>

        <div className="mb-6">
          <label className="flex items-center border-b border-gray-500 pb-2">
            <FaUser className="mr-3 text-gray-400" />
            <input
              type="text"
              placeholder="Name*"
              className="bg-transparent outline-none text-gray-200 w-full"
            />
          </label>
        </div>

        <div className="mb-6">
          <label className="flex items-center border-b border-gray-500 pb-2">
            <FaEnvelope className="mr-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email*"
              className="bg-transparent outline-none text-gray-200 w-full"
            />
          </label>
        </div>

        <div className="mb-2">
          <label className="flex items-center border-b border-gray-500 pb-2">
            <FaLock className="mr-3 text-gray-400" />
            <input
              type="password"
              placeholder="Password*"
              className="bg-transparent outline-none text-gray-200 w-full"
            />
          </label>
        </div>
        <p className="text-xs text-gray-400 mb-6">
          Must contain at least 8 characters, a capital letter and a number
        </p>

        <button className="w-full border border-gray-400 rounded-md py-2 hover:bg-yellow-200 hover:text-black transition">
          Sign Up
        </button>

        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-yellow-200 hover:underline">
            Log in
          </Link>
        </p>

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
      </div>
    </div>
  );
};

export default SignupPage;
