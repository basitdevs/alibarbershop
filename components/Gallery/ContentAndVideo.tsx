"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import Heading from "../Common/Heading";
import Paragraph from "../Common/Paragraph";
import Video from "../Common/Video";

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
    <div className="py-[20px] sm:py-[50px] md:py-[80px] ">
      <div className="max-w-[1200px] mx-auto px-[20px] md:px-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
          <div className="">
            <Heading text={title} />
            <Paragraph text={desc} />
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

          <div className="md:col-span-2">
            <div className="w-full relative">
              <Video src={video} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentAndVideo;
