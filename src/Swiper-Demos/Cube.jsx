import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./Cube.css";

import { EffectCube, Pagination } from "swiper/modules";

export default function Cube() {
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="Halloween"
            src="https://plus.unsplash.com/premium_photo-1693634964659-db7d578d22f9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=464"
            alt="Happy Halloween sign"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="Moon"
            src="https://images.unsplash.com/photo-1592887714077-1c2ca9cdcf48?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387"
            alt="A creasent moon with clouds at night"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="Pumpkin"
            src="https://images.unsplash.com/photo-1573306533578-12e23afbf2c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=435"
            alt="Scarecrow with a pumpkin head"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="Cat"
            src="https://images.unsplash.com/photo-1472496175377-b5d7625d4ba9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580"
            alt="A silohute of a cat"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
