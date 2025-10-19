import React from "react";
import ReviewCard from "../../Layouts/ReviewCard";
import img1 from "/public/images/cynthia.jpg";
import img2 from "/public/images/zubbie.jpg";
import img3 from "/public/images/Light.jpg";

const Reviews = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-[#d9d9d9] font-night text-2xl sm:text-4xl md:text-5xl not-only:text-center mb-12 lg:pt-16 pt-24 pb-10">
        Customer's Review
      </h1>
      <div className="bg-[#d9d9d9] w-ful lg:px-24 container mx-auto px-6 md:px-4 py-16 ">
        <div
          className="font-manrope
           grid md:grid-cols-3 gap-6
            place-items-center"
        >
          <ReviewCard img={img1} name="Cynthia Ekwueme" />
          <ReviewCard img={img2} name="Zubby James" />
          <ReviewCard img={img3} name="Chinasa Onuoha" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
