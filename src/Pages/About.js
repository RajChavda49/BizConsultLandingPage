import React from "react";
import Aboutus from "../components/Home/Aboutus";
import Features from "../components/Home/Features";
import OurTeam from "../components/Home/OurTeam";
import TitleSection from "../components/TitleSection";

const About = () => {
  return (
    <div className="md:space-y-20 space-y-10 w-full">
      <TitleSection title={"About Us"} smallTitle={"About"} />
      <Aboutus />
      <Features />
      <OurTeam />
    </div>
  );
};

export default About;
