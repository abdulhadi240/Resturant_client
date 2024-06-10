import Map from "@/components/Map";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex justify-between mx-10 mt-20 text-secondary-normal">
        <div className="text-center text-secondary-normal ">
            <h1 className="mb-4 text-4xl font-bold text-secondary-normal">HOURS & LOCATION</h1>
            <p>136 Broadway,<br />Brooklyn, NY 11249 <br /> 718-218-7572 <br /> info@franciebrooklyn.com <br /> <br/> <span className="font-semibold">Dinner</span> <br /> Monday - Thursday <br /> 5:30 - 10:00pm <br /><br /><span className="font-semibold">Dinner </span><br />Friday - Saturday <br />5:00 - 10:30pm</p>
        </div>
        <div className="w-[600px] text-center">
            <p>Need to know:
                <br /><br /><br />
                Francie takes reservations up to 30 days in advance.  We regret we are unable to take reservations by email, although if you are super sweet, you can try. You may book through the link on our website or call 718.218.7572
                <br /><br />
                We answer our phone starting at 2pm, Monday through Saturday. Read that again, we answer our phone.  Some restaurants don't even have a phone.  We name no names, it takes all kinds to make a world.
                <br /><br />
                Francie does not allow strollers, prams, or e-scooters in the restaurant, nor will we store them for you.  No outside food or beverages will be allowed in the restaurant, including cakes.  A rolling stone gathers no moss.  Francie does not serve the Crown Roast of Duck or the Côte de Bouef at the bar.  A duck on the plate is worth two at the pass.
                <br /><br />
                Our corkage fee is $90 per bottle, at one bottle per two persons, two bottles maximum.  On Mondays we discount every bottle on our wine list, just because we can.
                <br /><br />
                Occasionally, when we do not have a party booked in our private room, The Vault at Francie, we will open up the tables to people on our "notify" or "waitlist," and seat the room for a la carte dining.  If you need or desire privacy please Inquire Here  Everything happens for a reason.
                <br /><br />
                When you dine at Francie, you do not dine in a bubble.  Please be respectful of other diners and the rules of decorum and refrain from using flash photography, bright lights, laptops, and/or filming. Our staff are here to serve but they are not stars in your social media feed. Please do not photograph or film them without permission.  When in doubt, ask.
                <br /><br />
                Francie technically does not have a dress code but if you could kindly dress for success, whatever you take that to mean, we (and the other diners) would appreciate it.  Don't judge a book by its cover.
                <br /><br />
                Our kitchen can accommodate most common food allergies but a general rule would be:  the more complicated the allergy, the less chance we have to modify the menu.  No pain, no gain.
                <br /><br />
                If you've been to paradise, but you haven't been to Francie, then you've never been to me.  
            </p>
        </div>
      </div>
      <div>
        MAP
      </div>
     {/* <Map/> */ }
    </>
  );
};

export default page;
