import About from "./components/About"
import Hero from "./components/Hero"
import Impact from "./components/Impact"
import Navbar from "./components/Navbar"
import ShopByCategory from "./components/ShopByCategory"

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ShopByCategory />
      <About />
      <Impact />
    </div>
  )
}

export default App
