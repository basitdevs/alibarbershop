import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Prices from "@/components/Prices";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <News />
      <About />
      <Prices />
      <Contact />
    </div>
  );
}
