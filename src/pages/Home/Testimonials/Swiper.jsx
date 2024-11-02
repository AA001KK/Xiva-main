import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import TestimonialsCard from "./TestimonialsCard";
import { testimonials } from "../../../constants";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={true}
        pagination={{
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-main',
        }}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },

          1200: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
   {Array(6                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ).fill(" ").map((_, ind) => (
  <SwiperSlide className="h-full" key={ind}>
    <TestimonialsCard data={ind+1} key={ind} />
  </SwiperSlide>
))}


      </Swiper>
    </>
  );
}
