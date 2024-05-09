"use client";

import Nav from "@/components/landing/nav";
import Hero from "@/components/landing/hero";
import Footer from "@/components/landing/footer";

export default function App() {
  return (
    <>
      <div className="container-2xl bg-black bg-clip-padding mx-auto">
      <Nav />
      <Hero />
      <Footer />
      </div>
    </>
  );
}
