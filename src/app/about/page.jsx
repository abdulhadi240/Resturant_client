import Frame_hero from '@/components/Frame_hero'
import React from 'react'

const page = () => {
  return (
    <div>
        <Frame_hero image={'/about.jpg'}/>
        <div>
            <p className='items-center px-20 mt-10 tracking-wider text-center text-secondary-normal'>Michelin-starred Francie, after much delay, debuted in  December 2020, and is the first independent collaboration between Chef-Owner Christopher Cipollone (Piora, Cotogna) and Owner-Operator John Winterman (Bâtard, Daniel).  Francie is located on the corner of Broadway & Bedford in the heart of Williamsburg, Brooklyn, and has the convivial feel of a neighborhood brasserie. Located in a limestone-clad former bank building, Francie serves an approachable menu inspired by European flavors and designed for flexibility:  snacks, shellfish, and first courses, followed by handmade pastas and main courses.  Inspired choices include The Market Salad, Lobster Ravioli, Heritage Pork Chop, and Côte de Boeuf for Two.  Save room for the Cheese Cart. The timeless space, designed by architect Glen Coben, is brought together by the open kitchen, a focal point that beckons both neighbors and guests to the warmth of the dining room.</p>
        </div>
        <div>
            <h1 className='mt-10 text-6xl font-bold tracking-widest text-center text-secondary-normal'>TEAM MEMBERS</h1>
        </div>
    </div>
  )
}

export default page