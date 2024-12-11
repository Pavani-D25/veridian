
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import PersonA from "./PersonA";
import PersonB from "./PersonB";
import PersonC from "./PersonC";

const OurTeam = () => {
  return (
    <Swiper
      spaceBetween={-370}
      slidesPerView={1} 
      loop={true} 
      centeredSlides={true} 
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
    >
      <SwiperSlide>
        <PersonA />
      </SwiperSlide>
      <SwiperSlide>
        <PersonB />
      </SwiperSlide>
      <SwiperSlide>
        <PersonC />
      </SwiperSlide>
    </Swiper>
  );
};

export default OurTeam;
