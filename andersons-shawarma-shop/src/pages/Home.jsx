import React from "react";
import Hero from "../components/HomeSections/Hero";
import Whoweare from "../components/HomeSections/Whoweare";
import Menu from "../components/HomeSections/Menu";
import Services from "../components/HomeSections/Services";
import Reviews from "../components/HomeSections/Reviews";
import Contact from "../components/HomeSections/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Whoweare />
      <Menu />
      <Services />
      <Reviews />
      <Contact />
    </>
  );
};

export default Home;
