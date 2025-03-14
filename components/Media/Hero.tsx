import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative pt-[76px]">
      <Image
        src={"https://alibarbershop.at/files/4V7A__3155.jpg"}
        alt=""
        width={3000}
        height={2000}
        className="w-full h-full object-cover object-top absolute inset-0 z-[1]"
      />
      <div className="bg-[#1d2127]/90 w-full h-full inset-0 z-[2] absolute" />
      <div className="max-w-[1200px] mx-auto px-[15px] flex flex-col items-center justify-center text-center relative z-[3] h-[280px] ">
        <h2 className="text-white text-[50px] leading-[55px] font-roboto font-[600]  uppercase">
          Media
        </h2>
      </div>
    </div>
  );
};

export default Hero;
