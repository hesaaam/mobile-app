import React,{useContext} from 'react'
import { Icon } from '@iconify/react';
import { shoppingCardContext } from '../context/Store';


const CardItem = ({id,url, title, price, count, amount}) => {
  const {addToCard, removeFromCard } = useContext(shoppingCardContext)
  return (
    <section className='currently-chosen'>
      <article className='card-horizontal'>
        <div className='card-inner'>
          <span className='card-pin'></span>
          <div className='card-img'>
            <img src={url} alt={title} />
          </div>
          <div className="card-content">
            <div className="card-title">
              <span className='title'>{title}</span>
              <button className='card-meta-btn'><Icon icon="charm:tick" /></button>
            </div>
            <div className="card-meta">
              <span>{price}</span>
              <div className="counter">
                <button onClick={()=> addToCard({url, title, price, id,amount})}>+</button>
                <span>{count}</span>
                <button onClick={()=> removeFromCard (id)}>-</button>
              </div>
            </div>
          </div>
          <span className='card-pin'></span>
        </div>
      </article>
    </section>
  )
}

export default CardItem
