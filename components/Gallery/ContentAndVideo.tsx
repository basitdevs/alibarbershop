"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className="py-[80px] ">
      <div className="max-w-[1200px] mx-auto px-[15px]">
        <div className="grid grid-cols-3 gap-[20px]">
          <div className="">
            <h2
              dangerouslySetInnerHTML={{ __html: title }}
              className="uppercase text-[40px] leading-[1.1] mb-6 font-[500] "
            ></h2>
            <p
              dangerouslySetInnerHTML={{ __html: desc }}
              className="text-[21px] leading-[1.4] font-[300] text-[#626262] mb-[20px]"
            ></p>
            {bookNow && (
              <Link
                href={"mailto:office@alibarbershop.at"}
                target="_blank"
                className="text-[11px] tracking-[3px] text-black border-[2px] px-[25px] py-[6px]  uppercase font-roboto font-[600] border-black"
              >
                Book Now
              </Link>
            )}
          </div>

          <div className="col-span-2">
            <div className="w-full m-[5px] relative">
              <video
                ref={videoRef}
                src={video}
                controls={isPlaying}
                muted
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className=" w-full object-cover"
              ></video>
              {!isPlaying && (
                <button
                  onClick={togglePlayPause}
                  className="absolute inset-1/2 group hover:scale-[1.1] transition-all duration-500 ease-in-out translate-x-[-50%] translate-y-[-50%] cursor-pointer z-[999] text-[30px] size-[60px] flex items-center justify-center border-[4px] border-white text-white p-3 rounded-full"
                >
                  <FaPlay className="ml-[5px]" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentAndVideo;
