"use client"
import { PianoFooter } from "./components/PianoFooter";
import { Hero } from "./components/Hero";
import { ProcessSection } from "./components/path";
//import KitItemsCarousel from "./components/cpcarousel";
import { Footer } from "./components/Footer";
import { Waiting } from "./components/wait";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProcessSection />
     {/*<KitItemsCarousel />*/}
      <Waiting />
      <Footer />
    </div>
  );
}
