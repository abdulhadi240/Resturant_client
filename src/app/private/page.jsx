import { Hero } from "@/components/Hero";
import { Usps } from "@/components/Usps";
const page = () => {
  return (
    <>
      <main>
        <div className="relative z-10 bg-black">
          <Hero />
          <Usps />
        </div>
      </main>
    </>
  );
};

export default page;
