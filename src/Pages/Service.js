import React from "react";
import OurService from "../components/Home/OurService";
import Testimonial from "../components/Home/TestimonialComponent";
import TitleSection from "../components/TitleSection";

const Service = () => {
  return (
    <div className="md:space-y-20 space-y-10 w-full">
      <TitleSection title={"Serivces"} smallTitle={"services"} />
      <OurService />
      <Testimonial />
    </div>
  );
};

export default Service;
