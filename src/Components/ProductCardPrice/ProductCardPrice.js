import React from 'react'
// import {link} from  react-router-dom;
import "./ProductCardPrice.scss"
import product from '../../Assets/Images/product.png';


function ProdcuctCardPrice() {
  return (
    <div
      className='pc-price'>
        <div
        className='pc_price_top'>
          <link>
          <img src={product} alt="product" />
        
          </link>
        </div>
        <div>This is pridyc</div>
    </div>
  )
}

export default ProdcuctCardPrice
