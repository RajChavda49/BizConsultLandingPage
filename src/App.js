import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contactus from "./Pages/Contactus";
import Error404 from "./Pages/Error404";
import Feature from "./Pages/Feature";
import Service from "./Pages/Service";
import Team from "./Pages/Team";
import Testimonial from "./Pages/Testimonial";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ArrowLongUpIcon } from "@heroicons/react/24/solid";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowScrollToTop(true);
      } else {
        return setShowScrollToTop(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [window.scrollY]);
  return (
    <>
      {showScrollToTop && (
        <button
          type="button"
          className="fixed bottom-10 right-10 rounded-full z-50 w-10 h-10 animate-bounce bg-primary text-white "
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowLongUpIcon className="h-6 mx-auto" color="white" />
        </button>
      )}
      <BrowserRouter>
        {/* top to scroll btn */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Feature />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
