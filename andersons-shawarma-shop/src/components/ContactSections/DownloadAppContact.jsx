import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { LiaApple } from "react-icons/lia";

const DownloadAppContact = () => {
  return (
    <div>
      <section className="container text-[#d9d9d9] mx-auto justify-center px-6 py-32 md:px-8">
        <h2 className="text-3xl font-night mb-10">GET OUR MOBILE APP</h2>
        <p className="text-xm mb-8">
          Click on the link below to download our mobile app to get a convenient
          order placement.
        </p>
        <div className="flex justify-items-start gap-6">
          <button className="border border-[#d9d9d9] text-xl font-night px-16 py-4 rounded hover:bg-[#d9d9d9] hover:text-[#1f2629] transition-all items-center flex gap-4">
            <FaGooglePlay className="size-16" />
            Google Play
          </button>
          <button className="border border-[#d9d9d9] text-xl font-night px-16 py-4 rounded hover:bg-[#d9d9d9] hover:text-[#1f2629] transition-all flex items-center gap-4">
            <LiaApple className="size-16" />
            App Store
          </button>
        </div>
      </section>
    </div>
  );
};

export default DownloadAppContact;
