import React from 'react'
import  '../Product/Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props.product)
    const {img,name,seller,quality,price,ratings}=props.product
    console.log(props)
    const handledToCart=props.handledToCart;
  return (
    <div className='product_container'>
      <div className='product_info'>
      <img src={img} className='product_img'/>
      <h6 className='product-name'>{name}</h6>
      <p>Price:${price}</p>
      <p>Manufacturer:{seller}</p>
      <p>Ratings:{ratings} Star</p>
      <div className='btnStyle'>
      <button className='btn' 
      onClick={()=>handledToCart(props.product)}>
      Add to Cart
      <FontAwesomeIcon icon={faShoppingCart}/>
      </button>
      </div>
      
      </div>
    </div>
  )
}

export default Product
