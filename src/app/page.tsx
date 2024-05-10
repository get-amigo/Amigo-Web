"use client";

import Nav from "@/components/landing/nav";
import Hero from "@/components/landing/hero";
import Footer from "@/components/landing/footer";
import MidSection from "@/components/landing/midSection";
import Section2 from "@/components/landing/Section2";
import Testimonial from "@/components/landing/Testimonial";


export default function App() {
  return (
    <div  className="flex flex-col">
      <Nav />
      <Hero />
    <Section2/>
    <MidSection/>
    <Testimonial/>
        <Footer />
    </div>
  );
}
