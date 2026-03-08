import { createContext } from "react"
import type { ProductItem } from "../types/ProductItem"

interface CartContextType {
  cart: ProductItem[]
  addToCart: (product: ProductItem) => void
  totalPrice: number
  removeFromCart: (product: ProductItem) => void
  checkoutToWhatsApp: () => void
}

export const CartContext = createContext<CartContextType | undefined>(undefined)
