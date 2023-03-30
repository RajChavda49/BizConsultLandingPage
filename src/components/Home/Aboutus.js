import React from "react";
import { PresentationChartLineIcon, UserIcon } from "@heroicons/react/24/solid";

const Aboutus = () => {
  return (
    <div className="grid w-full lg:grid-cols-2 place-items-center items-center xl:px-24 lg:px-16 md:px-8 px-3">
      {/* img */}
      <div
        data-aos="fade-down-right"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <img
          src={require("../../assets/images/about.png")}
          className="w-fit h-fit object-center object-contain"
        />
      </div>
      {/* content */}
      <div
        data-aos="fade-up-left"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        className="lg:pl-10 text-left text-textColor md:space-y-4 space-y-2"
      >
        <p className="w-28 py-1 text-center border  rounded-3xl border-primary text-primary">
          About Us
        </p>
        <p className="font-bold text-3xl">
          <span className="block">Award Wining Consultancy</span>
          <span className="block">Agency For Your Business</span>
        </p>
        <p className="leading-8 tracking-normal">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit.
          Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit,
          sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod
        </p>
        <div className="flex items-start justify-start gap-x-4">
          <p>
            <UserIcon
              className="h-10 w-10 bg-primary p-2 rounded-full"
              color="white"
            />
          </p>
          <p>
            <span className="block font-bold">Business Planning</span>
            <span className="leading-8 tracking-normal">
              Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat
              ipsum lorem et sit sed stet lorem sit clita duo
            </span>
          </p>
        </div>
        <div className="flex items-start justify-start gap-x-4">
          <p>
            <PresentationChartLineIcon
              className="h-10 w-10 bg-primary p-2 rounded-full"
              color="white"
            />
          </p>
          <p>
            <span className="block font-bold">Financial Analaysis</span>
            <span className="leading-8 tracking-normal">
              Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat
              ipsum lorem et sit sed stet lorem sit clita duo
            </span>
          </p>
        </div>
        <button
          type="button"
          className="bg-primary text-white text-center block w-40 py-3 rounded-3xl"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default Aboutus;
