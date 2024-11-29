'use client'

import { headerListItems } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { LuMenu } from "react-icons/lu";

type Props = object;

function Header({ }: Props) {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(prev => !prev)
  return (
    <section className="min-w-full flex p-1 px-3 items-center justify-between sticky top-0 backdrop:blur-lg z-50 bg-white shadow-md">
      <div className="w-auto max-w-[33.33%]  gap-2 hidden md:flex">
        {headerListItems.map((item, index) => (
          <a
            className={`p-2 backdrop:blur-lg rounded-full pl-4 pr-4  ${index == 0
              ? "bg-orange-blue-gradient text-white"
              : "bg-black bg-opacity-[.03] hover:bg-opacity-10"
              }`}
            href={item.link}
            key={index}
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="md:hidden block cursor-pointer">
        <LuMenu onClick={toggle} className="text-2xl cusor-pointer" />
      </div>
      {
        isOpen && (
          <div className="gap-2 md:hidden flex flex-col w-full absolute top-0 left-0 h-[100dvh] bg-white text-neutral-700 p-3 z-50">
            <button>
              <CgClose onClick={toggle} className="text-2xl cusor-pointer" />
            </button>
            {headerListItems.map((item, index) => (
              <a
                onClick={() => setIsOpen(false)}
                className={`p-2 backdrop:blur-lg rounded-full pl-4 pr-4  ${index == 0
                  ? "bg-orange-blue-gradient text-white"
                  : "bg-black bg-opacity-[.03] hover:bg-opacity-10"
                  }`}
                href={item.link}
                key={index}
              >
                {item.name}
              </a>
            ))}
          </div>
        )
      }
      <div className="md:w-[20.33%] w-auto flex items-center  justify-center">
        <Image src={`/logo.svg`} className="w-[60px]" width={100} height={100} alt="Conexus Logo" />
      </div>
      <div className="md:w-[25%] W-auto px-px p-[0.65rem] md:p-0 rounded-full flex justify-end">
        <Link
          className={`  rounded-full p-3   bg-faded-orange-blue-gradient bg-white`}
          href=""
        >
          Join Waiting List
        </Link>
      </div>


    </section>
  );
}

export default Header;
