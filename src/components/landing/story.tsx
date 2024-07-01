import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

const Story: React.FC = () => {
  return (
    <div className="bg-black text-white p-8 font-[Readex Pro]">

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
            margin-bottom: 1rem; /* Adds space between paragraphs */
          }
        }
      `}</style>
      <section className="about-us-section mb-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2">
            <p className="text-lg leading-8 text-zinc-200 text-center md:text-left paragraph-spacing">
              Our goal at Amigo is to revolutionize the way friends manage their finances together. Our mission is to provide a seamless and user-friendly platform for cost sharing, instant UPI payment and easy communication. Amigo is your one-stop destination for all your finance management expense sharing.
            </p>
            <p className="hide-on-mobile text-lg leading-8 text-zinc-200 text-center md:text-left">
              We at Amigo are committed towards revolutionizing the way friends and family manage their finances together. We aim to provide a seamless and user friendly platform for you for cost sharing, instant UPI payment and easy communication. Amigo is your one-stop destination for all your finance management and expense sharing.
            </p>
          </div>
          <div className="flex md:w-1/2 justify-end mt-8 md:mt-0 image-container">
            <Image 
              src="/images/story1.png" 
              width={320} 
              height={364} 
              alt="Story Image 1"
              className="mb-6 md:mb-0"
            />
            <Image 
              src="/images/story2.png" 
              width={320} 
              height={364} 
              alt="Story Image 2"
              className="mt-6 md:mt-0"
            />
          </div>
        </div>
      </section>

      <section className="text-center pb-15">
        <h1 className="text-4xl font-bold text-center">Our Story</h1>
        <p className="text-lg leading-8 text-zinc-200 text-center">
          We were on a trip to Coorg and my roommate had to keep all the bills and had to write everything in order to split the bills and in order to tackle this problem we are introducing Amigo, your one-stop destination for all your bills.
        </p>
      </section>
    </div>
  );
};

export default Story;