"use client";

import React from "react";
import { useSwiper } from "swiper/react";
import { Button } from "../inputs/Button/Button";
import { Cluster } from "@kodiui/ui";
import { ArrowNarrowLeft, ArrowNarrowRight } from "@/assets";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  const prev = () => swiper.slidePrev();
  const next = () => swiper.slideNext();

  const buttonProps = {
    variant: "ghost",
    tone: "neutral",
  } as const;

  return (
    <Cluster>
      <Button {...buttonProps} onClick={prev} icon={<ArrowNarrowLeft />} />
      <Button {...buttonProps} onClick={next} icon={<ArrowNarrowRight />} />
    </Cluster>
  );
};
