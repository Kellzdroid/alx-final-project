import React from "react";
import ReviewCard from "../../Layouts/ReviewCard";

const Reviews = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-[#d9d9d9] font-night text-2xl sm:text-4xl md:text-5xl text-center mb-12 lg:pt-16 pt-24 pb-10">
        Customer's Review
      </h1>

      <div className="bg-[#d9d9d9] w-full lg:px-24 container mx-auto px-6 md:px-4 py-16">
        <div className="font-manrope grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          <ReviewCard img="/images/cynthia.jpg" name="Cynthia Ekwueme" />
          <ReviewCard img="/images/zubbie.jpg" name="Zubby James" />
          <ReviewCard img="/images/light.jpg" name="Chinasa Onuoha" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
