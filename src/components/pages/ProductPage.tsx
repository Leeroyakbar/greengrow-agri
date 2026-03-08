import { useState, useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import ProductCard from "../layout/ProductCard"
import allProducts from "../../data/Product"
import { Layout } from "../layout/Layout"
import { slugify } from "../../utils/StringUtils"
const categories = ["All", "Fertilizers", "Organic Fertilizers", "Livestock Feed", "Seeds", "Plant Nutrients", "Agricultural Tools"]

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState("")
  const [priceRange, setPriceRange] = useState(1000000000)

  const categoryFilter = searchParams.get("category") || "All"

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = categoryFilter === "All" || slugify(product.category) === categoryFilter
      const matchesPrice = product.price <= priceRange
      return matchesSearch && matchesCategory && matchesPrice
    })
  }, [search, categoryFilter, priceRange])

  return (
    <Layout>
      <div className="min-h-screen bg-soft-beige">
        <main className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="font-display text-4xl font-bold text-primary mb-8">Our Products</h1>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Filter */}
            <aside className="w-full lg:w-64 shrink-0 space-y-8">
              <div>
                <h3 className="font-bold text-primary mb-4">Search</h3>
                <input placeholder="Find product..." onChange={(e) => setSearch(e.target.value)} className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-primary/20" />
              </div>

              <div>
                <h3 className="font-bold text-primary mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSearchParams({ category: cat === "All" ? "" : slugify(cat) })}
                      className={`block w-full text-left px-4 py-2 rounded-lg transition-all ${categoryFilter === slugify(cat) ? "bg-primary text-white" : "hover:bg-white text-secondary"}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-primary mb-4">Max Price: Rp {priceRange.toLocaleString()}</h3>
                <input type="range" min="0" max="1000000" step="50000" value={priceRange} onChange={(e) => setPriceRange(Number(e.target.value))} className="w-full accent-primary" />
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              {filteredProducts.length > 0 ? (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {filteredProducts.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 text-secondary/60">No products found.</div>
              )}
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}

export default ProductsPage
