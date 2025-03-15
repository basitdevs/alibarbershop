"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import Heading from "./Common/Heading";
import Paragraph from "./Common/Paragraph";

const newsItems = [
  {
    id: 1,
    title: "Oh, what a night! Charity clubbing",
    description:
      "Ali Barber Shop war am 24.08.2023 beim Oh, what a night! Charity clubbing im Kursalon Hübner 1010 Wien.",
    image: "https://alibarbershop.at/files/IMG-20231221-WA0003.jpg",
  },
  {
    id: 2,
    title: "Oh, what a night! Charity clubbing",
    description:
      "Ali Barber Shop war am 24.08.2023 beim Oh, what a night! Charity clubbing im Kursalon Hübner 1010 Wien.",
    image: "https://alibarbershop.at/files/talkaccino_60_artikel1-1.770x0.jpg",
  },
  {
    id: 3,
    title: "Oh, what a night! Charity clubbing",
    description:
      "Ali Barber Shop war am 24.08.2023 beim Oh, what a night! Charity clubbing im Kursalon Hübner 1010 Wien.",
    image: "https://alibarbershop.at/files/alibarbershop_breitling_wien.png",
  },
  {
    id: 4,
    title: "Oh, what a night! Charity clubbing",
    description:
      "Ali Barber Shop war am 24.08.2023 beim Oh, what a night! Charity clubbing im Kursalon Hübner 1010 Wien.",
    image:
      "https://alibarbershop.at/files/AliBarberShop-kiefer_sutherland-2.jpg",
  },
  {
    id: 5,
    title: "Oh, what a night! Charity clubbing",
    description:
      "Ali Barber Shop war am 24.08.2023 beim Oh, what a night! Charity clubbing im Kursalon Hübner 1010 Wien.",
    image: "https://alibarbershop.at/files/IMG-20220519-WA0072.jpg",
  },
  {
    id: 6,
    title: "Oh, what a night! Charity clubbing",
    description:
      "Ali Barber Shop war am 24.08.2023 beim Oh, what a night! Charity clubbing im Kursalon Hübner 1010 Wien.",
    image:
      "https://alibarbershop.at/files/8943B937-A836-4A6E-AC33-C8E27C124652_1_201_a-scaled.jpg",
  },
];

const News = () => {
  return (
    <div className="py-[80px] pb-[30px]">
      <div className="px-[15px] max-w-[1200px] mx-auto grid grid-cols-3 gpa-3">
        <div className="">
          <Heading text={"NEWS"} />
          <Paragraph text={" Check out our latest News"} />
          <Paragraph text={" News about our barbershop"} />
        </div>

        <div className="col-span-2">
          <Swiper
            modules={[Pagination]}
            spaceBetween={0}
            slidesPerView={2}
            slidesPerGroup={2}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span key={"${index}"} class="${className} custom-dot"></span>`;
              },
            }}
            className="w-full !pb-[50px]"
          >
            {newsItems.map((news) => (
              <SwiperSlide key={news.id} className="relative">
                <Link
                  href={"/news/slug-will-be-here-for-each-news-page-unique"}
                  className=""
                >
                  <div className="overflow-hidden pr-[5px] group">
                    <div className="max-h-[201px]  w-full  relative cursor-pointer overflow-hidden">
                      <div className="bg-black/30 absolute inset-0 z-[99]" />
                      <Image
                        src={news.image}
                        alt={news.title}
                        width={1000}
                        height={2000}
                        className="w-full group-hover:scale-[1.1] transition-all duration-500 ease-in-out h-[201px] object-cover"
                      />
                    </div>
                    <div className="pt-[25px] pr-[25px] bg-white">
                      <h3 className="text-[15px] uppercase font-roboto font-[600] leading-[22px] text-[#626262]">
                        {news.title}
                      </h3>
                      <p className="text-[14px] leading-[24px] text-[#626262] my-[3%]">
                        {news.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default News;
