import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "./Slider.css";

export default function Slider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1636402419603-33f3d55100bb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387"
            alt="A dog with a pumpkin on its head"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1730326936991-3592547b7d26?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387"
            alt="A Black kitten in a pumpkin"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.pinimg.com/736x/8b/45/63/8b45632d2aae0c82d8f74ff6ed1b2800.jpg"
            alt="Three guinea pigs in witches costumes"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCdv92ROIKzmbA7ZjgPLVxu6lWTu3Ww1ylg&s"
            alt="A pigeon wearing a witch hat"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTElOACH8QOhUjUiSg2iWa4zIDk6bCuwjM2lQ&s"
            alt="A turtle wearing a spider costume"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="public/images/halloween.pokemon.png"
            alt="Pokemon in halloween costumes"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
