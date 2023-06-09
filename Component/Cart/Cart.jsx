import React from 'react'
import "../Cart/Cart.css"
const Cart = (props) => {
    let total=0;
    let totalShipping=0;
    let quantity=0
    for(const product of props.cart){
      //  if(product.quantity===0)product.quantity=1
        // product.quantity=product.quantity ||1

        total+=product.price *product.quantity
        totalShipping+=product.shipping
        quantity=quantity+product.quantity
    }
    const tax=total*7/100;
    const GrandTotal=total+totalShipping+tax;

  return (
    <div className='cart'>
      <h4 style={{fontFamily:"initial"}}>Order summary</h4>
      <p>Selected Item :{quantity}</p>
      <p>Total Price:${total.toFixed(2)}</p>
      <p>Total Shipping:${totalShipping.toFixed(2)}</p>
      <p>Tax:${tax.toFixed(2)}</p>
      <h6>Grand Total:${GrandTotal.toFixed(2)}</h6>
    </div>
  )
}

export default Cart
