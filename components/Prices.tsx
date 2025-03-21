"use client";

import Image from "next/image";
import React from "react";
import Heading from "./Common/Heading";
import { motion } from "framer-motion";

const prices = [
  {
    title: "Haircuts",
    services: [
      {
        name: "Cut",
        amount: "38€",
      },
      {
        name: "Gentlemen’s Cut",
        amount: "45€",
      },
    ],
    initial: {
      x: -300,
    },
    animate: { x: 0 },
  },
  {
    title: "Beards",
    services: [
      {
        name: "Ali Barber Beard Trim",
        amount: "35€",
      },
    ],
    initial: {
      y: -100,
    },
    animate: { y: 0 },
  },
  {
    title: "Combos",
    services: [
      {
        name: "Ali Barber Combo",
        amount: "65€",
      },
      {
        name: "Cut & Shave",
        amount: "65€",
      },
    ],
    initial: {
      x: 300,
    },
    animate: { x: 0 },
  },
  {
    title: "Shaves",
    services: [
      {
        name: "Italian Shave",
        amount: "35€",
      },
      {
        name: "Hitman Shave",
        amount: "35€",
      },
      {
        name: "Gentlemen’s Royal Shave",
        amount: "45€",
      },
    ],
    initial: {
      x: -300,
    },
    animate: { x: 0 },
  },
  {
    title: "Colouring",
    services: [
      {
        name: "Eyebrows/Eyelashes",
        amount: "12€",
      },
      {
        name: "Hair",
        amount: "from 35€",
      },
      {
        name: "Beard",
        amount: "from 35€",
      },
    ],
    initial: {
      y: 100,
    },
    animate: { y: 0 },
  },
  {
    title: "Cosmetics",
    services: [
      {
        name: "Plucking",
        amount: "12€",
      },
      {
        name: "Mask/Peeling",
        amount: "15€",
      },
      {
        name: "Waxing",
        amount: "14/20€",
      },
    ],
    initial: {
      x: 300,
    },
    animate: { x: 0 },
  },
];

const Prices = () => {
  return (
    <section id="prices">
      <div className="py-[20px] sm:py-[50px] md:py-[80px]">
        <div className="max-w-[1200px] mx-auto px-[20px] sm:px-[50px] ">
          <Heading text={"PRICES / PREISE"} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {prices.map((p, index) => (
              <motion.div
                initial={p.initial}
                whileInView={p.animate}
                transition={{duration:0.6, type:"spring", delay:index*0.03}}
                viewport={{once:true}}
                key={index}
                className="mt-[20px] mr-[20px] border-[1px] border-[#a5a5a5] p-[40px]"
              >
                <h4 className="text-[25px] leading-[30px] mb-[25px] uppercase">
                  {p.title}
                </h4>
                {p.services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-end justify-between text-[15px] pb-[18px] leading-[1] text-[#666]"
                  >
                    <p className="shrink-0">{service.name}</p>
                    <div className="w-full h-[1px] price-card-dots mb-[3px]"></div>
                    <p className="shrink-0">{service.amount}</p>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full">
        <Image
          src={
            "https://alibarbershop.at/dir/uploads/AliBarberShop_doppel3_2.jpg"
          }
          alt=""
          width={3000}
          height={5000}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Prices;
