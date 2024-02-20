import React, { useContext } from 'react';
import './BreadCrum.css';
import arrow_icon from '../../assets/breadcrum_arrow.png';

export default function BreadCrum(props) {
    
    const {product}=props;
  return (
    <div className='breadcrum'>
        {/* HOME <img src={arrow_icon}/> SHOP  <img src={arrow_icon}/> {product.category} <img src={arrow_icon}/> {product.name} */}

        HOME <img src={arrow_icon}/> SHOP  <img src={arrow_icon}/>{product.name}
    </div>
  )
}
