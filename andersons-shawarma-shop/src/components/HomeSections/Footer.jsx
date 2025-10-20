import React from "react";
import { RiCopyrightFill } from "react-icons/ri";
import { CgArrowLongRight } from "react-icons/cg";

const Footer = () => {
  return (
    <footer className="bg-[#1F2629] border-t border-[#d9d9d9] pt-16 text-[#d9d9d9] font-manrope mt-auto">
      <div className="max-w-8xl mx-auto px-6 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="font-night text-left leading-2.5 text-2xl sm:text-3xl text-[#D9D9D9]">
            Anderson's
            <p className="font-manrope text-sm sm:text-lg">— shawarma shop —</p>
          </div>

          <div>
            <h3 className="uppercase text-sm font-semibold mb-4">Menu</h3>
            <ul className="space-y-3 text-sm">
              <li>Menu</li>
              <li>Place an order</li>
              <li>Leave feedback</li>
              <li>About us</li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase text-sm font-semibold mb-4">Contacts</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="font-semibold">PHONE:</span> +2348118294640
              </li>
              <li>
                <span className="font-semibold">EMAIL:</span>{" "}
                andersonsshawarma@shop.com
              </li>
              <li>
                <span className="font-semibold">ADDRESS:</span> No. 4 Anywhere
                Street, New Heaven
              </li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase text-sm font-semibold mb-4">
              Social Media
            </h3>
            <ul className="space-y-3 text-sm">
              <li>Instagram</li>
              <li>Tiktok</li>
              <li>Telegram</li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="pt-4">
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-2xl font-night mb-4">Newsletter</h3>
            <div className="flex items-center border-b border-[#d9d9d9] w-full md:w-1/2">
              <input
                type="email"
                placeholder="Enter your email"
                className="outline-none w-full text-md text-[#d9d9d9] py-2 placeholder-[#d9d9d9]/50 bg-transparent"
              />
              <CgArrowLongRight className="text-[#d9d9d9] text-lg" />
            </div>
            <p className="text-xs md:text-sm">
              Stay tuned to our latest addition to the menu and expansion
              updates
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-[#d9d9d9] mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-center md:text-left">
          <div className="flex items-center justify-center gap-2 mb-3 md:mb-0">
            <RiCopyrightFill />
            <span>2025 created by Caleb Anderson. All rights reserved.</span>
          </div>
          <span>ALX Nigeria Project</span>
          <span>
            Pictures were taken from Freepik.com for educational purpose
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
