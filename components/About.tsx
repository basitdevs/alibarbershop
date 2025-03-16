"use client";

import React from "react";

import AboutSlider from "./AboutSlider";
import Image from "next/image";
import Heading from "./Common/Heading";
import Paragraph from "./Common/Paragraph";

const aboutImgs = [
  "https://alibarbershop.at/files/4V7A009696-1.jpg",
  "https://alibarbershop.at/files/4V7A009696.jpg",
  "https://alibarbershop.at/files/4V7A009696-2.jpg",
];
const aboutImgs2 = [
  "https://alibarbershop.at/files/4V7A0026.jpg",
  "https://alibarbershop.at/files/4V7A9996.jpg",
  "https://alibarbershop.at/files/4V7A9961.jpg",
  "https://alibarbershop.at/files/4V7A0144.jpg",
];

const About = () => {
  return (
    <section id="about" className="py-[20px] sm:py-[50px] md:py-[80px] bg-[#f5f5f5] ">
      <div className="max-w-[1200px] mx-auto px-[20px] sm:px-[50px] flex flex-col gap-5">
        <div className=" grid grid-cols-1 md:grid-cols-3">
          <div className="pr-8">
            <Heading text={` ABOUT US / <br /> ÜBER UNS`} />
            <Paragraph
              text={
                "The Ali Barber Shop is the first of its kind in Vienna and was opened in 2017 by Ali Barber a popular scene Barber from Vienna/Austria."
              }
            />
            <Paragraph
              text={`The Ali Barber Shop is the first of its kind in Vienna. Founded in
              early 2017 by Ali Barber, a well-known barber from Vienna,
              Austria.`}
            />
          </div>
          <div className="md:col-span-2">
            <AboutSlider images={aboutImgs} index={1} />
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3">
          <div className="pr-8">
            <Paragraph
              text={`The Ali Barber Shop´s concept is unique and offers the client a
              top service in an original english ambience with a touch of
              oriental atmosphere.`}
            />
            <Paragraph
              text={`Das Ali Barber Shop Konzept ist einzigartig und bietet dem Kunden
              ein Top-Service in einem original englischen Ambiente mit einem
              Touch orientalischer Atmosphäre.`}
            />
          </div>
          <div className="md:col-span-2">
            <Image
              src={"https://alibarbershop.at/files/2016/01/4V7A4375.png"}
              alt=""
              width={2000}
              height={1500}
              className="h-[500px] w-full object-cover"
            />
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3">
          <div className="pr-8">
            <Paragraph
              text={`  A visit for a hair- or beardtrim should be a positive experience
              at Ali Barber’s Shop. The clients should enjoy their waiting time
              while playing carambol.`}
            />
            <Paragraph
              text={` Ein Besuch für ein Haar- und Bartservice wird im Ali Barber Shop
              zu einem Erlebnis. Die Kunden genießen ihre Wartezeit während
              einem Karambolspiel.`}
            />
          </div>
          <div className="md:col-span-2">
            <AboutSlider images={aboutImgs2} index={2} />
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3">
          <div className="pr-8">
            <Paragraph
              text={` Ali Barber Shop sells the best products for Hair & Beards from
              Holland, USA and Italy. Additional Services as beards & hair
              colouring, manicure & waxing are also available.`}
            />

            <Paragraph
              text={` Im Ali Barbershop finden Sie die besten Haar- und Bartprodukte aus
              Holland, USA und Italien. Zusätzliches Service wie Bart & Haare
              färben, Maniküre & Wachsen gibt es bei uns auch.`}
            />
            <Paragraph
              text={`  Our goal is it to fulfill all your wishes. Alle Ihre Wünsche zu
              erfüllen ist unser Ziel.`}
            />
            <Paragraph text={`Cheers`} />
            <Paragraph text={` Ali Barber`} />
          </div>
          <div className="md:col-span-2">
            <Image
              src={
                "https://alibarbershop.at/files/IMG_20210913_163533_edit_2859807954558412.jpg"
              }
              alt=""
              width={2000}
              height={1500}
              className="h-[500px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
