import React from "react";

const InfoContact = () => {
  return (
    <div>
      <section className="px-6 md:px-32 py-32 grid md:grid-cols-2 gap-32 items-center">
        <div className="text-[#d9d9d9]">
          <h2 className="text-3xl text-[#d9d9d9] font-night mb-15">
            STAY TUNED
          </h2>
          <p className="text-md text-[#d9d9d9] mb-15 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Mi enim eget arcu ut. Vitae
            turpis cras est suscipit. Lorem ipsum dolor sit amet consectetur. Mi
            enim eget arcu ut. Vitae turpis cras est suscipit. Mi enim eget arcu
            ut. Vitae turpis cras est suscipit.
          </p>
          <ul className="text-md space-y-2">
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

        <div className="rounded h-120 overflow-hidden shadow-md">
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
