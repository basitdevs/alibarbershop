"use client";

import { useGlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React from "react";

import { FaPhoneAlt } from "react-icons/fa";
import { HiMapPin } from "react-icons/hi2";

const MobileNav = () => {
  const { toggleBooking } = useGlobalContext();
  return (
    <div className="fixed md:hidden bottom-0 grid grid-cols-3  w-full h-[50px] bg-[#2d2d2d] text-white text-center text-[20px] leading-[50px] cursor-pointer shadow-[0_0_6px_0_rgba(0,0,0,0.4)] z-[999] transition-all duration-400 ease-in-out">
      <Link
        href={"tel:+4319292150"}
        className="flex items-center justify-center w-full  bg-[#2d2d2d] text-white text-[20px]"
      >
        <FaPhoneAlt />
      </Link>
      <button
        onClick={() => toggleBooking()}
        className="shadow-[0px_0px_6px_4px_rgba(0,0,0,0.32)] cursor-pointer uppercase text-white bg-black h-[50px] rounded-t-[10px] text-[20px] "
      >
        Book Now
      </button>
      <Link
        href={"tel:+4319292150"}
        className="flex items-center justify-center w-full  bg-[#2d2d2d] text-white text-[20px]"
      >
        <HiMapPin />
      </Link>
    </div>
  );
};

export default MobileNav;
