import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="h-screen w-full fixed inset-0 bg-[#fefefe] z-[99999] flex items-center justify-center">
      <div className="max-w-[60px] md:max-w-[100px] w-full">
        <Image
          src={"https://alibarbershop.at/dir/uploads/3108449.gif"}
          alt="LOADER"
          width={1000}
          height={1000}
          className="w-full h-auto object-contain "
        />
      </div>
    </div>
  );
};

export default Loader;
