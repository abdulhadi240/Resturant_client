import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <div className="z-50 shadow-custom-tall">
        <div className="z-10 justify-center w-full py-2 text-center fle text-secondary-normal ">
          136 BROADWAY, BROOKLYN, NY 11249 718-218-7572
        </div>
      </div>
      <Navbar />
      <div className="flex items-center justify-center px-20 mt-20 tracking-widest text-center text-secondary-normal">
            <p className="">Drop by the Bar at Francie and step into another world. Conversation flows over sparkling crystal and vintage glassware. Behind the bar,  our team conjures up new concoctions and time-honored classics.
                <br /><br />
                Before you savor that first sip, take in the surroundings. Textured walls, ebony columns, back-lit "floating bottles," and a warm zinc bar set a stylish tone. Designed by Glen Coben, the bar at Francie at once evokes the timeless elegance of New York City, yet is distinctly Brooklyn.
                <br /><br />
                From late afternoon to late night, the Bar at Francie is infused with a relaxed, inviting energy. To accompany your drinks, choose from a light menu of bar snacks, shellfish, and handmade pastas. 
            </p>
        </div>
        <div>
            slider
        </div>
    </>
  );
};

export default page;
