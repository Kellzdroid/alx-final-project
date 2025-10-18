import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { LiaApple } from "react-icons/lia";

const DownloadAppMenu = () => {
  return (
    <section className="container mx-auto text-[#d9d9d9] px-4 sm:px-8 md:px-12 lg:px-24 py-20 sm:py-28 md:py-32 text-center md:text-left">
      <h2 className="text-2xl sm:text-4xl md:text-5xl  font-night mb-6 sm:mb-10">
        GET OUR MOBILE APP
      </h2>

      <p className="text-sm sm:text-base md:text-lg mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed">
        Click the links below to download our mobile app and enjoy convenient,
        seamless order placement right from your phone.
      </p>

      <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6">
        <button className="border border-[#d9d9d9] text-base sm:text-lg md:text-xl font-night px-8 sm:px-12 md:px-16 py-3 sm:py-4 rounded-lg hover:bg-[#d9d9d9] hover:text-[#1f2629] transition-all flex items-center justify-center gap-3 sm:gap-4">
          <FaGooglePlay className="text-2xl sm:text-3xl" />
          Google Play
        </button>

        <button className="border border-[#d9d9d9] text-base sm:text-lg md:text-xl font-night px-8 sm:px-12 md:px-16 py-3 sm:py-4 rounded-lg hover:bg-[#d9d9d9] hover:text-[#1f2629] transition-all flex items-center justify-center gap-3 sm:gap-4">
          <LiaApple className="text-2xl sm:text-3xl" />
          App Store
        </button>
      </div>
    </section>
  );
};

export default DownloadAppMenu;
