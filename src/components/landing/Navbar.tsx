import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCart, Search, Leaf, Menu, X, Trash2 } from "lucide-react"
import { useCart } from "../../hooks/useCart"
import { Link, useLocation, useNavigate } from "react-router-dom"

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const { cart, totalPrice, removeFromCart, checkoutToWhatsApp } = useCart()

  // Mencegah scroll saat menu mobile terbuka
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "Categories", href: "#categories" },
    { name: "About Us", href: "#about" },
    { name: "Our Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const productSection = document.getElementById("products")
    productSection?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false) // Tutup menu jika di mobile
  }

  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault()

    if (location.pathname !== "/") {
      navigate("/")
      setTimeout(() => {
        const targetId = href.replace("#", "")
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    } else {
      const targetId = href.replace("#", "")
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
    }

    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav className="sticky top-0 z-50 w-full px-4 md:px-6 py-4 bg-soft-beige/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo Section */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="bg-primary p-2 rounded-full flex items-center justify-center">
              <Leaf className="text-accent w-5 h-5" />
            </div>
            <span className="font-display font-bold text-xl md:text-2xl text-primary tracking-tight">
              <Link to="/">GreenGrow</Link>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden xl:flex items-center gap-8 text-[15px] font-medium text-secondary/70">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="hover:text-primary transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Search Bar (Desktop) */}
          <form onSubmit={handleSearch} className="hidden lg:flex flex-1 max-w-75 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search fertilizer, seeds..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#E9EDE9] border-none focus:ring-1 focus:ring-primary/20 text-sm outline-none placeholder:text-secondary/50"
            />
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-secondary/60" />
          </form>

          {/* Action Icons */}
          <div className="flex items-center gap-2 md:gap-4 relative">
            {/* Cart Button */}
            <button onClick={() => setIsCartOpen(!isCartOpen)} className="p-2 hover:bg-white rounded-full transition-all relative">
              <ShoppingCart className="w-5 h-5 text-primary" />
              {cart.length > 0 && <span className="absolute top-1 right-1 bg-accent text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>}
            </button>

            {/* Shop Now Button (Desktop only) */}
            <button
              onClick={(e) => {
                // Kita arahkan ke #products
                handleNavClick(e, "#products")
              }}
              className="hidden md:block bg-primary text-white px-7 py-2.5 rounded-full text-sm font-bold hover:bg-secondary transition-all shadow-md shadow-primary/10"
            >
              Shop Now
            </button>

            {/* Hamburger Menu (Mobile) */}
            <button onClick={() => setIsMobileMenuOpen(true)} className="xl:hidden p-2 hover:bg-white rounded-full text-primary">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Cart Dropdown Desktop (Sesuai Foto 1) */}
        <AnimatePresence>
          {isCartOpen && (
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} className="absolute right-9 md:right-6 top-20 w-87.5 bg-white rounded-4xl shadow-2xl p-8 border border-gray-50 z-[60]">
              <h3 className="font-display text-2xl font-bold text-primary mb-6">Your Cart</h3>

              {cart.length === 0 ? (
                <div className="py-12 flex flex-col items-center justify-center">
                  <p className="text-secondary/60 text-[15px]">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="max-h-75 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between items-center group">
                        <div className="flex gap-3 items-center">
                          <div className="w-12 h-12 bg-soft-beige rounded-xl overflow-hidden shrink-0">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="font-bold text-primary text-sm">{item.name}</p>
                            <p className="text-xs text-secondary/60">
                              {item.quantity} x Rp {item.price.toLocaleString()}
                            </p>
                          </div>
                        </div>

                        <Trash2 className="w-4 h-4 text-secondary/60 hover:text-red-500 cursor-pointer transition-colors" onClick={() => removeFromCart(item)} />
                      </div>
                    ))}
                  </div>
                  <div className="pt-6 border-t border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-secondary font-medium">Total</span>
                      <span className="text-xl font-bold text-primary font-display">Rp {totalPrice.toLocaleString()}</span>
                    </div>
                    <button onClick={checkoutToWhatsApp} className="w-full bg-primary text-white py-4 rounded-full text-sm font-bold hover:bg-secondary transition-all shadow-lg shadow-primary/10 cursor-pointer">
                      Checkout via WhatsApp
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu Overlay (Sesuai Foto 3) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed inset-0 bg-white z-100 flex flex-col p-6 overflow-y-auto">
            {/* Header Mobile Menu */}
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-2">
                <div className="bg-primary p-2 rounded-full">
                  <Leaf className="text-accent w-5 h-5" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <ShoppingCart className="w-6 h-6 text-primary" />
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="w-7 h-7 text-primary" />
                </button>
              </div>
            </div>

            {/* Navigation Links Mobile */}
            <ul className="space-y-6 mb-10">
              {navLinks.map((link) => (
                <motion.li key={link.name} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-2xl font-medium text-secondary hover:text-primary transition-colors inline-block">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Search Bar Mobile (Sesuai Foto 3) */}
            <form onSubmit={handleSearch} className="relative mt-auto">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search fertilizer, seeds..."
                className="w-full pl-12 pr-4 py-4 rounded-full bg-[#E9EDE9] border-none focus:ring-1 focus:ring-primary/20 text-lg outline-none placeholder:text-secondary/50"
              />
              <Search className="absolute left-4 top-4.5 w-6 h-6 text-secondary/40" />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
