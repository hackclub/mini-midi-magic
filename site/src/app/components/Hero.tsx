"use client"
import { Lugrasimo } from 'next/font/google'

const lugrasimo = Lugrasimo({
  subsets: ['latin'],
  weight: ['400'],
})

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: 'url(/assets/bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='banner'>
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
                  src="/assets/controller.png"
                  alt="Custom MIDI Controller"
                  className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-lg transform transition-transform duration-300 animate-levitate transition-transform duration-300 animate-pulse"
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
        
        @keyframes bgZoomOut {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          90% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
          }
        }
        
        .animate-levitate {
          animation: levitate 4s ease-in-out infinite;
        }

        .banner {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .banner::before {
          content: '';
          position: fixed;
          top: 50%;
          left: 50%;
          width: 100vw;
          height: 100vh;
          background-image: url('/assets/bush.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          transform: translate(-50%, -50%) scale(1);
          transform-origin: center center;
          animation: bgZoomOut 5s ease-out forwards;
          z-index: 9999;
          pointer-events: none;
        }

        .banner > * {
          position: relative;
          z-index: 10000;
        }
      `}</style>
    </section>
  );
}; 