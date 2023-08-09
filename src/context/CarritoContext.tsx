import { ReactNode, createContext, useContext, useState } from 'react'
import { Carrito } from '../components/Carrito'
import { useLocalStorage } from '../hooks/useLocalStorage'

type CarritoProviderProps = {
  children: ReactNode
}

type CarritoContext = {
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (id: number) => number
  increaseQuantity: (id: number) => void
  decreaseQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: CartItem[]
}

type CartItem = {
  id: number
  quantity: number
}

const CarritoContext = createContext({} as CarritoContext)

export function useCarrito() {
  return useContext(CarritoContext)
}

export function CarritoProvider({ children }: CarritoProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    'shopping-cart',
    []
  )

  const cartQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0
  }

  function increaseQuantity(id: number) {
    setCartItems((prev) => {
      const index = prev.findIndex((item) => item.id === id)
      if (index === -1) {
        return [...prev, { id, quantity: 1 }]
      }

      return prev.map((item, i) => {
        if (i === index) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
    })
  }

  function decreaseQuantity(id: number) {
    setCartItems((prev) => {
      const index = prev.findIndex((item) => item.id === id)
      if (index === -1) {
        return prev
      }

      if (prev[index].quantity > 1) {
        return prev.map((item, i) => {
          if (i === index) {
            return { ...item, quantity: item.quantity - 1 }
          }
          return item
        })
      } else {
        return prev.filter((item) => item.id !== id)
      }
    })
  }

  function removeFromCart(id: number) {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <CarritoContext.Provider
      value={{
        getItemQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        openCart,
        closeCart
      }}
    >
      {children}
      <Carrito isOpen={isOpen} />
    </CarritoContext.Provider>
  )
}
