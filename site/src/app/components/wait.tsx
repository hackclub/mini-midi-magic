import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

export const Waiting = () => {
  return (
    <section 
      className="py-32 relative overflow-hidden min-h-screen flex items-center text-white" 
      style={{ 
        backgroundImage: 'url(/assets/bgpath.png)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-primary/8 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-accent/8 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-gradient-to-r from-white via-primary to-accent bg-clip-text leading-tight" 
              style={{ 
                fontFamily: 'GingerBread, serif, Arial, sans-serif', 
                letterSpacing: '0.08em',
                textShadow: '0 0 15px rgba(255,255,255,0.1)'
              }}
            >
              SO, WHAT ART THOU
              <br />
              WAITING FOR,
              <br />
              <span className="text-accent">WIZARD?</span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-2xl mx-auto">
            Go create your whimsical board and play the sacred hymns below lord orpheus.
          </p>

          <div className="pt-8">
            <Button 
              className="bg-white text-black font-semibold px-11 py-3.5 text-lg hover:bg-white/95 hover:scale-102 transform transition-all duration-300 shadow-lg cursor-pointer"
            >
              Guide
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="pt-16">
            <ArrowDown className="w-8 h-8 text-white/50 mx-auto animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};