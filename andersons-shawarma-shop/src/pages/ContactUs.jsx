import React from "react";
import HeroContact from "../components/ContactSections/HeroContact";
import InfoContact from "../components/ContactSections/InfoContact";
import DownloadAppContact from "../components/ContactSections/DownloadAppContact";

const ContactUs = () => {
  return (
    <div>
      <HeroContact />
      <InfoContact />
      <DownloadAppContact />
    </div>
  );
};

export default ContactUs;
