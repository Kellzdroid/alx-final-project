import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Menu from "../components/Menu";
import Services from "../components/Services";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Menu />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
