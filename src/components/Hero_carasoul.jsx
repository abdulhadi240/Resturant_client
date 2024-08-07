'use client'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Hero_carasoul = () => {
  return (
    <div className=" absolute top-0 text-white text-[20px] w-full max-w-[1660px] h-screen ">
         <Carousel
             autoPlay={true}
             infiniteLoop={true}
             showThumbs={false}
             showIndicators={false}
             showStatus={false}
             showArrows={false}
             
         >
             
             <div>
                 <img
                     src="/0.webp"
                     className="aspect-[16/10] md:aspect-auto object-fill sm:object-cover h-screen w-screen"
                     alt='image'
                 />
                 
             </div>
             <div>
                 <img
                     src="/1.webp"
                     className="aspect-[16/10] md:aspect-auto object-fill sm:object-contain h-full w-full"
                     alt='image'
                 />
                 
             </div>
             <div>
                 <img
                     src="/2.webp"
                     className="aspect-[16/10] md:aspect-auto object-fill sm:object-contain h-full w-full"
                     alt='image'
                 />
                 
             </div>

             <div>
                 <img
                     src="/3.webp"
                     className="aspect-[16/10] md:aspect-auto object-fill sm:object-contain h-full w-full"
                     alt='image'
                 />
                 
             </div>

             <div>
                 <img
                     src="/4.webp"
                     className="aspect-[16/10] md:aspect-auto object-fill sm:object-contain h-full w-full"
                     alt='image'
                 />
                 
             </div>
             <div>
                 <img
                     src="/5.webp"
                     className="aspect-[16/10] md:aspect-auto object-fill sm:object-contain h-full w-full"
                     alt='image'
                 />
                 
             </div>
         </Carousel>
         </div>
  )
}

export default Hero_carasoul


