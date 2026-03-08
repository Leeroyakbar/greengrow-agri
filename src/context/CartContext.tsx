import { createContext } from "react"
import type { ProductItem } from "../types/ProductItem"

interface CartContextType {
  cart: ProductItem[]
  addToCart: (product: ProductItem) => void
  totalPrice: number
  checkoutToWhatsApp: () => void
}

export const CartContext = createContext<CartContextType | undefined>(undefined)


