import React from 'react'
import { addToDb, getShoppingCart } from '../assets/utilities/fakedb';
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
 
   React.useEffect(()=>{
    console.log('Products',products)
    const storedCart=getShoppingCart();
    const savedCart=[];
    //step 1: get id
    for(const id in storedCart){
      console.log(id);
      //step:2 get the id by using id
      const addedProduct=products.find((product)=>{
        return product.id===id;
        console.log(addedProduct)
        if(addedProduct){
        //step:3 get the quantity of the product
        const quantity=storedCart[id];
        addedProduct.quantity=quantity;
        //step:4 add the added product to the saved cart
        savedCart.push(addedProduct);
        console.log(quantity)
        }
      })
    }
    //step 5:set the cart
    setCart(savedCart);
   },[products])

    const handledToCart=(product)=>{
      console.log('Product has added',product)
      const newCart=[...cart,product];
      setCart(newCart);
      addToDb(product.id)
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
