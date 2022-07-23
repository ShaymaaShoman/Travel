import React from 'react'
import './Subma.css'
import img from './../../assets/images/test1.jpg'
import imgtes from './../../assets/images/test2.jpg'
import imgte from './../../assets/images/imag.jpg'
export const Subma = () => {
  return (
  
    <div class="centered">
          <section class="Tiket">
                <article class="Tik-pla">
                <img src={img} alt="Avatar" className='img' /> <br/>
                <button  className='btn-red'>Relax</button>
   <b className='b'>3 Days, 3 Nights</b>
     <h4>Loga Sea</h4>
     <p className='Dol'>700$ /<b className='b'>pesson</b></p>
     <p className='Left-side' style={{ transform: 'rotate(90deg)', color: '#7c7c7c' }}>14 FEB 2022</p>
     <button className='Book '>Book Now</button>
       </article>
 
    <article class="Tik-pla">
    <img src={imgtes} alt="Avatar" className='img' />  <br/>
    <button  className='btn-blu'>Adventure</button>
    <b className='b'>4 Days, 3 Nights</b>
      <h4>Ansgar Scheffold </h4>
      <p className='Dol'>400$ /<b className='b'>pesson</b></p>
      <p className='Left-sid' style={{ transform: 'rotate(90deg)', color: '#7c7c7c' }}>18 JUN 2022</p>
      <button className='Now'>Book Now</button>
            </article>
<article class="Tik-pla">
<img src={imgte} alt="Avatar"  className='img'/> <br/>
<button  className='btn-red'>Relax</button>
<b className='b'>7 Days, 6 Nights</b>
  <h4>Lona X</h4>
  <p className='Dol'>340$ /<b className='b'>pesson</b></p>
  <p className='Left-si' style={{ transform: 'rotate(90deg)', color: '#7c7c7c' }}>22 DEC 2022</p>
  <button className='btn-bl'>Book Now</button> 
            </article>

 
    </section>
</div>


  )
}
export default Subma;