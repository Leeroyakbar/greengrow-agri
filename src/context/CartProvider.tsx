import { useState } from "react"
import type { ProductItem } from "../types/ProductItem"
import { CartContext } from "./CartContext"

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<ProductItem[]>([])

  const addToCart = (product: ProductItem) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  const checkoutToWhatsApp = () => {
    const phone = "6281234567890" // Ganti dengan nomor WA toko
    const message = cart.map((item) => `- ${item.name} (${item.quantity}x)`).join("%0A")
    const total = `Total: Rp ${totalPrice.toLocaleString()}`
    const url = `https://wa.me/${phone}?text=Hello, I would like to order:%0A${message}%0A%0A${total}`
    window.open(url, "_blank")
  }

  return <CartContext.Provider value={{ cart, addToCart, totalPrice, checkoutToWhatsApp }}>{children}</CartContext.Provider>
}
