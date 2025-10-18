import React from "react";
import shawarmaImg from "/public/images/shawarmacarousel.jpg";

const Showcase = () => {
  return (
    <div className="w-full">
      <img
        src={shawarmaImg}
        alt="Delicious Shawarma"
        className="w-full object-cover h-[40vh] sm:h-[50vh] md:h-[65vh] lg:h-[80vh] transition-all duration-500"
      />
    </div>
  );
};

export default Showcase;
