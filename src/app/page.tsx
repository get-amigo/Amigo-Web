"use client";

import Nav from "@/components/landing/nav";
import Hero from "@/components/landing/hero";
import Footer from "@/components/landing/footer";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { AuroraBackgroundDemo } from "@/components/AuroraBackground";
import { TypewriterEffectSmoothDemo } from "@/components/Typewritter";
import { TextGenerateEffectDemo } from "@/components/TextGenerate";
export default function App() {
  return (
    <>
      <Nav />
      <AuroraBackgroundDemo/>
      <TypewriterEffectSmoothDemo/>
      <TextGenerateEffectDemo/>
      <Hero/>
      <Footer />
    </>
  );
}
