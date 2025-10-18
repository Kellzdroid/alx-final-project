import React from "react";
import { NavLink } from "react-router-dom";

const PurposeAbout = () => {
  return (
    <section
      id="about"
      className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-24 py-20 sm:py-28 md:py-36 text-center"
    >
      <h2 className="font-night text-[#D9D9D9] text-2xl sm:text-4xl md:text-5xl mb-6 sm:mb-12">
        OUR PURPOSE
      </h2>
      <p className="max-w-4xl md:max-w-5xl text-[#d9d9d9] font-manrope mx-auto leading-relaxed text-sm sm:text-base md:text-lg tracking-wide px-2 sm:px-4">
        At{" "}
        <span className="font-semibold font-night">
          ANDERSON'S SHAWARMA SHOP
        </span>
        , our purpose is to serve more than just food — we deliver joy, culture,
        and connection in every bite. We're passionate about crafting fresh,
        flavorful shawarma that blends authentic tradition with a creative
        twist. Our mission is to create a welcoming space where friends gather,
        families bond, and food lovers discover their next favorite meal. We're
        committed to quality, affordability, and unforgettable taste without
        compromise.
      </p>
    </section>
  );
};

export default PurposeAbout;
