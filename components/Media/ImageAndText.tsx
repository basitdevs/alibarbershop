import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    <div className="py-[80px] ">
      <div className="max-w-[1200px] mx-auto px-[15px]">
        <div className="grid grid-cols-3 gap-[20px]">
          <div className="">
            <h2 className="uppercase text-[40px] leading-[1.1] mb-6 font-[500] ">
              {heading}
            </h2>
            <p
              dangerouslySetInnerHTML={{ __html: description }}
              className="text-[21px] leading-[1.4] font-[300] text-[#626262] mb-[20px]"
            ></p>
            {button && (
              <Link href={link}>
                <button className=" font-roboto cursor-pointer hover:scale-[1.05] bg-black text-white hover:bg-transparent hover:text-black border-[2px]  transition-all ease-in-out duration-500 px-[35px] py-[18px] text-[18px]  uppercase  font-[600] ">
                  {button}
                </button>
              </Link>
            )}
          </div>
          <div className="col-span-2">
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
