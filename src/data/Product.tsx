import type { ProductItem } from "../types/ProductItem"

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
    image: "/product/hi-pro-vite.png",
    quantity: 0,
    category: "Livestock Feed",
  },
  {
    id: 5,
    name: "AKARI Premium Maxi Cichlid Pellets",
    description: "AKARI Premium Maxi Cichlid pellets are high-quality fish feed specially formulated for cichlids, providing balanced nutrition for optimal growth and ideal body shape",
    price: 99.999,
    image: "/product/akari.png",
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

export default products
