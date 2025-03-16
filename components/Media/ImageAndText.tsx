import Image from "next/image";
import Link from "next/link";
import React from "react";
import Heading from "../Common/Heading";
import Paragraph from "../Common/Paragraph";

const ImageAndText = ({
  heading,
  description,
  button,
  img,
  link = "#",
}: {
  heading: string;
  description: any;
  button?: string;
  img: string;
  link?: string;
}) => {
  return (
    <div className="py-[20px] sm:py-[50px] md:py-[80px] ">
      <div className="max-w-[1200px] mx-auto px-[20px] md:px-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
          <div className="">
            <Heading text={heading} />
            <Paragraph text={description} />

            {button && (
              <Link href={link}>
                <button className=" font-roboto cursor-pointer hover:scale-[1.05] bg-black text-white hover:bg-transparent hover:text-black border-[2px]  transition-all ease-in-out duration-500 px-[25px] md:px-[35px] py-[15px] md:py-[18px] text-[16px] md:text-[18px]  uppercase  font-[600] ">
                  {button}
                </button>
              </Link>
            )}
          </div>
          <div className="lg:col-span-2">
            <div className="w-full m-[5px]">
              <Image
                src={img}
                alt=""
                width={2000}
                height={2000}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageAndText;
