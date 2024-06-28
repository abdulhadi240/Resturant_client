import Image from "next/image";
import Home_book from "@/components/Home_book";
import Frame_hero from "@/components/Frame_hero";
import YouTube from "@/components/Youtube";
import Carasoul from "@/components/Carasoul";
import Hero_carasoul from "@/components/Hero_carasoul";
import Service from "@/components/Services";
import Quality from "@/components/Quality";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <>
      
      <div className="">
        <Frame_hero>
          <Hero_carasoul/>
        </Frame_hero>
        
      </div>
      <div className="mt-20 bg-white">
        <div className="">
        <h1 className="flex items-center justify-center text-2xl font-semibold text-center">OUR SERVICES</h1>
        <p className="flex items-center justify-center text-xs text-center">Our Dubai catering service, with a capacity of over 6000 meals daily, currently serves 4500+ meals to employees of various companies.</p>
        </div>
        <Service/>
      </div>

     

      <div>
        <Menu/>
      </div>

      <div className="flex justify-center mt-20 mb-10 text-3xl font-semibold tracking-widest text-center uppercase text-secondary-normal">
        <h1>FOLLOW US ON INSTAGRAM</h1>
      </div>
      <div className="">
      <YouTube url="https://www.youtube.com/watch?v=LQdfE66rAwc" />
      </div>
    </>
  );
}
