"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { FiAlignJustify } from "react-icons/fi";
import { FiAlignRight } from "react-icons/fi";
const MobileMenu = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      <button className="fixed z-50 top-4 right-4" onClick={toggleMenu}>
        {isOpen ? (
        <FiAlignRight color="white" />

        ) : (
          <FiAlignJustify color="golden"/>

        )}
      </button>
      {isOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }} // Exit animation
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 z-40 flex flex-col items-center justify-center w-full h-full text-xl font-semibold text-primary bg-secondary-normal"
        >
          {menu.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="w-full p-4 text-center hover:bg-primary hover:text-secondary-normal"
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default MobileMenu;
