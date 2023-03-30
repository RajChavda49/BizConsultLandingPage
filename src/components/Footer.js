import React from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowLongUpIcon,
} from "@heroicons/react/24/solid";
import { BiChevronRight } from "react-icons/bi";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="w-full xl:pt-20 xl:px-20 md:p-10 p-5 bg-dark text-white xl:pb-10 relative">
      {/* upper part */}
      <div className="grid w-full xl:grid-cols-4 md:grid-cols-2 place-items-center items-star lg:gap-6 md:gap-y-7 gap-y-10 lg:pb-10 pb-5">
        {/* get in touch */}
        <div className="space-y-4 w-full">
          <p className="font-bold text-2xl pb-2">Get in touch</p>
          <p>
            <MapPinIcon
              height={25}
              color="white"
              className="inline-block mr-2"
            />
            <span>123 Street, New York, USA</span>
          </p>
          <p>
            <a href="tel:+012 345 67890">
              <PhoneIcon
                height={25}
                color="white"
                className="inline-block mr-2"
              />
              <span>+012 345 67890</span>
            </a>
          </p>
          <p>
            <a href="mailto:info@example.com">
              <EnvelopeIcon
                height={25}
                color="white"
                className="inline-block mr-2"
              />
              <span>info@example.com</span>
            </a>
          </p>
          <p className="flex items-center gap-x-3 pt-1">
            <AiOutlineTwitter className="h-10 w-10 rounded-full p-2 border-2 border-white cursor-pointer hover:text-primary hover:bg-light" />
            <AiFillYoutube className="h-10 w-10 rounded-full p-2 border-2 border-white cursor-pointer hover:text-primary hover:bg-light" />
            <AiOutlineInstagram className="h-10 w-10 rounded-full p-2 border-2 border-white cursor-pointer hover:text-primary hover:bg-light" />
            <AiFillFacebook className="h-10 w-10 rounded-full p-2 border-2 border-white cursor-pointer hover:text-primary hover:bg-light" />
            <AiFillLinkedin className="h-10 w-10 rounded-full p-2 border-2 border-white cursor-pointer hover:text-primary hover:bg-light" />
          </p>
        </div>
        {/* links */}
        <div className="space-y-4 w-full">
          <p className="font-bold text-2xl pb-2">Quick Link</p>
          <ul className="space-y-3">
            <li className="hover:tracking-widest transition-all  duration-300 ease-in-out">
              <BiChevronRight className="h-6 w-6 inline-block" />
              <a href="/about">About Us</a>
            </li>
            <li className="hover:tracking-widest transition-all  duration-300 ease-in-out">
              <BiChevronRight className="h-6 w-6 inline-block" />
              <a href="/contact-us">Contact Us</a>
            </li>
            <li className="hover:tracking-widest transition-all  duration-300 ease-in-out">
              <BiChevronRight className="h-6 w-6 inline-block" />
              <a href="/">Privacy Policy</a>
            </li>
            <li className="hover:tracking-widest transition-all  duration-300 ease-in-out">
              <BiChevronRight className="h-6 w-6 inline-block" />
              <a href="/">Terms & Condition</a>
            </li>
            <li className="hover:tracking-widest transition-all  duration-300 ease-in-out">
              <BiChevronRight className="h-6 w-6 inline-block" />
              <a href="/">Career</a>
            </li>
          </ul>
        </div>
        {/* popular links */}
        <div className="space-y-4 w-full">
          <p className="font-bold text-2xl pb-2">Popular Link</p>
          <ul className="space-y-3">
            <li className="hover:tracking-widest transition-all  duration-300 ease-in-out">
              <BiChevronRight className="h-6 w-6 inline-block" />
              <a href="/about">About Us</a>
            </li>
            <li className="hover:tracking-widest transition-all  duration-300 ease-in-out">
              <BiChevronRight className="h-6 w-6 inline-block" />
              <a href="/contact-us">Contact Us</a>
            </li>
            <li className="hover:tracking-widest transition-all  duration-300 ease-in-out">
              <BiChevronRight className="h-6 w-6 inline-block" />
              <a href="/">Privacy Policy</a>
            </li>
            <li className="hover:tracking-widest transition-all  duration-300 ease-in-out">
              <BiChevronRight className="h-6 w-6 inline-block" />
              <a href="/">Terms & Condition</a>
            </li>
            <li className="hover:tracking-widest transition-all  duration-300 ease-in-out">
              <BiChevronRight className="h-6 w-6 inline-block" />
              <a href="/">Career</a>
            </li>
          </ul>
        </div>
        {/* news letter */}
        <div className="space-y-4 w-full">
          <p className="font-bold text-2xl pb-2">Newsletter</p>
          <p className="text-left tracking-wide leading-9">
            Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur
            facilisis ornare velit non vulpu
          </p>
          <div className="xl:w-60 w-full relative">
            <input
              type="text"
              placeholder="Your Email"
              className="rounded-3xl outline-none pl-5 pr-12 h-12 w-full text-black"
            />
            <RiSendPlaneFill className="absolute top-3 right-4 h-7 w-7 text-primary cursor-pointer" />
          </div>
        </div>
      </div>
      <hr className="w-full border-none h-[1px] bg-white lg:my-10 my-5" />
      {/* bottom part */}
      <div className="w-full flex lg:flex-row flex-col items-center justify-between gap-y-5 lg:gap-y-0">
        <p>
          &#169; Biz Consult {new Date().getFullYear()}, All Right Reserved.
          Designed By Raj Chavda.
        </p>
        <div className="flex items-center gap-x-6">
          <a href="/">Home</a>
          <a href="/">Account</a>
          <a href="/">Hela</a>
          <a href="/">FQAs</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
