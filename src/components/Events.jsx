import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { GetEvent } from "./Datafetching";
import Link from "next/link";
import { builder } from '@/components/Datafetching';

const Events = async () => {
  const event = await GetEvent();
  console.log(event);
  return (
    <div className="grid justify-center grid-cols-2">
      {event.map((data, index) => {
        return (
          <Link href={`/event/${data?._id}`}><div key={index} className="group border-secondary-normal border-[2px] overflow-hidden">
            <Image
              src={builder.image(data?.tags[0]?.image).url()}
              alt="image"
              width={500}
              height={500}
              className="transition-all duration-150 group-hover:scale-110"
            />
            <div className="flex flex-col justify-center gap-3 mt-10 text-center text-secondary-normal ">
              <h1 className="text-xl font-bold">{data.title}</h1>
              <p className="font-semi-bold">{data.timing}</p>
              <p className="font-semi-bold">{data.subtitle}</p>
            </div>
          </div></Link>
        );
      })}
    </div>
  );
};

export default Events;
