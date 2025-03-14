"use client";
import React, { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

const ImageAndVideo = () => {
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
            <h2 className="uppercase text-[40px] leading-[1.1] mb-6 font-[500] ">
              Ali Barbershop beim Kick-off der NFL-Saison auf Puls4!
            </h2>
            <p className="text-[21px] leading-[1.4] font-[300] text-[#626262] mb-[20px]">
              Walter, bekannt für seine Leidenschaft für American Football und
              charismatische Präsenz, entschied sich für eine radikale
              Veränderung, um die neue Saison gebührend zu feiern. “Schnipp
              Schnapp Haare ab!”, war sein Motto, als er sich vertrauensvoll in
              die Hände unseres Expertenteams begab.
            </p>
            <p className="text-[21px] leading-[1.4] font-[300] text-[#626262] mb-[20px]">
              Ali Barber, der Magier unter den Barbieren, nahm sich dieser
              Herausforderung an und zauberte aus Walter Reiterer den
              österreichischen Al Pacino. Mit präzisen Schnitten und einem Auge
              für Details verwandelten wir Walters Look in einen, der sowohl
              Eleganz als auch eine kühne Raffinesse ausstrahlt – perfekt
              passend zur aufregenden Atmosphäre der NFL-Saison.
            </p>
          </div>
          <div className="col-span-2">
            <div className="w-full m-[5px] relative">
              <video
                ref={videoRef}
                src="https://alibarbershop.at/files/ALibarbershop_nmedia2.mp4"
                controls={isPlaying}
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
            <div className="">
              <p className="text-[21px] leading-[1.4] font-[300] text-[#626262] my-[20px]">
                “Es ist immer ein Erlebnis, bei Ali Barbershop vorbeizuschauen.
                Nicht nur mein Haarschnitt ist erstklassig, sondern auch die
                gesamte Erfahrung. Ich fühle mich wie ein neuer Mann – bereit,
                die neue NFL-Saison zu erleben!”, sagte Walter nach seinem
                Frische-Upgrade.
              </p>
              <p className="text-[21px] leading-[1.4] font-[300] text-[#626262] mb-[20px]">
                Bei Ali Barbershop geht es nicht nur um Haarschnitte. Es geht um
                die Schaffung eines einzigartigen Erlebnisses, das Stil, Komfort
                und Persönlichkeit miteinander verbindet. Wir sind stolz darauf,
                Teil solch aufregender Ereignisse zu sein und freuen uns darauf,
                auch Sie bald in unserem Barbershop begrüßen zu dürfen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageAndVideo;
