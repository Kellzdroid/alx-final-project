import React from "react";
import { CgArrowLongUp } from "react-icons/cg";

export default function Footer() {
  return (
    <footer className=" text-[#D9D9D9] px-6 md:px-30 py-12 mt-16 border-t border-[#d9d9d9]">
      <div className="grid md:grid-cols-4 gap-20">
        {/* BRAND */}
        <div>
          <div className="font-night mt-4 text-center leading-2.5 text-3xl text-[#D9D9D9]">
            Anderson's
            <p className="font-manrope text-xl">— shawarma shop —</p>
          </div>
        </div>

        {/* MENU */}
        <div>
          <h4 className="font-semibold font-night text-[#d9d9d9] mb-3">MENU</h4>
          <ul className="space-y-2 font-manrope text-sm">
            <li className="hover:text-white transition-all duration-200 cursor-pointer">
              Menu
            </li>
            <li className="hover:text-white transition-all duration-200 cursor-pointer">
              Place an order
            </li>
            <li className="hover:text-white transition-all duration-200 cursor-pointer">
              Leave feedback
            </li>
            <li className="hover:text-white transition-all duration-200 cursor-pointer">
              About us
            </li>
          </ul>
        </div>

        {/* CONTACTS */}
        <div>
          <h4 className="font-semibold font-night text-[#d9d9d9] mb-3">
            CONTACTS
          </h4>
          <ul className="space-y-2 font-manrope text-sm">
            <li>
              <span className="font-medium">PHONE:</span> +2348118294640
            </li>
            <li>
              <span className="font-medium">EMAIL:</span>{" "}
              anderson.shawarma@shop.com
            </li>
            <li>
              <span className="font-medium">ADDRESS:</span> No. 4 Anywhere
              Street, New Haven
            </li>
          </ul>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="">
          <h4 className="font-semibold font-night text-[#d9d9d9] mb-3">
            SOCIAL MEDIA
          </h4>
          <ul className="space-y-2 font-manrope text-sm">
            <li className="hover:text-white cursor-pointer transition-all duration-200">
              Instagram
            </li>
            <li className="hover:text-white cursor-pointer transition-all duration-200">
              Tiktok
            </li>
            <li className="hover:text-white cursor-pointer transition-all duration-200">
              Telegram
            </li>
          </ul>

          {/* SCROLL TO TOP ARROW */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute right-0 top-0 cursor-pointer hover:translate-y-[-4px] transition-all"
          >
            <CgArrowLongUp className="text-[#d9d9d9]" />
          </div>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="mt-12 border-t border-[#d9d9d9] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <input
            type="email"
            placeholder="Your email"
            className="border-b border- border-[#d9d9d9] text-sm focus:outline-none focus:border-white px-12 py-1 text-[#d9d9d9] "
          />
          <button className="text-sm font-night hover:text-white transition-all">
            Stay tuned →
          </button>
        </div>
        <p className="text-sm text-[#d9d9d9] font-manrope text-center sm:text-right">
          Stay tuned to our latest addition to the menu and expansion updates
        </p>
      </div>

      {/* BOTTOM TEXT */}
      <div className="mt-10 text-sm text-[#d9d9d9] font-manrope border-t border-[#d9d9d9] pt-4 flex flex-col md:flex-row justify-between items-center gap-2  px-6 md:px-20 py-12">
        <p>© 2025 created by Caleb Anderson. All rights reserved.</p>
        <p>ALX Nigeria Project</p>
        <p>Pictures were taken from Freepik.com for educational purpose</p>
      </div>
    </footer>
  );
}
