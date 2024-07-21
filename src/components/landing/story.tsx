import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

const Story: React.FC = () => {
  return (
    <div className="text-white p-8 md:pb-40 font-[Readex Pro]" style={{ background: '#0F0E14' }}>

      <style jsx>{`
        @media (max-width: 600px) {
          .about-us-section {
            text-align: center;
          }
          .about-us-section h1,
          .about-us-section p {
            text-align: center;
          }
          .hide-on-mobile {
            display: none;
          }
        }
        @media (min-width: 600px) {
          .about-us-section {
            padding-left: 60px;
            padding-right: 60px;
          }
          .about-us-section h1,
          .about-us-section p {
            padding-left: 60px;
            padding-right: 60px;
          }
          .about-us-section .image-container {
            padding-left: 60px;
            padding-right: 60px;
          }
          .about-us-section .paragraph-spacing {
            margin-bottom: 1rem;
          }
          .our-story-section p {
            padding-left: 350px;
            padding-right: 350px;
          }
          @media (min-width: 768px) {
            .mobile-only {
              display: none;
            }
          }
        }
      `}</style>
      <section className="about-us-section mb-8 pt-20">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2">
            <p className="text-lg leading-8 text-zinc-200 text-center md:text-left paragraph-spacing">
              Our goal at Amigo is to revolutionize the way friends manage their finances together. Our mission is to provide a seamless and user-friendly platform for cost sharing, instant UPI payment and easy communication. Amigo is your one-stop destination for all your finance management expense sharing.
            </p>
            <br/>
            <p className="hide-on-mobile text-lg leading-8 text-zinc-200 text-center md:text-left">
              We at Amigo are committed towards revolutionizing the way friends and family manage their finances together. We aim to provide a seamless and user friendly platform for you for cost sharing, instant UPI payment and easy communication. Amigo is your one-stop destination for all your finance management and expense sharing.
            </p>
            <br/>
            <h1 className="hide-on-mobile text-4xl font-bold text-left mb-6">Our Story</h1>
            <p className="hide-on-mobile text-lg leading-8 text-zinc-200 text-left">
              We were on a trip to Coorg and my roommate had to keep all the bills and had to write everything in order to split the bills and in order to tackle this problem we are introducing Amigo, your one-stop destination for all your bills.
            </p>
          </div>
          <div className="flex md:w-1/3 justify-end mt-9 md:mt-0 gap-3 image-container">
            <Image 
              src="/images/Story01.png" 
              width={360} 
              height={314} 
              alt="Story Image 1"
              className="mb-4 md:mb-40 hidden md:block"
            />
            <Image 
              src="/images/Story02.png" 
              width={360} 
              height={314} 
              alt="Story Image 2"
              className="mt-6 md:mt-40 hidden md:block"
            />
            <Image 
              src="/images/story1.png" 
              width={360} 
              height={314} 
              alt="Story Image 1"
              className="mb-4 md:hidden"
            />
            <Image 
              src="/images/story2.png" 
              width={360} 
              height={314} 
              alt="Story Image 2"
              className="mt-6 md:hidden"
            />
          </div>
        </div>
      </section>

      <section className="text-center pb-20 our-story-section mobile-only">
        <h1 className="text-4xl font-bold text-center mb-6">Our Story</h1>
        <p className="text-lg leading-8 text-zinc-200 text-center">
          We were on a trip to Coorg and my roommate had to keep all the bills and had to write everything in order to split the bills and in order to tackle this problem we are introducing Amigo, your one-stop destination for all your bills.
        </p>
      </section>
    </div>
  );
};

export default Story;