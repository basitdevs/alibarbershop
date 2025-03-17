import Link from "next/link";
import React from "react";
import Heading from "../Common/Heading";
import Paragraph from "../Common/Paragraph";
import Video from "../Common/Video";
import FadeUp from "../motion/FadeUp";
import FadeRight from "../motion/FadeRight";

const ContentAndVideo = ({
  video,
  title,
  desc,
  bookNow,
}: {
  video: string;
  title: any;
  desc: any;
  bookNow?: boolean;
}) => {
  return (
    <div className="py-[14px] sm:py-[40px] md:py-[60px] ">
      <div className="max-w-[1200px] mx-auto px-[20px] md:px-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-[20px]">
          <div className="">
            <Heading text={title} />
            <Paragraph text={desc} />
            {bookNow && (
              <div className="mb-[30px]">
                <FadeUp delay={0.4}>
                  <Link
                    href={"mailto:office@alibarbershop.at"}
                    target="_blank"
                    className="text-[11px]  tracking-[3px] text-black hover:bg-black hover:text-white hover:scale-[1.05] transition-all duration-300 ease-in-out  border-[2px] px-[25px] py-[6px]  uppercase font-roboto font-[600] border-black"
                  >
                    Book Now
                  </Link>
                </FadeUp>
              </div>
            )}
          </div>

          <div className="md:col-span-2 w-full overflow-hidden">
            <FadeRight delay={0.5}>
              <Video src={video} />
            </FadeRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentAndVideo;
