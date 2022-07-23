import React from 'react'
import img1 from './../../assets/images/marks.jpg'
import boy from './../../assets/images/boy.jpg'
import girl  from './../../assets/images/girl.png'
import './BeFin.css'
import { FaStar } from "react-icons/fa";
export const BeFi = () => {
  return (
    <div class="centered">
    
    <section class="quotation">
    <article class="mark-pla">
    <img src={img1} alt="Avatar" className='imges' /> 
    <b className='MarkQ'>  Our trip to Morocco was truly a one in a 
    lifetime experience and we are so grateful to everyone. 
     Which made it happen smoothly. Our travel planner, 
     Jawad, was amazing.</b>
     <b className='Vand'>-Vand D</b>
     <b className='Happy'>Happy Treloo </b>
     <img src={boy} alt="Avatar" className='person' /> 
     <span className='Person-Rat'><FaStar color="rgb(255, 255, 40)" /> 4.5</span>
     
    </article>

<article class="mark-pla">
<img src={img1} alt="Avatar" className='imges' />  
<b className='MarkQ'>  Our trip to Morocco was truly a one in a lifetime experience and we are so grateful to everyone. 
 Which made it happen smoothly. Our travel planner, Jawad, was amazing.</b>
 <b className='Vand'>-Vand D</b>
 <b className='Happy-T'>Happy Treloo </b>
 <img src={girl} alt="Avatar" className='person' /> 
 <span className='Pes-Rat'><FaStar color="rgb(255, 255, 40)" />4.9 </span>
</article>
</section>
</div>
  )
}
export default BeFi;