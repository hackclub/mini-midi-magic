"use client"
import Link from "next/link";
import { Button } from "./ui/button";
import { Lugrasimo } from 'next/font/google'

const lugrasimo = Lugrasimo({
  subsets: ['latin'],
  weight: ['400'],
})

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: 'url(/assets/bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-led-blue/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center min-h-[80vh]">
            <div className="mb-8">
              <img 
                src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/e396c73e160421b1cec3300f7b80a3b79cd2a996_controller.png"
                alt="Custom MIDI Controller"
                className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-lg transform transition-transform duration-300 animate-levitate"
              />
            </div>


            <div>
              <img 
                src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/9dd56d0fe2fb209279350974d028137fb179e9ee_mini_midi_magic.svg"
                alt="Mini Midi Magic"
                className="w-auto max-w-md md:max-w-lg mx-auto mb-6 animate-glow"
              />
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                Design your custom MIDI controller from scratch
              </p>

            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes levitate {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
          100% {
            transform: translateY(0);
          }
        }
        
        .animate-levitate {
          animation: levitate 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};