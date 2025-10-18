import React from "react";
import HeroAbout from "../components/AboutSections/HeroAbout";
import PurposeAbout from "../components/AboutSections/PurposeAbout";
import Showcase from "../components/AboutSections/Showcase";
import ChefAbout from "../components/AboutSections/ChefAbout";
import DownloadApp from "../components/AboutSections/DownloadApp";

const About = () => {
  return (
    <>
      <HeroAbout />
      <PurposeAbout />
      <Showcase />
      <ChefAbout />
      <DownloadApp />
    </>
  );
};

export default About;
