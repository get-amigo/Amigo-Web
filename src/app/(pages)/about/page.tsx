

import Nav from "../../../components/landing/nav"
import Footer from "../../../components/landing/footer"
import React from 'react'
import Image from "next/image"
import Download from "@/components/landing/download"



type Props = {}

const about = (props: Props) => {
  return (
    <div className="flex-1 justify-between items-center bg-[#0F0E14]">
      <Nav />

      <div className="bg-[#0F0E14] relative isolate flex justify-center py-32">
        <div className="container mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-center text-white mb-20">
            About Us
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white">
                Our mission is to help people connect with their friends and family in a more meaningful way. We believe that money should never be a barrier to spending time with the people you love. That&apos;s why we created Amigo - a platform that makes it easy to share expenses, make payments, and stay connected with friends.
              </p>
            </div>

            {/* <div className="relative w-1/2 mt-20">
              <Image
              width={500}
              height={500}
                src="/images/about.jpeg"
                alt="About Us"
                className="w-full md:w-1/2 mt-8 md:mt-20"
              />
              <Image
               width={500}
               height={500}
                src="/images/aboutsus2.jpeg"
                alt="About Us"
                className="w-full md:w-1/2 absolute top-20 right-40 transform translate-x-1/2 -translate-y-1/2"
              />
            </div> */}
            <div className="flex md:w-1/2 justify-end mt-9 md:mt-0 gap-3 image-container">
              <Image 
                src="/images/Story01.png" 
                width={320} 
                height={364} 
                alt="Story Image 1"
                className="mb-4 md:mb-40 hidden md:block"
              />
              <Image 
                src="/images/Story02.png" 
                width={320} 
                height={364} 
                alt="Story Image 2"
                className="mt-6 md:mt-40 hidden md:block"
              />

              <Image 
                src="/images/story1.png" 
                width={320} 
                height={364} 
                alt="Story Image 1"
                className="mb-4 md:hidden"
              />
              <Image 
                src="/images/story2.png" 
                width={320} 
                height={364} 
                alt="Story Image 2"
                className="mt-6 md:hidden"
              />

            </div>
          </div>
        </div>
      </div>
      <Download />
      <Footer />
    </div>
  )
}

export default about