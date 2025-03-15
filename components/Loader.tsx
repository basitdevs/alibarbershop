import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="h-screen w-full fixed inset-0 bg-[#fefefe] z-[99999] flex items-centere justify-center">
      <Image
        src={"https://alibarbershop.at/dir/uploads/3108449.gif"}
        alt="LOADER"
        width={1000}
        height={1000}
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default Loader;
