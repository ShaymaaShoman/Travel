import React from 'react'
import img from './../../assets/images/q.jpg'
import { FaPlane } from "react-icons/fa";
import { FaCalendarAlt} from "react-icons/fa";
import { ImAirplane} from "react-icons/fa";
import { FaHotel} from "react-icons/fa";
import { FaSearch} from "react-icons/fa";

import './Header.css'
export const Header = () => {
  return (
    <div className="Navbar">
  
    <img src={img} alt="user-img"   />
 
    <div className="logo">
       <span>Treloo</span>
    </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#">Review</a>
          </li>
          <li>
            <a href="#">Trips</a>
          </li>
          <li>
          <a href="#">Alerts</a>
        </li>
        <li>
        <a href="#">Blog</a>
      </li>
      <button className='Blog'>Blog</button>
      
        </ul>
      </div>
<div className='travel'>
<h1 className='D-travel'>Discover Your Life, Travel </h1><h1 className='option'>Where You Want</h1>
<p> Would you explore natur paradise in the world , let's find the best</p><p className='option'> destination in world with us .</p>
 </div>

<div className='Fight'>
<div className='Icon'>
 <FaPlane    style={{ transform: 'rotate(315deg)', color: '#659ef7' }}   /> &nbsp;&nbsp;Fight
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaHotel  color="#659ef7" /> &nbsp;Hotel


</div>
<div class="card-container">
<div className='place'>
<p className='Tran'>Living Form </p>
    <h5><b>John Doe</b></h5>
    </div>
  <FaPlane  color="grey" className='icon-f' />
    
    <div className='place'>
<p className='Tran'>Going to</p>
    <h5><b>New York</b></h5>
    </div>
</div>

<div class="card-container">
<div className='place'>
<p  className='Tran'>Leave   <FaPlane  color="#659ef7" fplan /></p>
    <h5><b>23 Jan,Sat</b></h5>
    </div>
    <FaCalendarAlt  color="grey" className='icon-f' />
    
    <div className='place'>
<p className='Tran'>Return <FaPlane  style={{ transform: 'rotate(180deg)', color: '#659ef7' }}   /></p>
    <h5><b>14 Jan,Thu</b></h5>
    </div>
</div>
<div className='Search'><FaSearch color="#fff"  className='Search-ic' /></div>



</div>
    </div>

  )
}
export default Header;