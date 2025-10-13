import React from "react";

function Contact() {
  return (
    <section className=" text-[#D9D9D9] py-32 px-24 md:px-32">
      <div className="grid md:grid-cols-3 gap-24 items-start">
        <div className="rounded col-span-2 h-120 overflow-hidden shadow-md">
          <img
            src="/public/images/map.png"
            alt="Map showing New Haven, Enugu"
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-300"
          />
        </div>

        <div className="flex flex-col h-120  space-y-10">
          <h2 className="text-3xl font-night tracking-wide text-[#d9d9d9]">
            GET IN TOUCH
          </h2>

          <div className="space-y-4 text-[#d9d9d9] font-manrope text-base leading-relaxed">
            <p>
              <span className="font-semibold text-[#d9d9d9]">
                WORKING HOURS:
              </span>{" "}
              Monday - Sunday, 10:00 - 21:00
            </p>
            <p>
              <span className="font-semibold">ADDRESS:</span> No. 4 Anywhere
              Street, New Heaven
            </p>
            <p>
              <span className="font-semibold">EMAIL:</span>{" "}
              <a
                href="mailto:anderson.shawarma@shop.com"
                className="hover:text-white underline underline-offset-4"
              >
                anderson.shawarma@shop.com
              </a>
            </p>
            <p>
              <span className="font-semibold">PHONE:</span>{" "}
              <a
                href="tel:+2348118294640"
                className="hover:text-white underline underline-offset-4"
              >
                +2348118294640
              </a>
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg mt-6">
            <img
              src="/public/images/shop-night.png"
              alt="Shawarma stand at night"
              className="w-full h-64 object-cover brightness-90 hover:brightness-100 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
