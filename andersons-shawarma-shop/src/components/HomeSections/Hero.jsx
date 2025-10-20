import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <section className="relative">
        <div
          className="h-[500px] sm:h-[600px] md:h-[760px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/images/hero1.jpg)" }}
        >
          <div className="h-full w-full flex items-center bg-black/20">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-start px-6 sm:px-10 md:px-20 lg:px-32">
              <div className="max-w-2xl text-center md:text-left font-night text-[#D9D9D9]">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
                  WHERE EVERY BITE <br className="hidden sm:block" /> FEELS LIKE
                  HOME
                </h1>

                <p className="mt-4 sm:mt-6 font-manrope text-sm sm:text-base md:text-lg leading-relaxed text-[#E5E5E5]">
                  Handcrafted with fresh ingredients and rich flavours{" "}
                  <br className="hidden sm:block" /> — our shawarma brings
                  tradition to your taste buds.
                  <br className="hidden sm:block" /> Come hungry, leave happy.
                </p>

                <div>
                  <button className="mt-6 sm:mt-8 font-semibold text-sm sm:text-base md:text-lg font-manrope text-[#D9D9D9] border border-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-[#1F2926] transition-all px-8 sm:px-12 md:px-16 py-2 sm:py-3 rounded">
                    <Link to="/menu">Place an order</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
