import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="bg-[url('https://alibarbershop.at/files/2017/11/footer.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-[1200px] mx-auto px-[20px] sm:px-[50px]  ">
        <div className="py-[5%] border-b-[1px] border-[#e5e5e5]">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2 flex items-center md:justify-start justify-center flex-wrap gap-[14px] md:gap-[37px]">
              <Link
                target="_blank"
                className="text-[#f9f9f9] text-[22px]"
                href={"https://www.facebook.com/alibarbershop.at"}
              >
                <FaFacebookF />
              </Link>
              <Link
                target="_blank"
                className="text-[#f9f9f9] text-[22px]"
                href={
                  "https://www.youtube.com/channel/UC3vCmD169pkjWcQNgxWcYdg"
                }
              >
                <TfiYoutube />
              </Link>
              <Link
                target="_blank"
                className="text-[#f9f9f9] text-[22px]"
                href={"https://www.instagram.com/alibarbershop.at"}
              >
                <FaInstagram />
              </Link>
              <span className="text-[#626262]">|</span>
              <Link
                href={"#"}
                className="text-[13px] leading-[23px] text-white"
              >
                Datenschutz
              </Link>
              <span className="text-[#626262]">|</span>
              <Link
                href={"#"}
                className="text-[13px] leading-[23px] text-white"
              >
                Impressum
              </Link>
              <span className="text-[#626262]">|</span>
              <Link
                href={"#"}
                className="text-[13px] leading-[23px] text-white"
              >
                Jobs
              </Link>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <Link href={"/"} className="">
                <Image
                  src={"https://alibarbershop.at/files/2018/12/Ali_v1W.png"}
                  alt="LOGO"
                  width={1000}
                  height={500}
                  className="h-full max-h-[37px] w-auto"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="py-[22px] pb-[70px] md:pb-[30px] md:py-[30px] flex items-center justify-center text-center">
          <p className="text-[11px] leading-[20px] text-[#626262] uppercase font-roboto">
            © 2025 Ali Barber Shop. All Rights Reserved. - Website:{" "}
            <span>
              <Link href={"https://waminox.com/"} target="_blank" className="text-white/60">
                Waminox
              </Link>
            </span>{" "}
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
