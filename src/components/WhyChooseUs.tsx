import { motion } from "framer-motion"
import { Award, DollarSign, Truck, Headset } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Premium Quality Products",
    description: "All our products are certified and tested for optimal performance.",
  },
  {
    icon: DollarSign,
    title: "Affordable Prices",
    description: "Competitive pricing to help farmers maximize their returns.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick and reliable delivery to your farm or location.",
  },
  {
    icon: Headset,
    title: "Expert Agricultural Support",
    description: "Our team of experts is ready to help you with any questions.",
  },
]

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-soft-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Why Choose Us
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-secondary/70 max-w-xl mx-auto">
            We are committed to supporting farmers with the best products and services
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all text-center"
            >
              <div className="w-16 h-16 bg-soft-beige rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-primary text-lg mb-3">{feature.title}</h3>
              <p className="text-secondary/60 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
