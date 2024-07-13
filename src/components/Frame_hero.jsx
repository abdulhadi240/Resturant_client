'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MobileMenu from './MobileMenu';
import { motion } from 'framer-motion';
const menu = [
  {
    name: "Home",
    link: "/",
    design: false,
  },
  {
    name: "The bar",
    link: "/bar",
    design: false,
  },
  {
    name: "Menu",
    link: "/menu",
    design: false,
  },
  {
    name: "About",
    link: "/about",
    design: false,
  },
  {
    name: "Need To Know",
    link: "/location",
    design: false,
  },
  {
    name: "Gallery",
    link: "/gallery",
    design: false,
  },
  {
    name: "Reservation",
    link: "/reservation",
    design: true,
  },
];

const Frame_hero = ({ children ,Image }) => {
  return (
    <div className='z-50 overflow-hidden shadow-custom-tall'>
      <div className="w-full h-auto  overflow-hidden text-secondary-normal bg-transparent border-[1px] border-secondary-normal">
        <div className="mt-2 lg:h-screen w-screen  overflow-hidden   relative text-secondary-normal bg-transparent border-[1px] border-secondary-normal shadow-inner-green">
          <div className="relative w-full h-full overflow-hidden ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frame_hero;
