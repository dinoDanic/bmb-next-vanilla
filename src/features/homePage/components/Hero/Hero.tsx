"use client";

import React from "react";
import { CenterTemplate } from "@/templates";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
// import { Slide1 } from "./slides";
import { Box, Center, vars } from "@kodiui/ui";
import { SwiperNavButtons, Heading } from "@/components";
// eslint-disable-next-line no-restricted-imports
import { Gast } from "@/assets/svg/013";

export const Hero = () => {
  return (
    <CenterTemplate maxWidth={1000}>
      <Box paddingTop="5xxl" />
      <Box paddingTop="5xxl" />
      <Box paddingTop="5xxl" />
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
          <Gast />
        </SwiperSlide>
        <SwiperSlide>
          <Center>
            <Heading level="1" color="white">
              Slide 2
            </Heading>
          </Center>
        </SwiperSlide>
        <Box paddingTop="5xxl" />
        <Center>
          <SwiperNavButtons />
        </Center>
      </Swiper>
    </CenterTemplate>
  );
};
