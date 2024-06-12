import Frame_hero from "@/components/Frame_hero";
import React from "react";

const page = () => {
  return (
    <div>
      <Frame_hero image={"/about.jpg"} />
      <div>
        <span className="flex justify-center mt-10 text-lg font-bold text-secondary-normal">
          WELCOME TO LAZIZ CATERING
        </span>
        <p className="items-center px-5 mt-10 tracking-wider text-center sm:px-10 lg:px-20 text-secondary-normal">
          Welcome to Laziz Catering, your premier partner for exceptional
          culinary experiences in the heart of Dubai. We are dedicated to
          creating extraordinary events, whether intimate gatherings, lavish
          weddings, or corporate functions, with a focus on excellence,
          creativity, and unparalleled customer service. Our talented chefs
          craft menus using the finest fresh ingredients, showcasing a fusion of
          international flavors and local influences, tailored to your unique
          vision, dietary preferences, and cultural nuances. From meticulous
          menu planning to flawless on-site execution, we ensure a seamless and
          memorable experience, delighting your guests with delectable dishes
          and impeccable service{" "}
        </p>
      </div>
      <div>
        <h1 className="mt-10 text-6xl font-bold tracking-widest text-center text-secondary-normal">
        MEET THE TEAM
        </h1>
        <p className="mt-3 text-xs text-center text-secondary-normal">Our dynamic team ensures every client's vision becomes a reality with precision and warm hospitality.</p>

      </div>
    </div>
  );
};

export default page;
