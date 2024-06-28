'use client'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Hero_carasoul = () => {
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1660px] ">
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
                     src="/p1.webp"
                     className="aspect-[16/10] md:aspect-auto object-contain h-full w-full"
                     alt='image'
                 />
                 
             </div>
             <div>
                 <img
                     src="/indian.jpg"
                     className="aspect-[16/10] md:aspect-auto object-contain h-full w-full"
                     alt='image'
                 />
                 
             </div>
             <div>
                 <img
                     src="/biryani.jpg"
                     className="aspect-[16/10] md:aspect-auto object-contain h-full w-full"
                     alt='image'
                 />
                 
             </div>
             <div>
                 <img
                     src="/indian.jpg"
                     className="aspect-[16/10] md:aspect-auto object-contain h-full w-full"
                     alt='image'
                 />
                 
             </div>
             <div>
                 <img
                     src="/i1.jpeg"
                     className="aspect-[16/10] md:aspect-auto object-contain h-full w-full"
                     alt='image'
                 />
                 
             </div>

             <div>
                 <img
                     src="/bbq.avif"
                     className="aspect-[16/10] md:aspect-auto object-contain h-full w-full"
                     alt='image'
                 />
                 
             </div>

             <div>
                 <img
                     src="/pilau.jfif"
                     className="aspect-[16/10] md:aspect-auto object-contain h-full w-full"
                     alt='image'
                 />
                 
             </div>
         </Carousel>
         </div>
  )
}

export default Hero_carasoul


