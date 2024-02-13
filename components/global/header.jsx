"use client";
import React from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [ShowNav, setNav] = useState(false);

  const handleNav = () => {
    setNav(true);
  };

  return (
    <>
      <div className="flex items-center justify-between px-2 sm:px-8 py-2 sm:py-4 w-full">
        <div>
          <Link href={"/"} className="">
            <Image src={"/img/Logo.png"} height={150} width={150} alt="logo" />
          </Link>
        </div>
        <div className="flex gap-4 sm:gap-12 items-center">
          <section
            className="text-2xl text-white sm:text-4xl cursor-pointer"
            onClick={handleNav}
          >
            <GiHamburgerMenu />
          </section>
        </div>
      </div>
      <div
        className={`${
          ShowNav ? "flex" : "hidden"
        } fixed w-full h-full  items-start top-0 left-0 z-20  px-0`}
      >
        <div className="w-full relative drop-shadow-2xl rounded-md">
          <button
            className="absolute right-4 top-4 font-bold font-inter z-10"
            onClick={() => setNav(false)}
          >
            <p className="border-2 text-white rounded-full border-txtcolor px-2 text-2xl">
              x
            </p>
          </button>
          <div className="relative">
            <Image
              src={"/img/background/navigation-bg.jpeg"}
              width={2000}
              height={1000}
              alt="background"
              className="hidden sm:block"
            />
            <Image
              src={"/img/background/navigation-bg-mobile.jpeg"}
              width={2000}
              height={1000}
              alt="background"
              className="block sm:hidden"
            />
            <div className="w-full absolute h-full top-0 left-0 right-0 bottom-0">
              <section className="p-8">
                <Link href={"/"} className="">
                  <Image
                    src={"/img/Logo.png"}
                    height={100}
                    width={100}
                    alt="logo"
                  />
                </Link>
              </section>

              <section className="w-full h-full flex flex-col sm:flex-row items-center justify-center gap-12 text-white text-4xl font-medium">
                <Link href={"/"} className="hover:text-gray-400 duration-500">
                  About Us
                </Link>

                <Link href={"/"} className="hover:text-gray-400 duration-500">
                  Recent Deals
                </Link>
                <Link
                  href={"/about-us"}
                  className="hover:text-gray-400 duration-500"
                >
                  Contact Us
                </Link>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
