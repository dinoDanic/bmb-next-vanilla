"use client";

import React, { FC } from "react";
import { Box, FlexBox, Stack, Switcher } from "@kodiui/ui";
import { Button, Heading, SwiperNavButtons, Text } from "@/components";
import { ChevronRight } from "@/assets";
import { ProductCard } from "@/features/products";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import * as ReactDOMServer from "react-dom/server";

// Import Swiper styles
import "swiper/css";

export interface SectionCard {
  title: string;
  descirption: string;
  action: {
    fn: () => void;
    text: string;
  };
}

export const SectionCard: FC<SectionCard> = (props) => {
  return (
    <>
      <Switcher>
        <Heading level="1">{props.title}</Heading>
        <Stack>
          <Text>{props.descirption}</Text>
          <Button icon={<ChevronRight />} side="right" width="fit">
            {props.action.text}
          </Button>
        </Stack>
      </Switcher>
      <Box p="2xl" />
      <Swiper
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            console.log(index, className);

            return ReactDOMServer.renderToStaticMarkup(
              <Stack position="absolute" right="0" top="0">
                <Box width="fit">bullet</Box>
              </Stack>
            );
          },
        }}
        spaceBetween={50}
        modules={[Navigation, Pagination, A11y]}
      >
        <SwiperSlide>
          <Switcher>
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Switcher>
        </SwiperSlide>
        <SwiperSlide>
          <Switcher>
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Switcher>
        </SwiperSlide>
        <Box p="2xl" />
        <FlexBox justifyContent="flex-end">
          <SwiperNavButtons />
        </FlexBox>
      </Swiper>
    </>
  );
};
