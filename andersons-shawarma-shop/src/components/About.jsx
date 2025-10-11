import React from "react";
import Veg from "/public/images/vegshawarma.jpg";
import Chef from "/public/images/whowearechef.jpeg";
import { CgArrowLongRight } from "react-icons/cg";

function About() {
  return (
    <>
      <section id="about" className="container mx-auto px-6 md:px-6 py-16">
        <h2 className="text-center font-night text-[#D9D9D9] text-3xl mb-8">
          WHO WE ARE
        </h2>
        <div className="grid grid-flow-col md:grid-row-3  gap-10 items-center">
          <div className="text-[#D9D9D9] mt-10 flex-col font-manrope">
            <p className="">
              Lorem ipsum dolor sit amet, consectetur. Handcrafted shawarmas,
              our pride and joy, prepared with fresh cuts and sauces passed down
              through generations. We keep the old-school technique alive while
              serving fast — it's how things have always been done.
              <br />
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur. Handcrafted shawarmas,
              our pride and joy, prepared with fresh cuts and sauces passed down
              through generations. We keep the old-school technique alive while
              serving fast — it's how things have always been done.
            </p>
            <div className="flex flex-row items-center mt-50 hover:underline underline-offset-4 gap-4">
              <CgArrowLongRight />
              <span>Learn more</span>
            </div>
          </div>
          <div className="">
            <img
              src={Veg}
              alt="VegShawarma"
              className="w-full h-60 mt-90 object-cover rounded"
            />
          </div>
          <div>
            <img
              src={Chef}
              alt="ShawarmChef"
              className="w-full h-150 object-cover rounded"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
