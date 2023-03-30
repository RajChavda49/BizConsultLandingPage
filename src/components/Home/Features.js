import React from "react";
import {
  FaCubes,
  FaPercent,
  FaAward,
  FaSmile,
  FaUser,
  FaHeadset,
} from "react-icons/fa";

const Features = () => {
  return (
    <div className="text-textColor xl:px-24 lg:px-16 md:px-8 px-3 grid grid-cols-4 place-items-center items-start lg:gap-5 gap-8">
      {/* first div */}
      <div className="w-full space-y-5 lg:col-span-2 col-span-4 text-left">
        <p
          data-aos="zoom-out-up"
          data-aos-duration="700"
          data-aos-easing="ease-in"
          className="border border-primary text-center text-primary w-32 h-8 leading-[32px] rounded-3xl"
        >
          Features
        </p>
        <p
          data-aos="zoom-out-up"
          data-aos-duration="700"
          data-aos-easing="ease-in"
          className="text-3xl font-bold leading-9 tracking-wide w-full"
        >
          Why People Choose Us? <br className="hidden lg:block" /> We Are
          Trusted &{" "}
          <br
            className="hidden lg:block
          "
          />{" "}
          Award Wining Agency
        </p>
        <p
          data-aos="zoom-out-up"
          data-aos-duration="700"
          data-aos-easing="ease-in"
          className="text-justify tracking-normal w-full"
        >
          Clita nonumy sanctus nonumy et clita tempor, et sea amet ut et
          sadipscing rebum amet takimata amet, sed accusam eos eos dolores
          dolore et. Et ea ea dolor rebum invidunt clita eos. Sea accusam stet
          stet ipsum, sit ipsum et ipsum kasd
        </p>
        <p
          data-aos="zoom-out-up"
          data-aos-duration="700"
          data-aos-easing="ease-in"
          className="w-full text-justify tracking-normal"
        >
          Et ea ea dolor rebum invidunt clita eos. Sea accusam stet stet ipsum,
          sit ipsum et ipsum kasd
        </p>
        <button
          type="button"
          className="w-40 h-12 rounded-3xl bg-primary text-white text-center leading-[48px] align-middle"
          data-aos="zoom-out-up"
          data-aos-duration="700"
          data-aos-easing="ease-in"
        >
          Read More
        </button>
      </div>
      {/* second div */}
      <div className="md:space-y-10 space-y-5 lg:col-span-1 md:col-span-2 col-span-4">
        {" "}
        <div
          data-aos="zoom-out-up"
          data-aos-duration="700"
          data-aos-easing="ease-in"
          className="space-y-4"
        >
          <div className="flex items-center gap-x-4">
            <FaCubes
              color="white"
              className="h-10 w-10 bg-primary rounded-full text-center p-2"
            />
            <span className="font-bold text-lg">Best In Industry</span>
          </div>
          <p>
            Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor
          </p>
        </div>
        <div
          data-aos="zoom-out-up"
          data-aos-duration="700"
          data-aos-easing="ease-in"
          className="space-y-4"
        >
          <div className="flex items-center gap-x-4">
            <FaAward
              color="white"
              className="h-10 w-10 bg-primary rounded-full text-center p-2"
            />
            <span className="font-bold text-lg">Award Winning</span>
          </div>
          <p>
            Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor
          </p>
        </div>
        <div
          data-aos="zoom-out-up"
          data-aos-duration="700"
          data-aos-easing="ease-in"
          className="space-y-4"
        >
          <div className="flex items-center gap-x-4">
            <FaUser
              color="white"
              className="h-10 w-10 bg-primary rounded-full text-center p-2"
            />
            <span className="font-bold text-lg">Professional Advisors</span>
          </div>
          <p>
            Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor
          </p>
        </div>
      </div>
      {/* third div */}
      <div className="md:space-y-10 space-y-5 lg:col-span-1 md:col-span-2 col-span-4">
        {" "}
        <div
          data-aos="zoom-out-up"
          data-aos-duration="700"
          data-aos-easing="ease-in"
          className="space-y-4"
        >
          <div className="flex items-center gap-x-4">
            <FaPercent
              color="white"
              className="h-8 w-8 bg-primary rounded-full text-center p-2"
            />
            <span className="font-bold text-lg">99% Success Rate</span>
          </div>
          <p>
            Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor
          </p>
        </div>
        <div
          data-aos="zoom-out-up"
          data-aos-duration="700"
          data-aos-easing="ease-in"
          className="space-y-4"
        >
          <div className="flex items-center gap-x-4">
            <FaSmile
              color="white"
              className="h-10 w-10 bg-primary rounded-full text-center p-2"
            />
            <span className="font-bold text-lg">100% Happy Client</span>
          </div>
          <p>
            Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor
          </p>
        </div>
        <div
          data-aos="zoom-out-up"
          data-aos-duration="700"
          data-aos-easing="ease-in"
          className="space-y-4"
        >
          <div className="flex items-center gap-x-4">
            <FaHeadset
              color="white"
              className="h-10 w-10 bg-primary rounded-full text-center p-2"
            />
            <span className="font-bold text-lg">24/7 Customer Support</span>
          </div>
          <p>
            Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor
          </p>
        </div>
      </div>{" "}
    </div>
  );
};

export default Features;
