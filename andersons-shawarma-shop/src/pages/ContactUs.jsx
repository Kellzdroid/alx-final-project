import React from "react";
import HeroContact from "../components/ContactSections/HeroContact";
import InfoContact from "../components/ContactSections/InfoContact";
import DownloadAppContact from "../components/ContactSections/DownloadAppContact";
import FooterContact from "../components/ContactSections/FooterContact";

const ContactUs = () => {
  return (
    <div>
      <HeroContact />
      <InfoContact />
      <DownloadAppContact />
      <FooterContact />
    </div>
  );
};

export default ContactUs;
