'use client'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Hero_carasoul = () => {
  return (
    <div>
      <Carousel showArrows={true} infiniteLoop dynamicHeight={false} autoPlay showIndicators={false}  interval={3000} showThumbs={false} showStatus={false} showArrows={false}>
      <div>
        <img src="/hero1.jpg" />
      </div>
      <div>
        <img src="/hero2.jpg" />
      </div>
      <div>
        <img src="/hero3.jpg" />
      </div>
      <div>
        <img src="/hero4.jpg" />
      </div>
      <div>
        <img src="/hero5.jpg" />
      </div>
      <div>
        <img src="/hero6.jpg" />
      </div>
      <div>
        <img src="/hero7.jpg" />
      </div>
    </Carousel>
    </div>
  )
}

export default Hero_carasoul


