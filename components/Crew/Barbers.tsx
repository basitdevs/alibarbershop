"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ImageComponet = ({
  src,
  name,
  designation,
  delay,
}: {
  src: string;
  name: string;
  designation: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ y: 100, opacity: 0 }}
    whileInView={{
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: delay,
        type: "spring",
      },
    }}
    viewport={{ once: true }}
    className="relative overflow-hidden group"
  >
    <Image
      src={src}
      alt=""
      width={1000}
      height={3000}
      className="w-full h-auto object-cover transition-all duration-500 ease-in-out group-hover:grayscale-100"
    />
    <div className="w-[80%] mx-auto bg-white/90 text-black absolute left-0 right-0  transition-all duration-500 ease-in-out group-hover:translate-y-0 translate-y-[200px] bottom-0 md:bottom-[50px] p-[8%]">
      <h4 className="text-[20px] leading-[1.5]  uppercase font-[600] font-roboto tracking-[1px]">
        {name}
      </h4>
      <p className="text-[15px] leading-[1.5] uppercase font-roboto  tracking-[2px]">
        {designation}
      </p>
    </div>
  </motion.div>
);

const Barbers = () => {
  return (
    <div className="py-[20px] md:py-[50px]">
      <div className="max-w-[1400px] mx-auto px-[20px]">
        <div className="flex flex-col gap-[12px] md:gap-0 md:flex-row justify-center">
          <div className="md:w-[24%] md:mr-[20px] md:m-[5px]">
            <ImageComponet
              src="https://alibarbershop.at/files/2018/01/DSC_0078.jpg"
              name="Ali Barber"
              designation="The Boss"
              delay={0}
            />
          </div>
          <div className="md:w-[25%] md:mr-[20px] md:m-[5px] flex flex-col gap-[12px] md:gap-[24px]">
            <ImageComponet
              src="https://alibarbershop.at/files/Faisal-Barber-Copy.jpg"
              name="Faisal"
              designation="Barber"
              delay={0.3}
            />
            <ImageComponet
              src="https://alibarbershop.at/files/Georgi-Barber-2.jpg"
              name="Georgi"
              designation="Barber"
              delay={0.4}
            />
          </div>
          <div className="md:w-[25%] md:mr-[20px] md:m-[5px] flex flex-col gap-[12px] md:gap-[24px]">
            <ImageComponet
              src="https://alibarbershop.at/files/Adel-Barber.jpg"
              designation="Barber"
              name="Adel"
              delay={0.6}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Barbers;
