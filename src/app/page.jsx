import Navbar from "@/components/Navbar";
import Image from "next/image";
import Home_book from "@/components/Home_book";

export default function Home() {
  return (
    <>
      <div className="flex justify-center mt-2 text-sm tracking-widest text-secondary-normal">
        136 BROADWAY, BROOKLYN, NY 11249 718-218-7572
      </div>
      <div className="mt-10">
        <div className="w-full h-[450px] text-secondary-normal bg-transparent border-[1px] border-secondary-normal">
          <div className="mt-2 h-[430px] ml-[7px] w-[99%] text-secondary-normal bg-transparent border-[1px] border-secondary-normal">
            <Navbar />
          </div>
        </div>
        <Home_book
          heading="BOOK A TABLE"
          paragraph="We would love to have you as our guest!"
          image="/seating.jpg"
          button_text="Reservation"
          reversed={true}
        />
        <Home_book
          heading="NEED A GIFT?"
          paragraph="Looking for the perfect gift for a food lover in your life?"
          image="/seating.jpg"
          button_text="Gift cards"
          reversed={false}
        />
      </div>

      <div className="flex justify-center text-3xl font-semibold tracking-widest uppercase text-secondary-normal">
        <h1>FOLLOW US ON INSTAGRAM</h1>
      </div>

    </>
  );
}
