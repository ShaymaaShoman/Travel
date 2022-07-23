import React from 'react'
import img from './../../assets/images/am.jpg'
import imgtes from './../../assets/images/na.jpg'
import imgte from './../../assets/images/kijpg.jpg'
import imges from './../../assets/images/ount.jpg'
import './Rating.css'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export const Rating = () => {
  return (
    <div class="centered">
    <section class="Rating">
          <article class="Rating-pla">
          <img src={img} alt="Avatar" className='img' /> <br/>
    <h4>Kina Mounting</h4>
  <b className='bcam'> <FaMapMarkerAlt color=" #fb7778"  className='Cambodia'/>  Cambodia</b>
  <span  className='Start'><FaStar color="rgb(255, 255, 40)" /> 3.4</span>
    </article>
    
    <article class="Rating-pla">
    <img src={imgtes} alt="Avatar" className='img' />  <br/>
    <h4>Kina Mounting</h4>
    <b className='bcam'> <FaMapMarkerAlt color=" #fb7778"  className='Cambodia'/>  Cambodia</b>
    <span  className='Star'><FaStar color="rgb(255, 255, 40)" />4.5</span>
      </article>
    <article class="Rating-pla">
    <img src={imgte} alt="Avatar"  className='img'/> <br/>
    <h4>Kina Mounting</h4>
  <b className='bcam'> <FaMapMarkerAlt color=" #fb7778"  className='Cambodia'/>  Cambodia</b>
  <span  className='Sta'><FaStar color="rgb(255, 255, 40)" />4.2</span>
      </article>
      <article class="Rating-pla">
    <img src={imges} alt="Avatar"  className='img'/> <br/>
    <h4>Kina Mounting</h4>
  <b className='bcam'> <FaMapMarkerAlt color=" #fb7778"  className='Cambodia'/>  Cambodia</b>
  <span  className='St'><FaStar color="rgb(255, 255, 40)" />3.5</span>
      </article>
    </section>











    </div>
    
    
  )
}
export default Rating;

