import React from 'react'
import "../Component/Shop.css"
import Product from '../Product/Product';
const Shop = () => {
    const [products,setProducts]=React.useState([]);
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

  return (
    <div className='shop-container'>
      <div className='products_container'>
       {
       products.map((product)=>{
        return(
          <div>
           <Product 
           key={product.id}
           product={product}/>
          </div>
        )
       })
       }
      </div>
      <div className='cart-container'>
      <h4>Order sum,ary</h4>
      </div>
    </div>
  )
}

export default Shop
