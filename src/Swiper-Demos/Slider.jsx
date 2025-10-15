import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "./Slider.css";

export default function Slider() {
  return (
    <>
      <Swiper className="mySwiper">
        <SwiperSlide>
          <img
            src="https://i.natgeofe.com/k/8fa25ea4-6409-47fb-b3cc-4af8e0dc9616/red-eyed-tree-frog-on-leaves-3-2_3x4.jpg"
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://via.placeholder.com/800x400?text=Slide+2"
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://via.placeholder.com/800x400?text=Slide+3"
            alt="Slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://via.placeholder.com/800x400?text=Slide+4"
            alt="Slide 4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://via.placeholder.com/800x400?text=Slide+5"
            alt="Slide 5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://via.placeholder.com/800x400?text=Slide+6"
            alt="Slide 6"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
