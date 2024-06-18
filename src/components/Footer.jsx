import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const menu = [
  {
    name: "PRESS",
    link: "/press",
    design: false,
  },
  {
    name: "CAREERS",
    link: "/carrers",
    design: false,
  },
  {
    name: "CONTACT",
    link: "/contact",
    design: false,
  },
  {
    name: "EMAIL SIGNUP",
    link: "/email",
    design: true,
  },
];





export const Footer = () => {
  return (
    <div className="fixed bottom-0 items-center hidden w-full lg:block">
      <div className="relative hidden  z-10 lg:flex justify-between px-6 py-10  text-secondary-normal bg-gradient-to-b from-[#0141370d] to-[#014137] shadow-custom-tall"/>
      <div className="flex justify-between px-10 bg-primary ">
        <div className="flex gap-2 mt-1">
        <div className="flex items-center justify-center w-6 h-6 text-center rounded-full facebook bg-secondary-normal">
        <FaFacebookF size={15} color="#014137"/>
        </div>
        <div className="flex items-center justify-center w-6 h-6 p-1 text-center rounded-full insta bg-secondary-normal">
        <FaInstagram  size={15} color="#014137"/>
        </div>
        </div>
        <div className="flex menu text-secondary-normal">
          {menu.map((items, index) => (
            <div key={index} className={`${items.design ? "border-[1px] border-secondary-normal px-5 p-1 ml-3" : "ml-4 mt-[5px]"}`}>
              <Link href={items.link} className="font-semibold uppercase hover:text-secondary-dark">
                {items.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="powered"></div>
    </div>
  );
};
