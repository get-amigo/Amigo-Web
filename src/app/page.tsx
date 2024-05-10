"use client";

import Nav from "@/components/landing/nav";
import Hero from "@/components/landing/hero";
import Footer from "@/components/landing/footer";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { AuroraBackgroundDemo } from "@/components/AuroraBackground";
import { TypewriterEffectSmoothDemo } from "@/components/Typewritter";
import { TextGenerateEffectDemo } from "@/components/TextGenerate";
import { HeroScrollDemo } from "@/components/ContainerScroll";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";



export default function App() {
  return (
    <>
      <Nav />
      <AuroraBackgroundDemo/>
      <TypewriterEffectSmoothDemo/>
      <TextGenerateEffectDemo/>
      <HeroParallaxDemo/>
      <HeroScrollDemo/>
      <Hero/>
      <Footer />
    </>
  );
}
