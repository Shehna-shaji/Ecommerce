import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import BreadCrum from '../Components/BreadCrum/BreadCrum';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';


export default function Product() {
  
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product=all_product.find((e)=>e.id===productId)
  console.log(product);

  return (
    <div>
      {/* <BreadCrum product={product}/> */}
      <ProductDisplay product={product}/>
    </div>
  )
}
