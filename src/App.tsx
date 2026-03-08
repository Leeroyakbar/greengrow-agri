import About from "./components/landing/About"
import Hero from "./components/landing/Hero"
import Impact from "./components/landing/Impact"
import OurProducts from "./components/landing/OurProduct"
import ShopByCategory from "./components/landing/ShopByCategory"
import WhyChooseUs from "./components/landing/WhyChooseUs"
import Testimonials from "./components/landing/Testimonial"
import ContactSection from "./components/landing/Contact"
import { Layout } from "./components/layout/Layout"

function App() {
  return (
    <div className="min-h-screen">
      <Layout>
        <Hero />
        <ShopByCategory />
        <About />
        <Impact />
        <OurProducts />
        <WhyChooseUs />
        <Testimonials />
        <ContactSection />
      </Layout>
    </div>
  )
}

export default App
