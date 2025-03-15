import Link from "next/link";
import React from "react";

const list = [
  {
    text: "UPCOMING: Oh, what a night! Charity clubbing",
    link: "/",
  },
  {
    text: "Ali Barber for L’oreal at Game City Vienna",
    link: "/",
  },
  {
    text: "Oh, what a night! Charity clubbing",
    link: "/",
  },
  {
    text: "Breitling meets Ali Barber Shop",
    link: "/",
  },
  {
    text: "6-jähriges Jubiläum & Charity Event",
    link: "/",
  },
];


const sitemap = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "About",
    link: "/",
  },
  {
    text: "Prices",
    link: "/",
  },
  {
    text: "Contact",
    link: "/",
  },
  {
    text: "Crew",
    link: "/",
  },
  {
    text: "Academy",
    link: "/",
  },
  {
    text: "Jobs",
    link: "/",
  },
  {
    text: "Gallery",
    link: "/",
  },
  {
    text: "Book Now",
    link: "/",
  },
];


const Sidebar = () => {
  return (
    <div className="w-full">
      <div className="mb-[65px]">
        <h4 className="text-[#373737] text-[15px] leading-[22px]  font-roboto font-[600] uppercase">
          News
        </h4>
        <div className="bg-[#fdd947] h-[4px] w-[30px] my-[7%]"></div>
        <ul>
          {list.map((item, index) => (
            <li
              key={index}
              className={`text-[#626262] pb-[12px] ${
                index == list.length - 1 ? "" : "border-b border-[#e5e5e5]"
              } mb-[10px]`}
            >
              <Link
                href={item.link}
                className="text-[12px] hover:text-[#272727] transition-all ease-in-out duration-300 uppercase leading-[1.6] tracking-[1px]"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>


      <div className="mb-[65px]">
        <h4 className="text-[#373737] text-[15px] leading-[22px]  font-roboto font-[600] uppercase">
          Sitemap
        </h4>
        <div className="bg-[#fdd947] h-[4px] w-[30px] my-[7%]"></div>
        <ul>
          {sitemap.map((item, index) => (
            <li
              key={index}
              className={`text-[#626262] pb-[12px] border-b border-[#e5e5e5] mb-[10px]`}
            >
              <Link
                href={item.link}
                className="text-[12px] hover:text-[#272727] transition-all ease-in-out duration-300 uppercase leading-[1.6] tracking-[1px]"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
