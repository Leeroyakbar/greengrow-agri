import { motion } from "framer-motion"
import { MapPin, Phone, MessageCircle, Mail } from "lucide-react"

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-soft-beige">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">Contact Us</h2>
          <p className="text-secondary/70">Get in touch with our team</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            {[
              { icon: MapPin, title: "Office Address", value: "Pidoli Lombang, Panyabungan" },
              { icon: Phone, title: "Phone Number", value: "+62822 7336 6718" },
              { icon: MessageCircle, title: "WhatsApp", value: "+62822 7336 6718" },
              { icon: Mail, title: "Email", value: "info@greengrow.com" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">{item.title}</h4>
                  <p className="text-secondary/70">{item.value}</p>
                </div>
              </div>
            ))}

            <button className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-secondary transition-all">
              <MessageCircle className="w-5 h-5" /> Chat With Us on WhatsApp
            </button>
          </div>

          {/* Right: Contact Form */}
          <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <div className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-4 bg-soft-beige rounded-2xl border-none outline-none" />
              <input type="tel" placeholder="Phone Number" className="w-full p-4 bg-soft-beige rounded-2xl border-none outline-none" />
              <textarea placeholder="Your Message" rows={4} className="w-full p-4 bg-soft-beige rounded-2xl border-none outline-none" />
              <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold hover:bg-secondary transition-all">Send Message</button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
