import Link from "next/link";
import React from "react";
import FadeLeft from "../motion/FadeLeft";

const BreadCumb = ({ text }: { text: string }) => {
  return (
    <div className="py-[10px] bg-white border-[1px] border-[#e5e5e5] mb-5 ">
      <div className="max-w-[1200px] mx-auto px-[15px] text-[#626262]">
        <FadeLeft>
          <div className="flex items-center gap-[15px]">
            <Link href={"/"} className="uppercase text-[12px] ">
              Home
            </Link>
            <div className="bg-[#898989] w-[1px] h-[9px]"></div>
            <p className="uppercase text-[12px] ">{text}</p>
          </div>
        </FadeLeft>
      </div>
    </div>
  );
};

export default BreadCumb;
