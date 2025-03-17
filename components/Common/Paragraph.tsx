import React from "react";
import Fade from "../motion/Fade";

const Paragraph = ({ text }: { text: any }) => {
  return (
    <Fade>
      <p
        dangerouslySetInnerHTML={{ __html: text }}
        className="text-[16px] md:text-[21px] leading-[1.4] font-[300] text-[#626262] mb-6"
      ></p>
    </Fade>
  );
};

export default Paragraph;
