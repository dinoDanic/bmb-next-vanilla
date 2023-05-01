import React from "react";
import { useSwiper } from "swiper/react";
import { Button } from "../inputs/Button/Button";
import { Cluster } from "@kodiui/ui";
import { ArrowNarrowLeft, ArrowNarrowRight } from "@/assets";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  const prev = () => swiper.slidePrev();
  const next = () => swiper.slideNext();

  return (
    <Cluster>
      <Button
        tone="light"
        variant="transparent"
        onClick={prev}
        icon={<ArrowNarrowLeft />}
      />
      <Button
        tone="light"
        variant="transparent"
        icon={<ArrowNarrowRight />}
        onClick={next}
      />
    </Cluster>
  );
};
