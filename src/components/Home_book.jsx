import Image from 'next/image'
import React from 'react'

const Home_book = ({ reversed, image, heading, paragraph, button_text }) => {
  return (
    <div>
      {reversed ? (
        <div className={`flex flex-col lg:flex-row gap-10`}>
          <Image src={image} height={500} width={600} alt={heading} className='mx-auto mt-4 mb-4 rounded-md lg:ml-10'/>
          <div className="relative flex items-center mx-auto">
            <Image 
              src={'/2.png'} 
              height={600} 
              width={650} 
              alt='frame' 
              className='w-full sm:w-[650px] h-auto' // Responsive size for frame
            />
            <div className="absolute flex flex-col items-center justify-center gap-2 text-center transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-secondary-normal">
              <h1 className="w-full mb-4 text-2xl">{heading}</h1>
              <p className="hidden mb-4 sm:block">{paragraph}</p>
              <button className="px-4 py-2 uppercase bg-transparent border-[1px] border-secondary-normal font-semibold transition-all hover:transition-colors rounded text-secondary-normal hover:bg-secondary-dark hover:text-primary">{button_text}</button>
            </div>
          </div>
        </div>
      ) : (
        <div className={`flex flex-col lg:flex-row-reverse gap-10`}>
          <Image src={image} height={500} width={600} alt={heading} className='mx-auto mt-4 mb-4 rounded-md lg:ml-10'/>
          <div className="relative flex items-center mx-auto">
            <Image 
              src={'/2.png'} 
              height={600} 
              width={650} 
              alt='frame' 
              className='w-full sm:w-[650px] h-auto' // Responsive size for frame
            />
            <div className="absolute flex flex-col items-center justify-center gap-2 text-center transform -translate-x-1/2 -translate-y-1/2 sm:p-2 left-1/2 top-1/2 text-secondary-normal">
              <h1 className="w-full mb-4 text-2xl">{heading}</h1>
              <p className="hidden mb-4 sm:block">{paragraph}</p>
              <button className="px-4 py-2 uppercase bg-transparent border-[1px] border-secondary-normal font-semibold transition-all hover:transition-colors rounded text-secondary-normal hover:bg-secondary-dark hover:text-primary">{button_text}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home_book
