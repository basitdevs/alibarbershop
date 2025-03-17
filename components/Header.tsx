"use client";

import { useGlobalContext } from "@/context/GlobalContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
    link: "/#prices",
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

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => {
      const newState = !prev;
      return newState;
    });
  };

  const topLineVariants = {
    closed: { y: 0 },
    mid: { y: 5 },
    opened: { y: 5, rotate: 45 },
  };

  const middleLineVariants = {
    closed: { opacity: 1 },
    mid: { opacity: 0 },
    opened: { opacity: 0 },
  };

  const bottomLineVariants = {
    closed: { y: 0 },
    mid: { y: -8 },
    opened: { y: -8, rotate: -45 },
  };

  const lineTransition = {
    duration: 0.3,
  };

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
            <Link href={"/"} className="w-full relative z-[999]">
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
              className={`h-[25px] lg:block hidden ml-[33px] w-[1px] ${
                scrolled ? "bg-black/30" : "bg-white/50 "
              } `}
            />
          </div>
          <nav className="px-[15px] hidden lg:flex items-center justify-center ">
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
        <div className="lg:flex hidden">
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
        <div className="bg-black cursor-pointer flex lg:hidden items-center w-[44px] relative z-[999] h-[34px] rounded-[4px] justify-center">
          <button
            onClick={toggleMenu}
            className={`${
              isOpen && "mt-[3px]"
            } z-50 relative w-[24px] h-[15px]`}
          >
            <motion.span
              variants={topLineVariants}
              initial="closed"
              animate={isOpen ? ["mid", "opened"] : ["mid", "closed"]}
              transition={{ ...lineTransition, delay: isOpen ? 0 : 0.3 }}
              className="block absolute top-0 left-0 h-[1.8px] w-[24px] bg-white"
            />
            <motion.span
              variants={middleLineVariants}
              initial="closed"
              animate={isOpen ? "opened" : "closed"}
              transition={{ ...lineTransition, delay: isOpen ? 0 : 0.3 }}
              className="block absolute top-1/2 left-0 -translate-y-1/2 h-[1.8px] w-[24px] bg-white"
            />
            <motion.span
              variants={bottomLineVariants}
              initial="closed"
              animate={isOpen ? ["mid", "opened"] : ["mid", "closed"]}
              transition={{ ...lineTransition, delay: isOpen ? 0 : 0.3 }}
              className="block absolute bottom-0 left-0 h-[1.8px] w-[24px] bg-white"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 bg-black/90 text-white backdrop-blur-[10px] z-40 flex items-center justify-end px-6 py-9"
          >
            <div className="w-full">
              <nav>
                <ul className="flex flex-col items-center justify-center text-center">
                  {links.map((link, index) => (
                    <motion.li
                      initial={{ opacity: 0, x: 200 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 200 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                      key={index}
                      className="mx-[20px] my-[5px]"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link
                        href={link.link}
                        className={`text-[16px] leading-[1.75] hover:text-[#cacaca] uppercase transition-all ease-in-out duration-300 border-b-[1px]
                          
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
                    </motion.li>
                  ))}
                  <motion.li
                    initial={{ opacity: 0, y: 200 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 200 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.4 + links.length * 0.05,
                    }}
                    className="mt-[30px] w-full"
                  >
                    <button
                      onClick={() => toggleBooking()}
                      className={`border w-full font-roboto border-white text-black bg-white hover:bg-transparent hover:text-white cursor-pointer hover:scale-[1.05] transition-all ease-in-out duration-500 p-[8px] px-[17px] text-[18px] tracking-[4px] uppercase font-roboto font-bold `}
                    >
                      Book Now
                    </button>
                  </motion.li>
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
