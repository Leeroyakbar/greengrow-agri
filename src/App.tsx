import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ShopByCategory from "./components/ShopByCategory"

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ShopByCategory />
      <About />
    </div>
  )
}

export default App
