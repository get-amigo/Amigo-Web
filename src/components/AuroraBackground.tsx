"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background"; 
import Hero from "./landing/hero";
import Image from "next/image";
export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground >
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
        Transform your financial habits with Amigo: The modern solution for splitting expenses
        </div>
        <div>
        <Image
        src="amigo-logo.svg"
        alt="logo"
        height={200}
        width={200}
        priority={true}
        />
        </div>

      </motion.div>
    </AuroraBackground>
  );
}
