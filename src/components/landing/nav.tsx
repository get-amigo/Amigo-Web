"use client";

import { useState, useTransition } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

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
        className="flex items-center justify-between p-6 lg:px-8 bg-gray-900/80"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Get Amigo</span>
            <Image
              className="h-8 w-auto"
              width={8}
              height={8}
              src="/amigo-logo.svg"
              alt=""
            />
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
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm uppercase font-semibold leading-6 text-white"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="uppercase font-semibold leading-6 text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <aside
        className={`bg-gray-900 fixed top-0 right-0 rounded-s-xl text-white w-96 z-50 h-full transition-all duration-500 ease-in-out ${
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
            className="bg-purple-600 w-8 h-8 rounded-full grid place-content-center ml-auto"
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
        <div className="h-[1px] w-full bg-gray-500 mt-4"></div>
        <nav className="px-6 uppercase">
          {navigation.map((item, i) => (
            <Link
              key={item.name}
              href={item.href}
              className={`py-4 text-3xl block transition-transform duration-500 ease-in-out font-bold delay-${
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
        </nav>
      </aside>
    </header>
  );
};

export default Nav;
