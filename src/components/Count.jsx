'use client'
import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export const CountUpStats = () => {
  return (
    <div className="max-w-3xl px-4 py-20 mx-auto md:py-24">
      <div className="flex flex-col items-center justify-center gap-10 sm:flex-row">
        <Stat
          num={15}
          suffix="+"
          subheading="Experience"
        />
        <Stat
          num={15.5}
          decimals={1}
          suffix="K+"
          subheading="Meals/day"
        />
        <Stat
          num={100}
          suffix="+"
          subheading="Clients"
        />
      </div>
    </div>
  );
};

const Stat = ({ num, suffix, decimals = 0, subheading }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="flex flex-col items-center py-8 w-72 sm:py-0">
      <p className="mb-2 text-4xl font-semibold text-center sm:text-4xl">
        <span ref={ref}></span>
        {suffix}
      </p>
      <p className="text-center text-red-600 max-w-48">{subheading}</p>
    </div>
  );
};