import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const About = () => {
  return (
    <section id="about" className="py-20 bg-soft-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3]">
            <img
              src="/farmers-field.png" // Pastikan file gambar ada di public folder
              alt="Farmers working in the field"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">About Our Company</h2>
            <p className="text-secondary/80 text-lg leading-relaxed mb-8">
              We are a trusted agricultural supplier providing high-quality fertilizers, livestock feed, and farming solutions to support sustainable agriculture and increase productivity.
            </p>

            {/* Highlights */}
            <ul className="space-y-4">
              {["High quality certified products", "Trusted by thousands of farmers", "Sustainable agriculture solutions"].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-primary font-medium">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
