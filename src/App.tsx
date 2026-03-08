import { Toaster } from "sonner"
import About from "./components/About"
import Hero from "./components/Hero"
import Impact from "./components/Impact"
import Navbar from "./components/Navbar"
import OurProducts from "./components/OurProduct"
import ShopByCategory from "./components/ShopByCategory"

function App() {
  return (
    <div className="min-h-screen">
      <Toaster position="top-right" richColors />
      <Navbar />
      <Hero />
      <ShopByCategory />
      <About />
      <Impact />
      <OurProducts />
    </div>
  )
}

export default App
