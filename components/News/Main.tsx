"use client";

import Link from "next/link";
import React from "react";
import Sidebar from "../Common/Sidebar";
import Video from "../Common/Video";
import Heading from "../Common/Heading";
import Paragraph from "../Common/Paragraph";

const Main = () => {
  return (
    <section className="py-[80px] ">
      <div className="max-w-[1200px] mx-auto px-[15px]">
        <div className="w-full grid grid-cols-3 ">
          <div className="col-span-2 w-full">
            <Heading
              text={` ALI BARBER for L'oreal bei
              <br /> <b>Game City Vienna - Rathaus 2023</b>`}
            />

            <div className="my-[50px] max-w-[740px]">
              <Video src="https://alibarbershop.at/files/Barberclub-Ali-Barber-for-Loreal-at-Game-City-Vienna-Rathaus-2023.mp4" />
            </div>
            <Paragraph
              text={` Ali Barber Shop war als Star-Barbier beim L'oreal in Game City
              Rathaus Vienna 2023.`}
            />
            <Paragraph
              text={`  Vom Gaming-Stuhl direkt zum Friseurstuhl - Die Game City Vienna
              hat vom 13. bis 15. Oktober 2023 nicht nur mit ihrer Vielfalt an
              Videospielen und technologischen Innovationen überzeugt, sondern
              auch mit einem einzigartigen Angebot, das die Besucher sowohl
              überrascht als auch begeistert hat. Unter den mehr als 110
              Ausstellern auf der über 15.000 Quadratmeter großen Messefläche im
              prächtigen Wiener Rathaus, hat sich ein Stand ganz besonders
              hervorgetan: Ali Barber, der als der "coolste Barbier der Stadt"
              bekannt ist.`}
            />
            <Paragraph
              text={`  Inmitten der digitalen Welten und futuristischen Erlebnisse sorgte
              Ali Barber für einen frischen Wind - oder besser gesagt, für
              frische Looks. Sein Angebot, den Besuchern der Game City Vienna
              eine professionelle und stylische Haar- und Bartpflege zu bieten,
              wurde zum Hit der Messe. Ali und sein Team bewiesen, dass Gaming
              und Style Hand in Hand gehen können.`}
            />
            <Paragraph
              text={`Neben traditionellen Gaming-Ausstellern und innovativen
              Technologie-Präsentationen fand sich auch L'Oréal Men unter den
              Teilnehmern. Ihre Präsenz zusammen mit Ali Barber zeigte, dass die
              Gaming-Community ein breites Spektrum an Interessen hat, das weit
              über das Spielen hinausgeht. Es geht auch um das persönliche
              Auftreten und das Wohlbefinden, wofür Ali Barber mit seiner
              Expertise stand.`}
            />
            <Paragraph
              text={` Ali Barbers Teilnahme an der Game City Vienna 2023 war ein klares
              Statement: Gaming ist mehr als nur ein Zeitvertreib; es ist eine
              Kultur, die Vielfalt und Stil zelebriert. Er hat gezeigt, dass in
              der Welt der Spiele auch Platz für die Kunst des Haarschnitts ist.
              Mit seiner Präsenz hat Ali Barber nicht nur für frische Looks
              gesorgt, sondern auch die Gaming-Community ein Stück weit
              zusammengebracht und gezeigt, dass bei wahren Gamern auch der
              persönliche Stil nicht zu kurz kommt.`}
            />
          </div>
          <div className="ml-[60px] px-[15px]">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
