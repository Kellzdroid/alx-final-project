import React from "react";
import Veg from "/images/vegshawarma.jpg";
import Chef from "/images/whowearechef.jpeg";
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";

function Whoweare() {
  return (
    <>
      <section
        id="about"
        className="container mx-auto px-4 sm:px-6 md:px-24 lg:px-16 py-16 sm:py-24 md:py-32"
      >
        <h2 className="text-center font-night text-[#D9D9D9] text-2xl sm:text-4xl md:text-5xl mb-12 sm:mb-12 tracking-wide">
          WHO WE ARE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 items-center">
          <div className="text-[#D9D9D9] font-manrope space-y-6 order-2 md:order-1">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur. Handcrafted shawarmas,
              our pride and joy, prepared with fresh cuts and sauces passed down
              through generations. We keep the old-school technique alive while
              serving fast — it's how things have always been done.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur. Handcrafted shawarmas,
              our pride and joy, prepared with fresh cuts and sauces passed down
              through generations. We keep the old-school technique alive while
              serving fast — it's how things have always been done.
            </p>

            <div className="flex items-center gap-3 sm:gap-4 mt-6 font-semibold text-sm sm:text-base hover:underline underline-offset-4 cursor-pointer">
              <CgArrowLongRight size={22} />
              <Link to="/about">
                <span>Learn more</span>
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <img
              src={Veg}
              alt="VegShawarma"
              className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover rounded-md shadow-md"
            />
          </div>

          <div className="order-3">
            <img
              src={Chef}
              alt="ShawarmaChef"
              className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[450px] object-cover rounded-md shadow-md"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Whoweare;
