import React from "react";
import shawarmaImg from "/public/images/shawarmacarousel.jpg";

const Showcase = () => {
  return (
    <div>
      <div className="w-full">
        <img
          src={shawarmaImg}
          alt="Delicious Shawarma"
          className="w-full object-cover h-[60vh]"
        />
      </div>
    </div>
  );
};

export default Showcase;
