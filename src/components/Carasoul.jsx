import React from 'react'
import EmblaCarasoul from './EmblaCarasoul'
import '../app/css/embla.css'


const OPTIONS = { dragFree: true, loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())



const Carasoul = () => {

 
  return (
    <EmblaCarasoul slides={SLIDES} options={OPTIONS} />
  )
}

export default Carasoul

