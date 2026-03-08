import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Lili Rahma",
    role: "Palm Oil Farmer",
    text: "After using NPK Mutiara fertilizer, my oil palm trees grow healthier and produce more fruit. The harvest results have clearly improved",
    image: "/testimonial/lili.jpeg",
  },
  {
    name: "Lee Roy Akbar",
    role: "Palm Oil Farmer",
    text: "Since applying NPK Mutiara fertilizer, the palms grow stronger and the yields have increased. It has made a noticeable difference in my plantation",
    image: "/testimonial/lee.jpg",
  },
  {
    name: "Lili Lee",
    role: "Palm Oil Farmer",
    text: "NPK Mutiara has transformed my palm oil plantation. The yields have increased, and the trees are growing healthier and stronger",
    image: "/testimonial/lili-lee.png",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Animated Title & Desc */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">What Farmers Say</h2>
          <p className="text-secondary/70">Hear from farmers who trust our products</p>
        </motion.div>

        {/* Animated Grid */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div key={index} variants={cardVariants} className="bg-soft-beige p-8 rounded-3xl border border-gray-100">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-green-500 fill-green-500" />
                ))}
              </div>
              <p className="text-secondary italic mb-8">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-primary">{t.name}</h4>
                  <p className="text-xs text-secondary/60">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
