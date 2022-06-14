import React from 'react'
import Banner from '../components/banner/Banner'
import Categories from '../components/categories/Categories'
import UserNavbar from '../components/navbar/UserNavbar'
import Products from '../components/products/Products'

const HomePage = () => {
  return (
    <>
        <UserNavbar></UserNavbar>
        <Banner></Banner>
        <Categories></Categories>
        <Products></Products>
    </>
  )
}

export default HomePage