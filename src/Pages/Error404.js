import React from "react";
import TitleSection from "../components/TitleSection";
import Lottie from "react-lottie";
import PageNotFound from "../assets/animations/page-not-found.json";
import { Link } from "react-router-dom";

const Error404 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: PageNotFound,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="lg:pb-20 pb-10 w-full md:space-y-20 space-y-10">
      <TitleSection title="Not Found" smallTitle="404" />
      <div className="text-textColor flex flex-col items-center justify-center h-auto text-center w-full gap-y-5">
        <Lottie
          options={defaultOptions}
          style={{
            width: "fit-content",
            height: "fit-content",
            pointerEvents: "none",
          }}
          isClickToPauseDisabled
        />
        <h1 className="lg:text-7xl text-5xl font-bold hidden">404</h1>
        <p className="md:text-3xl text-2xl tracking-wide font-bold">
          Page Not Found
        </p>
        <p>
          We’re sorry, the page you have looked for does not exist in our
          website! <br /> Maybe go to our home page or try to use a search?
        </p>
        <Link to="/">
          <button
            type="button"
            className="bg-primary text-white text-center w-40  h-12 rounded-3xl font-bold"
          >
            Go To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error404;
