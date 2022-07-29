import React, { useEffect, useState,useContext } from 'react'
import { Icon } from '@iconify/react';
import { useParams , Link } from "react-router-dom"
import {shoppingCardContext} from '../context/Store'


const Product = () => {
  const {addToCard} = useContext(shoppingCardContext)
  const { id } = useParams()

  const [product, setPro] = useState(null)



  useEffect(() => {

    const fetchProduct = async () => {
      try {
        let data = await (await fetch(`http://localhost:4000/products/${id}`)).json()
        setPro(data)
        console.log(data);
  
      } catch (error) {
        console.log(error)
  
      }
    }

    fetchProduct()

  }, [id])


 
  return (
    <>
      {product &&
        <div className='product__container'>
          <div className='img-wraper'>
            <img src={`/${product.url}`} alt={product.title} />
          </div>
          <div className='wraper'>

            <div className='product__details'>
              <h4>{product.title}</h4>
              <span>{product.price}</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident maiores eaque odio vel ea perspiciatis</p>

            <div className='product__btn'>
              <button onClick={()=> addToCard(product)}>buy Now</button>
              <Link to='/card'><div className='product__svg'><Icon icon="icons8:buy" /></div></Link>
            </div>
          </div>
        </div>}

    </>
  )
}

export default Product
