import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

const links = [
  {
    icon: (
      <FaFacebookF className="group-hover:text-blue-600 transition-all duration-300 ease-in-out" />
    ),
    link: "https://www.facebook.com/alibarbershop.at",
  },
  {
    icon: (
      <TfiYoutube className="group-hover:text-red-600 transition-all duration-300 ease-in-out" />
    ),
    link: "https://www.youtube.com/channel/UC3vCmD169pkjWcQNgxWcYdg",
  },
  {
    icon: (
      <FaInstagram className="group-hover:text-[#d62976] transition-all duration-300 ease-in-out" />
    ),
    link: "https://www.instagram.com/alibarbershop.at",
  },
];

const Social = () => {
  return (
    <div className="fixed top-[25%] left-0 z-[99]">
      {links.map((link, index) => (
        <Link
          href={link.link}
          key={index}
          target="_blank"
          className="bg-[#2d2d2d] group size-[45px] md:size-[50px] mb-[2px] text-white flex items-center justify-center text-[22px] md:text-[27px]"
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
