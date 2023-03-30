import React from "react";
import Aboutus from "../components/Home/Aboutus";
import Companies from "../components/Home/Companies";
import Features from "../components/Home/Features";
import GetStarted from "../components/Home/GetStarted";
import Heroseciton from "../components/Home/Heroseciton";
import OurService from "../components/Home/OurService";
import OurTeam from "../components/Home/OurTeam";
import Testimonial from "../components/Home/TestimonialComponent";

const Home = () => {
  return (
    <div className="md:space-y-20 space-y-10 w-full">
      <Heroseciton />
      <Aboutus />
      <GetStarted />
      <OurService />
      <Features />
      <Companies />
      <Testimonial />
      <OurTeam />
    </div>
  );
};

export default Home;
