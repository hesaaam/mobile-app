import React, {useContext} from 'react'
import CardItem from '../components/CardItem'
import { shoppingCardContext } from '../context/Store'



function Card() {
  const {shoppingCard} = useContext(shoppingCardContext)
  return (
    <main className='main'>
      {shoppingCard && shoppingCard.map(card => (<CardItem key={card.id} {...card}/>))}
      <div className='wrapper'>
        <div className='total-price'>
          <p>Total</p>
          <h3>${shoppingCard.reduce((total,item)=> {
            let price = parseFloat(item.price.replace("$",""))
            return total += price*item.count
            },0)}</h3>
        </div>
        <button>Pay Now</button>
      </div>

    </main>
  )
}

export default Card
