import Image from 'next/image'
import React from 'react'

const Home_book = ({ reversed, image, heading, paragraph, button_text }) => {
  return (
   <div>
    {reversed ?
     <div className={`flex flex-row gap-10`}>
     <Image src={image} height={500} width={600} alt={heading} className='mt-4 mb-4 ml-10 rounded-md'/>
     <div className="relative flex items-center">
       <Image src={'/2.png'} height={600} width={650} alt='frame' />
       <div className="absolute flex flex-col items-center justify-center gap-2 p-4 left-32 top-32 text-secondary-normal">
         <h1 className="mb-4 text-2xl">{heading}</h1>
         <p className="mb-4">{paragraph}</p>
         <button className="px-4 py-2 uppercase bg-transparent border-[1px] border-secondary-normal font-semibold transition-all hover:transition-colors rounded text-secondary-normal hover:bg-secondary-dark hover:text-primary">{button_text}</button>
       </div>
     </div>
   </div>
    : 
    <div className={`flex flex-row-reverse gap-10`}>
     <Image src={image} height={500} width={600} alt={heading} className='mt-4 mb-4 ml-10 rounded-md '/>
     <div className="relative flex items-center">
       <Image src={'/2.png'} height={600} width={650} alt='frame' />
       <div className="absolute flex flex-col items-center justify-center gap-2 p-4 left-16 top-32 text-secondary-normal">
         <h1 className="mb-4 text-2xl">{heading}</h1>
         <p className="mb-4">{paragraph}</p>
         <button className="px-4 py-2 uppercase bg-transparent border-[1px] border-secondary-normal font-semibold transition-all hover:transition-colors rounded text-secondary-normal hover:bg-secondary-dark hover:text-primary">{button_text}</button>
       </div>
     </div>
   </div> }
   </div>
  )
}

export default Home_book
