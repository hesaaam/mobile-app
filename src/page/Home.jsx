import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import ProductItem from '../components/ProductItem';

const Home = () => {

  const [products, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const fetchProducts = async () => {

    try {
      let data = await (await fetch("http://localhost:4000/products")).json()
      console.log(data);
      setProduct(data)
      setLoading(false)
      setError("")


    } catch (error) {
      console.log(error)
      setError("please wait a few minutes before you try again")
      setLoading(false)

      setProduct(null)
    }
  }

  useEffect(() => {

    fetchProducts()


  }, [])


  return (
    <main className='app-home'>

      {loading &&
        <div className="centered">
          <div className="blob-1"></div>
          <div className="blob-2"></div>
        </div>
      }

      <section className='search'>
        <div className='search-inner'>
          <button className='search-btn'>
            <Icon icon="bytesize:search" />
          </button>
          <input type="text" className="search-input" placeholder="search..." />
        </div>
      </section>
      <section>
        <div className='row-sale'>
          <div className='hero-card'>
            <div className='content-img'>
              <img src="img/speaker.png" alt="" />
            </div>
            <div className='card-content'>
              <h3>Big Sale</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, deleniti optio, mollitia officiis nulla facere repellendus impedit rem dolores quidem soluta velit?</p>
            </div>
          </div>
        </div>
      </section>
      <ul className='category-list'>
        <li className="list-item">
          <button className="category">All</button>
        </li>
        <li className="list-item">
          <button className="category">Popular</button>
        </li>
        <li className="list-item">
          <button className="category">Recent</button>
        </li>
        <li className="list-item">
          <button className="category">Recomended</button>
        </li>

      </ul>
      <section className="product-wrapper">
        {error && <h3>{error}</h3>}
        {products && products.map(product => (<ProductItem key={product.id} {...product} />))}
      </section>

    </main>
  )
}

export default Home
