"use client";
import Link from "next/link";
export const Hero = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url(/assets/bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="midiorpheus-nav">
        <Link href="https://hackclub.com/" target="_blank">
          <img src={"/midiorpheus.png"} alt="Midiorpheus Logo" />
        </Link>
      </div>

      <div className="banner">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
          <div
            className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-led-blue/20 rounded-full blur-xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center text-center min-h-[80vh]">
              <div className="mb-6 sm:mb-8 w-full">
                <img
                  src="/assets/controller.png"
                  alt="Custom MIDI Controller"
                  className="w-full max-w-[280px] sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-lg transform transition-transform duration-300 animate-levitate mx-auto"
                />
              </div>

              <div className="w-full">
                <img
                  src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/9dd56d0fe2fb209279350974d028137fb179e9ee_mini_midi_magic.svg"
                  alt="Mini Midi Magic"
                  className="w-auto max-w-[250px] sm:max-w-sm md:max-w-lg mx-auto mb-4 sm:mb-6 animate-glow z-1"
                />
                <p className="text-base text-white sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-xs sm:max-w-md md:max-w-2xl mx-auto px-2">
                  Design your custom MIDI controller from scratch
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="transition-overlay"></div>

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

        @keyframes slideDown {
          from {
            transform: translateY(-70%);
          }
          to {
            transform: translateY(0%);
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(0%);
          }
          to {
            transform: translateY(-70%);
          }
        }

        .animate-levitate {
          animation: levitate 4s ease-in-out infinite;
        }

        .midiorpheus-nav {
          position: fixed;
          top: 0;
          left: 0;
          transform: translateY(-70%) rotate(180deg);
          z-index: 10002;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
          transform-origin: center center;
        }

        .midiorpheus-nav:hover {
          transform: translateY(0%) rotate(180deg);
        }

        .midiorpheus-nav img {
          max-width: 200px;
          height: auto;
          display: block;
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
          content: "";
          position: fixed;
          top: 50%;
          left: 50%;
          width: 100vw;
          height: 100vh;
          background-image: url("/assets/bush.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          transform: translate(-50%, -50%) scale(1);
          transform-origin: center center;
          animation: bgZoomOut 5s ease-out forwards;
          z-index: 9999;
          pointer-events: none;
        }

        /* Fix: Make sure content is positioned and has higher z-index */
        .banner > * {
          position: relative;
          z-index: 10001 !important;
        }

        /* Additional fix: Ensure all child elements maintain high z-index */
        .banner .container,
        .banner .container > *,
        .banner img,
        .banner p {
          position: relative;
          z-index: 10001 !important;
        }

        /* Smooth transition overlay */
        .transition-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 120px;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0, 0, 0, 0.1) 20%,
            rgba(0, 0, 0, 0.3) 50%,
            rgba(0, 0, 0, 0.6) 80%,
            rgba(0, 0, 0, 0.9) 100%
          );
          pointer-events: none;
          z-index: 5;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .midiorpheus-nav img {
            max-width: 150px;
          }
        }

        @media (max-width: 480px) {
          .midiorpheus-nav img {
            max-width: 120px;
          }
        }

        /* Additional mobile-specific styles */
        @media (max-width: 640px) {
          .banner {
            padding: 1rem 0;
          }

          .transition-overlay {
            height: 80px;
          }
        }
      `}</style>
    </section>
  );
};
