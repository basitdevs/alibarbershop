"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const images = [
  "https://alibarbershop.at/files/IMG_20191207_165256.jpg",
  "https://alibarbershop.at/files/IMG_20191207_165229.jpg",
  "https://alibarbershop.at/files/IMG_20191207_1652516.jpg",
];

const MediaSlider = () => {
  return (
    <div className="py-[80px] ">
      <div className="max-w-[1200px] mx-auto px-[15px]">
        <div className="grid grid-cols-3 gap-[20px]">
          <div className="">
            <h2 className="uppercase text-[40px] leading-[1.1] mb-6 font-[500] ">
              <span className="font-[700]">Men’s Day;</span> Ali Barber Shop bei
              “der Michael” diesmal für{" "}
              <span className="text-[#b30056]">Puls4</span> und Bezirkszeitung
              Wien
            </h2>
            <p className="text-[21px] leading-[1.4] font-[300] text-[#626262] mb-[20px]">
              Ali Barber Shop gemeinsam mit “der Michael” in Amerlingstrasse 8,
              1060 Wien, Live auf Puls4 TV.
            </p>
            <p className="text-[21px] leading-[1.4] font-[300] text-[#626262] mb-[20px]">
              Hier sind die besten Schnapschüsse:{" "}
            </p>
          </div>
          <div className="col-span-2">
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
                        className="w-full h-[500px] object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
                <div className="bg-black/30 inset-0 absolute w-full h-full"></div>
              </Swiper>

              <button
                className={`absolute prev-mediaslider left-[10px] z-[10] cursor-pointer top-1/2 -translate-y-1/2 text-black text-[37px]`}
              >
                <MdArrowBackIos />
              </button>
              <button
                className={`absolute next-mediaslider right-[10px] z-[10] cursor-pointer top-1/2 -translate-y-1/2 text-black text-[37px]`}
              >
                <MdArrowForwardIos />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaSlider;
