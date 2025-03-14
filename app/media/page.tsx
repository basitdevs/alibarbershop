import Hero from "@/components/Media/Hero";
import ImageAndText from "@/components/Media/ImageAndText";
import ImageAndVideo from "@/components/Media/ImageAndVideo";
import Slider from "@/components/Media/MediaSlider";
import React from "react";

const Media = () => {
  return (
    <div>
      <Hero />
      <ImageAndText
        img="https://alibarbershop.at/files/Ali-Barberhomolka_web4.jpg"
        heading=" ALI BARBER SHOP Interview mit Port 41"
        description={`  Wenn Bart-Trimmen zum Erlebnis wird! <br />
              Mit einem kreativen Konzept, Fingerspitzengefühl und konsequenter
              Öffentlichkeitsarbeit hat Ali Kabalan Wiens vielleicht hippsten
              Barber-Shop aufgezogen. Der Ali Barber-Shop vereint das Flair
              eines englischen Clubs mit einem Hauch orientalischer
              Gastfreundschaft: Mit diesem Konzept setzt sich der gebürtige
              Libanese Ali Kabalan von seiner Konkurrenz ab. Dahinter stecken
              Traditionsbewusstsein, internationale Erfahrung und viel Freude am
              Beruf.`}
        button="zum vollständigen Interview"
      />
      <ImageAndText
        img="https://alibarbershop.at/files/talkaccino_60_artikel1-1.770x0.jpg"
        heading="ALI BARBER SHOP IM GESPRÄCH MIT TALKACCINO – DAS INTERVIEW-BLOG"
        description={`Ali Kabalan nennt sich Ali Barber und betreibt in Wien seinen eigenen Barbershop. Zu seinen Dienstleistungen zählen Frisuren, Rasuren und Färbungen – sowie die Ausbildung zum professionellen Barbier in seiner eigenen »Barbers Academy Vienna«. Aber auch für Events ist er als Live-Act buchbar, und so ist er beispielsweise bereits im Zuge von Diesel-Fashion-Shows oder auch Hugo-Boss-Pop-up-Stores aufgetreten, um Kunden live ein neues Styling zu verpassen.`}
        button="zum vollständigen Interview"
      />
      <ImageAndVideo />
      <Slider />
      <ImageAndText
        img="https://alibarbershop.at/files/WhatsApp-Image-2024-01-27-at-05.43.35.jpeg"
        heading="ALI BARBER SHOP bei ATV Reportage"
        description={`ATV Reportage beleuchtet den Alltag in Friseursalons
                      Ein bisschen Gossip für den Abend: Eine ATV Reportage zeigt das Leben der Friseurinnen und Friseure und taucht ein in das bunte Treiben heimischer Salons.
                      Das Fernsehteam vom TV-Format ATV Reportage besucht unterschiedlichste Friseursalons mit ihren Serviceangeboten und Ansichten zum Leben, zum Arbeiten und zur Branche.
                      <br  /><br  />
                      Wer Lust hat, schaut mit ATV einfach vorbei, z.B. beim „Ali Barber“ im 6. Wiener Bezirk. Beim gebürtigen Libanesen bekommen Männer das volle Programm, von der Rasur über Bartpflege und den Haarschnitt bis hin zum Augenbrauen-Service.
                      <span class="font-[700] block mt-[20px]">Zur Reportage</span>`}
      />
    </div>
  );
};

export default Media;
