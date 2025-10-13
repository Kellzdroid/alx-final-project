import React from "react";

const ReviewCard = (props) => {
  return (
    <div className="h-100 p-10 items-center justify-center bg-[#1f2629]  text-[#d9d9d9] border-lightText md:border-none rounded shadow-xl">
      <div>
        <p className="text-lightText items-center justify-center mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          consectetur error, dolores quae ipsa quos enim corporis magni
          obcaecati tempore natus eos, libero ducimus nulla neque eaque maxime
          nam molestias? dolores quae ipsa quos enim corporis magni obcaecati
          tempore natus eos, libero ducimus nulla neque eaque maxime nam
          molestias?
        </p>
      </div>

      <div className=" flex flex-row left-auto items-center mb-6 mt-6 gap-4">
        <img className="rounded-full w-1/6" src={props.img} alt="img" />
        <h3 className=" font-semibold ">{props.name}</h3>
      </div>
    </div>
  );
};

export default ReviewCard;
