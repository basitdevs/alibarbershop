import React from "react";
import FadeUpTitle from "../motion/FadeUpTitle";

const Heading = ({ text }: { text: any }) => {
  return (
    <FadeUpTitle>
      <h2
        dangerouslySetInnerHTML={{ __html: text }}
        className="uppercase text-[40px] leading-[1.1] mb-6 font-[500] "
      ></h2>
    </FadeUpTitle>
  );
};

export default Heading;
