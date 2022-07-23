import React from 'react'
import './Content.css'
import Tr from './../../assets/images/Tr.jpg'
export const Content = () => {
  return (
    <div class="centered">
  <div class="Content">
<div className='section-img'>
<img src={Tr} alt="Avatar" className='Tr-img' /> 
<button className='number-Visit'>300+<br/>Destroy</button>
<button className='number-Vis'>  5000+<br/> Tourists</button>
<button className='number-Vi'>150+ <br/>Hotels</button>
</div>

<div className='section-parg'>
<h2 className='Travel'>  Travel  Any Corner Of<br/> The World With Us </h2>
<p className='Parg'>Are you exploring the nature paradise in the world, let's search<br/>
 with us for the best destination in the world.  Are you exploring<br/>
 the nature paradise of the world, let's find the best destination <br/>
 in the world with us.  Do nature explore parodies in the world, let's<br/>
  find with us the best destination in the world</p>
<p className='Parg'> Would you explore the world, let's search with us for the best<br/>
 destination best destination in the world with us </p>
 <button className='btn-blue'> Contact Us</button>
</div>
    </div></div>
  )
}
export  default Content;