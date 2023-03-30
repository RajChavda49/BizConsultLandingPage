import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

const Companies = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-easing="ease-in-sine"
      className="bg-primary xl:px-24 lg:px-16 md:px-8 px-3 py-10"
    >
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        modules={[Autoplay]}
        autoplay={{ disableOnInteraction: true, pauseOnMouseEnter: true }}
        loop={true}
        speed={2000}
        breakpoints={{
          1199: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          576: {
            slidesPerView: 2,
          },
          240: {
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide className="text-center">
          <img
            src={require("../../assets/images/logo-1.png")}
            className="h-fit w-fit object-contain object-center mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <img
            src={require("../../assets/images/logo-2.png")}
            className="h-fit w-fit object-contain object-center mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../assets/images/logo-3.png")}
            className="h-fit w-fit object-contain object-center mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../assets/images/logo-4.png")}
            className="h-fit w-fit object-contain object-center mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../assets/images/logo-5.png")}
            className="h-fit w-fit object-contain object-center mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../assets/images/logo-6.png")}
            className="h-fit w-fit object-contain object-center mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../assets/images/logo-7.png")}
            className="h-fit w-fit object-contain object-center mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../assets/images/logo-8.png")}
            className="h-fit w-fit object-contain object-center mx-auto"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Companies;
