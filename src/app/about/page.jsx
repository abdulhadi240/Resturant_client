import Frame_hero from "@/components/Frame_hero";
import Hero_carasoul from "@/components/Hero_carasoul";
import { Example } from "@/components/Navbar1";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="">
        <Frame_hero>
          <Example />
          <div className="relative">
            <img src="/about3.png" alt="bg" className="hidden w-screen h-[500px] sm:block" />
            <img src="/aboutmob1.png" alt="bg" className="w-screen h-[500px] sm:hidden" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="relative z-10 text-5xl font-bold text-white sm:text-6xl" style={{ marginTop: '-200px' }}>
                <span className="before:block before:absolute before:left-[-60px] before:top-[50%] before:h-[2px] before:w-[50px] before:bg-red-500 after:block after:absolute after:right-[-60px] after:top-[50%] after:h-[2px] after:w-[50px] after:bg-red-500">
                  ABOUT <span className="text-red-500">US</span>
                </span>
              </h1>
            </div>
          </div>
          <Example />
        </Frame_hero>
      </div>

      <div>
        <h1 className="mt-10 text-3xl font-bold tracking-widest text-center text-black">
          WELCOME TO <span className="text-red-500">LAZIZ CATERING</span>
        </h1>
        <p className="items-center px-5 mt-10 tracking-wider text-center text-black sm:px-10 lg:px-20">
          Welcome to Laziz Catering, your premier partner for exceptional
          culinary experiences in the heart of Dubai. We are dedicated to
          creating extraordinary events, whether intimate gatherings, lavish
          weddings, or corporate functions, with a focus on excellence,
          creativity, and unparalleled customer service. Our talented chefs
          craft menus using the finest fresh ingredients, showcasing a fusion of
          international flavors and local influences, tailored to your unique
          vision, dietary preferences, and cultural nuances. From meticulous
          menu planning to flawless on-site execution, we ensure a seamless and
          memorable experience, delighting your guests with delectable dishes
          and impeccable service.
        </p>
      </div>
      
      <div>
        <h1 className="mt-10 text-6xl font-bold tracking-widest text-center text-black">
          MEET <span className="text-red-500">THE TEAM</span>
        </h1>
        <p className="mt-3 text-xs text-center text-black">Our dynamic team ensures every client's vision becomes a reality with precision and warm hospitality.</p>
      </div>
    </div>
  );
};

export default page;
