import React from 'react'

const Compo1 = ({string}) => {
  return (
    <div className='w-[100%]  bg-primary text-secondary-normal flex justify-center text-center items-center sm:hidden h-auto p-3 border-[1px] border-secondary-normal'>
        {string}
    </div>
  )
}

export default Compo1