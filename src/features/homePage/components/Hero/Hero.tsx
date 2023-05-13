"use client";

import React from "react";
import { CenterTemplate } from "@/templates";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import { vars } from "@kodiui/ui";
import { Slide1 } from "./slides";

export const Hero = () => {
  return (
    <CenterTemplate>
      <Swiper
        spaceBetween={50}
        effect="fade"
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        // modules={[EffectFade]}
        style={{ padding: vars.space.xs, zIndex: 0 }}
      >
        <SwiperSlide>
          <Slide1 />
        </SwiperSlide>
        <SwiperSlide>slide 2</SwiperSlide>
      </Swiper>
    </CenterTemplate>
  );
};
