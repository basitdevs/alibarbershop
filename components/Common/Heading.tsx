import React from "react";

const Heading = ({ text }: { text: any }) => {
  return (
    <h2
      dangerouslySetInnerHTML={{ __html: text }}
      className="uppercase text-[40px] leading-[1.1] mb-6 font-[500] "
    ></h2>
  );
};

export default Heading;
