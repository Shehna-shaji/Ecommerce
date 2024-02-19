import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
// import  { ShopContext } from '../Context/ShopContext'
import dropdowm_icon from '../assets/dropdown_icon.png';
import Item from '../Components/Item/Item';
import { ShopContext } from '../Context/ShopContext';

export default function ShopCategory(props) {
  const {all_product}=useContext(ShopContext)
  console.log(all_product);
  return (
    <div className='shop-category'>
      <img src={props.banner}/>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shop-category-sort">
          Sort by <img src={dropdowm_icon}/>
        </div>
      </div>
      {/* <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          console.log(item);
          if (props.category===item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

            
          }
          else{
            return null;
          }
            
      
        

        })}
      </div> */}
      
    </div>
  )
}
