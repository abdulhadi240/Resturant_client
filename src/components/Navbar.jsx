'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export const menu = [
  {
    name: "Home",
    link: "/",
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
  
]

export const menuleft = [
  {
    name: "Home",
    link: "/",
    design: false,
  },
  
  {
    name: "Menu",
    link: "/menu",
    design: false,
  },
]
export const menuright = [
    
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
  
]

const Navbar = () => {
  return (
    <div className="">
        <div className="relative z-10 items-center justify-between hidden px-32 text-sm text-center text-black lg:flex ">
            {menuleft.map((items, index) => (
              <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${items.design ? "border-[1px] border-secondary-normal px-5 p-1 ml-3" : "ml-4 mt-[5px]"}`}
            >
              <Link
                href={items.link}
                className="font-semibold uppercase hover:text-secondary-dark"
              >
                {items.name}
              </Link>
            </motion.div>
            ))}
            <div className="flex items-center justify-between mt-2 lg:justify-center">
            <Image src={'/logo.webp'} height={80} width={80} alt="logo" className="justify-center hidden lg:flex"/>
        </div>
        {menuright.map((items, index) => (
              <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${items.design ? "border-[1px] border-secondary-normal px-5 p-1 ml-3" : "ml-4 mt-[5px]"}`}
            >
              <Link
                href={items.link}
                className="font-semibold uppercase hover:text-secondary-dark"
              >
                {items.name}
              </Link>
            </motion.div>
            ))}
          </div>
      
    </div>
  );
};

export default Navbar;
