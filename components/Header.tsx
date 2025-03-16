"use client";

import { useGlobalContext } from "@/context/GlobalContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const links = [
  {
    title: "home",
    link: "/",
  },
  {
    title: "about",
    link: "/#about",
  },
  {
    title: "prices",
    link: "/#",
  },
  {
    title: "crew",
    link: "/crew",
  },
  {
    title: "media",
    link: "/media",
  },
  {
    title: "gallery",
    link: "/gallery",
  },
  {
    title: "academy",
    link: "/academy",
  },
  {
    title: "contact",
    link: "/#contact",
  },
];

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { toggleBooking } = useGlobalContext();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full pb-[3px]  fixed ${
        scrolled ? "text-black bg-white " : "text-white bg-transparent  "
      } top-0 left-0 right-0 min-h-[50px] border-b-[1px] border-white/15 z-[99]`}
    >
      <div className="h-[75px] w-full mx-auto max-w-[1200px] flex items-center justify-between gap-3 px-[15px]">
        <div className="flex items-center ">
          <div className=" flex items-center ">
            <Link href={"/"} className="w-full">
              <Image
                src={"https://alibarbershop.at/files/2018/12/Ali_v1W.png"}
                alt=""
                width={500}
                height={300}
                objectFit="cover"
                className={`w-full ${
                  scrolled && "brightness-[0]"
                } h-full max-h-[44px] object-cover`}
              />
            </Link>
            <div
              className={`h-[25px] ml-[33px] w-[1px] ${
                scrolled ? "bg-black/30" : "bg-white/50 "
              } `}
            />
          </div>
          <nav className="px-[15px] flex items-center justify-center ">
            <ul className="flex items-center justify-center">
              {links.map((link, index) => (
                <li key={index} className="mx-[20px] my-[15px]">
                  <Link
                    href={link.link}
                    className={`text-[12px] leading-[1.75] hover:text-[#cacaca] uppercase transition-all ease-in-out duration-300 border-b-[1px]
                      
                      ${
                        pathname === link.link
                          ? scrolled
                            ? "border-black "
                            : "border-white "
                          : "border-transparent "
                      } pb-[3px] `}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="">
          <Link href={"#"}>
            <button
              onClick={() => toggleBooking()}
              className={`border font-roboto  ${
                scrolled
                  ? "border-black text-white bg-black hover:bg-transparent hover:text-black "
                  : "border-white text-white hover:bg-white hover:text-black  "
              } cursor-pointer hover:scale-[1.05] transition-all ease-in-out duration-500 p-[12px] px-[17px] text-[20px] tracking-[5px] uppercase font-roboto font-bold `}
            >
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
