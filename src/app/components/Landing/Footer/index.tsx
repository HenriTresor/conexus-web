import { footerLinks } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoGlobeOutline } from "react-icons/io5";

const Footer = () => {


  return (
    <footer className="bg-[rgb(236,236,236)] text-neutral-800 m-[2vw] p-[3.5vw] rounded-2xl">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center mb-8">
          {/* Logo and QR Code */}
          <div className="flex items-center space-x-3">
            <Image src={`/logo.svg`} width={100} height={100} alt="Conexus Logo" />
            <div className="text-xl font-bold">Conexus</div>
          </div>
          <div className="hidden md:flex border border-white rounded-full px-4 py-3 gap-2">
            <IoGlobeOutline />
            <select name="" id="" className="outline-none bg-transparent font-semibold">
              <option value="english" className="px-5">
                English
              </option>
              <option value="kiny" className="">
                Kinyarwanda
              </option>
            </select>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-10"></div>

        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-20 lg:gap-5">
          {/* QR Code Section */}
          <div className="lg:w-2/5 flex items-center space-x-4 lg:border-r border-gray-700 px-5">
            <div className="flex items-center">
              <div className="bg-gray-800 rounded-lg p-4">
                {/* Placeholder for QR Code */}
                <div className="bg-white h-16 w-16 flex items-center justify-center rounded-md">
                  <span className="text-black font-bold text-xl">B</span>
                </div>
              </div>
              <p className="text-gray-400 ml-4">
                Scan to download our App on the <br /> Play Store and App Store
              </p>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="lg:w-3/5 flex flex-col space-y-3 px-5">
            <p className="text-neutral-800 text-center md:text-left text-xl font-bold">
              Subscribe
            </p>
            <p className="text-gray-400 text-center md:text-left">
              Get Product updates and our changelog. No spam ever.
            </p>
            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-4 px-10 flex-grow rounded-full bg-gray-800 text-white focus:outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-full text-white font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-10"></div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-between text-sm text-gray-400">
          {footerLinks.map((section, index) => (
            <div className="w-1/2 md:w-auto mb-4 md:mb-0" key={index}>
              <h5 className="font-bold text-neutral-800 mb-2 text-xl">{section.title}</h5>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-neutral-800 opacity-55 text-md">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Blog or Resources Section */}
          <div className="w-1/2 md:w-auto mb-4 md:mb-0">
            <h5 className="font-bold text-neutral-800 mb-2 text-xl">Blog & Resources</h5>
            <ul>
              <li><Link href="/blog" className="text-neutral-800 opacity-55 text-md">Our Blog</Link></li>
              <li><Link href="/tutorials" className="text-neutral-800 opacity-55 text-md">Tutorials</Link></li>
              <li><Link href="/news" className="text-neutral-800 opacity-55 text-md">Company News</Link></li>
              <li><Link href="/industry-insights" className="text-neutral-800 opacity-55 text-md">Industry Insights</Link></li>
              <li><Link href="/guides" className="text-neutral-800 opacity-55 text-md">Guides</Link></li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-10"></div>

        {/* Footer Bottom */}
        <div className="flex justify-between items-center">
          <Link href="#" className="text-neutral-800 opacity-55 text-sm hover:underline">
            Back to top
          </Link>
          <div className="text-center text-gray-500 mt-8 text-xs flex items-center">
            Copyright © 2025{" "}
            <a
              href="mailto:team@brop.rw"
              className="hover:underline font-bold text-neutral-800"
            >
              team@brop.rw
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
