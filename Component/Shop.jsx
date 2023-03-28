import React from 'react'
import "../Component/Shop.css"
import Product from '../Product/Product';
import Cart from './Cart/Cart';
const Shop = () => {
    const [products,setProducts]=React.useState([]);
    const [cart,setCart]=React.useState([]);
    React.useEffect(()=>{
      LoadingProductData();
    },[])
    const LoadingProductData=()=>{
     fetch('products.json').then((res)=>res.json())
     .then((data)=>{
        setProducts(data);
        console.log(data)
     })
    }
 
    const handledToCart=(product)=>{
      console.log('Product has added',product)
      const newCart=[...cart,product];
      setCart(newCart);
    }
  return (
    <div className='shop-container'>
      <div className='products_container'>
       {
       products.map((product)=>{
        return(
          <div>
           <Product 
           key={product.id}
           handledToCart={handledToCart}
           product={product}/>
          
          </div>
        )
       })
       }
      </div>
      <div className='cart-container'>
      <Cart cart={cart}></Cart>
      </div>
    </div>
  )
}

export default Shop
