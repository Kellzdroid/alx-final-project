import { useState } from "react";
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import CartWidget from "./components/CartWidget";
import { LuShoppingBag } from "react-icons/lu";
import { CiMenuBurger } from "react-icons/ci";
import { GrClose } from "react-icons/gr";

function App() {
  const [menu, setMenu] = useState(false);
  const handleChange = () => {
    setMenu(!menu);
  };
  return (
    <>
      <div className="min-h-screen  flex flex-col bg-[#1F2629]">
        <header className="px-18 md:px-32 py-4 flex items-center justify-between shadow-xl">
          <div className="font-night mt-4 text-center leading-2.5 text-3xl text-[#D9D9D9] m-o">
            Anderson's
            <p className="font-manrope text-xl">— shawarma shop —</p>
          </div>
          <nav className="space-x-6 hidden text-lg font-manrope  text-[#D9D9D9] md:flex">
            <a
              href="#"
              className="hover:text-[#D9D9D9] hover:tex[#1F2926] transition-all"
            >
              Home
            </a>
            <a href="#about" className="hover:text-green-400 transition-all">
              About
            </a>
            <a href="#menu" className="hover:text-green-400 transition-all">
              Menu
            </a>
            <a href="#Contact" className="hover:text-green-400 transition-all">
              Contact Us
            </a>
          </nav>

          <div className="flex items-center font-semibold space-x-8">
            <button className="hidden md:flex text-[#D9D9D9] hover:text-green-400 text-3xl">
              <LuShoppingBag />
            </button>
            <button className="hidden md:flex bg-transparent text-lg font-semibold font-manrope text-[#D9D9D9] border border-[#D9D9D9]  hover:bg-[#D9D9D9] hover:text-[#1F2926] transition-all px-16 py-3 rounded">
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
            className={` ${
              menu ? "translate-x-0" : "-translate-x-full"
            } lg:hidden flex flex-col absolute bg-[#D9D9D9] text-[#1F2629] left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
          >
            <nav className="space-x-6 text-lg font-manrope font-semibold text-[#D9D9D9]">
              <a href="#" className="hover:underline transition">
                Home
              </a>
              <a href="#about" className="hover:underline">
                About
              </a>
              <a href="#menu" className="hover:underline">
                Menu
              </a>
              <a href="#Contact" className="hover:underline">
                Contact Us
              </a>
            </nav>

            <div className="font-semibold space-x-8">
              <button className="bg-transparent  hover:text-[#D9D9D9] text-lg font-semibold font-manrope text-[#D9D9D9] border border-[#D9D9D9] hover:bg-[#D9D9D9] px-16 py-3 rounded">
                Log In
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1">
          <Hero />
          <About />
          <Menu />
          <Services />
          <Reviews />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
