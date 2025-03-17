import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import News from "@/components/News";
import Prices from "@/components/Prices";
import Social from "@/components/Social";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Hero />
      <News />
      <About />
      <Prices />
      <Contact />
      <Social />
    </main>
  );
}
