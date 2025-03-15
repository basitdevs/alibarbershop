import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

const links = [
  {
    icon: <FaFacebookF className="group-hover:text-blue-600 transition-all duration-300 ease-in-out" />,
    link: "/",
  },
  {
    icon: <TfiYoutube className="group-hover:text-red-600 transition-all duration-300 ease-in-out" />,
    link: "/",
  },
  {
    icon: <FaInstagram className="group-hover:text-[#d62976] transition-all duration-300 ease-in-out" />,
    link: "/",
  },
];

const Social = () => {
  return (
    <div className="fixed top-[25%] left-0 z-[999]">
      {links.map((link, index) => (
        <Link
          href={link.link}
          key={index}
          target="_blank"
          className="bg-[#2d2d2d] group size-[50px] mb-[1px] text-white flex items-center justify-center text-[27px]"
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
