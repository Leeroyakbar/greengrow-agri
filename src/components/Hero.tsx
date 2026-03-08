import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-10 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <span className="text-sm text-primary tracking-wider flex items-center gap-1">🌱 Premium Agricultural Supplies</span>
          </div>

          <h1 className="font-display text-6xl md:text-7xl font-bold leading-[1.1] text-primary mb-8">
            Grow Better Crops <br />
            <span className="text-secondary italic font-medium">With Premium</span> <br />
            Fertilizers
          </h1>

          <p className="text-lg text-secondary/80 max-w-lg mb-10 leading-relaxed">We provide high quality fertilizers, livestock feed, and agricultural supplies to help farmers achieve healthier crops and better harvests.</p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-secondary transition-all group shadow-xl shadow-primary/10">
              Shop Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full font-bold border border-primary/20 hover:bg-white transition-all">Explore More</button>
          </div>
        </motion.div>

        {/* Right Visual (Sesuai Foto Referensi) */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }} className="relative">
          {/* Main Large Image Container */}
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square">
            <img src="https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=1000" alt="Premium Organic Fertilizer" className="w-full h-full object-cover" />
            {/* Soft Overlay for text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Floating Product Card (Sesuai Foto) */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -bottom-6 -left-10 md:left-[-2rem] bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4 max-w-xs"
          >
            <div className="w-16 h-16 bg-soft-beige rounded-xl overflow-hidden shrink-0">
              <img src="/hero-organic-compost.png" alt="Product thumb" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-bold text-primary text-sm">Organic Compost</h4>
              <p className="text-accent font-bold text-base">$24.99</p>
            </div>
          </motion.div>

          {/* Abstract Green Shape (Decorative) */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
