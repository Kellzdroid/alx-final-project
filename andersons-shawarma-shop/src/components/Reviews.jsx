import React from "react";
import ReviewCard from "../Layouts/ReviewCard";
import img1 from "/public/images/cynthia.jpg";
import img2 from "/public/images/zubbie.jpg";
import img3 from "/public/images/light.jpg";

const Reviews = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-[#d9d9d9] font-night text-3xl text-center lg:pt-16 pt-24 pb-10">
        Customer's Review
      </h1>
      <div className="bg-[#d9d9d9] p-24">
        <div className="font-manrope px-24 h-100 flex flex-col md:flex-row gap-6 mt-5">
          <ReviewCard img={img1} name="Cynthia Ekwueme" />
          <ReviewCard img={img2} name="Zubby James" />
          <ReviewCard img={img3} name="Chinasa Onuoha" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
