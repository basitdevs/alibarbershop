"use client";

import { useState } from "react";
import Image from "next/image";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";
import { useGlobalContext } from "@/context/GlobalContext";

const slides = [
  {
    id: 1,
    type: "video",
    src: "https://alibarbershop.at/files/Ali-Barber-Shop-Promo_2019-2.mp4",
    title: "THE COOLEST BARBERSHOP IN VIENNA",
    description: "This is the first slide with a background video.",
    button: true,
  },
  {
    id: 2,
    type: "image",
    src: "https://alibarbershop.at/files/2017/11/slide-5-fs.jpg",
  },
  {
    id: 3,
    type: "image",
    src: "https://alibarbershop.at/files/2017/11/slide-9-fs@2x.jpg",
    title: "BEARD SPECIALISTS",
  },
  {
    id: 4,
    type: "image",
    src: "https://alibarbershop.at/files/DSC_3234.jpg",
  },
  {
    id: 5,
    type: "image",
    src: "https://alibarbershop.at/files/2016/01/DSC_0367.jpg",
  },
  {
    id: 6,
    type: "image",
    src: "https://alibarbershop.at/files/AliBarberShop_Fotos-21.jpg",
  },
  {
    id: 7,
    type: "image",
    src: "https://alibarbershop.at/files/cover.jpg",
  },
  {
    id: 8,
    type: "image",
    src: "https://alibarbershop.at/files/DSC_3227.jpg",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const { toggleBooking } = useGlobalContext();
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {slide.type === "video" ? (
            <video
              className="w-full h-full object-cover"
              src={slide.src}
              autoPlay
              loop
              muted
            />
          ) : (
            <div className="w-full h-full relative">
              <Image
                src={slide.src}
                alt={slide.title || "SLIDER IMAGE"}
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}
          <div
            style={{ textShadow: "2px 2px 6px #ffffff00" }}
            className="absolute z-[9] inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-4"
          >
            {slide.title && (
              <h2 className="text-[36px] leading-[1.3] font-bitter text-white font-bold tracking-[4.3px] uppercase max-w-[620px]  mb-4">
                {slide.title}
              </h2>
            )}
            {slide.description && (
              <p className="text-[26px] font-bitter text-white  max-w-[620px]">
                {slide.description}
              </p>
            )}
            {slide.button && (
              <Link href={"#"} onClick={() => toggleBooking()}>
                <button className="border font-roboto  border-white text-white mt-8 mb-4 cursor-pointer hover:scale-[1.05] hover:bg-white hover:text-black transition-all ease-in-out duration-500 p-[17px] text-[20px] tracking-[5px] uppercase font-roboto font-bold ">
                  Book Now
                </button>
              </Link>
            )}
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute z-[99] top-1/2 left-6 text-[50px] cursor-pointer transform -translate-y-1/2 text-white "
      >
        <MdArrowBackIos />
      </button>
      <button
        onClick={nextSlide}
        className="absolute z-[99] top-1/2 right-6 text-[50px] cursor-pointer transform -translate-y-1/2 text-white "
      >
        <MdArrowForwardIos />
      </button>
    </div>
  );
};

export default Hero;
