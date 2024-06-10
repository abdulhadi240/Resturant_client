import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MobileMenu from './MobileMenu';

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
    name: "Ticketed Events",
    link: "/event",
    design: false,
  },
  {
    name: "About",
    link: "/about",
    design: false,
  },
  {
    name: "Team",
    link: "/team",
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
    name: "Private Dining",
    link: "/private",
    design: false,
  },
  {
    name: "Gift Cards",
    link: "/gift",
    design: false,
  },
  {
    name: "Reservation",
    link: "/reservation",
    design: true,
  },
];

const Frame_hero = ({ image, children }) => {
  return (
    <div className='z-50 overflow-hidden shadow-custom-tall'>
      <div>
        <div className='mb-10 lg:hidden'> 
          <Image src={'/logo.png'} width={150} height={150} alt='logo'/>
        </div>
        <div>
          <MobileMenu menu={menu}/>
        </div>
      </div>
      <div className="z-10 justify-center w-full py-2 text-xs text-center sm:text-sm text-secondary-normal">
        136 BROADWAY, BROOKLYN, NY 11249 718-218-7572
      </div>
      <div className="w-full h-[500px] overflow-hidden text-secondary-normal bg-transparent border-[1px] border-secondary-normal">
        <div className="mt-2 h-[480px]  overflow-hidden ml-[7px] w-[99%] relative text-secondary-normal bg-transparent border-[1px] border-secondary-normal shadow-inner-green">
          <div className="relative hidden  z-10 lg:flex justify-between px-6 py-4  text-secondary-normal bg-gradient-to-b from-[#014137] to-[#0141370d] shadow-custom-tall">
            {menu.map((items, index) => (
              <div
                key={index}
                className={`${items.design ? "border-[1px] border-secondary-normal px-5 p-1 ml-3" : "ml-4 mt-[5px]"}`}
              >
                <Link
                  href={items.link}
                  className="font-semibold uppercase hover:text-secondary-dark"
                >
                  {items.name}
                </Link>
              </div>
            ))}
          </div>
          <div className="relative -mt-16 overflow-hidden -pb-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frame_hero;
