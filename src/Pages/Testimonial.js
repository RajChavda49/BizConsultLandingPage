import React from "react";
import TestimonialComponent from "../components/Home/TestimonialComponent";
import TitleSection from "../components/TitleSection";

const Testimonial = () => {
  return (
    <div className="lg:pb-20 pb-10">
      <TitleSection title="Testimonial" smallTitle="Testimonial" />
      <TestimonialComponent />
    </div>
  );
};

export default Testimonial;
