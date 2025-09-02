import React from "react";
import { ArrowRight, ArrowDown } from "lucide-react";

export const ProcessSection = () => {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: "url(/assets/bgpath.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none z-10"></div>

      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-accent/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-6xl text-white mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text"
            style={{
              fontFamily: "GingerBread, serif",
              letterSpacing: "0.1em",
            }}
          >
            THE ALCHEMY
          </h2>
        </div>

        <div className="max-w-6xl mx-auto text-white">
          <div className="hidden md:flex items-center gap-4">
            <div className="flex-1 space-y-6">
              <div className="bg-gradient-to-br text-white from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all duration-300">
                <h3 className="text-2xl text-white font-bold text-primary mb-3">
                  Design PCB
                </h3>
                <p className="text-muted-foreground text-white">
                  Make the Board O&apos;Magic
                </p>
              </div>
              <div className="bg-gradient-to-br from-accent/10 text-white to-accent/5 border border-accent/20 rounded-xl p-6 hover:border-accent/40 transition-all duration-300">
                <h3 className="text-2xl font-bold text-accent mb-3">
                  CAD the Case
                </h3>
                <p className="text-muted-foreground">
                  Design the Case O&apos;Protection
                </p>
              </div>
              <div className="bg-gradient-to-br from-led-orange/10 to-led-orange/5 border border-led-orange/20 rounded-xl p-6 hover:border-led-orange/40 transition-all duration-300">
                <h3 className="text-2xl font-bold text-led-orange mb-3">
                  Write Firmware
                </h3>
                <p className="text-muted-foreground">
                  Write the magical code to enchant your board
                </p>
              </div>
            </div>

            <div className="flex-none relative w-32 h-80 flex items-center justify-center">
              <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
                <ArrowRight className="w-12 h-12 text-led-orange animate-pulse" />
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-xl p-8 hover:border-white/40 transition-all duration-300 shadow-glow-primary/20">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center shadow-glow-primary">
                    <span className="text-3xl font-bold text-white">🎹</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Your Custom MIDI Controller
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    You get a kit full of components and a grant for the PCB.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-2">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                      Parts Kit
                    </span>
                    <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">
                      PCB grant
                    </span>
                    <span className="px-3 py-1 bg-led-orange/20 text-led-orange rounded-full text-sm">
                      Workshops
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden space-y-8">
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Design PCB
                </h3>
                <p className="text-muted-foreground">
                  Create your circuit board layout
                </p>
              </div>
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-accent mb-2">
                  CAD the Case
                </h3>
                <p className="text-muted-foreground">
                  Design a 3D printed enclosure
                </p>
              </div>
              <div className="bg-gradient-to-br from-led-orange/10 to-led-orange/5 border border-led-orange/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-led-orange mb-2">
                  Write Firmware
                </h3>
                <p className="text-muted-foreground">
                  Program the controller behavior
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-primary animate-bounce" />
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-xl p-6 shadow-glow-primary/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">🎹</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Your Custom MIDI Controller
                </h3>
                <p className="text-muted-foreground">
                  {" "}
                  You get a kit full of components and a grant for the PCB.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-black/95 via-black/70 to-transparent pointer-events-none z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 via-black/60 to-transparent pointer-events-none z-5"></div>
    </section>
  );
};

export const KitSection = () => {
  const kitItems = [
    {
      name: "Arduino Nano",
      description: "The brain of your MIDI controller",
      image:
        "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTMwMSwicHVyIjoiYmxvYl9pZCJ9fQ==--1a97fe9d21262424129d5fbe90b3128468c08857/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_17_10l_Kleki-removebg-preview(1).png",
      rotation: "rotate-2",
      position: "top-4 left-4 md:top-8 md:left-12",
      pinColor: "bg-red-500",
    },
    {
      name: "Tactile Switches",
      description: "High-quality buttons for your controller",
      image:
        "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTI5OSwicHVyIjoiYmxvYl9pZCJ9fQ==--e08ec93b92124562093666af9747e2d27233b5e2/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/image-removebg-preview(9)(1).png",
      rotation: "-rotate-3",
      position: "top-4 right-4 md:top-16 md:right-16",
      pinColor: "bg-blue-500",
    },
    {
      name: "Breadboard",
      description: "For prototyping your circuit",
      image:
        "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6Mjg2NzYsInB1ciI6ImJsb2JfaWQifX0=--0678dbde85b28e7da9f903f617c5618ad54cb207/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_07_22_0hy_Kleki(1).png",
      rotation: "rotate-1",
      position: "top-32 left-8 md:top-40 md:left-1/4",
      pinColor: "bg-green-500",
    },
    {
      name: "Jumper Wires",
      description: "Connect all your components",
      image:
        "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTI1NSwicHVyIjoiYmxvYl9pZCJ9fQ==--3a24804392b79bb38b456e3af78e8e769b0768a7/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_17_0z6_Kleki(1).png",
      rotation: "-rotate-2",
      position: "top-48 right-8 md:top-52 md:right-1/4",
      pinColor: "bg-yellow-500",
    },
    {
      name: "USB Cable",
      description: "Power and data connection",
      image:
        "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6NzQsInB1ciI6ImJsb2JfaWQifX0=--f454ae6f9c32179f3cc10e611da66dc06f73d71e/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/25835_1_kwadrat.png",
      rotation: "rotate-3",
      position: "bottom-32 left-4 md:bottom-40 md:left-12",
      pinColor: "bg-purple-500",
    },
    {
      name: "3D Printed Case",
      description: "Custom enclosure for your design",
      image:
        "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTA0LCJwdXIiOiJibG9iX2lkIn19--0a9efe4591d011f60b83ba0dd6bd0750fc835e48/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/ch341.png",
      rotation: "-rotate-1",
      position: "bottom-32 right-4 md:bottom-32 md:right-16",
      pinColor: "bg-pink-500",
    },
    {
      name: "Documentation",
      description: "Complete guide and schematics",
      image:
        "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTE3LCJwdXIiOiJibG9iX2lkIn19--adff2b85256fec9d8f167085562e84aaeefccc10/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_15_0z6_Kleki(1).png",
      rotation: "rotate-2",
      position:
        "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block",
      pinColor: "bg-orange-500",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-200 relative overflow-hidden -mt-20 pt-20">
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none z-10"></div>

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d2691e' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-amber-900 mb-4">
            YOUR KIT
          </h2>
          <p className="text-lg md:text-xl text-amber-700">
            Everything you need to build your MIDI controller
          </p>
        </div>
        <div className="hidden md:block max-w-6xl mx-auto relative h-screen bg-gradient-to-br from-amber-200 to-amber-300 rounded-2xl shadow-2xl border-8 border-amber-800">
          <div
            className="absolute inset-0 rounded-xl opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23b8860b' fill-opacity='0.2'/%3E%3C/svg%3E")`,
            }}
          ></div>

          {kitItems.map((item, index) => (
            <div
              key={index}
              className={`absolute ${item.position} ${item.rotation} transform hover:scale-105 transition-all duration-300 cursor-pointer group`}
              style={{ zIndex: 10 + index }}
            >
              <div
                className={`absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 ${item.pinColor} rounded-full shadow-lg z-20 border-2 border-white`}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
              </div>
              <div className="bg-white rounded-lg shadow-xl border-2 border-gray-200 p-4 w-64 group-hover:shadow-2xl transition-all duration-300">
                <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
          <div className="absolute top-4 left-4 w-3 h-3 bg-gray-400 rounded-full shadow-md"></div>
          <div className="absolute top-4 right-4 w-3 h-3 bg-gray-400 rounded-full shadow-md"></div>
          <div className="absolute bottom-4 left-4 w-3 h-3 bg-gray-400 rounded-full shadow-md"></div>
          <div className="absolute bottom-4 right-4 w-3 h-3 bg-gray-400 rounded-full shadow-md"></div>
        </div>
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {kitItems.slice(0, 6).map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border-2 border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="w-full h-32 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <p className="text-amber-700 text-base md:text-lg font-medium">
            All components included • Ready to ship
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-transparent via-black/20 to-transparent pointer-events-none z-5"></div>
    </section>
  );
};
