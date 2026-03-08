import { useState } from "react"
import { motion } from "framer-motion"
import { useCart } from "../hooks/useCart"
import { Minus, Plus, ShoppingCart } from "lucide-react"
import type { ProductItem } from "../types/ProductItem"
import { toast } from "sonner" // Import sonner

const ProductCard = ({ product }: { product: ProductItem }) => {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1) // State lokal untuk jumlah

  const handleIncrement = () => setQuantity((prev) => prev + 1)
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  const handleAddToCart = () => {
    // Menambahkan produk dengan quantity yang dipilih
    addToCart({ ...product, quantity })

    toast.success(`${product.name} added to cart!`, {
      description: `You added ${quantity} item(s) to your cart.`,
      duration: 3000,
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: product.id * 0.2 }}
      whileHover={{ y: -5 }}
      className="flex flex-col bg-white p-5 rounded-4xl border border-gray-100 shadow-sm hover:shadow-xl justify-between transition-all"
    >
      <div className="bg-soft-beige rounded-3xl overflow-hidden mb-4 aspect-square flex items-center justify-center">
        <img src={product.image} alt={product.name} className="object-contain w-full h-full p-4" />
      </div>
      <h3 className="font-bold text-primary mb-1">{product.name}</h3>
      <p className="text-secondary/60 text-sm mb-4">{product.description}</p>
      <p className="font-display font-bold text-xl text-primary mb-4">Rp. {product.price}</p>

      <div className="flex items-center gap-2">
        <div className="flex items-center bg-soft-beige rounded-full px-3 py-2 border">
          <button onClick={handleDecrement} className="text-secondary hover:text-primary curosrpo">
            <Minus size={14} className="cursor-pointer" />
          </button>
          <span className="px-3 text-sm font-bold">{quantity}</span>
          <button onClick={handleIncrement} className="text-secondary hover:text-primary">
            <Plus size={14} className="cursor-pointer" />
          </button>
        </div>
        <button onClick={handleAddToCart} className="flex-1 bg-primary text-white py-2 rounded-full text-xs font-bold hover:bg-secondary flex items-center justify-center gap-2 cursor-pointer">
          <ShoppingCart size={14} /> Add to Cart
        </button>
      </div>
    </motion.div>
  )
}

export default ProductCard
