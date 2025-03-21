"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Heading from "../Common/Heading";
import Paragraph from "../Common/Paragraph";
import FadeRight from "../motion/FadeRight";

const images = [
  "https://alibarbershop.at/files/IMG_20191207_165256.jpg",
  "https://alibarbershop.at/files/IMG_20191207_165229.jpg",
  "https://alibarbershop.at/files/IMG_20191207_1652516.jpg",
];

const MediaSlider = () => {
  return (
    <div className="py-[14px] sm:py-[40px] md:py-[60px] ">
      <div className="max-w-[1200px] mx-auto px-[20px] md:px-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[12px] md:gap-[20px]">
          <div className="">
            <Heading
              text={` <span className="font-[700]">Men’s Day;</span> Ali Barber Shop bei
              “der Michael” diesmal für <span class="text-[#b30056]">Puls4</span> und Bezirkszeitung Wien`}
            />
            <Paragraph
              text={`Ali Barber Shop gemeinsam mit “der Michael” in Amerlingstrasse 8,
              1060 Wien, Live auf Puls4 TV.`}
            />
            <Paragraph text={` Hier sind die besten Schnapschüsse:`} />
          </div>
          <div className="lg:col-span-2">
            <FadeRight delay={0.5}>
              <div className="w-full relative">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={0}
                  slidesPerView={1}
                  navigation={{
                    prevEl: `.prev-mediaslider`,
                    nextEl: `.next-mediaslider`,
                  }}
                  className="w-full"
                >
                  {images.map((img, index) => (
                    <SwiperSlide key={index} className="relative">
                      <div className="">
                        <Image
                          src={img}
                          alt=""
                          width={2000}
                          height={1000}
                          className="w-full h-[350px] md:h-[500px] object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                  <div className="bg-black/30 inset-0 absolute w-full h-full"></div>
                </Swiper>

                <button
                  className={`absolute prev-mediaslider left-[5px] md:left-[10px] z-[10] cursor-pointer top-1/2 -translate-y-1/2 text-black text-[28px] md:text-[37px]`}
                >
                  <MdArrowBackIos />
                </button>
                <button
                  className={`absolute next-mediaslider right-[5px] md:right-[10px] z-[10] cursor-pointer top-1/2 -translate-y-1/2 text-black text-[28px] md:text-[37px]`}
                >
                  <MdArrowForwardIos />
                </button>
              </div>
            </FadeRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaSlider;
