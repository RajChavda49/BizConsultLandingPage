import React from "react";
import OurTeam from "../components/Home/OurTeam";
import TitleSection from "../components/TitleSection";

const Team = () => {
  return (
    <div className="md:space-y-20 space-y-10 w-full lg:pb-20 pb-10">
      <TitleSection title="Our Team" smallTitle="Our Team" />
      <OurTeam />
    </div>
  );
};

export default Team;
