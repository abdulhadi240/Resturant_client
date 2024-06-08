import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Hero_carasoul = () => {
  return (
    <div>
      <Carousel showArrows={true}>
      <div>
        <img src="/hero1.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="/hero2.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="/hero3.jpg" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="/hero4.jpg" />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img src="/hero5.jpg" />
        <p className="legend">Legend 5</p>
      </div>
      <div>
        <img src="/hero6.jpg" />
        <p className="legend">Legend 6</p>
      </div>
      <div>
        <img src="/hero7.jpg" />
        <p className="legend">Legend 7</p>
      </div>
    </Carousel>
    </div>
  )
}

export default Hero_carasoul


