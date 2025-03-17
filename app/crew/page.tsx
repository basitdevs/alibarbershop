import BreadCumb from "@/components/Common/BreadCumb";
import Hero from "@/components/Common/Hero";
import Barbers from "@/components/Crew/Barbers";
import React from "react";

const Crew = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero
        title="Crew"
        img="https://alibarbershop.at/files/2017/12/DSC_0120.jpg"
        desc="Ali Barber Shop Team"
      />
      <BreadCumb text="CREW" />
      <Barbers />
    </main>
  );
};

export default Crew;
