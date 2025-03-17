"use client";

import Link from "next/link";
import React from "react";
import Video from "../Common/Video";
import Sidebar from "../Common/Sidebar";
import Paragraph from "../Common/Paragraph";
import FadeUp from "../motion/FadeUp";
import FadeRight from "../motion/FadeRight";

const Main = () => {
  return (
    <section className="py-[20px] mt-[30px] md:mt-0 sm:py-[50px] md:py-[80px] ">
      <div className="max-w-[1200px] mx-auto px-[20px] md:px-[50px]">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 ">
          <div className="md:col-span-2 w-full flex flex-col justify-center text-center">
            <div className="max-w-[750px] w-full mx-auto mb-[50px]">
              <FadeUp>
                <Video src="https://alibarbershop.at/files/Barbers-Academy-Seminar-3.mp4" />
              </FadeUp>
            </div>
            <Paragraph
              text={`Book a seminar at the first Barbers Academy in Vienna by Ali
              Barber Shop and Team Wagner Hair.`}
            />
            <Paragraph
              text={`Book a seminar at the first Barbers Academy in Vienna, run by Ali
              Barber Shop together with Team Wagner Hair.`}
            />
            <div className="flex items-center justify-center">
              <FadeUp delay={0.3}>
                <Link
                  href={"#"}
                  className="text-[11px] tracking-[3px] hover:bg-black hover:text-white hover:scale-[1.05] transition-all duration-300 ease-in-out  text-black border-[2px] px-[25px] py-[6px]  uppercase font-roboto font-[600] border-black"
                >
                  Book Your Seminar Now
                </Link>
              </FadeUp>
            </div>
            <div className="max-w-[750px] w-full mx-auto mt-[50px]">
              <FadeUp delay={0.5}>
                <Video src="https://alibarbershop.at/files/Barbers_Academy_01.mp4" />
              </FadeUp>
            </div>
          </div>
          <div className="md:ml-[60px] mt-[40px] md:mt-0 md:px-[15px]">
            <FadeRight delay={0.6}>
              <Sidebar />
            </FadeRight>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
