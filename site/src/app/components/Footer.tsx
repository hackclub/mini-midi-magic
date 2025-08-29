"use client"
import Link from 'next/link';
import { Accordion, AccordionContent,AccordionItem,AccordionTrigger } from './ui/accordion';
export const Footer = () => {
  return (
    <footer className="mt-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 shadow-2xl border-t-4 border-gray-700">
      <Accordion type='single' collapsible>
        <AccordionItem value='item-1'>
          <AccordionTrigger>General Rules</AccordionTrigger>
          <AccordionContent>Helloooo</AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 px-8 py-6 border-t border-gray-700">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-lg shadow-cyan-500/50"></div>
            <span className="text-sm text-gray-300 font-mono tracking-wider">
              MINI MIDI MAGIC
            </span>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
          </div>
          <p className="text-xs text-gray-400 font-mono tracking-wide">
            DESIGN A MIDI CONTROLLER - GET STUFF TO BUILD IT IRL!
          </p>
          <div className="mt-3 flex items-center justify-center space-x-6 text-xs text-gray-500">
            <span>PCB and FIRMWARE by <Link href={"https://hackclub.slack.com/team/U0735FTMS3V"}>@nimit</Link></span>
            <span>•</span>
            <span>WEBSITE by <Link href={"https://hackclub.slack.com/team/U0807ADEC6L"}>@Manan</Link></span>
            <span>•</span>
            <span>ART by <Link href={"https://hackclub.slack.com/team/U097UCZE2BB"}>@Aishaani</Link></span>
          </div>
        </div>
      </div>
      <div className="h-2 bg-gradient-to-b from-gray-900 to-black"></div>
    </footer>
  );
}