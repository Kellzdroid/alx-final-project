import React from "react";
import heroImg from "/public/images/outlet.jpeg";

const HeroAbout = () => {
  return (
    <div>
      <section className="relative h-[760px] flex items-center  justify-center">
        <img
          src={heroImg}
          alt="Shawarma Ambiance"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 " />
        <div className="relative text-left px-6 max-w-2xl">
          <h1 className="text-4xl text-[#d9d9d9] font-night mb-4">
            OUR AMBIANCE
          </h1>
          <p className="text-sm text-[#d9d9d9] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Mi enim eget arcu ut. Vitae
            turpis cras est suscipit. Eros tristique dolor et tellus sodales. Ut
            venenatis quis lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeroAbout;
