import { useState, useEffect } from 'react';
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { AppStoreLink } from '../appstore-link';
import { PlayStoreLink } from '../playstore-link';

const Hero = () => {
  const [imageSrc, setImageSrc] = useState("/images/mobile-keyframe.png");
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setImageSrc("/images/hero-phone.png");
        setIsPhone(true);
      } else {
        setImageSrc("/images/mobile-keyframe.png");
        setIsPhone(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      className={`relative isolate flex justify-center md:py-32 pt-32 ${isPhone ? 'gradient-bg' : ''}h-screen`}
      style={isPhone ? {
        background: 'linear-gradient(212.43deg, #0F0E14 1.62%, #0F0E14 34.14%, #272239 65.56%, #563888 97.64%)'
      } : {
        background: 'linear-gradient(212.43deg, #0F0E14 1.62%, #0F0E14 38.27%, #272239 74.64%, #563888 97.64%)'
      }}
    >
      {!isPhone && (
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-300 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-purple-950/40">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
          />
        </svg>
      )}
      <div className="mx-auto max-w-7xl px-6 pt-10 md:py-10 flex flex-col md:flex-row justify-between gap-10 lg:gap-0">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto self-center space-y-10 ">
          <div>
            <h1 className="text-center md:text-left text-4xl font-bold tracking-tight text-zinc-200 sm:text-5xl lg:text-5xl lg:leading-tight">
              A better way to split your expenses
            </h1>
            <p className="mt-6 text-center md:text-left text-lg leading-8 text-zinc-200">
              We help you manage your expenses and split them.
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-4 pt-10 lg:flex-1 items-left">
              <AppStoreLink link="https://apps.apple.com/in/app/amigo/id6483936159" />
              <PlayStoreLink link="https://play.google.com/store/apps/details?id=app.amigo.app&hl=en-US" />
            </div>
            {/* <div className="mt-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 p-4">
              <div className="hidden md:flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 border border-white rounded-2xl p-1">
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="px-4 py-2 rounded-md text-zinc-900 bg-transparent border-none focus:outline-none focus:ring-0"
                  style={{ color: 'white' }}
                />
                <button className="px-4 py-2 text-white" style={{ backgroundColor: '#663CAB', borderRadius: '15px' }}>
                  Submit
                </button>
              </div>
            </div> */}
          </div>
          </div>
          <div className="px-8 w-full min-w-[14.875em] max-h-[570px] flex justify-center items-center overflow-x-clip" style={{ marginBottom: 0 }}>
           <div style={{ transform: imageSrc === "/images/hero-phone.png" ? 'scale(1)' : 'scale(1.8)', marginBottom: 0 }}>
            <Image
              src={imageSrc}
              alt="App screenshot"
              width={800}
              height={800}
              className="mx-auto w-full h-auto drop-shadow-xl"
              style={{ marginBottom: 0, maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;