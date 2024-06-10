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
             
         >
             <div>
                 <img
                     src="/hero1.webp"
                     className="aspect-[16/10] md:aspect-auto object-cover"
                     alt='image'
                 />
                 
             </div>
             <div>
                 <img
                     src="/hero2.webp"
                     className="aspect-[16/10] md:aspect-auto object-cover"
                     alt='image'
                 />
                 
             </div>
             <div>
                 <img
                     src="/hero3.webp"
                     className="aspect-[16/10] md:aspect-auto object-cover"
                     alt='image'
                 />
                 
             </div>
             <div>
                 <img
                     src="/hero4.webp"
                     className="aspect-[16/10] md:aspect-auto object-cover"
                     alt='image'
                 />
                 
             </div>
             <div>
                 <img
                     src="/hero5.webp"
                     className="aspect-[16/10] md:aspect-auto object-cover"
                     alt='image'
                 />
                 
             </div>

             <div>
                 <img
                     src="/hero6.webp"
                     className="aspect-[16/10] md:aspect-auto object-cover"
                     alt='image'
                 />
                 
             </div>

             <div>
                 <img
                     src="/hero7.webp"
                     className="aspect-[16/10] md:aspect-auto object-cover"
                     alt='image'
                 />
                 
             </div>

              <div>
                 <img
                     src="/hero8.webp"
                     className="aspect-[16/10] md:aspect-auto object-cover"
                     alt='image'
                 />
                 
             </div>
         </Carousel>
         </div>
  )
}

export default Hero_carasoul


