import Image from 'next/image'
import React from 'react'
import { cn } from '@/lib/utils'
const Service1 = ({image , title,desc,check}) => {
  return (
    <div className='flex flex-col gap-2 max-w-56 '>
        <div className={cn('flex text-center justify-center sm:text-start',{'sm:mr-6 sm:justify-end':check})}>
        <Image src={image} height={50} width={50} alt='icons'/>
        </div>
        <div className={cn('flex text-base justify-center text-center sm:text-xl max-w-xl font-bold',{'sm:justify-end sm:mr-6':check})}>
            {title}
        </div>
        <div className={cn('flex text-xs justify-center text-center sm:text-[12px] w-44',{'sm:ml-6 sm:text-end':check})}>
            {desc}
        </div>
    </div>
  )
}

export default Service1