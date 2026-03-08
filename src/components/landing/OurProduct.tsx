import { useState } from "react"
import ProductCard from "../layout/ProductCard"
import products from "../../data/Product"
import { motion } from "framer-motion"

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
