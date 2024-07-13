"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const Menu = () => {
  return (
    <section className="p-8 bg-white">
      <span className="block mb-4 text-2xl font-bold text-center">
        FAMOUS <span className="text-red-500">PRODUCTS</span>
      </span>
      <div className="grid max-w-4xl grid-cols-1 gap-4 mx-auto sm:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Biryani"
          description="We make pretty buildings"
          imgSrc="/biryani.jpg"
        />
        <Card
          title="Pilauo"
          description="This ones pretty nice"
          imgSrc="/pilau.jfif"
        />
        <Card
          title="BBQ"
          description="We can even do TALL buildings"
          imgSrc="/bbq.avif"
        />

        <Card
          title="Laziz Special"
          description="You like wavy buildings?"
          imgSrc="/p1.webp"
        />

        <Card
          title="Contenental"
          description="You like wavy buildings?"
          imgSrc="/chinese.jpg"
        />
      </div>
    </section>
  );
};

const Card = ({ imgSrc, title, description }) => {
  return (
    <Link href={"/menu"}>
      <motion.div whileHover="hover" className="w-full h-[300px] relative">
        <div className="flex flex-col justify-center p-6 bg-black h-1/2">
          <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
          <p className="text-sm font-light text-slate-300">{description}</p>
        </div>
        <motion.div
          initial={{
            top: "0%",
            right: "0%",
          }}
          variants={{
            hover: {
              top: "50%",
              right: "50%",
            },
          }}
          className="absolute inset-0 z-10 bg-slate-200"
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute bottom-0 right-0 z-0 grid w-1/2 text-black transition-colors bg-white h-1/2 place-content-center hover:text-indigo-500">
          <div className="flex items-center">
            <span className="text-xs">MORE</span>
            <FiArrowUpRight className="text-lg" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Menu;