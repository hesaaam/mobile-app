import React, { useReducer,useEffect } from 'react'
export const shoppingCardContext = React.createContext()


const initialState = []
const reducer = (state, action) => {
  switch (action.type) {
    case "addToCart":

      let idx = state.findIndex(item => item.id === action.payload.id)

      if (idx === -1) {
        action.payload.count = 1
        return [...state, action.payload]
      }
      else {
        action.payload.count = state[idx].count + 1
        let newState = [...state]
        newState.splice(idx, 1, action.payload)
        return newState
      }


    case "removeFromCart":
      console.log(action)
      let index = state.findIndex(item => item.id === action.payload.id)

      if (index !== -1) {

        if (state[index].count > 1) {
          let newState = [...state]
          newState[index].count--
          return newState;
        }else{
          let newState = [...state]
          newState.splice(index, 1)
          return newState;
        }
      }

      return state;
      
    case "loadShoppingCard":
 
      return action.payload

    default:
      break;
  }

}

const Store = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCard = (product) => {
    let item = state.find(item => item.id === product.id);
    if (item && product.amount === item.count) {
      alert("availble product " + product.id + " has already been added to card " + product.length + " items.");
      return
    }
    dispatch({ type: "addToCart", payload: { id: product.id, url: product.url, title: product.title, price: product.price, amount: product.amount } })

  }

  const removeFromCard = (id) => {

    dispatch({ type: "removeFromCart", payload: { id} })

  }

  useEffect(()=>{
    let shoppingCard = JSON.parse(localStorage.getItem("shoppingCard"));
    dispatch({ type: "loadShoppingCard", payload:shoppingCard })

  },[])

  useEffect(()=>{ 
    localStorage.setItem("shoppingCard",JSON.stringify(state))
  },[state])



  return (
    <>
      <shoppingCardContext.Provider value={{ shoppingCard: state, addToCard: addToCard, removeFromCard: removeFromCard}} >
        {children}

      </shoppingCardContext.Provider>
    </>
  )
}

export default Store
