import { createContext, useState, ReactNode } from 'react'
import { Coffee } from '../pages/home/components/CoffeeCard'

import { produce } from 'immer'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  addCoffeeToCart: (coffee: CartItem) => void
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease'
  ) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartQuantity = cartItems.length

  /* Função para adicionar itens ao carrinho */
  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      cartItem => cartItem.id === coffee.id
    ) // Validar se o cafe já está no carrinho

    const newCart = produce(cartItems, draft => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease'
  ) {
    const newCart = produce(cartItems, draft => {
      const coffeeExistInCart = cartItems.findIndex(
        cartItem => cartItem.id === cartItemId
      )

      if (coffeeExistInCart >= 0) {
        const item = draft[coffeeExistInCart]
        draft[coffeeExistInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(newCart)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        addCoffeeToCart,
        changeCartItemQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  )
}