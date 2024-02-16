import React from 'react';
import './Offers.css'
import exclusive_image from '../../assets/exclusive_image.png';

export default function Offers() {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive Offers</h1>
            <h1>OFFERS FOR YOU</h1>
            <p>ONLY ON BEST-SELLERS PRODUCT</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image}/>


        </div>
      
    </div>
  )
}
