import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export const Waiting = () => {
  return (
    <section
      className="py-16 sm:py-24 md:py-32 relative overflow-hidden min-h-screen flex items-center text-white"
      style={{
        backgroundImage: "url(/assets/bgpath.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-150%);
          }
          100% {
            transform: translateX(250%);
          }
        }
        .shimmer-text {
          background: linear-gradient(90deg, #797d7a, #fff, #797d7a);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
          font-weight: bold;
          text-align: center;
        }
        @keyframes shimmer {
          to {
            background-position: 200% center;
          }
        }
      `}</style>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none z-10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-primary/8 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-accent/8 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8 sm:space-y-12">
          <div className="space-y-4 sm:space-y-6">
            <h2
              className="shimmer-text text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-gradient-to-r from-white via-primary to-accent bg-clip-text leading-tight"
              style={{
                fontFamily: "GingerBread, serif, Arial, sans-serif",
                letterSpacing: "0.08em",
                textShadow: "0 0 15px rgba(255,255,255,0.1)",
              }}
            >
              SO, WHAT ART THOU
              <br />
              WAITING FOR,
              <br />
              <span className="text-accent">WIZARD?</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          <div className="pt-4 gap-8 sm:pt-8">
            <Link
              href={"https://github.com/hackclub/mini-midi-magic"}
              target="_blank"
            >
              <Button className="bg-white text-black font-semibold w-full max-w-xs sm:max-w-sm md:w-auto md:max-w-none lg:min-w-96 xl:min-w-[500px] 2xl:min-w-[600px] h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-11 lg:px-16 xl:px-20 2xl:px-24 py-3 sm:py-3.5 text-lg sm:text-xl md:text-2xl hover:bg-white/95 hover:scale-102 transform transition-all duration-300 shadow-lg cursor-pointer">
                Get Started!
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
