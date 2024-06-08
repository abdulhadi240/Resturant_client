import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
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
      name: "Events",
      link: "/event",
      design: false,
    },
    {
      name: "About",
      link: "/about",
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
      name: "Reservation",
      link: "/reservation",
      design: true,
    },
  ];
const Frame_hero = () => {
  return (
    <div className='z-50 shadow-custom-tall'>
        <div className="z-10 justify-center w-full py-2 text-center fle text-secondary-normal ">
        136 BROADWAY, BROOKLYN, NY 11249 718-218-7572
      </div>
      <div className="w-full h-[520px]   text-secondary-normal bg-transparent border-[1px] border-secondary-normal">
        <div className="mt-2 h-[500px]  ml-[7px] w-[99%] relative text-secondary-normal bg-transparent border-[1px] border-secondary-normal shadow-inner-green">
          <div className="relative z-10 flex justify-between px-24 py-4 shadow-custom-tall text-secondary-normal ">
            {menu.map((items, index) => (
              <div
                key={index}
                className={`${items.design ? "border-[1px] border-secondary-normal px-5 p-1" : "ml-3 mt-[5px]"}`}
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
          <div className="relative w-full h-full ">
            <Image
              src={"/dining.jpg"}
              layout="fill"
              objectFit="cover"
              alt="hero"
              className="absolute top-0 z-0 -mt-16 border-b-secondary-normal border-b-[1px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frame_hero