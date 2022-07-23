import React from 'react'
import img from './../../assets/images/test.jpg'
import './Footer.css'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="foo-container">

<div className='for-bac'> 
<FaChevronLeft color=" #659ef7"  className='Baforwaed'/> 
<FaChevronRight color=" #659ef7"  className='forwaed'/> 
</div>

    <img src={img} alt ="img miss" />
    <p>Don't miss out on 50% off </p><br/>
   <p className='Regis'>You Register today</p>
    <button>Register today</button>
     
   
    <div className='Copy'>

    <div className="Copy-auth">
    <b className="Copy-auth">  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#169; 2022 Treioo LLc - All right resterv</b>
 </div>

    <div className="men">
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
        </ul>
        </div>
    </div>



    </div>
  )
}
export default Footer;
