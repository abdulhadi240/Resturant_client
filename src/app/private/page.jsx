'use client'
import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "@/components/animate/animation1.json";
const page = () => {
  return <Lottie animationData={groovyWalkAnimation} loop={true} />;
};

export default page;
