"use client";
import Link from "next/link";
{
  /*
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "./ui/accordion";
*/
}
export const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* <Accordion
          type="single"
          collapsible
          className="bg-gradient-to-b from-[#483183] via-[#681581] to-[#483183] px-8 py-6 text-white"
        >
          <AccordionItem value="rules">
            <AccordionTrigger className="text-gray-200 hover:text-white transition-colors text-xl md:text-2xl">
              General Rules
            </AccordionTrigger>
            <AccordionContent className="text-white leading-relaxed mt-4 text-base md:text-lg ">
              <ul className="list-disc list-inside space-y-2">
                <li>You have to be 18 or under.</li>
                <li>Your board has to be unique - no plagiarism.</li>
                <li>
                  You have to make a well-documented journal for the whole
                  process (Idea → Schematic → PCB → Case).
                </li>
                <li>One person can only make one project.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          className="bg-gradient-to-b from-[#08123b] via-[#0a1748] to-black px-8 py-6"
        >
          <AccordionItem value="faqs">
            <AccordionTrigger className="text-gray-200 hover:text-white transition-colors text-xl md:text-2xl">
              FAQs
            </AccordionTrigger>
            <AccordionContent className="text-gray-400 leading-relaxed mt-4 text-base md:text-lg">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  What is this? - Mini Midi Magic is a Hackclub YSWS for MIDI
                  boards.
                </li>
                <li>
                  Who is running it? - It is being ran by teens at
                  Hackclub.{" "}
                </li>
                <li>
                  But I don&apos;t know how to make MIDI boards :( - No worries,
                  we have a really well made{" "}
                  <Link href={"/guide"} className="text-blue-500 underline">
                    guide
                  </Link>{" "}
                  to get started.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      */}
      </div>
      <div className="bg-gradient-to-b from-[#45327d] to-gray-900 px-6 py-8 border-t border-black">
        <div className="max-w-7xl mx-auto text-center">
          <div
            className="flex items-center justify-center space-x-3 mb-4"
            style={{
              fontFamily: "GingerBread, serif, Arial, sans-serif",
              letterSpacing: "0.08em",
              textShadow: "0 0 15px rgba(255,255,255,0.1)",
            }}
          >
            <div className="w-2 h-2 bg-[#fc79f8] rounded-full animate-pulse shadow-lg shadow-[#fc79f8/50]"></div>
            <span className="text-3xl text-gray-300 tracking-wider">
              MINI MIDI MAGIC
            </span>
            <div className="w-2 h-2 bg-[#7845f7] rounded-full animate-pulse shadow-lg shadow-[#7845f7/50]"></div>
            <span className="text-3xl text-gray-300 tracking-wider">
              HACK CLUB
            </span>
            <div className="w-2 h-2 bg-[#70b5fa] rounded-full animate-pulse shadow-lg shadow-[#70b5fa/50]"></div>
          </div>
          <p className="text-xs text-gray-400 font-mono tracking-wide mb-4">
            DESIGN A MIDI CONTROLLER · GET STUFF TO BUILD IT IRL!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-gray-500">
            <span>
              Website by{" "}
              <Link
                href="https://hackclub.slack.com/team/U0807ADEC6L"
                className="hover:text-cyan-400 transition-colors"
              >
                @Manan
              </Link>
            </span>
            <span>•</span>
            <span>
              Art by{" "}
              <Link
                href="https://hackclub.slack.com/team/U097UCZE2BB"
                className="hover:text-cyan-400 transition-colors"
              >
                @Aishaani
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="h-2 bg-gradient-to-b from-gray-900 to-black"></div>
    </footer>
  );
};
