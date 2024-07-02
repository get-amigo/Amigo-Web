"use client";

import Nav from "@/components/landing/nav";
import Hero from "@/components/landing/hero";
import Footer from "@/components/landing/footer";
import Story from "@/components/landing/story";
import TextRevealEffect from "@/components/landing/text-reveal-effect";
import Usp from "@/components/landing/usp";
import Tutorial from "@/components/landing/tutorial";

export default function App() {
  return (
    <div className="bg-gray-950">
      <Nav />
      <Hero />
      <Story />
      <Usp />
      {/* <TextRevealEffect words="Unlock the power of seamless expense sharing, instant UPI payments, and effortless conversations with Amigo! Dive into a world where splitting bills, making payments, and staying connected with friends is as easy as a tap. Experience the joy of social transactions with Amigo - where finance meets friendship" /> */}
      <Tutorial />
      <Footer />
    </div>
  );
}
