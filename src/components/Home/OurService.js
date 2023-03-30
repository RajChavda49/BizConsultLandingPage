import React from "react";
import {
  FaUserTie,
  FaChartPie,
  FaChartLine,
  FaChartArea,
  FaHome,
  FaBalanceScale,
} from "react-icons/fa";
import { FiLink } from "react-icons/fi";

const OurService = () => {
  return (
    <div className="space-y-5 xl:px-24 lg:px-16 md:px-8 px-3 overflow-hidden pb-5">
      <p
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="ease-in"
        className="w-28 py-1 mx-auto text-center border rounded-3xl border-primary text-primary"
      >
        Our Services
      </p>
      <p
        data-aos="zoom-out-up"
        data-aos-duration="500"
        data-aos-easing="ease-in"
        className="text-3xl text-textColor font-bold text-center mx-auto leading-10 tracking-wide"
      >
        We Provide Solutions On Your{" "}
        <br
          className="hidden md:block
        "
        />{" "}
        Business
      </p>

      {/* content boxes */}
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 place-items-center items-start xl:gap-8 md:gap-5 gap-y-8">
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-in"
          className="text-textColor w-full text-left xl:pt-28 pt-20 lg:px-10 px-5 md:pb-8 pb-5 space-y-4 relative group shadow-2xl rounded-md transition duration-300 ease-in-out hover:border border-primary"
        >
          <p className="font-bold capitalize whitespace-nowrap tracking-wide text-2xl">
            Business Research
          </p>
          <p className="leading-5 tracking-wide">
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed
            diam stet diam sed stet lorem.
          </p>

          <FaUserTie
            color="white"
            className="bg-primary h-16 w-16 p-3 rounded-tl-md rounded-br-md text-center absolute -top-4 left-0"
          />

          <FiLink
            color="white"
            className="cursor-pointer absolute -top-4 right-0 p-3 bg-primary h-16 w-16 rounded-tr-md rounded-bl-md hidden group-hover:block"
          ></FiLink>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-in"
          className="text-textColor w-full text-left xl:pt-28 pt-20 lg:px-10 px-5 md:pb-8 pb-5 space-y-4 relative group shadow-2xl rounded-md transition duration-300 ease-in-out hover:border border-primary"
        >
          <p className="font-bold capitalize whitespace-nowrap tracking-wide text-2xl">
            Stretagic Planning
          </p>
          <p className="leading-5 tracking-wide">
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed
            diam stet diam sed stet lorem.
          </p>

          <FaChartPie
            color="white"
            className="bg-primary h-16 w-16 p-3 rounded-tl-md rounded-br-md text-center absolute -top-4 left-0"
          />

          <FiLink
            color="white"
            className="cursor-pointer absolute -top-4 right-0 p-3 bg-primary h-16 w-16 rounded-tr-md rounded-bl-md hidden group-hover:block"
          ></FiLink>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-in"
          className="text-textColor w-full text-left xl:pt-28 pt-20 lg:px-10 px-5 md:pb-8 pb-5 space-y-4 relative group shadow-2xl rounded-md transition duration-300 ease-in-out hover:border border-primary"
        >
          <p className="font-bold capitalize whitespace-nowrap tracking-wide text-2xl">
            Market Analysis
          </p>
          <p className="leading-5 tracking-wide">
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed
            diam stet diam sed stet lorem.
          </p>

          <FaChartLine
            color="white"
            className="bg-primary h-16 w-16 p-3 rounded-tl-md rounded-br-md text-center absolute -top-4 left-0"
          />

          <FiLink
            color="white"
            className="absolute cursor-pointer -top-4 right-0 p-3 bg-primary h-16 w-16 rounded-tr-md rounded-bl-md hidden group-hover:block"
          ></FiLink>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-in"
          className="text-textColor w-full text-left xl:pt-28 pt-20 lg:px-10 px-5 md:pb-8 pb-5 space-y-4 relative group shadow-2xl rounded-md transition duration-300 ease-in-out hover:border border-primary"
        >
          <p className="font-bold capitalize whitespace-nowrap tracking-wide text-2xl">
            Financial Analaysis
          </p>
          <p className="leading-5 tracking-wide">
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed
            diam stet diam sed stet lorem.
          </p>

          <FaChartArea
            color="white"
            className="bg-primary h-16 w-16 p-3 rounded-tl-md rounded-br-md text-center absolute -top-4 left-0"
          />

          <FiLink
            color="white"
            className="cursor-pointer absolute -top-4 right-0 p-3 bg-primary h-16 w-16 rounded-tr-md rounded-bl-md hidden group-hover:block"
          ></FiLink>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-in"
          className="text-textColor w-full text-left xl:pt-28 pt-20 lg:px-10 px-5 md:pb-8 pb-5 space-y-4 relative group shadow-2xl rounded-md transition duration-300 ease-in-out hover:border border-primary"
        >
          <p className="font-bold capitalize whitespace-nowrap tracking-wide text-2xl">
            legal Advisory
          </p>
          <p className="leading-5 tracking-wide">
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed
            diam stet diam sed stet lorem.
          </p>

          <FaBalanceScale
            color="white"
            className="bg-primary h-16 w-16 p-3 rounded-tl-md rounded-br-md text-center absolute -top-4 left-0"
          />

          <FiLink
            color="white"
            className="cursor-pointer absolute -top-4 right-0 p-3 bg-primary h-16 w-16 rounded-tr-md rounded-bl-md hidden group-hover:block"
          ></FiLink>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-in"
          className="text-textColor w-full text-left xl:pt-28 pt-20 lg:px-10 px-5 md:pb-8 pb-5 space-y-4 relative group shadow-2xl rounded-md transition duration-300 ease-in-out hover:border border-primary"
        >
          <p className="font-bold capitalize whitespace-nowrap tracking-wide text-2xl">
            Tax & Insurance
          </p>
          <p className="leading-5 tracking-wide">
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed
            diam stet diam sed stet lorem.
          </p>

          <FaHome
            color="white"
            className="bg-primary h-16 w-16 p-3 rounded-tl-md rounded-br-md text-center absolute -top-4 left-0"
          />

          <FiLink
            color="white"
            className="cursor-pointer absolute -top-4 right-0 p-3 bg-primary h-16 w-16 rounded-tr-md rounded-bl-md hidden group-hover:block"
          ></FiLink>
        </div>
      </div>
    </div>
  );
};

export default OurService;
