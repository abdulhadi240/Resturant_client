'use client'
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

const Service = () => {
  return (
    <div className="p-4 md:p-8 ">
      <div className="grid w-full max-w-6xl grid-cols-1 gap-4 mx-auto lg:grid-cols-2 md:gap-8">
        <Card
          heading="BIRTHDAY PARTIES"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
          imgSrc="https://www.oyorooms.com/blog/wp-content/uploads/2018/02/fe-3.png"
        />
        <Card
          heading="BANQUET"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
          imgSrc="https://images.unsplash.com/photo-1624763149686-1893acf73092?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          heading="BBQ EXTRAVAGANZA"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
          imgSrc="https://www.brandsynario.com/wp-content/uploads/2018/06/Untitled-1-53.jpg"
        />
        <Card
          heading="CORPORATE EXCELLENCE"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
          imgSrc="https://culinaryaffaire.com/wp-content/uploads/2021/08/Best-Corporate-Catering-Service.jpg"
        />
        <Card
          heading="PRIVATE PARTIES"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
          imgSrc="http://www.stylemotivation.com/wp-content/uploads/2019/11/private_parties2.jpg"
        />
        <Card
        heading="EXPRESS BUFFETS"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
        imgSrc="https://nypost.com/wp-content/uploads/sites/2/2017/01/best-buffets.jpg?quality=90&strip=all&w=1200&h=800&crop=1"
      />
      <Card
          heading="CULINARY CELEBRATION"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
          imgSrc="https://kitchenchat.info/wp-content/uploads/2017/02/A-Culinary-Celebration-Web.jpg"
        />
        <Card
        heading="WEDDINGS"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
        imgSrc="https://ruffledblog.com/wp-content/uploads/weddingdraping-23-andrewbayda-dlyadvoih-flowerbazar.jpg"
      />
      </div>
    </div>
  );
};

const Card = ({ heading, description, imgSrc }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{opacity:1 , animationDuration:2}}
      transition={{
        duration: 0.5,
        ease: "easeInOut"
      }}
      whileHover="hover"
      className="relative w-full h-64 overflow-hidden cursor-pointer bg-slate-300 group"
    >
      <div
        className="absolute inset-0 transition-all duration-500 md:group-hover:saturate-100 group-hover:scale-110"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-20 flex flex-col justify-between h-full p-4 text-white transition-colors duration-500 group-hover:text-white">
        <FiArrowRight className="ml-auto text-3xl transition-transform duration-500 group-hover:-rotate-45" />
        <div>
          <h4>
            {heading.split("").map((l, i) => (
              <ShiftLetter letter={l} key={i} />
            ))}
          </h4>
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ShiftLetter = ({ letter }) => {
  return (
    <div className="inline-block overflow-hidden h-[36px] font-semibold text-3xl">
      <motion.span
        className="flex flex-col min-w-[4px]"
        style={{
          y: "0%",
        }}
        variants={{
          hover: {
            y: "-50%",
          },
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <span>{letter}</span>
        <span>{letter}</span>
      </motion.span>
    </div>
  );
};

export default Service;
