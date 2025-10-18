import React from "react";

const InfoContact = () => {
  return (
    <div>
      <section className="px-6 sm:px-10 md:px-20 lg:px-32 py-16 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
        <div className="text-[#d9d9d9] space-y-6">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-night mb-4">
            STAY TUNED
          </h2>
          <p className="text-sm sm:text-base md:text-md text-[#d9d9d9] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Mi enim eget arcu ut. Vitae
            turpis cras est suscipit. Lorem ipsum dolor sit amet consectetur. Mi
            enim eget arcu ut. Vitae turpis cras est suscipit. Mi enim eget arcu
            ut. Vitae turpis cras est suscipit.
          </p>
          <ul className="text-sm sm:text-base space-y-3 font-manrope">
            <li>
              <span className="font-semibold">WORKING HOURS:</span> Monday -
              Sunday, 10:00 - 21:00
            </li>
            <li>
              <span className="font-semibold">ADDRESS:</span> No. 4 Anywhere
              Street, New Haven
            </li>
            <li>
              <span className="font-semibold">EMAIL:</span> kellzdroid@gmail.com
            </li>
            <li>
              <span className="font-semibold">PHONE:</span> +2348118924640
            </li>
          </ul>
        </div>

        <div className="rounded-xl h-72 sm:h-96 md:h-[30rem] overflow-hidden shadow-md">
          <img
            src="/public/images/map.png"
            alt="Map showing New Haven, Enugu"
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-300"
          />
        </div>
      </section>
    </div>
  );
};

export default InfoContact;
