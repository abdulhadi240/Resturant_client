"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { FiAlignJustify } from "react-icons/fi";
import { FiAlignRight } from "react-icons/fi";
import Image from "next/image";

const MobileMenu = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      <Image src={'/logo.webp'} height={100} width={100} alt="logo"/>
      <button className="fixed z-50 items-center top-4 right-4" onClick={toggleMenu}>
        {isOpen ? (
          <div className="border-[1px] border-white p-3 rounded-sm">
            <FiAlignRight color="red" size={40} />
          </div>
        ) : (
          <div className="">
            <FiAlignJustify color="red" size={40} />
          </div>
        )}
      </button>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="z-10 justify-center w-full py-2 text-xs text-center sm:text-sm text-secondary-normal">
        136 BROADWAY, BROOKLYN, NY 11249 718-218-7572
      </motion.div>
      {isOpen && ( // Conditionally render motion.div only when menu is open
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }} // Exit animation
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 z-40 flex flex-col items-center justify-center w-full h-full text-xl font-semibold opacity-80 text-secondary-normal bg-primary"
        >
          {menu.map((items, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`${items.design ? "border-[1px] border-secondary-normal px-5 p-1 ml-3" : "ml-4 mt-[5px]"}`}
          >
            <Link
              href={items.link} onClick={()=>{toggleMenu()}}
              className="font-semibold uppercase hover:text-secondary-dark"
            >
              {items.name}
            </Link>
          </motion.div>
        ))}
        </motion.div>
      )}
    </div>
  );
};

export default MobileMenu;
