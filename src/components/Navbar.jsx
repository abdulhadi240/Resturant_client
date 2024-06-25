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

const Navbar = () => {
  return (
    <div className="shadow-lg bg-primary shadow-primary">
        <div className="flex items-center justify-between mt-2 lg:justify-center">
            <Image src={'/logo.png'} height={150} width={150} alt="logo" className="justify-center hidden lg:flex"/>
            
        </div>
       
        <div className="relative hidden  z-10 lg:flex justify-between px-20 py-4  text-secondary-normal bg-gradient-to-b from-[#014137] to-[#0141370d] shadow-custom-tall">
            {menu.map((items, index) => (
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
