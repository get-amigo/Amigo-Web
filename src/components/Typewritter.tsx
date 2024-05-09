"use client";
import { motion } from "framer-motion";

import { TypewriterEffectSmooth } from "./ui/typewriter-effect"; 
export function TypewriterEffectSmoothDemo() {
    const words = [
        {
          text: "Meet",
        },
        {
          text: "Amigo,",
          className: "text-purple-600 dark:textalvender-500",
        },
        {
          text: "your",
        },
        {
          text: "ultimate",
        },
        {
          text: "financial",
        },
        {
          text: "ally.",
        },
       

      ];
      
      
  return (
    <div className="flex flex-col items-center justify-center h-[10rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      
    </div>
  );
}
