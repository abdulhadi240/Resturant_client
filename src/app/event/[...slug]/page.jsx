import { GetEventData } from "@/components/Datafetching";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import { builder } from "@/components/Datafetching";
import Inputform from "@/components/Inputform";

const page = async ({ params }) => {
  const data = await GetEventData(params.slug[0]);
  console.log(data);
  return (
    <>
      <div className="text-secondary-normal">
        <Navbar />
      </div>
      <div className="flex justify-between gap-10 mx-20 mt-20 ">
        <div className="flex flex-col gap-6 left w-[50%]">
          <div className="upper">
            <Image
              src={builder.image(data[0]?.tags[0]?.image).url()}
              width={500}
              height={500}
              alt="images"
              className="rounded-md"
            />
          </div>
          <div className="flex flex-col gap-3 text-center lower">
            <h1 className="flex justify-center text-xl text-secondary-normal">{data[0].title}</h1>
            <p className="flex justify-center text-secondary-normal">{data[0].timing}</p>
            <p className="flex justify-center text-secondary-normal">{data[0].subtitle}</p>
            <p className="flex justify-center text-secondary-normal">{data[0].about}</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 right">
          <div className="uper ">
            <h1 className="flex justify-center text-4xl font-bold text-secondary-normal ">PURCHASE TICKET</h1>
            <p className="flex justify-center text-secondary-normal">{data[0].price}</p>
            <p className="flex justify-center text-secondary-normal">{data[0].seats}</p>
          </div>
          <div className="flex justify-center">
            <Inputform data={data[0]}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;