import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";

const GetStarted = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-easing="ease-in-sine"
      className="grid w-full md:grid-cols-2 place-items-center items-start relative bg-primary text-white py-14 xl:pl-24 md:pl-16 mx-auto"
    >
      {/* content */}
      <div className="text-left space-y-4">
        <p className="text-3xl font-bold">Ready to get started</p>
        <p className="text-base">Diam elitr est dolore at sanctus nonumy.</p>
        <div className="relative lg:w-[28rem] md:w-80 w-full">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="w-full pl-5 rounded-3xl h-10 outline-none text-black"
          />
          <RiSendPlaneFill className="absolute top-2 right-4 h-7 w-7 text-primary cursor-pointer" />
        </div>
      </div>
      {/* img */}
      <div className="absolute top-10 lg:left-[60%] left-[55%] hidden md:block">
        <img
          src={require("../../assets/images/newsletter.png")}
          className="h-64 w-fit object-contain object-center"
        />
      </div>
    </div>
  );
};

export default GetStarted;
