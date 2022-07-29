import React from 'react'
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";


const ProductItem = ({ url, price, title,id }) => {
  return (
    <article className="product-item">
      <div className="product">
        <span className='product-pin'></span>
        <div className='product-img'>
          <img src={url} alt={title} />
        </div>
        <div className="product-content">
          <div className="product-info">
            <span className='product-price'>{price}</span>
            <Link to={`/product/${id}`}> <button className='product-btn'><Icon icon="akar-icons:plus" /></button></Link>
          </div>
          <h3 className="product-title">{title}</h3>
        </div>
      </div>
    </article>
  )
}

export default ProductItem
