"use client";

import { useState, useTransition } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { PlayStoreLink } from "../playstore-link";  
import { AppStoreLink } from "../appstore-link";  

const navigation = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "Features",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  function showNavbar(show: boolean) {
    startTransition(() => {
      setMobileMenuOpen(show);
    });
  }

  return (
    <header className="absolute shadow-2xl inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8" // o bg-gray-900/80
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">Get Amigo</span>
            <Image
              className="h-12 w-auto"
              width={12}
              height={12}
              src="/amigo-logo.svg"
              alt="amigo logo"
            />
            <span className="text-white font-bold ml-2 text-xl font-lalezar">Amigo </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            title="Open main menu"
            onClick={() => showNavbar(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex gap-2 items-center">
          <AppStoreLink link="https://apps.apple.com/in/app/amigo/id6483936159" />
          <PlayStoreLink link="https://play.google.com/store/apps/details?id=app.amigo.app&hl=en-US" />
        </div>
        {/* <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm uppercase font-semibold leading-6 text-white hover:text-purple-600 focus-visible:text-purple-600"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="uppercase font-semibold leading-6 text-white hover:text-purple-600 focus-visible:text-purple-600"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div> */}
      </nav>
      <aside
        className={`lg:hidden fixed top-0 right-0 rounded-s-xl text-white w-96 z-50 h-full transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full"
        }`}
      >
        {/* <div className="fixed z-40 inset-0 h-screen w-screen bg-gray-900/40"></div> */}
        <div className="mb-4 px-6 pt-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              className="h-8 w-auto"
              width={8}
              height={8}
              src="/amigo-logo.svg"
              alt=""
            />
            <span className="font-bold text-xl">Amigo</span>
          </div>
          <button
            className="bg-purple-600 w-8 h-8 rounded-full grid place-content-center ml-auto cursor-pointer"
            title="Close menu"
            onClick={() => showNavbar(false)}
          >
            <span className="block w-full h-full font-extralight">
              <XMarkIcon
                className="h-full w-full p-1 text-white"
                aria-hidden="true"
              />
            </span>
          </button>
        </div>
        <hr className="h-[1px] w-full bg-gray-400 mt-6" />
        <nav className="h-full px-6 uppercase text-3xl font-bold">
          {navigation.map((item, i) => (
            <Link
              key={item.name}
              href={item.href}
              className={`py-4  block hover:text-purple-600 focus-visible:text-purple-600 transition-transform duration-500 ease-in-out delay-${
                i * 100
              } ${
                !isPending && mobileMenuOpen
                  ? "translate-x-0"
                  : "translate-x-full"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="#"
            className={`mt-[85%] py-4 block hover:text-purple-600 focus-visible:text-purple-600 transition-transform duration-500 ease-in-out delay-${
              navigation.length * 100
            } ${
              !isPending && mobileMenuOpen
                ? "translate-x-0"
                : "translate-x-full"
            }`}
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </nav>
      </aside>
    </header>
  );
};

export default Nav;

{/* <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-x-4">
<AppStoreLink link="https://apps.apple.com/in/app/amigo/id6483936159" />
<PlayStoreLink link="https://play.google.com/store/apps/details?id=app.amigo.app&hl=en-US" />
</div> */}