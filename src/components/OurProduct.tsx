import { useState } from "react"
import ProductCard from "../layout/ProductCard"
import type { ProductItem } from "../types/ProductItem"
import { motion } from "framer-motion"

const products: ProductItem[] = [
  {
    id: 1,
    name: "PUPUK PETRO-CAS",
    description: "Petro Calcium Sulphate provides calcium and sulfur to improve soil quality, strengthen roots, and support healthier plant growth",
    price: 44.999,
    image: "/product/petro-cas.png",
    quantity: 0,
    category: "Fertilizers",
  },
  {
    id: 2,
    name: "NPK Mutiara",
    description: "Balanced compound fertilizer (16% N, 16% P₂O₅, 16% K₂O) in blue prill granules, easily soluble and readily absorbed by plants",
    price: 934.999,
    image: "/product/npk-mutiara.png",
    quantity: 0,
    category: "Fertilizers",
  },
  {
    id: 3,
    name: "Pupuk Hayati Cair Bio Trent",
    description: "Improves soil structure, accelerates composting, supplies nutrients, and naturally increases crop yields—ideal for palm oil, rice, and secondary crops",
    price: 109.999,
    image: "/product/bio-trent.png",
    quantity: 0,
    category: "Fertilizers",
  },
  {
    id: 4,
    name: "Hi Pro Vite",
    description: "Hi-Pro-Vite is a complete, high-quality poultry feed from PT Charoen Pokphand Indonesia Tbk, formulated to promote faster growth, stronger bones, and improved immunity in chickens",
    price: 749.999,
    image: "/product/chicken-feed.png",
    quantity: 0,
    category: "Livestock Feed",
  },
  {
    id: 5,
    name: "AKARI Premium Maxi Cichlid Pellets",
    description: "AKARI Premium Maxi Cichlid pellets are high-quality fish feed specially formulated for cichlids, providing balanced nutrition for optimal growth and ideal body shape",
    price: 99.999,
    image: "/product/fish-pellete.png",
    quantity: 0,
    category: "Livestock Feed",
  },
  {
    id: 6,
    name: "Benih CMK Super Baja Premium ",
    description: "Super Baja F1 is a superior hybrid curly chili variety known for its strong resistance to Gemini virus, pests, and extreme weather",
    price: 409.999,
    image: "/product/super-baja.png",
    quantity: 0,
    category: "Seeds",
  },
]

const OurProducts = () => {
  const [activeTab, setActiveTab] = useState("All Products")
  const tabs = ["All Products", "Fertilizers", "Livestock Feed", "Seeds"]

  const filteredProducts = activeTab === "All Products" ? products : products.filter((product) => product.category === activeTab)

  return (
    <section id="products" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="font-display text-4xl font-bold text-primary mb-4">
            Our Products
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-secondary/70">
            Explore our range of premium agricultural supplies
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex justify-center gap-2 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === tab ? "bg-primary text-white" : "bg-white text-secondary hover:bg-gray-100 cursor-pointer"}`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center">
          <a href="/products" className="cursor-pointer inline-block border-2 border-primary text-primary px-10 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all">
            View All Products
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default OurProducts
