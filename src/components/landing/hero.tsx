"use client";

import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { AppStoreLink } from "../appstore-link";
import { PlayStoreLink } from "../playstore-link";

const Hero = () => {
  return (
    <div className="relative isolate flex justify-center py-16 bg-gray-950">
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
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row justify-between gap-10 lg:gap-0">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto self-center space-y-10">
          <div className="flex justify-center md:justify-start">
            <div className="flex flex-col sm:flex-row items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-white ring-1 ring-purple-900 hover:ring-purple-600/70 ">
              <span className="font-semibold text-purple-600">
                We&apos;re in public beta
              </span>
              <hr className="w-full sm:w-px h-px sm:h-full border-t-0 bg-gray-400" />
              <a href="#" className="flex items-center gap-x-1">
                <span className="" aria-hidden="true" />
                Launch Announcement
                <ChevronRightIcon
                  className="-mr-2 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
          <div className="">
            <h1 className="text-center md:text-left max-w-lg text-4xl font-bold tracking-tight text-zinc-200 sm:text-5xl lg:text-6xl">
              A better way to split your money
            </h1>
            <p className="mt-6 text-center md:text-left text-lg leading-8 text-zinc-200">
              We help you manage your expenses and split them.
            </p>
          </div>
          <div className="flex justify-center md:justify-start items-center gap-x-6">
            <AppStoreLink link="https://apps.apple.com/in/app/amigo/id6483936159" />
            <PlayStoreLink link="https://play.google.com/store/apps/details?id=app.amigo.app&hl=en-US" />
          </div>
        </div>
        <div className="px-8 w-full md:w-[40%] max-h-[570px]">
          <svg
            viewBox="0 0 366 729"
            role="img"
            className="mx-auto w-[22.875rem] max-w-full h-full drop-shadow-xl"
          >
            <title>App screenshot</title>
            <defs>
              <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                <rect width={316} height={684} rx={36} />
              </clipPath>
            </defs>
            <path
              fill="#4B5563"
              d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
            />
            <path
              fill="#343E4E"
              d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
            />
            <foreignObject
              width={316}
              height={684}
              transform="translate(24 24)"
              clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
            >
              <img src="/images/mobile-app-screenshot.png" alt="" />
            </foreignObject>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
