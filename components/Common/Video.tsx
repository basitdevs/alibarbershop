"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

const Video = ({ src }: { src: string }) => {
  const videoSrc = src;
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const generateThumbnail = () => {
      const video = document.createElement("video");
      video.src = videoSrc;
      video.crossOrigin = "anonymous"; // Prevent CORS issues
      video.preload = "metadata";

      video.onloadeddata = () => {
        video.currentTime = 1; // Capture frame at 1 second
      };

      video.onseeked = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (ctx) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          setThumbnail(canvas.toDataURL("image/jpeg")); // Convert to Base64
        }
      };
    };

    generateThumbnail();
  }, [videoSrc]);

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
    <div className="relative">
      {!isPlaying && thumbnail ? (
        <img
          src={thumbnail}
          alt="Video Thumbnail"
          className="absolute w-full h-full object-cover cursor-pointer"
          onClick={togglePlayPause}
        />
      ) : null}
      <video
        ref={videoRef}
        src={src}
        controls={isPlaying}
        muted
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="w-full object-cover"
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
