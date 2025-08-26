import * as React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const kitItems = [
  {
    name: "Arduino Nano",
    description: "The brain of your MIDI controller",
    image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTMwMSwicHVyIjoiYmxvYl9pZCJ9fQ==--1a97fe9d21262424129d5fbe90b3128468c08857/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_17_10l_Kleki-removebg-preview(1).png",
    rotation: "rotate-2",
    pinColor: "bg-black"
  },
  {
    name: "Tactile Switches",
    description: "High-quality buttons for your controller",
    image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTI5OSwicHVyIjoiYmxvYl9pZCJ9fQ==--e08ec93b92124562093666af9747e2d27233b5e2/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/image-removebg-preview(9)(1).png",
    rotation: "-rotate-3",
    pinColor: "bg-black"
  },
  {
    name: "Breadboard",
    description: "For prototyping your circuit",
    image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6Mjg2NzYsInB1ciI6ImJsb2JfaWQifX0=--0678dbde85b28e7da9f903f617c5618ad54cb207/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_07_22_0hy_Kleki(1).png",
    rotation: "rotate-1",
    pinColor: "bg-black"
  },
  {
    name: "Jumper Wires",
    description: "Connect all your components",
    image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTI1NSwicHVyIjoiYmxvYl9pZCJ9fQ==--3a24804392b79bb38b456e3af78e8e769b0768a7/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_17_0z6_Kleki(1).png",
    rotation: "-rotate-2",
    pinColor: "bg-black"
  },
  {
    name: "USB Cable",
    description: "Power and data connection",
    image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6NzQsInB1ciI6ImJsb2JfaWQifX0=--f454ae6f9c32179f3cc10e611da66dc06f73d71e/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/25835_1_kwadrat.png",
    rotation: "rotate-3",
    pinColor: "bg-black"
  },
  {
    name: "3D Printed Case",
    description: "Custom enclosure for your design",
    image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTA0LCJwdXIiOiJibG9iX2lkIn19--0a9efe4591d011f60b83ba0dd6bd0750fc835e48/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/ch341.png",
    rotation: "-rotate-1",
    pinColor: "bg-black"
  },
  {
    name: "Documentation",
    description: "Complete guide and schematics",
    image: "https://summer.hackclub.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTE3LCJwdXIiOiJibG9iX2lkIn19--adff2b85256fec9d8f167085562e84aaeefccc10/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOlsyNTYsMjU2XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--69edd5fc8f56201b3f04f7560743d8fad0d8d976/2025_06_15_0z6_Kleki(1).png",
    rotation: "rotate-2",
    pinColor: "bg-black"
  }
];

export default function KitItemsCarousel() {
  return (
    <div className="min-h-screen w-full flex flex-col text-white" style={{ backgroundImage: 'url(/assets/bgkit.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex-1 flex flex-col justify-center px-4 md:px-6 py-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-white mb-4 text-4xl md:text-6xl pt-16" style={{fontFamily: 'GingerBread, serif',letterSpacing: '0.1em'}}>THE INVENTORY</h2>
          <p className="text-xl text-gray-300">Your kit to make your MIDI controller</p>
        </div>
        
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-6xl">
            <div className="hidden md:block">
              <div className="bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-600">
                <Carousel className="w-full">
                  <CarouselContent>
                    {kitItems.map((item, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-2 h-full">
                          <div className="bg-white rounded-lg shadow-lg border border-black overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                            <div className="flex justify-end p-3">
                              <div className={`w-3 h-3 rounded-full ${item.pinColor}`}></div>
                            </div>
                            <div className="flex justify-center items-center h-48 p-4 bg-gray-50 flex-shrink-0">
                              <img 
                                src={item.image} 
                                alt={item.name}
                                className={`max-h-full max-w-full object-contain ${item.rotation} hover:rotate-0 transition-transform duration-300`}
                                onError={(e) => {
                                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y3ZjdmNyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE2IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW1hZ2UgTm90IEZvdW5kPC90ZXh0Pjwvc3ZnPg==';
                                }}
                              />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                              <h3 className="font-bold text-lg text-gray-800 mb-2">{item.name}</h3>
                              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
            <div className="md:hidden">
              <div className="bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-100">
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  orientation="vertical"
                  className="w-full max-w-sm mx-auto"
                >
                  <CarouselContent className="-mt-1 h-[60vh]">
                    {kitItems.map((item, index) => (
                      <CarouselItem key={index} className="pt-1 basis-1/3">
                        <div className="p-1">
                          <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                            <div className="flex h-full">
                              <div className="w-24 flex-shrink-0 flex justify-center items-center p-2 bg-gray-50 relative">
                                <div className={`absolute top-1 right-1 w-2 h-2 rounded-full ${item.pinColor}`}></div>
                                <img 
                                  src={item.image} 
                                  alt={item.name}
                                  className={`max-h-12 max-w-full object-contain ${item.rotation} hover:rotate-0 transition-transform duration-300`}
                                  onError={(e) => {
                                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y3ZjdmNyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE2IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW1hZ2UgTm90IEZvdW5kPC90ZXh0Pjwvc3ZnPg==';
                                  }}
                                />
                              </div>
                              <div className="flex-1 p-3 flex flex-col justify-center">
                                <h3 className="font-bold text-sm text-gray-800 mb-1">{item.name}</h3>
                                <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">{item.description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}