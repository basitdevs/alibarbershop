"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const AboutSlider = ({
  images,
  index,
}: {
  images: string[];
  index: number;
}) => {
  return (
    <div className="w-full relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          prevEl: `.prev-about-${index}`,
          nextEl: `.next-about-${index}`,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-dot-about"></span>`;
          },
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
        <div className="bg-black/50 inset-0 absolute w-full h-full"></div>
      </Swiper>

      <button
        className={`absolute prev-about-${index} left-[10px] z-[10] cursor-pointer top-1/2 -translate-y-1/2 text-white text-[37px]`}
      >
        <MdArrowBackIos />
      </button>
      <button
        className={`absolute next-about-${index} right-[10px] z-[10] cursor-pointer top-1/2 -translate-y-1/2 text-white text-[37px]`}
      >
        <MdArrowForwardIos />
      </button>
    </div>
  );
};

export default AboutSlider;
