import React from "react";
import heroImg from "../../assets/outlet.jpeg";

const HeroAbout = () => {
  return (
    <section className="relative flex items-center justify-center h-[60vh] sm:h-[70vh] md:h-[760px] overflow-hidden">
      <img
        src={heroImg}
        alt="Shawarma Ambiance"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative text-center px-4 sm:px-8 md:px-16 lg:px-32 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-night text-[#d9d9d9] mb-4 sm:mb-6">
          OUR AMBIANCE
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-[#d9d9d9] leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Mi enim eget arcu ut. Vitae
          turpis cras est suscipit. Eros tristique dolor et tellus sodales. Ut
          venenatis quis lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
    </section>
  );
};

export default HeroAbout;
