import Image from "next/image";
import Home_book from "@/components/Home_book";
import Frame_hero from "@/components/Frame_hero";
import Hero_carasoul from '@/components/Hero_carasoul'

export default function Home() {
  return (
    <>
      
      <div className="">
        <Frame_hero>
          <Hero_carasoul/>
        </Frame_hero>
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
