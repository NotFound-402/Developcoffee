import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import { Link } from 'react-router-dom'

const MenuPage = () => {
  return (
    <>
      <Navbar />
      <Menu />
      <Footer />
    </>
  )
}

export default MenuPage
