import React from 'react'
import Publicusernav from '../Component/Navbar/Publicusernav'
import Publicuserfooter from '../Component/Footer/Publicuserfooter'
import Features from '../Component/Navbar/Features'
import Category from '../Component/Navbar/Category'
import Products from '../Component/Navbar/Products'
import Productlist from '../Component/Navbar/Productlist'


const Publicuser = () => {
  return (
    <>
    <Publicusernav/>
    <Features/>
    <Category/>
   <Products/>
   {/* <Productlist/> */}
  
    <Publicuserfooter/>
  
   </>
  )
}

export default Publicuser