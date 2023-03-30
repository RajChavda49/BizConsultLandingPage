import React, { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuTwo, setShowMenuTwo] = useState(false);
  const [stickyHeader, setStickyHeader] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  // for sticky header
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setStickyHeader(true);
      } else {
        return setStickyHeader(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [window.scrollY]);

  // for active links
  useEffect(() => {
    if (window.location.pathname === "/") {
      setActiveLink("Home");
    } else {
      setActiveLink(window.location.pathname.replace("/", ""));
    }
  }, []);
  return (
    <>
      <div
        className={`flex duration-500 z-50 ${
          stickyHeader
            ? "fixed xl:px-24 lg:px-16 md:px-8 px-3 p-4 bg-white text-textColor shadow-md"
            : "relative xl:px-24 lg:px-16 md:px-8 px-3 lg:p-7 p-4 lg:bg-primary bg-white lg:text-white text-primary"
        } w-full  justify-between items-center border-b-[1px] border-white`}
      >
        {/* logo */}
        <div
          className={`xl:text-5xl lg:text-4xl text-3xl font-bold tracking-wide ${
            stickyHeader ? "text-primary" : "lg:text-white text-primary"
          }`}
        >
          <a href="/">BizConsult</a>
        </div>
        {/* desktop menu */}
        <div className="lg:flex items-center gap-x-7 font-bold text-lg hidden">
          <a
            href="/"
            className={`nav-link ${stickyHeader && "nav-link-sticky"} ${
              activeLink === "Home" &&
              !stickyHeader &&
              "text-center p-1 w-24 bg-white rounded-3xl text-primary"
            }
            ${
              activeLink === "Home" &&
              stickyHeader &&
              "text-center p-1 w-24 bg-primary rounded-3xl text-white"
            }
            `}
          >
            Home
          </a>
          <a
            href="/about"
            className={`nav-link ${stickyHeader && "nav-link-sticky"} ${
              activeLink === "about" &&
              !stickyHeader &&
              "text-center p-1 w-24 bg-white rounded-3xl text-primary"
            }
            ${
              activeLink === "about" &&
              stickyHeader &&
              "text-center p-1 w-24 bg-primary rounded-3xl text-white"
            }
            `}
          >
            About
          </a>
          <a
            href="/service"
            className={`nav-link ${stickyHeader && "nav-link-sticky"} ${
              activeLink === "service" &&
              !stickyHeader &&
              "text-center p-1 w-24 bg-white rounded-3xl text-primary"
            }
            ${
              activeLink === "service" &&
              stickyHeader &&
              "text-center p-1 w-24 bg-primary rounded-3xl text-white"
            }
            `}
          >
            Service
          </a>
          <a
            href="#"
            className={`nav-link group ${stickyHeader && "nav-link-sticky"} ${
              (activeLink.includes("team") ||
                activeLink.includes("features") ||
                activeLink.includes("testimonial")) &&
              !stickyHeader &&
              "text-center p-1 w-24 bg-white rounded-3xl text-primary"
            }
            ${
              (activeLink.includes("team") ||
                activeLink.includes("features") ||
                activeLink.includes("testimonial")) &&
              stickyHeader &&
              "text-center p-1 w-24 bg-primary rounded-3xl text-white"
            }
            `}
          >
            Pages{" "}
            <span>
              <AiFillCaretDown
                className="inline-block h-4 w-4"
                color={
                  stickyHeader ||
                  activeLink.includes("team") ||
                  activeLink.includes("features") ||
                  activeLink.includes("testimonial")
                    ? "black"
                    : "white"
                }
              />
            </span>
            <p className="text-left absolute top-14 z-50 bg-white w-40 rounded-md group-hover:scale-100 scale-0 transform duration-300 ease-in origin-top-left">
              <a
                href="/features"
                className="block font-light hover:bg-light pl-4 py-1 rounded-md text-textColor"
              >
                Features
              </a>

              <a
                href="/team"
                className="block font-light hover:bg-light pl-4 py-1 rounded-md text-textColor"
              >
                Our Team
              </a>
              <a
                href="/testimonial"
                className="block font-light hover:bg-light pl-4 py-1 rounded-md text-textColor"
              >
                Testimonial
              </a>
              <a
                href="/*"
                className="block font-light hover:bg-light pl-4 py-1 rounded-md text-textColor"
              >
                404 Page
              </a>
            </p>
          </a>
          <a
            href="/contact-us"
            className={`nav-link ${stickyHeader && "nav-link-sticky"} ${
              activeLink === "contact-us" &&
              !stickyHeader &&
              "text-center p-1 w-24 bg-white rounded-3xl text-primary"
            }
            ${
              activeLink === "contact-us" &&
              stickyHeader &&
              "text-center p-1 w-24 bg-primary rounded-3xl text-white"
            }
            `}
          >
            Contact
          </a>
          {/* <button
            type="button"
            className={`text-primary  rounded-3xl text-center h-10 w-36 align-middle leading-[40px] ${
              stickyHeader ? "bg-gray-100" : "bg-white"
            }`}
          >
            Free Quote
          </button> */}
        </div>
        {/* mobile & tablet menu */}
        <div className="lg:hidden block duration-500">
          <Bars3Icon
            color="green"
            className="border border-gray-100 h-10 p-1 cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />
          {showMenu && (
            <div
              className={`w-full z-50 absolute top-16 left-0 pb-3 transition duration-300 px-5 h-auto bg-white`}
            >
              <hr className="my-2 w-full bg-primary" />
              <ul className="space-y-5">
                <li>
                  <a href="/" className="text-black font-semibold">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-black font-semibold" href="/about">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-black font-semibold" href="/service">
                    Service
                  </a>
                </li>
                <li className="w-full">
                  <a
                    className="text-black font-semibold w-full"
                    href="#"
                    onClick={() => setShowMenuTwo(!showMenuTwo)}
                  >
                    <span>
                      Pages
                      <AiFillCaretDown
                        className="inline-block h-4 w-4"
                        color="black"
                      />
                    </span>
                    {showMenuTwo && (
                      <p
                        className={`mt-2 z-50 bg-white w-full border border-gray-200 p-2 rounded-md`}
                      >
                        <a
                          href="/features"
                          className="block font-light hover:bg-light pl-4 py-1 rounded-md text-textColor"
                        >
                          Features
                        </a>

                        <a
                          href="/team"
                          className="block font-light hover:bg-light pl-4 py-1 rounded-md text-textColor"
                        >
                          Our Team
                        </a>
                        <a
                          href="/testimonial"
                          className="block font-light hover:bg-light pl-4 py-1 rounded-md text-textColor"
                        >
                          Testimonial
                        </a>
                        <a
                          href="/*"
                          className="block font-light hover:bg-light pl-4 py-1 rounded-md text-textColor"
                        >
                          404 Page
                        </a>
                      </p>
                    )}
                  </a>
                </li>
                <li>
                  <a className="text-black font-semibold" href="/contact-us">
                    Contact
                  </a>
                </li>
                <button
                  type="button"
                  className="text-primary bg-light rounded-3xl text-center font-semibold h-10 w-36 align-middle leading-[40px]"
                >
                  Free Quote
                </button>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
