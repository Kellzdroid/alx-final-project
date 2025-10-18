import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";

const LoginModal = ({ onClose }) => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="fixed inset-0 bg-[#1f2629] flex justify-center items-center z-50">
      <div className="bg-[#1F2629] text-[#d9d9d9] p-10 rounded-xl shadow-2xl w-[90%] font-manrope  md:w-[750px] relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-[#d9d9d9] hover:text-white text-xl"
        >
          ✕
        </button>

        <h1 className="text-center text-3xl mb-8 font-night tracking-wider">
          {isSignup ? "Create Account" : "Welcome Back!"}
        </h1>

        <form className="space-y-6">
          {isSignup && (
            <div>
              <label className="flex items-center border-b text-[#d9d9d9] pb-5">
                <FaUser className="mr-3 text-[#d9d9d9]" />
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-transparent outline-none text-[#d9d9d9] w-full"
                />
              </label>
            </div>
          )}

          <div>
            <label className="flex items-center border-b text-[#d9d9d9] pt-3 pb-5">
              <FaEnvelope className="mr-3 text-[#d9d9d9]" />
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent outline-none text-[#d9d9d9] w-full"
              />
            </label>
          </div>

          <div>
            <label className="flex items-center border-b text-[#d9d9d9] pt-3 pb-5">
              <FaLock className="mr-3 text-[#d9d9d9]" />
              <input
                type="password"
                placeholder="Password"
                className="bg-transparent outline-none text-[#d9d9d9] w-full"
              />
            </label>
          </div>

          {isSignup && (
            <p className="text-md  text-[#d9d9d9]">
              Must contain at least 8 characters, one capital letter, and one
              number
            </p>
          )}

          <button className="w-full font-semibold text-xl mt-3 border border-[#d9d9d9] rounded-md py-2 hover:bg-[#d9d9d9] hover:text-[#1f2629] transition">
            {isSignup ? "Sign Up" : "Log In"}
          </button>
        </form>

        <p className="text-center text-md mt-6">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setIsSignup(false)}
                className="text-yellow-200 hover:underline cursor-pointer"
              >
                Log in
              </span>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <span
                onClick={() => setIsSignup(true)}
                className="text-yellow-200 hover:underline underline-offset-4 cursor-pointer"
              >
                Sign up
              </span>
            </>
          )}
        </p>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-[#d9d9d9]" />
          <span className="mx-3 text-[#d9d9d9] text-md">Or</span>
          <hr className="flex-grow border-[#d9d9d9]" />
        </div>

        <div className="flex justify-between space-x-4">
          {[FaGoogle, FaFacebookF, FaApple].map((Icon, i) => (
            <button
              key={i}
              className="flex-1 border border-[#d9d9d9] py-3 rounded-md hover:bg-[#d9d9d9] hover:text-[#1f2629] transition"
            >
              <Icon className="mx-auto text-2xl" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
