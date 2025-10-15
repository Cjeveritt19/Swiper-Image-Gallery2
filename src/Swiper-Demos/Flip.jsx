import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-flip";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Flip.css";
import { EffectFlip, Pagination, Navigation, Keyboard } from "swiper/modules";

export default function Flip() {
  return (
    <>
      <h1>Swiper Flip Effect Demo</h1>
      <Swiper
        effect={"flip"}
        pagination={true}
        navigation={true}
        keyboard={true}
        modules={[EffectFlip, Pagination, Navigation, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          }}
        >
          <h2>What is Swiper?</h2>
          <p>Click the arrow to reveal answer →</p>

          <h2>Before Swiper</h2>
          <p>
            Writing complex carousel code manually, dealing with touch events,
            managing responsive breakpoints.
          </p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            background: "linear-gradient(135deg, #db1919ff 0%, #ff9d47ff 100%)",
          }}
        >
          <h2>After Swiper</h2>
          <p>
            Npm i swiper, import Swiper, add your slides, and you're done!
            Built-in touch support and navigation.
          </p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
          }}
        >
          <h2>Features</h2>
          <p>
            Touch-enabled, responsive, highly customizable carousel solution.
          </p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            background: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
          }}
        >
          <h2>Specifications</h2>
          <p>
            Multiple effects • Mobile-first • Hardware accelerated • Fully
            customizable
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
