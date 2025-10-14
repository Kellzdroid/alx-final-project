import React from "react";

function Hero() {
  return (
    <>
      <section className="relative">
        <div
          className="h-[760px] bg-cover bg-center"
          style={{ backgroundImage: "url(/public/images/hero1.jpg)" }}
        >
          <div className="h-full w-full flex items-center ">
            <div className="container flex mx-auto md:flex px-18 md:px-32">
              <div className="max-w-1xl m-10 font-night text-[#D9D9D9]">
                <h1 className="text-4xl md:text-6xl">
                  WHERE EVERY BITE <br /> FEELS LIKE HOME
                </h1>
                <p className="mt-6 font-manrope text-[#D9D9D9]">
                  Handcrafted with fresh ingredients and rich flavours <br />—
                  our shawarma brings tradition to your taste buds.
                  <br /> Come hungry, leave happy.
                </p>
                <div>
                  <button className="hidden md:flex mt-8 bg-transparent  text-lg font-medium font-manrope text-[#D9D9D9] border border-[#D9D9D9]  hover:bg-[#D9D9D9] hover:text-[#1F2926]  transition-all px-16 py-3 rounded">
                    Place an order
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
