import React from "react";

const Service = ({ title, text, img }) => (
  <div className="h-100 bg-[#d9d9d9] p-25 rounded text-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
    <div className="h-16 w-32 mx-auto mb-3 rounded flex items-center justify-center">
      <img src={img} alt={title} className="h-25 w-50 object-cover rounded" />
    </div>
    <h4 className="font-semibold mt-12 font-night text-[#1f2629] text-xl">
      {title}
    </h4>
    <p className="font-manrope text- text-[#1f2629] mt-3">{text}</p>
  </div>
);

function Services() {
  return (
    <section className=" mx-auto px-6 md:px-24 py-16 ">
      <h2 className="text-center text-[#d9d9d9] font-night text-2xl sm:text-4xl md:text-5xl mb-20">
        OUR SERVICES
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <Service
          title="EASY TO ORDER"
          text="You only need a few taps to order. Handcrafted with fresh ingredients and rich flavours, our shawarma brings tradition to your taste buds."
          img="/images/MobileOrder.jpg"
        />
        <Service
          title="FASTEST DELIVERY"
          text="One of the quickest delivery of our time. Handcrafted with fresh ingredients and rich flavours, our shawarma brings tradition to your taste buds."
          img="/images/delivery.jpg"
        />
        <Service
          title="BEST QUALITY"
          text="Top quality assured for every dish. Handcrafted with fresh ingredients and rich flavours, our shawarma brings tradition to your taste buds."
          img="/images/eating.jpg"
        />
      </div>
    </section>
  );
}

export default Services;
