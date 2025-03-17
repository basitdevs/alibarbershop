"use client";

import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";



const Video = ({ src }: { src: string }) => {
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
      <div className=" relative">
        <video
          ref={videoRef}
          src={src}
          controls={isPlaying}
          muted
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className=" w-full object-cover"
        ></video>
        {!isPlaying && (
          <button
            onClick={togglePlayPause}
            className="absolute inset-1/2 group hover:scale-[1.1] transition-all duration-500 ease-in-out translate-x-[-50%] translate-y-[-50%] cursor-pointer z-[9] text-[30px] size-[60px] flex items-center justify-center border-[4px] border-white text-white p-3 rounded-full"
          >
            <FaPlay className="ml-[5px]" />
          </button>
        )}
      </div>
  );
};

export default Video;
