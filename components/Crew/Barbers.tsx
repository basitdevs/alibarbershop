import Image from "next/image";
import React from "react";

const ImageComponet = ({
  src,
  name,
  designation,
}: {
  src: string;
  name: string;
  designation: string;
}) => (
  <div className="relative overflow-hidden group">
    <Image
      src={src}
      alt=""
      width={1000}
      height={3000}
      className="w-full h-auto object-cover transition-all duration-500 ease-in-out group-hover:grayscale-100"
    />
    <div className="w-[80%] mx-auto bg-white/90 text-black absolute left-0 right-0  transition-all duration-500 ease-in-out group-hover:translate-y-0 translate-y-[200px] bottom-[50px] p-[8%]">
      <h4 className="text-[20px] leading-[1.5]  uppercase font-[600] font-roboto tracking-[1px]">
        {name}
      </h4>
      <p className="text-[15px] leading-[1.5] uppercase font-roboto  tracking-[2px]">
        {designation}
      </p>
    </div>
  </div>
);

const Barbers = () => {
  return (
    <div className="py-[50px]">
      <div className="max-w-[1400px] mx-auto px-[15px]">
        <div className="flex justify-center">
          <div className="w-[24%] mr-[20px] m-[5px]">
            <ImageComponet
              src="https://alibarbershop.at/files/2018/01/DSC_0078.jpg"
              name="Ali Barber"
              designation="The Boss"
            />
          </div>
          <div className="w-[25%] mr-[20px] m-[5px] flex flex-col gap-[24px]">
            <ImageComponet
              src="https://alibarbershop.at/files/Faisal-Barber-Copy.jpg"
              name="Faisal"
              designation="Barber"
            />
            <ImageComponet
              src="https://alibarbershop.at/files/Georgi-Barber-2.jpg"
              name="Georgi"
              designation="Barber"
            />
          </div>
          <div className="w-[25%] mr-[20px] m-[5px] flex flex-col gap-[24px]">
            <ImageComponet
              src="https://alibarbershop.at/files/Adel-Barber.jpg"
              designation="Barber"
              name="Adel"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Barbers;
