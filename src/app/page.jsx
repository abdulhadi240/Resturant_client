import Frame_hero from "@/components/Frame_hero";
import YouTube from "@/components/Youtube";
import Hero_carasoul from "@/components/Hero_carasoul";
import Service from "@/components/Services";
import Menu from "@/components/Menu";
import Feature from "@/components/Feature";
import Service1 from "@/components/Service1";
import { CountUpStats } from "@/components/Count";
import BasicFAQ from "@/components/FAQ";
import { Example } from "@/components/Navbar1";
import groovyWalkAnimation from "@/components/animate/animation1.json";
import groovyWalkAnimation1 from "@/components/animate/animate2.json";
import groovyWalkAnimation2 from "@/components/animate/animate3.json";
import Opening from "@/components/Opening";
import { Hero } from "@/components/Hero";
import { Usps } from "@/components/Usps";

export default function Home() {
  return (
    <>
      <div className="">
        <Frame_hero>
          <Example />
          <div className="hidden sm:block">
          <Hero_carasoul />
          </div>
          <Example />
        </Frame_hero>
      </div>
      <div className="relative bg-black sm:bg-transparent">
        <img
          src="shot.png"
          className="w-full h-72 brightness-[.2] hidden sm:block"
        />
        <div className="inset-0 z-10 flex items-center justify-center sm:absolute">
          <div className="grid grid-cols-1 gap-6 p-6 sm:p-0 lg:gap-16 sm:grid-cols-2 lg:grid-cols-4">
            <Feature
              image={groovyWalkAnimation}
              title={"Fresh Ingredients"}
              para={
                "We use fresh ingredients cultivated from farms which are directly supplied to us."
              }
            />
            <Feature
              image={groovyWalkAnimation}
              title={"Top Chefs"}
              para={
                "We use fresh ingredients cultivated from farms which are directly supplied to us."
              }
            />
            <Feature
              image={groovyWalkAnimation1}
              title={"Attractive Flavours"}
              para={
                "We use fresh ingredients cultivated from farms which are directly supplied to us."
              }
            />
            <Feature
              image={groovyWalkAnimation2}
              title={"Delicious Food"}
              para={
                "We use fresh ingredients cultivated from farms which are directly supplied to us."
              }
            />
          </div>
        </div>
      </div>
      <div className="mt-20 bg-white">
        <div className="">
          <h1 className="flex items-center justify-center text-3xl font-semibold text-center text-red-500">
            <span className="px-1 text-black">OUR</span> SERVICES
          </h1>
          <p className="flex items-center justify-center text-xs text-center">
            Our Dubai catering service, with a capacity of over 6000 meals
            daily, currently serves 4500+ meals to employees of various
            companies.
          </p>
        </div>
        <Service />
      </div>
      <div className="">
        <Menu />
      </div>
      <div className="relative z-10 mt-32 bg-black">
          <Hero />
          <Usps />
        </div>
      
      
      <div className="flex flex-col justify-center mt-20 overflow-hidden sm:gap-6 lg:gap-10 sm:flex-row">
        <div className="flex flex-row justify-between sm:justify-center sm:gap-6 lg:gap-10 sm:flex-col ">
          <Service1
            image={"/24.png"}
            check={true}
            title={"24/7"}
            desc={
              "Laziz Catering prioritizes seamless event execution for a stress-free experience."
            }
          />
          <Service1
            image={"/24.png"}
            check={true}
            title={"24/7"}
            desc={
              "Laziz Catering prioritizes seamless event execution for a stress-free experience."
            }
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="flex justify-center h-auto text-center text-white bg-black border-2 border-white border-solid rounded-md w-80">
            <div className="m-2 border-2 border-white">
              <div className="flex flex-col justify-center gap-4">
                <h1 className="justify-center mt-4 text-xl font-bold text-center">
                  Good Food <span className="text-red-500">Good Life</span>
                </h1>
                <p className="items-center px-6 text-[12px] text-center">
                  We create exceptional culinary experiences for events of all
                  sizes, blending international flavors with local influences
                  using the finest fresh ingredients. Our comprehensive services
                  include meticulous menu planning, tastings, and seamless
                  on-site preparation, ensuring every event is flawlessly
                  executed and unforgettable. Laziz Catering prioritizes
                  stress-free event execution and elevates your event with
                  culinary artistry and impeccable service, guaranteeing a
                  memorable gastronomic journey for your guests.
                </p>
                <div className="py-2 text-xs text-center text-red-500">
                  Book Now
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between sm:gap-6 lg:justify-center lg:gap-10 sm:flex-col">
          <Service1
            image={"/24.png"}
            title={"24/7"}
            desc={
              "Laziz Catering prioritizes seamless event execution for a stress-free experience."
            }
          />
          <Service1
            image={"/24.png"}
            title={"24/7"}
            desc={
              "Laziz Catering prioritizes seamless event execution for a stress-free experience."
            }
          />
        </div>
      </div>
      <div className="flex justify-center mt-20 mb-10 text-3xl font-semibold tracking-widest text-center uppercase text-secondary-normal">
        <h1>FOLLOW US ON INSTAGRAM</h1>
      </div>
      <div>
        <BasicFAQ />
      </div>
    </>
  );
}
