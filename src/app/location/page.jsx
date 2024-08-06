import Navbar from "@/components/Navbar";
import React from "react";
import dynamic from "next/dynamic";
import Frame_hero from "@/components/Frame_hero";
import { Example } from "@/components/Navbar1";

const page = () => {
  return (
    <>
    <div className="">
        <Frame_hero>
          <Example />
          <div className="relative">
            <img src="/about3.png" alt="bg" className="hidden w-screen h-[500px] sm:block" />
            <img src="/aboutmob1.png" alt="bg" className="w-screen h-[500px] sm:hidden" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="relative z-10 text-5xl font-bold text-white sm:text-6xl" style={{ marginTop: '-200px' }}>
                <span className="before:block before:absolute before:left-[-60px] before:top-[50%] before:h-[2px] before:w-[50px] before:bg-red-500 after:block after:absolute after:right-[-60px] after:top-[50%] after:h-[2px] after:w-[50px] after:bg-red-500">
                  CONTACT <span className="text-red-500">US</span>
                </span>
              </h1>
            </div>
          </div>
          <Example />
        </Frame_hero>
      </div>
      <div className="flex flex-col justify-between mx-5 mt-20 lg:mx-10 lg:flex-row text-secondary-normal">
        <div className="text-center text-secondary-normal ">
          <h1 className="mb-4 text-4xl font-bold text-black">
            HOURS <span className="px-1 text-red-500">&</span> LOCATION
          </h1>
          <p className="text-black">
            Bin Haider Ware house Complex,
            <br />
            Ware house No.12 <br /> Dubai Investment Park2 <br /> Jabel Ali,
            Dubai
            <br />
            <br /> + 971 56 192 3426 <br /> + 971 56 421 9775 <br /> + 971 56
            171 2232 <br /> <br /> info@franciebrooklyn.com <br /> <br />{" "}
            <span className="font-semibold">Dinner</span> <br /> Monday -
            Thursday <br /> 5:30 - 10:00pm <br />
            <br />
            <span className="font-semibold">Dinner </span>
            <br />
            Friday - Saturday <br />
            5:00 - 10:30pm
          </p>
        </div>
        <div className="lg:w-[600px] flex justify-center text-center text-black mt-6">
          <p>
            <span className="font-semibold text-secondary-dark">
            VISION:
            </span>
            <br />
            <br />
            <br />
            At Laziz Catering, we aspire to redefine culinary experiences in
            Dubai by blending international flavors with local influences. Our
            commitment to excellence and creativity ensures unforgettable events
            tailored to your unique preferences. With meticulous menu planning
            and impeccable service, we aim to surpass expectations and leave a
            lasting impression on you and your guests. Join us for a gastronomic
            journey where every dish reflects our dedication to culinary
            excellence
            <br />
            <br/>
            <span className="font-semibold text-secondary-dark">
            Special Taste </span><br />
            <br />
            At Laziz Catering, we strive to deliver culinary experiences that
            transcend the ordinary, tailored precisely to your desires. Our
            mission is to tantalize your taste buds with an array of delectable
            dishes crafted from the finest ingredients, ensuring each event is a
            feast for the senses. excellence. <br />
            <br />
            <span className="font-semibold text-secondary-dark">
            Taste Pleasure</span> <br />
            <br />
            Indulge in the ultimate gastronomic journey with Laziz Catering,
            where every bite is a symphony of flavors designed to delight. Our
            mission is to surpass your expectations, offering impeccable service
            and an unforgettable culinary adventure that leaves a lasting 05
            impression on you and your guests. <br />
            <br />
          </p>
        </div>
      </div>
      <div className="mt-10 overflow-hidden rounded-xl sm:mx-10">
        {/*<Map/>*/}
      </div>
    </>
  );
};

export default page;
