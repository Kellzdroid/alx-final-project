import React from "react";

const ReviewCard = (props) => {
  return (
    <div className=" w-16 md:w-1/3 bg-[#1f2629]  text-[#d9d9d9] border-lightText md:border-none p-10 rounded shadow-xl">
      <div>
        <p className=" text-lightText justify-center mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          consectetur error, dolores quae ipsa quos enim corporis magni
          obcaecati tempore natus eos, libero ducimus nulla neque eaque maxime
          nam molestias? dolores quae ipsa quos enim corporis magni obcaecati
          tempore natus eos, libero ducimus nulla neque eaque maxime nam
          molestias?
        </p>
      </div>

      <div className=" flex flex-row left-auto items-center mt-8 gap-4">
        <img className="rounded-full w-1/6" src={props.img} alt="img" />
        <h3 className=" font-semibold ">{props.name}</h3>
      </div>
    </div>
  );
};

export default ReviewCard;
