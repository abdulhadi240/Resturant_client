'use client'
import Frame_hero from '@/components/Frame_hero'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react';

const page = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div>
      <Frame_hero/>
      <div>
        <h1 className='flex justify-center mt-10 mb-10 text-5xl text-secondary-normal'>BOOK AN EVENT</h1>
        <p className='px-32 text-center text-secondary-normal'>For all inquiries, please fill out the form below and we’ll be in touch soon. 
          <br /><br />
          Elegantly designed to complement the restaurant, Francie's Private Dining Room, "The Vault at Francie," seats up to 12 persons MAXIMUM and is available for dinner, Monday through Saturday.
          <br /><br />
          Discreetly hidden from view, The Vault nonetheless feels very much part of the main restaurant and is already one of the most beautiful private dining spaces in Brooklyn.
          <br /><br />
          Decorated with antiques, original artwork, and a show-stopping mirror redolent of the Gilded Age, The Vault is the ideal space for all manner of events, whether an intimate gathering, a corporate dinner, or a family celebration.
          <br /><br />
          *NEED TO KNOW:
          <br /><br />
          The Vault at Francie has a hard maximum of 12 persons and has a Food & Beverage Minimum of $2000.
          <br /><br />
          All parties larger than 8 persons will be seated in The Vault.  A four-course "family style" set menu is required for all parties sized 9-12 people.  Additional menu items or customization may be available upon request.  Custom beverage programs are also available.
          <br /><br />
          We will book The Vault a maximum of 90 days in advance.
          <br /><br />
          A deposit of $400 (20% of F&B minimum) is required to guarantee the reservation.
          <br /><br />
          <Link href={'/menu'}>Sample Menus</Link>
          <br /><br />
          Please follow us on Instagram for weekly updates. 
          <br /><br />
          <button className='border-[1px] border-secondary-normal p-2'>INQUIRE NOW</button>

        </p>
        <div className='flex justify-center mt-10' 
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ position: 'relative' }}
        >
          <div 
            className={`absolute top-0 left-0  ${hovered ? 'bg-green-500 opacity-50' : 'hidden'}`} 
          />
          <Image src="/private_dining.jpg" alt="vault" width={500} height={500} className=''/>
        </div>
      </div>
    </div>
  )
}

export default page;
