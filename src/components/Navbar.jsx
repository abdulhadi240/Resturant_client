import React from 'react'
import Link from 'next/link'
const menu = [
    {
        name: "Home",
        link: "/",
        design : false

    },
    {
        name: "The bar",
        link: "/bar",
        design : false
    },
    {
        name: "Menu",
        link: "/menu",
        design : false
    },
    {
        name: "Events",
        link: "/event",
        design : false
    },
    {
        name: "About",
        link: "/about",
        design : false
    },
    {
        name: "Gallery",
        link: "/gallery",
        design : false
    },
    {
        name: "Private Dining",
        link: "/private",
        design : false
    },
    {
        name: "Reservation",
        link: "/reservation",
        design : true
    },
    
]

const Navbar = () => {
  return (
    <div className='flex justify-between px-24 py-4 text-secondary-normal'>
        {menu.map((items,index)=>{
            return(
                <div key={index} className={`${items.design ? 'border-[1px] border-secondary-normal px-5 p-1' : 'ml-3 mt-[5px]'}`}>
               <Link href={items.link} className={` uppercase font-semibold hover:text-secondary-dark`}>{items.name}</Link>
               </div>
            )
        })}
    </div>
  )
}

export default Navbar