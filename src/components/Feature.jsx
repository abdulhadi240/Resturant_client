'use client'
import Image from "next/image";
import React from "react";
import Lottie from "lottie-react";

const Feature = ({image , title , para }) => {
  const style = {
    height: 150,
    width:150
  };
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-center text-center">
      <Lottie animationData={image} loop={true} style={style}/>      </div>
      <div className="flex items-center justify-center -mt-6 text-lg font-bold text-center text-white">
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
