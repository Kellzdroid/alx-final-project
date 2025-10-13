import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LuShoppingBag } from "react-icons/lu";
import { CiMenuBurger } from "react-icons/ci";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleChange = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);

  return (
    <header className="px-24 md:px-32 py-4 flex items-center justify-between shadow-xl bg-[#1F2629]">
      <div className="font-night mt-4 text-center leading-2.5 text-3xl text-[#D9D9D9]">
        Anderson's
        <p className="font-manrope text-xl">— shawarma shop —</p>
      </div>

      <nav className="space-x-6 hidden text-lg font-manrope text-[#D9D9D9] md:flex">
        <Link
          to="/"
          className="hover:underline underline-offset-4 transition-all"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:underline underline-offset-4 transition-all"
        >
          About
        </Link>
        <Link
          to="/menu"
          className="hover:underline underline-offset-4 transition-all"
        >
          Menu
        </Link>
        <Link
          to="/contact"
          className="hover:underline underline-offset-4 transition-all"
        >
          Contact Us
        </Link>
      </nav>

      <div className="flex items-center font-semibold space-x-8">
        <button className="hidden md:flex text-[#D9D9D9] hover:text-white text-3xl">
          <LuShoppingBag />
        </button>
        <button className="hidden md:flex bg-transparent text-lg font-semibold font-manrope text-[#D9D9D9] border border-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-[#1F2629] transition-all px-16 py-3 rounded">
          Log In
        </button>
      </div>

      <div className="md:hidden flex items-center text-[#D9D9D9]">
        {menu ? (
          <GrClose size={30} onClick={handleChange} />
        ) : (
          <CiMenuBurger size={30} onClick={handleChange} />
        )}
      </div>

      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-[#D9D9D9] text-[#1F2629] left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        <Link to="/" onClick={closeMenu} className="hover:underline">
          Home
        </Link>
        <Link to="/about" onClick={closeMenu} className="hover:underline">
          About
        </Link>
        <Link to="/menu" onClick={closeMenu} className="hover:underline">
          Menu
        </Link>
        <Link to="/contact" onClick={closeMenu} className="hover:underline">
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
