import React from 'react';
const Frame_hero = ({ children }) => {
  return (
    <div className='z-50 overflow-hidden shadow-custom-tall'>
      <div className="w-full h-auto  overflow-hidden text-secondary-normal bg-transparent border-[1px] border-secondary-normal">
        <div className="mt-2 h-screen w-screen  overflow-hidden   relative text-secondary-normal bg-transparent border-[1px] border-secondary-normal shadow-inner-green">
          <div className="relative w-full h-full overflow-hidden ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frame_hero;
