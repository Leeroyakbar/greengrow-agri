import CategoryCard from "../layout/CategoryCard"
import { FlaskConical, Leaf, Fish, Sprout, Wheat, Wrench } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { slugify } from "../../utils/StringUtils"
const categories = [
  { name: "Fertilizers", icon: FlaskConical },
  { name: "Organic Fertilizers", icon: Leaf },
  { name: "Livestock Feed", icon: Fish },
  { name: "Plant Nutrients", icon: Sprout },
  { name: "Seeds", icon: Wheat },
  { name: "Agricultural Tools", icon: Wrench },
]

const ShopByCategory = () => {
  const navigate = useNavigate()

  const handleCategoryClick = (name: string) => {
    navigate(`/products?category=${slugify(name)}`)
  }
  return (
    <section id="categories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">Shop By Category</h2>
          <p className="text-secondary/70">Browse our wide range of agricultural products organized by category</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <div key={cat.name} onClick={() => handleCategoryClick(cat.name)} className="cursor-pointer">
              <CategoryCard name={cat.name} icon={cat.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShopByCategory
