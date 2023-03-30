import React from "react";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

const OurTeam = () => {
  return (
    <div className="xl:px-24 lg:px-16 md:px-8 px-3 py-10 space-y-5">
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        className="border border-primary  mx-auto text-center text-primary w-32 h-8 leading-[32px] rounded-3xl "
      >
        Our Team
      </p>
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        className="text-3xl font-bold text-center"
      >
        Meet Our Team Members
      </p>
      <div className="w-full grid xl:grid-cols-4 md:grid-cols-2 place-items-center items-start gap-6">
        <div
          className="relative w-full group"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-in"
        >
          <div className="rounded-lg group-hover:bg-primary group-hover:duration-300 group-hover:transform group-hover:ease-in-out shadow-md text-center text-textColor group-hover:text-white w-full md:h-44 h-40 z-10">
            <p className="font-bold text-xl pt-5">Full Name</p>
            <p className="text-base">Designation</p>
          </div>
          <img
            src={require("../../assets/images/team-1.jpg")}
            className="rounded-full z-20 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-60 h-60 object-contain object-center border border-primary p-5"
          />
          <div className="rounded-lg group-hover:bg-primary group-hover:duration-300 group-hover:transform group-hover:ease-in-out shadow-md text-center text-textColor group-hover:text-white w-full md:h-44 h-40 z-10 mt-20 flex items-center justify-center gap-x-5">
            <p className="relative w-10 h-10 p-1 group-hover:bg-white text-primary rounded-full mt-10">
              <FaFacebookF
                role="button"
                className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full"
              />
            </p>
            <p className="relative w-10 h-10 p-2 group-hover:bg-white text-primary rounded-full mt-10">
              <FaLinkedinIn
                role="button"
                className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6"
              />
            </p>
            <p className="relative w-10 h-10 p-2 group-hover:bg-white text-primary rounded-full mt-10">
              <FaTwitter
                role="button"
                className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6"
              />
            </p>
          </div>
        </div>
        <div
          className="relative w-full group"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-in"
        >
          <div className="rounded-lg group-hover:bg-primary group-hover:duration-300 group-hover:transform group-hover:ease-in-out shadow-md text-center text-textColor group-hover:text-white w-full md:h-44 h-40 z-10">
            <p className="font-bold text-xl pt-5">Full Name</p>
            <p className="text-base">Designation</p>
          </div>
          <img
            src={require("../../assets/images/team-2.jpg")}
            className="rounded-full z-20 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-60 h-60 object-contain object-center border border-primary p-5"
          />
          <div className="rounded-lg group-hover:bg-primary group-hover:duration-300 group-hover:transform group-hover:ease-in-out shadow-md text-center text-textColor group-hover:text-white w-full md:h-44 h-40 z-10 mt-20 flex items-center justify-center gap-x-5">
            <p className="relative w-10 h-10 p-1 group-hover:bg-white text-primary rounded-full mt-10">
              <FaFacebookF
                role="button"
                className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full"
              />
            </p>
            <p className="relative w-10 h-10 p-2 group-hover:bg-white text-primary rounded-full mt-10">
              <FaLinkedinIn
                role="button"
                className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6"
              />
            </p>
            <p className="relative w-10 h-10 p-2 group-hover:bg-white text-primary rounded-full mt-10">
              <FaTwitter
                role="button"
                className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6"
              />
            </p>
          </div>
        </div>
        <div
          className="relative w-full group"
          data-aos="fade-up"
          data-aos-duration="1100"
          data-aos-easing="ease-in"
        >
          <div className="rounded-lg group-hover:bg-primary group-hover:duration-300 group-hover:transform group-hover:ease-in-out shadow-md text-center text-textColor group-hover:text-white w-full md:h-44 h-40 z-10">
            <p className="font-bold text-xl pt-5">Full Name</p>
            <p className="text-base">Designation</p>
          </div>
          <img
            src={require("../../assets/images/team-3.jpg")}
            className="rounded-full z-20 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-60 h-60 object-contain object-center border border-primary p-5"
          />
          <div className="rounded-lg group-hover:bg-primary group-hover:duration-300 group-hover:transform group-hover:ease-in-out shadow-md text-center text-textColor group-hover:text-white w-full md:h-44 h-40 z-10 mt-20 flex items-center justify-center gap-x-5">
            <p className="relative w-10 h-10 p-1 group-hover:bg-white text-primary rounded-full mt-10">
              <FaFacebookF
                role="button"
                className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full"
              />
            </p>
            <p className="relative w-10 h-10 p-2 group-hover:bg-white text-primary rounded-full mt-10">
              <FaLinkedinIn
                role="button"
                className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6"
              />
            </p>
            <p className="relative w-10 h-10 p-2 group-hover:bg-white text-primary rounded-full mt-10">
              <FaTwitter
                role="button"
                className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6"
              />
            </p>
          </div>
        </div>
        <div
          className="relative w-full group"
          data-aos="fade-up"
          data-aos-duration="1400"
          data-aos-easing="ease-in"
        >
          <div className="rounded-lg group-hover:bg-primary group-hover:duration-300 group-hover:transform group-hover:ease-in-out shadow-md text-center text-textColor group-hover:text-white w-full md:h-44 h-40 z-10">
            <p className="font-bold text-xl pt-5">Full Name</p>
            <p className="text-base">Designation</p>
          </div>
          <img
            src={require("../../assets/images/team-4.jpg")}
            className="rounded-full z-20 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-60 h-60 object-contain object-center border border-primary p-5"
          />
          <div className="rounded-lg group-hover:bg-primary group-hover:duration-300 group-hover:transform group-hover:ease-in-out shadow-md text-center text-textColor group-hover:text-white w-full md:h-44 h-40 z-10 mt-20 flex items-center justify-center gap-x-5">
            <p className="relative w-10 h-10 p-1 group-hover:bg-white text-primary rounded-full mt-10">
              <FaFacebookF
                role="button"
                className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full"
              />
            </p>
            <p className="relative w-10 h-10 p-2 group-hover:bg-white text-primary rounded-full mt-10">
              <FaLinkedinIn
                role="button"
                className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6"
              />
            </p>
            <p className="relative w-10 h-10 p-2 group-hover:bg-white text-primary rounded-full mt-10">
              <FaTwitter
                role="button"
                className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
