import React from "react";
import burgerImg from "/images/burger.jpg";
import Chef from "/images/whowearechef.jpeg";

const ChefAbout = () => {
  return (
    <section
      id="about"
      className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-24 py-20 sm:py-28 md:py-32"
    >
      <h2 className="text-center font-night text-[#D9D9D9] text-2xl sm:text-4xl md:text-5xl mb-10">
        MEET OUR CHEF
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center text-[#D9D9D9] font-manrope">
        <div className="space-y-6 text-sm sm:text-base md:text-lg leading-relaxed order-2 md:order-1">
          <p>
            Lorem ipsum dolor sit amet, consectetur. Handcrafted shawarmas, our
            pride and joy, prepared with fresh cuts and sauces passed down
            through generations. We keep the old-school technique alive while
            serving fast — it's how things have always been done.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur. Handcrafted shawarmas, our
            pride and joy, prepared with fresh cuts and sauces passed down
            through generations. We keep the old-school technique alive while
            serving fast — it's how things have always been done.
          </p>
        </div>

        <div className="order-1 md:order-2">
          <img
            src={burgerImg}
            alt="Shawarma"
            className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="order-3">
          <img
            src={Chef}
            alt="Chef at work"
            className="w-full h-72 sm:h-80 md:h-[28rem] object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ChefAbout;
