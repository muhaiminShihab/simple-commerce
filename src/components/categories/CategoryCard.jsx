import React from 'react'
import { Link } from 'react-router-dom'
import ProductImage from '../../assets/images/categories.png'

const CategoryCard = ({ title }) => {
  return (
    <div className="product-card">
        <Link to="/category">
        <div className="product-image">
            <img src={ProductImage} alt="Product" className='img-fluid rounded' />
        </div>
        <div className="product-data text-center">
            <h5>{title}</h5>
        </div>
        </Link>
    </div>
  )
}

export default CategoryCard