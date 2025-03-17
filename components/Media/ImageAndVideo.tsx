"use client";
import React, { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import Heading from "../Common/Heading";
import Paragraph from "../Common/Paragraph";
import Video from "../Common/Video";
import FadeRight from "../motion/FadeRight";

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
    <div className="py-[14px] sm:py-[40px] md:py-[60px] ">
      <div className="max-w-[1200px] mx-auto px-[20px] md:px-[50px]">
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-[12px] md:gap-[20px]">
          <div className="">
            <Heading
              text={"Ali Barbershop beim Kick-off der NFL-Saison auf Puls4!"}
            />
            <Paragraph
              text={`Walter, bekannt für seine Leidenschaft für American Football und
              charismatische Präsenz, entschied sich für eine radikale
              Veränderung, um die neue Saison gebührend zu feiern. “Schnipp
              Schnapp Haare ab!”, war sein Motto, als er sich vertrauensvoll in
              die Hände unseres Expertenteams begab.`}
            />
            <Paragraph
              text={`Ali Barber, der Magier unter den Barbieren, nahm sich dieser
              Herausforderung an und zauberte aus Walter Reiterer den
              österreichischen Al Pacino. Mit präzisen Schnitten und einem Auge
              für Details verwandelten wir Walters Look in einen, der sowohl
              Eleganz als auch eine kühne Raffinesse ausstrahlt – perfekt
              passend zur aufregenden Atmosphäre der NFL-Saison.`}
            />
          </div>
          <div className="lg:col-span-2">
            <div className="w-full relative">
              <FadeRight delay={0.5}>
                <Video src="https://alibarbershop.at/files/ALibarbershop_nmedia2.mp4" />
              </FadeRight>
            </div>
            <div className="mt-[20px] md:mt-[30px]">
              <Paragraph
                text={`  “Es ist immer ein Erlebnis, bei Ali Barbershop vorbeizuschauen.
                Nicht nur mein Haarschnitt ist erstklassig, sondern auch die
                gesamte Erfahrung. Ich fühle mich wie ein neuer Mann – bereit,
                die neue NFL-Saison zu erleben!”, sagte Walter nach seinem
                Frische-Upgrade.`}
              />
              <Paragraph
                text={`Bei Ali Barbershop geht es nicht nur um Haarschnitte. Es geht um
                die Schaffung eines einzigartigen Erlebnisses, das Stil, Komfort
                und Persönlichkeit miteinander verbindet. Wir sind stolz darauf,
                Teil solch aufregender Ereignisse zu sein und freuen uns darauf,
                auch Sie bald in unserem Barbershop begrüßen zu dürfen.`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageAndVideo;
