import Image from "next/image";
import React from "react";

const Opening = () => {
  return (
    <div className="relative">
      <div className="brightness-[.1] ">
        <img src={"/background.jfif"} alt="image" className="w-full h-full"/>
      </div>
      <div className="absolute top-0 text-white z-9999">
        <h1>OPENING HOURS</h1>
      </div>
    </div>
  );
};

export default Opening;
