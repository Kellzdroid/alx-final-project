import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PiShoppingBagThin } from "react-icons/pi";
import { CiMenuBurger } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import { useCart } from "../../context/CartContext";
import LoginModal from "../Authentication/LoginModal";
import CheckoutPipeline from "../Checkout/CheckoutPipeline";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleToggle = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);

  const { totalItems } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const location = useLocation();

  return (
    <header className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-4 flex items-center justify-between shadow-xl bg-[#1F2629] relative z-50">
      <div className="font-night mt-2 sm:mt-4 text-center leading-2.5 text-2xl sm:text-3xl text-[#D9D9D9]">
        Anderson's
        <p className="font-manrope text-sm sm:text-lg">— shawarma shop —</p>
      </div>

      <nav className="hidden md:flex space-x-4 lg:space-x-6 text-base lg:text-lg font-manrope text-[#D9D9D9]">
        <Link
          to="/"
          className={`hover:underline font-medium underline-offset-4 transition-all ${
            location.pathname === "/" ? "text-white underline" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`hover:underline font-medium underline-offset-4 transition-all ${
            location.pathname === "/about" ? "text-white underline" : ""
          }`}
        >
          About
        </Link>
        <Link
          to="/menu"
          className={`hover:underline font-medium underline-offset-4 transition-all ${
            location.pathname === "/menu" ? "text-white underline" : ""
          }`}
        >
          Menu
        </Link>
        <Link
          to="/contact"
          className={`hover:underline font-medium underline-offset-4 transition-all ${
            location.pathname === "/contact" ? "text-white underline" : ""
          }`}
        >
          Contact Us
        </Link>
      </nav>

      <div className="hidden md:flex items-center font-semibold space-x-4 lg:space-x-8">
        <button
          onClick={() => setShowCheckout(true)}
          className="text-[#D9D9D9] hover:text-white relative"
        >
          <PiShoppingBagThin size={35} className="lg:size-[45px]" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] lg:text-xs font-bold rounded-full w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>

        <button
          onClick={() => setShowLogin(true)}
          className="border border-[#D9D9D9] text-[#D9D9D9] font-semibold font-manrope px-12 lg:px-16 py-2 lg:py-3 rounded hover:bg-[#D9D9D9] hover:text-[#1F2629] transition-all"
        >
          Log In
        </button>
      </div>

      <div className="md:hidden flex items-center text-[#D9D9D9] z-[60]">
        {menu ? (
          <GrClose
            size={28}
            onClick={handleToggle}
            className="cursor-pointer"
          />
        ) : (
          <CiMenuBurger
            size={28}
            onClick={handleToggle}
            className="cursor-pointer"
          />
        )}
      </div>

      <div
        className={`fixed top-20 right-0 h-full w-[80%] sm:w-[60%] bg-[#D9D9D9] text-[#1F2629] shadow-2xl flex flex-col items-center justify-center gap-8 font-semibold text-xl transition-all duration-300 ease-in-out z-50 ${
          menu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <Link
          to="/"
          onClick={closeMenu}
          className={`hover:underline ${
            location.pathname === "/"
              ? "underline text-[#1F2629] font-bold"
              : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={closeMenu}
          className={`hover:underline ${
            location.pathname === "/about"
              ? "underline text-[#1F2629] font-bold"
              : ""
          }`}
        >
          About
        </Link>
        <Link
          to="/menu"
          onClick={closeMenu}
          className={`hover:underline ${
            location.pathname === "/menu"
              ? "underline text-[#1F2629] font-bold"
              : ""
          }`}
        >
          Menu
        </Link>
        <Link
          to="/contact"
          onClick={closeMenu}
          className={`hover:underline ${
            location.pathname === "/contact"
              ? "underline text-[#1F2629] font-bold"
              : ""
          }`}
        >
          Contact
        </Link>

        <div className="flex flex-col items-center gap-4">
          <button
            onClick={() => {
              setShowCheckout(true);
              closeMenu();
            }}
            className="flex items-center justify-center gap-2 bg-[#1F2629] text-[#D9D9D9] px-6 py-2 rounded-md hover:bg-[#2c3336] transition"
          >
            <PiShoppingBagThin size={22} />
            Cart ({totalItems})
          </button>

          <button
            onClick={() => {
              setShowLogin(true);
              closeMenu();
            }}
            className="border border-[#1F2629] text-[#1F2629] px-8 py-2 rounded hover:bg-[#1F2629] hover:text-[#D9D9D9] transition-all font-manrope"
          >
            Log In
          </button>
        </div>
      </div>

      {menu && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-[#1f2629] z-40 md:hidden transition-opacity duration-300"
        ></div>
      )}

      {showCheckout && (
        <div
          onClick={() => setShowCheckout(false)}
          className="fixed inset-0 bg-[#1f2629] flex justify-center items-center z-[70]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[95%] md:w-[700px] max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl"
          >
            <CheckoutPipeline onClose={() => setShowCheckout(false)} />
          </div>
        </div>
      )}

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </header>
  );
};

export default Navbar;
