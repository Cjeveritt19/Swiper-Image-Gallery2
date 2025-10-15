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
            alt="A Green frog sitting on a leaf"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://as1.ftcdn.net/v2/jpg/01/99/77/64/1000_F_199776474_ORr8LaAj6pihYKMD4HqHpQ2nkTZ0IrIX.jpg"
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.britannica.com/73/100273-050-221A0593/arrow-poison-frogs-sound-production-colour-warning-signal.jpg"
            alt="Slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://kids.earth.org/wp-content/uploads/2023/07/Untitled-683-%C3%97-1024px-1024-%C3%97-683px-2023-07-26T184215.475-900x600.jpg"
            alt="Slide 4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i0.wp.com/www.australiangeographic.com.au/wp-content/uploads/2018/06/Litoria_caerulea_-_Darwin_NT.jpg?fit=1000%2C672&ssl=1"
            alt="Slide 5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Breviceps_macrops_454407799.jpg/1200px-Breviceps_macrops_454407799.jpg"
            alt="Slide 6"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
