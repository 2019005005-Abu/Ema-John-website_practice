import React from 'react'
import  "../Component/Header.css";
import  logo from "../../src/assets/images/Logo.svg"
const Header = () => {
  return (
    <nav className='header'>
      <img src={logo} alt='Logo_image' className='LogoImage'/>
      <div className='nav_list'>
      <a href='/shop'>Shop</a>
      <a href='/order'>Oder</a>
      <a href='/nvertory'>Invertory</a>
      <a href='/login'>Login</a>
      </div>

    </nav>
  )
}

export default Header
