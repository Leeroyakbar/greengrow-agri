import { motion } from "framer-motion"

const stats = [
  { label: "Farmers Served", value: "5000+" },
  { label: "Agricultural Partners", value: "200+" },
  { label: "Products Available", value: "50+" },
  { label: "Years Experience", value: "10+" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const Impact = () => {
  return (
    <section id="impact" className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold">Our Impact</h2>
        </div>

        {/* Stats Grid */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl text-center border border-white/5 hover:bg-white/15 transition-all">
              <h3 className="font-display text-4xl md:text-5xl font-bold mb-2">{stat.value}</h3>
              <p className="text-white/70 font-medium text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Impact
