import { easeOut, motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

const CategoryCard = ({ name, icon: Icon }: { name: string; icon: LucideIcon }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: easeOut }}
    className="h-full" // Memastikan container motion mengisi tinggi penuh
  >
    <motion.a
      href={`/products?category=${name.toLowerCase().replace(" ", "-")}`}
      whileHover={{ y: -5 }}
      // Tambahkan h-full agar semua kartu tingginya mengikuti grid container
      // Gunakan flex-col justify-between agar posisi icon dan text tetap konsisten
      className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-accent/30 transition-all flex flex-col items-center justify-center h-full min-h-50 group"
    >
      <div className="p-4 bg-soft-beige rounded-2xl group-hover:bg-accent/10 transition-colors">
        <Icon className="w-8 h-8 text-secondary group-hover:text-primary" />
      </div>

      {/* Container teks dengan fixed height untuk menghindari pergeseran jika ada nama kategori 2 baris */}
      <span className="font-semibold text-primary text-sm md:text-base text-center mt-4">{name}</span>
    </motion.a>
  </motion.div>
)

export default CategoryCard
