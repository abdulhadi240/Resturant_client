import Events from "@/components/Events";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="z-50 shadow-custom-tall">
        <div className="z-10 justify-center hidden w-full py-2 text-center lg:flex text-secondary-normal ">
          136 BROADWAY, BROOKLYN, NY 11249 718-218-7572
        </div>
      </div>
      <Navbar />
      <div className="flex justify-center gap-10">
        <Events/>
        
      </div>
    </div>
  );
};

export default page;
