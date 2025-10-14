import React from "react";
import heroImg from "/public/images/herocontact.png";

const HeroContact = () => {
  return (
    <div>
      <section className="relative h-[760px] flex items-center  justify-center">
        <img
          src={heroImg}
          alt="Shawarma Ambiance"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>
    </div>
  );
};

export default HeroContact;
