import React from "react";

const Heroseciton = () => {
  return (
    <div className="relative z-0 bg-primary xl:px-24 lg:px-16 md:px-8 px-3 py-5 lg:py-0 text-white w-full lg:h-screen grid lg:grid-cols-2 place-items-center items-center lg:gap-5 gap-7">
      <div
        data-aos="fade-up-right"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        className="space-y-5 w-full lg:order-1 order-2 lg:text-left text-center"
      >
        <p className="md:text-4xl text-2xl font-bold tracking-wide leading-8">
          We Help To Push Your Business <br /> To The Top Level
        </p>
        <p className="tracking-wide leading-6">
          Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet
          dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit
          justo amet ipsum vero ipsum clita lorem
        </p>
        <button
          type="button"
          className="border border-white rounded-3xl w-48 h-12 leading-[48px] text-center"
        >
          Learn More
        </button>
      </div>
      <div
        data-aos="zoom-out-down"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        className="lg:order-2 order-1"
      >
        <img
          src={require("../../assets/images/hero.png")}
          className="h-fit w-full object-contain object-center"
        />
      </div>
      <img
        src={require("../../assets/images/shape-bottom.png")}
        className="h-fit w-full -z-10 absolute bottom-0 left-0 object-contain object-center"
      />
    </div>
  );
};

export default Heroseciton;
