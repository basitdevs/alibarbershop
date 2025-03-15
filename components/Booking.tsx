"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import TimeAndDate from "./TimeAndDate";

const steps = [
  {
    id: 1,
    text: "Barbers & Services",
  },
  {
    id: 2,
    text: "Date & Time",
  },
  {
    id: 3,
    text: "Details",
  },
  {
    id: 4,
    text: "Booked",
  },
];

const barbers = [
  {
    name: "Ali Barber",
    img: "https://alibarbershop.at/files/Ali-Barber.jpg",
  },
  {
    name: "Faisal Barber",
    img: "https://alibarbershop.at/files/Faisal-Barber.jpg",
  },
  {
    name: "Georgi Barber",
    img: "https://alibarbershop.at/files/Georgi-Barber.jpg",
  },
  {
    name: "Adel Barber",
    img: "https://alibarbershop.at/files/Adel-Barber.jpg",
  },
];

const services = [
  "GENTLEMAN'S CUT (wash, head massage, cut, blow dry & styling)",
  "CUT (wash, cut & styling)",
  "ALI BARBER BEARD TRIM ( english beard trim & beard care & brush blow dry)",
  "GENTLEMANS ROYAL SHAVE (with special facial treatment)",
  "ITALIAN SHAVE (complete classic hot towel shave)",
  "HITMAN SHAVE (head shave with razor)",
  "ALI BARBER COMBO (Cut & Ali Barber beard trim)",
  "COMBO CUT & SHAVE",
];

const Booking = () => {
  const [activeStep, setActiveStep] = useState(2);
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const handleBarberSelect = (barber: any) => {
    setSelectedBarber(barber);
  };

  const handleServiceSelect = (service: any) => {
    setSelectedService(service);
    setActiveStep(2);
  };

  return (
    <div className="fixed inset-0 z-[999] w-full h-full py-[40px] px-[20px] flex justify-center bg-black/60 overflow-hidden">
      <div className="p-[18px] overflow-y-auto h-fit rounded-[3px] border-2 border-black shadow-[0px_0px_30px_0px_rgba(2,2,2,1)] bg-white w-[60%] ">
        <div className="flex items-center justify-center mb-[20px]">
          <Image
            src={
              "https://alibarbershop.at/wp-content/uploads/2017/11/logo-dark.png"
            }
            alt="LOGO ALI BARBER SHOP"
            width={1000}
            height={500}
            className="max-w-[200px] w-full h-auto object-cover"
          />
        </div>
        <div className="mb-[20px] w-full grid grid-cols-4 gap-[4px]">
          {steps.map((step, index) => (
            <div key={index} className="">
              <p className="text-[#3f3f3f] font-[700] text-[14px]">
                {step.id}. {step.text}
              </p>
              <div
                className={`${
                  activeStep == step.id ? "bg-[#3f3f3f]" : "bg-[#bec3c7]"
                } bg-[#3f3f3f] h-[15px] mt-[5px] ${
                  index == steps.length - 1
                    ? "rounded-r-[5px]"
                    : " rounded-none"
                }  ${index == 0 ? "rounded-l-[5px]" : "rounded-none"} `}
              ></div>
            </div>
          ))}
        </div>

        {activeStep === 1 && (
          <div className="my-[20px]">
            {activeStep === 1 && !selectedBarber && (
              <>
                <h4 className="text-[20px] mb-[10px] font-[700] text-center">
                  Choose your Barber
                </h4>
                <div className="p-[10px] flex items-center flex-wrap justify-center">
                  {barbers.map((barber, index) => (
                    <div
                      key={index}
                      onClick={() => handleBarberSelect(barber)}
                      className="border-[5px] relative group border-white size-[135px] cursor-pointer rounded-full mr-[10px] mb-[20px] overflow-hidden text-[18px] text-white font-[400] "
                    >
                      <Image
                        src={barber.img}
                        alt={barber.name}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover absolute inset-0  group-hover:translate-x-[-100%] transition-all ease-in-out duration-300"
                      />
                      <Image
                        src={barber.img}
                        alt={barber.name}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover absolute inset-0  group-hover:translate-x-[0] translate-x-[100%] transition-all ease-in-out duration-300"
                      />
                      <div className="absolute inset-0 group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-500 w-full h-full bg-[#232323] border-[5px] border-[#3c3c3cfc] flex items-center justify-center rounded-full">
                        {barber.name}
                      </div>
                    </div>
                  ))}
                </div>{" "}
              </>
            )}

            {activeStep === 1 && selectedBarber && !selectedService && (
              <>
                <h4 className="text-[20px] mb-[10px] font-[700] text-center">
                  Service
                </h4>
                <div className="mb-[40px]">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      onClick={() => handleServiceSelect(service)}
                      className="bg-[#eaeaea] p-[10px] rounded-[5px] mb-[5px] cursor-pointer hover:bg-black hover:text-white hover:scale-[1.008] transition-all duration-500 ease-in-out"
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {activeStep == 2 && (
          <div className="">
            <div className="flex flex-col items-center justify-center text-center text-[#000000] font-[300] mb-[10px] text-[14px]">
              <p>
                Barber: <b className="font-[700]">Faisal Barber</b> | Service:{" "}
                <b className="font-[700]">
                  GENTLEMANS ROYAL SHAVE (with special facial treatment)
                </b>{" "}
                | Price: <b className="font-[700]">€45,00</b>
              </p>
              <p>Choose your appointment</p>
            </div>
            <TimeAndDate />
          </div>
        )}

        <div className="pt-[30px] mt-[20px] border-t border-[#c0c0c0]">
          <button className="bg-[#3f3f3f] text-white text-[18px] leading-[1] font-[700] cursor-pointer px-[30px] py-[10px] rounded-[4px]">
            Back
          </button>
          <p className="text-center text-[#626262] font-[300] mb-[10px] text-[14px]">
            Attention! If Online-Booking fails, please call us during our
            opening hours to book an appointment. <br />
            <span>
              Tel:{" "}
              <Link target="_blank" href={"tel:+43 1 92 92 150"}>
                +43 1 92 92 150
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
