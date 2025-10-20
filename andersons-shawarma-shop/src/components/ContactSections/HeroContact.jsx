import React from "react";
import heroImg from "../../assets/shop-night.png";

const HeroContact = () => {
  return (
    <section className="relative h-[70vh] md:h-[760px] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Shawarma Ambiance"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative text-center text-[#d9d9d9] px-6">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-night mb-4 tracking-wide">
          Get in Touch
        </h1>
        <p className="text-md md:text-lg font-manrope text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Questions, feedback, or special requests? We would love to hear from
          you. Let's make your next meal memorable.
        </p>
      </div>
    </section>
  );
};

export default HeroContact;
