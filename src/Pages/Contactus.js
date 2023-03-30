import React from "react";
import TitleSection from "../components/TitleSection";

const Contactus = () => {
  return (
    <div className="md:space-y-20 space-y-10 w-full lg:pb-20 pb-10">
      <TitleSection title="Contact Us" smallTitle="Contact" />
      <div className="flex items-center justify-center w-full flex-col gap-6 text-textColor text-center">
        <h1 className="w-28 py-1 text-center border  rounded-3xl border-primary text-primary">
          Contact Us
        </h1>
        <p className="font-bold text-4xl">
          If You Have Any Query, Please Feel <br /> Free Contact Us
        </p>
        <form className="space-y-5 w-1/2">
          <div className="flex w-full items-center gap-x-5">
            <input
              type="text"
              className="rounded-lg outline-none p-4 w-1/2 border border-gray-300"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="rounded-lg outline-none p-4 w-1/2 border border-gray-300"
              placeholder="Your Email"
            />
          </div>
          <input
            type="text"
            className="rounded-lg outline-none p-4 w-full border border-gray-300"
            placeholder="Subject"
          />
          <textarea
            className="rounded-lg outline-none p-4 w-full border border-gray-300 min-h-[10rem]"
            placeholder="Message"
          />
          <button type="button" className="bg-primary text-white duration-500 hover:border border-primary hover:text-primary hover:bg-white w-full rounded-lg text-center font-semibold h-12">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
