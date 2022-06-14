import React from 'react'
import AddToCart from '../components/cart/AddToCart';
import UserNavbar from '../components/navbar/UserNavbar';

const Cart = () => {
  return (
    <>
      <UserNavbar></UserNavbar>
      <AddToCart></AddToCart>
    </>
  )
}

export default Cart