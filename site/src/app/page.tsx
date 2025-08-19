"use client"
import { PianoFooter } from "./components/PianoFooter";
import { PianoNavbar } from "./components/PianoNavbar";
import { Hero } from "./components/Hero";
import { ProcessSection } from "./components/path";
import { KitSection } from "./components/path";
import KitItemsCarousel from "./components/cpcarousel";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProcessSection />
      <KitItemsCarousel />
      <PianoFooter />
    </div>
  );
}
