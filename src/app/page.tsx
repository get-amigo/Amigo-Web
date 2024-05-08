"use client";

import Nav from "@/components/landing/nav";
import Hero from "@/components/landing/hero";
import Footer from "@/components/landing/footer";
import TextRevealEffect from "@/components/landing/text-reveal-effect";

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <TextRevealEffect
        className="bg-gray-950"
        words="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tenetur praesentium ex omnis eos harum non qui minima eveniet laudantium!"
      />

      <Footer />
    </>
  );
}
