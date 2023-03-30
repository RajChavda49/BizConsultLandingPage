import React from "react";
import Features from "../components/Home/Features";
import TitleSection from "../components/TitleSection";

const Feature = () => {
  return (
    <div className="md:space-y-20 space-y-10 w-full lg:pb-40 pb-20">
      <TitleSection title={"Features"} smallTitle="Features" />
      <Features />
    </div>
  );
};

export default Feature;
