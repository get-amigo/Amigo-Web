"use client";

import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

interface navType {
  name: string;
  href: string;
}

const navigation: navType[] = [
  { name: "About", href: "#" },
  { name: "Privacy", href: "#" },
  { name: "Terms", href: "#" },
];

// const navigation: any = [];

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleHeader = () => {
    const header = document.querySelector("[data-app-header]") as HTMLElement;

    if (window.scrollY > 200) {
      header.classList.remove("absolute");
      header.classList.add("fixed");
      header.classList.add("shadow-xl");
      header.style.backgroundColor = "white";
    } else {
      header.classList.remove("fixed");
      header.classList.remove("shadow-xl");
      header.classList.add("absolute");
      header.style.backgroundColor = "transparent";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleHeader);

    return () => window.removeEventListener("scroll", handleHeader);
  }, []);

  return (
    <header
      className="absolute inset-x-0 top-0 z-50 transition-all duration-500 "
      data-app-header
    >
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 translate-x-[-100px] animate-come-right">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Get Amigo</span>
            <Image
              className="size-8"
              src="/amigo-logo.svg"
              alt="Amigo"
              height={32}
              width={32}
            />
          </Link>
        </div>
        <div className="flex lg:hidden translate-x-[100px] animate-come-left">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 translate-y-[-100px] animate-come-down">
          {navigation.map((item) => (
            <div key={item.name} className="group pb-2">
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>

              <div className="w-full h-[2px] scale-x-0 bg-gray-600 transition-all duration-200 origin-left group-hover:scale-x-100"></div>
            </div>
          ))}
        </div>
        <div className="group hidden lg:flex lg:flex-1 lg:justify-end translate-x-[100px] animate-come-left">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 flex flex-nowrap justify-center items-center transition-all duration-300 gap-1 px-2 group-hover:gap-2 group-hover:px-1"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden "
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Get Amigo</span>
              <img className="h-8 w-auto" src="/ami-logo.svg" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root translate-x-[-100px] animate-come-right">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Nav;
