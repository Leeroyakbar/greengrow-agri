import { Leaf } from "lucide-react"

const Footer = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-primary text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-accent p-2 rounded-full">
                <Leaf className="text-primary w-5 h-5" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">GreenGrow</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">Your trusted partner in agriculture. Quality fertilizers, seeds, and farming supplies for better harvests.</p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, "#about")} className="hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => handleNavClick(e, "#products")} className="hover:text-accent transition-colors">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#impact" onClick={(e) => handleNavClick(e, "#impact")} className="hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Categories Links */}
          <div>
            <h4 className="font-bold mb-6">Categories</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Fertilizers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Livestock Feed
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Seeds
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Plant Nutrients
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Shipping Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 mt-8 text-center text-white/50 text-sm">
          <p>© 2026 GreenGrow Agriculture Supply. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
