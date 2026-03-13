import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cart from '../components/Cart'
import { Link } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'


const CartPage = () => {
  // Cart component will pull its own state from context
  return (
    <>
      <Navbar />
      <Cart />
      <Footer />
    </>
  )
}

export default CartPage