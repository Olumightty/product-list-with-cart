import React, { createContext, useState } from 'react'
import { ItemsProps } from './Item'


interface CartContextType{
  cartList: ItemsProps[],  
  addToCart: (item: ItemsProps) => void,
  removeFromCart: (item: ItemsProps, how: "one" | "all") => void
}

export const CartContext = createContext<CartContextType | undefined>(undefined)

const CartProvider = ({children}: {children: React.ReactNode}) => {
  const [cartList, setCartList] = useState<ItemsProps[] | []>([])
  
  const addToCart = (item: ItemsProps) =>{
    const array = [...cartList, item]
    setCartList((list) => list = array)
  }

  const removeFromCart = (item: ItemsProps, how: "one" | "all") => {
    if(how == "all"){
      setCartList((list) => list.filter((li) => li.name != item.name))
    }
    else{
      setCartList((list) => {
        const foundIndex = list.findIndex((li) => li.name == item.name)
        return list.filter((li, index) => li? index != foundIndex : null)
      })
    }
  }


  return (
    <CartContext.Provider value={{cartList, addToCart, removeFromCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider