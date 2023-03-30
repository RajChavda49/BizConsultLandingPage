import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Autoplay, EffectCoverflow, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const TestimonialComponent = () => {
  const [index, setIndex] = useState(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="xl:px-24 lg:px-16 md:px-8 px-3 py-10 space-y-5">
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        className="border border-primary  mx-auto text-center text-primary w-32 h-8 leading-[32px] rounded-3xl "
      >
        Testimonial
      </p>
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        className="text-3xl font-bold text-center"
      >
        What Our Clients Say!
      </p>
      <Swiper
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        slidesPerView={3}
        modules={[Autoplay, Navigation, EffectCoverflow]}
        autoplay={{ disableOnInteraction: true, pauseOnMouseEnter: true }}
        loop={true}
        navigation={{
          prevEl: prevRef?.current,
          nextEl: nextRef?.current,
        }}
        observeParents={true}
        observer={true}
        speed={1000}
        pagination={true}
        breakpoints={{
          1199: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          240: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        centeredSlides
        onSlideChange={(e) => setIndex(e.activeIndex)}
        onSwiper={(swiper) => {
          // Delay execution for the refs to be defined
          setTimeout(() => {
            // Override prevEl & nextEl now that refs are defined
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;

            // Re-init navigation
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        className="testimonial_slide"
        style={{ padding: "2rem 10px" }}
      >
        <SwiperSlide
          style={{ boxShadow: " 0 0 15px 	#B2BEB5" }}
          className={`mx-auto rounded-lg p-4 md:space-y-5 space-y-3 w-full`}
        >
          <p>
            <FaQuoteLeft className="h-10 w-10 text-primary" />
          </p>
          <p className="text-textColor transform-none leading-5">
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
            amet eirmod eos labore diam
          </p>
          <div className="flex items-start gap-x-4">
            <img
              src={require("../../assets/images/testimonial-1.jpg")}
              className="rounded-full w-12 h-12 object-contain object-center"
            />
            <p>
              <span className="font-bold block text-textColor text-xl">
                Client Name
              </span>
              <span className="text-textColor text-base block">Profession</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{ boxShadow: " 0 0 15px 	#B2BEB5" }}
          className={`mx-auto rounded-lg p-4 md:space-y-5 space-y-3 w-full`}
        >
          <p>
            <FaQuoteLeft className="h-10 w-10 text-primary" />
          </p>
          <p className="text-textColor transform-none leading-5">
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
            amet eirmod eos labore diam
          </p>
          <div className="flex items-start gap-x-4">
            <img
              src={require("../../assets/images/testimonial-2.jpg")}
              className="rounded-full w-12 h-12 object-contain object-center"
            />
            <p>
              <span className="font-bold block text-textColor text-xl">
                Client Name
              </span>
              <span className="text-textColor text-base block">Profession</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{ boxShadow: " 0 0 15px 	#B2BEB5" }}
          className={`mx-auto rounded-lg p-4 md:space-y-5 space-y-3 w-full`}
        >
          <p>
            <FaQuoteLeft className="h-10 w-10 text-primary" />
          </p>
          <p className="text-textColor transform-none leading-5">
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
            amet eirmod eos labore diam
          </p>
          <div className="flex items-start gap-x-4">
            <img
              src={require("../../assets/images/testimonial-3.jpg")}
              className="rounded-full w-12 h-12 object-contain object-center"
            />
            <p>
              <span className="font-bold block text-textColor text-xl">
                Client Name
              </span>
              <span className="text-textColor text-base block">Profession</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={`mx-auto rounded-lg p-4 md:space-y-5 space-y-3 w-full`}
          style={{ boxShadow: " 0 0 15px 	#B2BEB5" }}
        >
          <p>
            <FaQuoteLeft className="h-10 w-10 text-primary" />
          </p>
          <p className="text-textColor transform-none leading-5">
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
            amet eirmod eos labore diam
          </p>
          <div className="flex items-start gap-x-4">
            <img
              src={require("../../assets/images/testimonial-1.jpg")}
              className="rounded-full w-12 h-12 object-contain object-center"
            />
            <p>
              <span className="font-bold block text-textColor text-xl">
                Client Name
              </span>
              <span className="text-textColor text-base block">Profession</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={`mx-auto rounded-lg p-4 md:space-y-5 space-y-3 w-full`}
          style={{ boxShadow: " 0 0 15px 	#B2BEB5" }}
        >
          <p>
            <FaQuoteLeft className="h-10 w-10 text-primary" />
          </p>
          <p className="text-textColor transform-none leading-5">
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
            amet eirmod eos labore diam
          </p>
          <div className="flex items-start gap-x-4">
            <img
              src={require("../../assets/images/testimonial-2.jpg")}
              className="rounded-full w-12 h-12 object-contain object-center"
            />
            <p>
              <span className="font-bold block text-textColor text-xl">
                Client Name
              </span>
              <span className="text-textColor text-base block">Profession</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={`mx-auto rounded-lg p-4 md:space-y-5 space-y-3 w-full`}
          style={{ boxShadow: " 0 0 15px 	#B2BEB5" }}
        >
          <p>
            <FaQuoteLeft className="h-10 w-10 text-primary" />
          </p>
          <p className="text-textColor transform-none leading-5">
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
            amet eirmod eos labore diam
          </p>
          <div className="flex items-start gap-x-4">
            <img
              src={require("../../assets/images/testimonial-3.jpg")}
              className="rounded-full w-12 h-12 object-contain object-center"
            />
            <p>
              <span className="font-bold block text-textColor text-xl">
                Client Name
              </span>
              <span className="text-textColor text-base block">Profession</span>
            </p>
          </div>
        </SwiperSlide>

        {/* btns */}
        <p className="flex items-center justify-center gap-x-5 mt-5">
          <span ref={prevRef}>
            <FaArrowLeft
              role="button"
              className="h-8 w-8 text-primary rounded-full border border-primary p-2"
            />
          </span>
          <span ref={nextRef}>
            <FaArrowRight
              role="button"
              className="h-8 w-8 text-primary rounded-full border border-primary p-2"
            />
          </span>
        </p>
      </Swiper>
    </div>
  );
};

export default TestimonialComponent;
