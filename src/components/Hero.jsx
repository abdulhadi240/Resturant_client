'use client'
import { Container } from "./Container";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const videoContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <div className="text-white bg-black">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute -top-[--header-height] left-0 h-[200vh] w-full"
      >
        <img
          className="sticky top-0 object-cover w-full h-screen"
          src="/bg1.jpeg"
          style={{ filter: "brightness(0.7)" }} // Adjust brightness here
        />
      </motion.div>
      <Container className="relative z-10 h-[--hero-height] pb-7">
        <motion.div
          className="flex flex-col items-start justify-end h-full"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.98 }}
        >
          <h1 className="mb-10 text-4xl font-bold md:text-5xl">
          Delight in Every Bite. <br />
          Only with <span className="text-red-500">Laziz Catering.</span>
          </h1>
          <button className="mb-16">
          Order Now
          </button>
          <p className="font-semibold">New Menus Every Month — Always Fresh.</p>
        </motion.div>
      </Container>
    </div>
  );
};
