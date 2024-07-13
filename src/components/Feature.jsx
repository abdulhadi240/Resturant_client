import Image from "next/image";
import React from "react";

const Feature = ({image , title , para }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-center text-center">
        <Image src={image} height={50} width={50} alt="icons"/>
      </div>
      <div className="flex items-center justify-center text-lg font-bold text-center text-white">
        {title}
      </div>
      <div className="flex items-center justify-center text-sm text-center text-white w-44">
        {para}
      </div>
      <div className="flex items-center justify-center text-xs text-center text-red-500">
        learn more
      </div>
    </div>
  );
};

export default Feature;
