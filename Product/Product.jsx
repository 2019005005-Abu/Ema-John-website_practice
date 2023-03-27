import React from 'react'
import  '../Product/Product.css'
const Product = (props) => {
    console.log(props.product)
    const {img,name,seller,quality,price,ratings}=props.product
  return (
    <div className='product_container'>
      <div className='product_info'>
      <img src={img} className='product_img'/>
      <h6 className='product-name'>{name}</h6>
      <p>Price:${price}</p>
      <p>Manufacturer:{seller}</p>
      <p>Ratings:{ratings} Star</p>
      <div className='btnStyle'>
      <button className='btn'>Add to Cart</button>
      </div>
      
      </div>
    </div>
  )
}

export default Product
